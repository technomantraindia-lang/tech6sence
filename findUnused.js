import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

// Get all files in a directory recursively
const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
};

const allFiles = getAllFiles(srcDir);
const jsAndJsxFiles = allFiles.filter(file => file.endsWith('.js') || file.endsWith('.jsx'));

const usedFiles = new Set();
usedFiles.add(path.join(srcDir, 'main.jsx')); // Entry point

jsAndJsxFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Very basic import extraction
  // Matches: import ... from './path' or import('./path')
  const importRegex = /(?:import\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"])|(?:import\(['"]([^'"]+)['"]\))/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1] || match[2];
    
    // Only care about relative imports
    if (importPath.startsWith('.')) {
      let absoluteImportPath = path.resolve(path.dirname(file), importPath);
      
      // Try to resolve extension
      if (fs.existsSync(absoluteImportPath) && !fs.statSync(absoluteImportPath).isDirectory()) {
         usedFiles.add(absoluteImportPath);
      } else if (fs.existsSync(absoluteImportPath + '.js')) {
         usedFiles.add(absoluteImportPath + '.js');
      } else if (fs.existsSync(absoluteImportPath + '.jsx')) {
         usedFiles.add(absoluteImportPath + '.jsx');
      } else if (fs.existsSync(path.join(absoluteImportPath, 'index.js'))) {
         usedFiles.add(path.join(absoluteImportPath, 'index.js'));
      } else if (fs.existsSync(path.join(absoluteImportPath, 'index.jsx'))) {
         usedFiles.add(path.join(absoluteImportPath, 'index.jsx'));
      }
    }
  }
});

const unusedFiles = jsAndJsxFiles.filter(file => !usedFiles.has(file));

console.log("Unused files found:");
if (unusedFiles.length === 0) {
    console.log("None! All files seem to be imported.");
} else {
    unusedFiles.forEach(file => console.log(file.replace(projectRoot, '')));
}
