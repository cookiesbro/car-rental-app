import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
// 1. Импортируем 'path' и специальные утилиты для работы с путями в ES-модулях
import path from 'path'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      // 2. Вот он, правильный и надежный способ создания псевдонима
      // '@' теперь всегда будет указывать на твою папку 'src'
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
    },
  },
})