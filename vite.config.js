import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
// import { laravel } from 'laravel-vite-plugin'; // 使用解構導入
import laravel from 'laravel-vite-plugin'; // 修改為默認導入

export default defineConfig({
    plugins: [
        reactRefresh(),
        laravel({
            input: [
                'resources', // 包括整個 resources 目錄下的所有文件 
                'public', // 公共目錄下的所有文件

                // 'resources/js/App.jsx', //  只包括特定的 App.jsx 文件及其依賴項 
                // 'resources/js/app.js', //  只包括特定的 app.js 文件及其依賴項

                // 'resources/css', // 包括整個 resources/css 目錄下的所有文件
                // 'resources/js/pages/Page1.jsx', // 新的外部組件文件 
                // 'resources/css/mystyle.css', // 新的外部 CSS 文件
                'react-app/src/main.jsx', // 獨立 React 應用入口文件 
                'react-app/src/App.jsx', // 獨立 React 應用入口文件 
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            'react-app': resolve(__dirname, 'react-app/src'),
        },
    },
    server: { 
        fs: { 
            allow: [''] 
            // allow: ['resources/js', 'react-app']  // 允許特定目錄的訪問
        } 
    },
});
