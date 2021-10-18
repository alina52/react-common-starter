const genMuiComponent = require('./plop/generators/MuiComponent')
// 可继续扩展
module.exports = function (plop) {
  // component generator
  plop.setGenerator('MuiComponent', genMuiComponent())
}
