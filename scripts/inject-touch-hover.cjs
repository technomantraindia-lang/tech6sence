/**
 * This script auto-injects touchHoverProps into all .jsx files that:
 * 1. Use `group-hover:` (Tailwind group hover utilities)
 * 2. Have a `className="group ` or `className={...group ` element
 * 3. Don't already import touchHoverProps
 * 
 * It adds:
 * - import { touchHoverProps } from the appropriate relative path
 * - {...touchHoverProps} on each group element
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src', 'components');
const HOOK_FILE = 'hooks/useTouchHover';

// Files already updated manually
const ALREADY_DONE = new Set([
  'sections/EngagementModels.jsx',
  'ai-agents/IntelligentIntroPrinciples.jsx',
  'sections/WhyChooseTech6Sense.jsx',
  'sections/IntelligenceStack.jsx',
  'sections/WhoWeServe.jsx',
  'sections/HowWeWork.jsx',
  'sections/AISolutionsOutcome.jsx',
  'sections/IndustriesTransform.jsx',
]);

// Files to skip (no interactive cards, just buttons/links with group-hover)
const SKIP_FILES = new Set([
  'Header.jsx',
  'PageLayout.jsx',
  'sections/Footer.jsx',
  'sections/FinalCTA.jsx',
  'sections/StitchHero.jsx',
  'sections/SimpleTextSection.jsx',
  'sections/SecondHeroPhase.jsx',
  'sections/DeepTechProducts.jsx',
  'sections/InnovationStories.jsx',
  'hero/HeroContent.jsx',
]);

function getAllJsxFiles(dir, baseDir = dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllJsxFiles(fullPath, baseDir));
    } else if (entry.name.endsWith('.jsx')) {
      const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
      results.push({ fullPath, relPath });
    }
  }
  return results;
}

function getRelativeImportPath(filePath) {
  const fileDir = path.dirname(filePath);
  const srcDir = path.join(__dirname, '..', 'src');
  const hookAbsPath = path.join(srcDir, HOOK_FILE);
  let rel = path.relative(fileDir, hookAbsPath).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel;
}

function processFile(filePath, relPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has touchHoverProps
  if (content.includes('touchHoverProps') || content.includes('useTouchHover')) {
    return { skipped: true, reason: 'already has touch events' };
  }
  
  // Check if it uses group-hover
  if (!content.includes('group-hover:')) {
    return { skipped: true, reason: 'no group-hover usage' };
  }
  
  // Find group elements - look for className patterns with "group "
  // Pattern: className="group  or className={`group  or className={...group
  const groupPattern = /className[=]\{?[`"'][^"'`]*\bgroup\b/g;
  
  if (!groupPattern.test(content)) {
    return { skipped: true, reason: 'no group class element found' };
  }
  
  // Add import statement
  const importPath = getRelativeImportPath(filePath);
  
  // Find the last import line
  const lines = content.split('\n');
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) {
      lastImportIdx = i;
    }
  }
  
  if (lastImportIdx === -1) {
    // No imports found, add at top
    lines.unshift(`import { touchHoverProps } from '${importPath}';`);
  } else {
    lines.splice(lastImportIdx + 1, 0, `import { touchHoverProps } from '${importPath}';`);
  }
  
  content = lines.join('\n');
  
  // Now add {...touchHoverProps} to group elements
  // We need to find lines with className="group or className={`group and add touchHoverProps
  // Strategy: find the opening tag that has className with group, add {...touchHoverProps} before className
  
  // Match pattern: a line containing className with "group " in it, that's part of a JSX element
  // We'll add {...touchHoverProps} as a prop
  const updatedLines = content.split('\n');
  let touchAdded = 0;
  
  for (let i = 0; i < updatedLines.length; i++) {
    const line = updatedLines[i];
    
    // Check if this line has a className with 'group' class
    if (/className[=]\{?[`"'][^"'`]*\bgroup\b/.test(line)) {
      // Check if touchHoverProps is already on this element (look at surrounding lines)
      const context = updatedLines.slice(Math.max(0, i - 3), Math.min(updatedLines.length, i + 3)).join(' ');
      if (context.includes('touchHoverProps')) continue;
      
      // Check if the next line or the line after closes with >
      // We need to add {...touchHoverProps} after the className line
      // Find the closing > of this JSX element
      let closingLine = i;
      let depth = 0;
      for (let j = i; j < Math.min(updatedLines.length, i + 10); j++) {
        const l = updatedLines[j];
        if (l.includes('>') && !l.includes('=>')) {
          closingLine = j;
          break;
        }
      }
      
      // Get indentation from the className line
      const indent = line.match(/^(\s*)/)[1];
      
      // Insert {...touchHoverProps} right after the className line  
      // But we need to be careful - if className spans multiple lines, insert after the closing
      if (line.includes('>')) {
        // className and closing > are on same line - insert before >
        // This is complex, skip these cases
        // Instead, add onTouchStart/End directly
        updatedLines[i] = line.replace(
          /className/,
          `onTouchStart={(e) => e.currentTarget.classList.add('touch-active')} onTouchEnd={(e) => e.currentTarget.classList.remove('touch-active')} onTouchCancel={(e) => e.currentTarget.classList.remove('touch-active')} className`
        );
        touchAdded++;
      } else {
        // Multi-line element, add on next line
        updatedLines.splice(i + 1, 0, `${indent}{...touchHoverProps}`);
        touchAdded++;
        i++; // Skip the inserted line
      }
    }
  }
  
  if (touchAdded === 0) {
    return { skipped: true, reason: 'could not find insertion point' };
  }
  
  fs.writeFileSync(filePath, updatedLines.join('\n'), 'utf8');
  return { skipped: false, touchAdded };
}

// Main
const files = getAllJsxFiles(SRC_DIR);
console.log(`Found ${files.length} JSX files in components/\n`);

let updated = 0;
let skipped = 0;

for (const { fullPath, relPath } of files) {
  // Check if already done
  if (ALREADY_DONE.has(relPath)) {
    console.log(`  SKIP (already done): ${relPath}`);
    skipped++;
    continue;
  }
  if (SKIP_FILES.has(relPath)) {
    console.log(`  SKIP (excluded): ${relPath}`);
    skipped++;
    continue;
  }
  
  const result = processFile(fullPath, relPath);
  if (result.skipped) {
    console.log(`  SKIP (${result.reason}): ${relPath}`);
    skipped++;
  } else {
    console.log(`  ✅ UPDATED (${result.touchAdded} cards): ${relPath}`);
    updated++;
  }
}

console.log(`\n--- Summary ---`);
console.log(`Updated: ${updated} files`);
console.log(`Skipped: ${skipped} files`);
console.log(`Total: ${files.length} files`);
