const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  images: {
    domains: ['test.justjoin.it'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
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
});
