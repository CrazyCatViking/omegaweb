module.exports = {
  devServer: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000/graphql',
        changeOrigin: true,
        pathRewrite: {
          '^/graphql': ''
        }
      }
    }
  }
}