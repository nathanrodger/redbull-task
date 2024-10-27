import path from 'path';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

dotenv.config({
    path: path.join(process.cwd(), '..', '.env')
});

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: process.env.VITE_CLIENT_PORT,
    },
    envDir: '../',
});
