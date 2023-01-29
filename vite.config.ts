import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild, 6);

  return {
    plugins: [vue()],
    base: mode === 'development' ? '/' : './'
  }
})
