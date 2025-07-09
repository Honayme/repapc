import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html')
            }
        }
    },
    server: {
        port: 3000,
        open: true
    },
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        }
    }
})
