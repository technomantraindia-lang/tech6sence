/**
 * Safe touch-hover injector - Only adds import line and {...touchHoverProps} 
 * BEFORE the className attribute on separate lines (never inside template literals).
 */
const fs = require('fs');
const path = require('path');

const files = [
  'src/components/ecosystem/BusinessBrains.jsx',
  'src/components/ecosystem/EcosystemBenefits.jsx', 
  'src/components/ecosystem/EcosystemModel.jsx',
  'src/components/business-brains/ApplicationAndNomination.jsx',
];

const ROOT = path.join(__dirname, '..');

for (const relPath of files) {
  const fullPath = path.join(ROOT, relPath);
  let content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  
  // Determine relative import path
  const depth = relPath.split('/').length - 2; // from src/components/xxx/
  const importPath = '../'.repeat(depth) + '../hooks/useTouchHover';
  
  // Add import after last import line
  let lastImportIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('import ')) lastImportIdx = i;
  }
  if (lastImportIdx >= 0) {
    lines.splice(lastImportIdx + 1, 0, `import { touchHoverProps } from '${importPath}';`);
  }
  
  // Find lines that have className with 'group' (not group-hover:) that are on their own line
  // and add {...touchHoverProps} BEFORE the className line
  const result = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if this is a className line with 'group' class
    if (trimmed.startsWith('className') && /\bgroup\b/.test(trimmed) && !trimmed.includes('group-hover:') && !trimmed.includes('touchHoverProps')) {
      // Get indentation
      const indent = line.match(/^(\s*)/)[1];
      // Insert touchHoverProps before this line
      result.push(`${indent}{...touchHoverProps}`);
    }
    result.push(line);
  }
  
  fs.writeFileSync(fullPath, result.join('\n'), 'utf8');
  console.log(`✅ Fixed: ${relPath}`);
}

console.log('\nDone!');
