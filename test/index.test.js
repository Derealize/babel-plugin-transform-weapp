import path from "path"
import pluginTester from 'babel-plugin-tester'
import plugin from '../src'

pluginTester({
  plugin,
  pluginName: 'babel-plugin-derealize',
  title: 'generate dr attrubite',
  snapshot: true,
  fixtures: path.join(__dirname, '__fixtures__'),
  babelOptions: require('./babel.react.config.js')
})
