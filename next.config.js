module.exports = {
  basePath: '/minijustjoinit',
  assetPrefix: '/minijustjoinit',
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
