/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-18 18:11:09
 * @LastEditTime: 2021-10-29 13:07:58
 */
const { override, addWebpackAlias, fixBabelImports, addLessLoader, removeModuleScopePlugin } = require('customize-cra');

const path = require('path')

module.exports = override(
  addWebpackAlias({
    src: path.resolve(__dirname, './src'),
    components: path.resolve(__dirname, './src/components'),
    pages: path.resolve(__dirname, './src/pages'),
    public: path.resolve(__dirname, './public'),
    plop: path.resolve(__dirname, './plop'),
    test: path.resolve(__dirname, './public/test'),
  }),
  removeModuleScopePlugin()
);
