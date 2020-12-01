module.exports = {
  basePath: '/minijustjoinit',
  assetPrefix: '/minijustjoinit/assets/',
  async rewrites() {
    return [
      {
        source: '/all',
        destination: '/',
      },
      {
        source: '/offers',
        destination: '/',
      },
    ];
  },
};
