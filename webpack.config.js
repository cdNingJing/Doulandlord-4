module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server 未定义');
      }

      // 在这里添加自定义中间件
      return middlewares;
    },
    port: 3000,
    hot: true,
    open: true
  }
}; 