const { override, addWebpackAlias, fixBabelImports, addLessLoader, removeModuleScopePlugin } = require('customize-cra');

const path = require('path')

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, './src'),
    components: path.resolve(__dirname, './src/components'),
    pages: path.resolve(__dirname, './src/pages'),
    public: path.resolve(__dirname, './public'),
    plop: path.resolve(__dirname, './plop'),
  }),
  removeModuleScopePlugin()
);
