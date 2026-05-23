const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Resolve react-native-maps to the web mock
  config.resolve.alias['react-native-maps'] = '@teovilla/react-native-web-maps';
  return config;
};
