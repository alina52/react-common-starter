const { createAction } = require('../actions')
const { componentName, componentType } = require('../prompts')
const { componentBasePath, templateBasePath } = require('../config')

const genMuiComponent = () => ({
  description: 'add a new Muicomponent',
  prompts: [componentName, componentType],
  actions: [
    createAction({
      type: 'add',
      path: `${componentBasePath}/Mui{{componentName}}/Mui{{componentName}}.js`,
      templateFile: `${templateBasePath}/mui.component.{{componentType}}.js.hbs`,
    }),
    createAction({
      type: 'add',
      path: `${componentBasePath}/Mui{{componentName}}/Mui{{componentName}}.module.scss`,
      templateFile: `${templateBasePath}/mui.component.module.scss.hbs`,
    }),
  ],
})

module.exports = genMuiComponent
