import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          }
        }
      ]
    })
  ],

  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: './',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  // outDir: 'dist',
  server: {
    // hostname: '0.0.0.0',
    host: 'localhost',
    hmr: true,
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:3333/',
        changeOrigin: true,
        ws: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      }
    }
  },
  resolve: {
    // 导入文件夹别名
    alias: {
      '/@/': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      components: path.resolve(__dirname, './src/components'),
      utils: path.resolve(__dirname, './src/utils'),
      less: path.resolve(__dirname, './src/less'),
      assets: path.resolve(__dirname, './src/assets'),
      store: path.resolve(__dirname, './src/store')
    }
  },
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn']
  }
});
