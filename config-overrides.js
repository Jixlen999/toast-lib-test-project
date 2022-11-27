const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': './src',
    '@components': 'src/components',
    '@constants': 'src/constants',
  })(config);

  return config;
};
