import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages 배포를 위한 base 경로
  // jiwonjae-svg.github.io 저장소는 최상위 도메인에 배포
  base: '/',
  
  build: {
    // 빌드 최적화
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 청크 분할
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['zustand', 'react-dropzone', 'react-hot-toast'],
        },
      },
    },
  },
  
  // 개발 서버 설정
  server: {
    port: 3000,
    open: true,
  },
})
