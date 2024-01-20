const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {  
    port: 5173,
    // proxy: {
    //   '/web/session/authenticate': {
    //     target: 'https://gerp-zalo-v12.phanmemdoanhnghiep.net/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/web/session/authenticate': ''
    //     }
    //   },
    //   '/web/session/get_session_info': {
    //     target: 'http://localhost:5173',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/web/session/get_session_info': ''
    //     }
    //   },
    //   '/web/dataset/call_kw': {
    //     target: 'http://localhost:5173',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/web/dataset/call_kw': ''
    //     }
    //   }
    // }
  },
  transpileDependencies: true,
});
