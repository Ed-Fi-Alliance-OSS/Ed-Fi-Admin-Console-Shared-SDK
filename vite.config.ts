import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'te-shared-web',
      fileName: 'index'
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          "@chakra-ui/react": "@chakra-ui/react",
          "react-dom": "react-dom" 
        }
      },
      external: [
        "react", 
        "@chakra-ui/react", 
        "react-dom"
      ],
    }
  },
  plugins: [
    dts({ insertTypesEntry: true })
  ]
})