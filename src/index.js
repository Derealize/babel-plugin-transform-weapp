const { declare } = require('@babel/helper-plugin-utils')
const _path = require('path')
const core = require("@babel/core")

const t = core.types

module.exports = declare((api, options) => {
  api.assertVersion(7);
  
  if (process.env.NODE_ENV === 'development') {
    return {
      name: 'babel-plugin-transform-react',
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
    }
  } else if (process.env.NODE_ENV === 'production') {
    return {
      name: 'babel-plugin-transform-react',
      visitor: {
        JSXIdentifier(path) {
          if (path.node.name === 'data-label') {
            path.parentPath.remove()
          }
        },
      }
    }
  }
});
