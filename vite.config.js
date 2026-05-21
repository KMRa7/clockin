import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// リポジトリ名に合わせて base を変更してください
// 例: GitHubリポジトリが https://github.com/yourname/udon-app なら
//     base: '/udon-app/'
export default defineConfig({
  plugins: [react()],
  base: '/udon-app/',
})
