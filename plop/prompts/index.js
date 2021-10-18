// 命令行提示
const createPrompts = ({ type, name, message, ...options}) => ({
  type,
  name,
  message,
  ...options,
})

module.exports = {
  // UI组件
  componentName: createPrompts({
    type: 'input',
    name: 'componentName',
    message: 'component name please',
  }),
  componentType: createPrompts({
    type: 'list',
    name: 'componentType',
    message: 'please choose a component type to creating',
    choices: ['function', 'class'],
    default: 0,
  })
}