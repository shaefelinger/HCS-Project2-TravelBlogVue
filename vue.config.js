module.exports = {
  devServer: {
    proxy: {
      '^/auth': {
        target: 'http://localhost:3000',
        // target: 'https://aroundtheworld-blog-server.herokuapp.com',
        // target: 'https://aroundtheworld-backend2.apps.functionfactory.de',
        changeOrigin: true,
      },
    },
  },
};
