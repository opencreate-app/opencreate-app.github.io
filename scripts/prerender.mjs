import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import process from 'node:process'

const distDir = join(process.cwd(), 'dist')
const indexPath = join(distDir, 'index.html')
const notFoundPath = join(distDir, '404.html')

if (!existsSync(indexPath)) {
  console.error('dist/index.html not found. Run the Vite build first.')
  process.exit(1)
}

mkdirSync(dirname(notFoundPath), { recursive: true })
copyFileSync(indexPath, notFoundPath)
