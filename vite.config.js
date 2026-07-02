import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Automatically copy and sanitize flags from "contory flages" in root to "src/assets/flags/"
const rootDir = process.cwd()
const srcDir = path.join(rootDir, 'contory flages')
const destDir = path.join(rootDir, 'src', 'assets', 'flags')

const renameMap = {
  'usa.webp': 'usa.webp',
  'uk.webp': 'uk.webp',
  'caneda.webp': 'canada.webp',
  'europian union.webp': 'eu.webp',
  'UAE.webp': 'uae.webp',
  'in.webp': 'india.webp',
  'singapor.webp': 'singapore.webp',
  'australia.webp': 'australia.webp'
}

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }
  if (fs.existsSync(srcDir)) {
    const files = fs.readdirSync(srcDir)
    files.forEach(file => {
      const destName = renameMap[file] || file.toLowerCase()
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, destName))
    })
    console.log('Vite Config: Flag assets verified & copied to src/assets/flags/')
  }
} catch (err) {
  console.error('Vite Config: Failed to copy flag assets:', err)
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

