// next.config.js
module.exports = {
    basePath: process.env.GITHUB_ACTIONS ? '/your-repo-name' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/your-repo-name/' : '',
    images: {
      loader: 'imgix',
      path: '',
    },
  };