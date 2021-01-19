const { declare } = require('@babel/helper-plugin-utils')
const _path = require('path')
const core = require("@babel/core")

const t = core.types

module.exports = declare((api, options) => {
  api.assertVersion(7);

  return {
    name: 'babel-plugin-derealize',
    visitor: {
      JSXOpeningElement(path, state) {
        let file = state.filename.replace(state.cwd + _path.sep, '')
        const { loc } = path.node
        if (loc) {
          file += `:${loc.start.line}:${loc.start.column}`
        }
        const attr = t.jsxAttribute(t.jsxIdentifier("dr"), t.stringLiteral(file))
        path.node.attributes.push(attr)
      },
    }
  };
});
