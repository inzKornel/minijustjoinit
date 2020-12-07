module.exports = {
  images: {
    domains: ['test.justjoin.it'],
  },
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
