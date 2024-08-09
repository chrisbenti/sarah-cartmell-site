import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    base: '/sarah-cartmell-site/', // Remove me when Sarah gets her own domain
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            plugins: [['@swc/plugin-emotion', {}]],
        }),
    ],
})
