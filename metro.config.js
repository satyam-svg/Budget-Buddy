const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const config = {
    resolver: {
      sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs'],
      assetExts: [...defaultConfig.resolver.assetExts, 'glb', 'gltf', 'mtl', 'obj', 'png', 'jpg'],
    },
  };
  return mergeConfig(defaultConfig, config);
})();
