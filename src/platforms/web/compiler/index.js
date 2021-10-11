/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'
// 实际调用的是 create-compiler 中 createCompiler return {compiler,compileToFunctions}
// createCompileToFunctionFn 实际调用 to-function 中 createCompileToFunctionFn -lss
const { compile, compileToFunctions } = createCompiler(baseOptions)
//  compileToFunctions 编译方法
export { compile, compileToFunctions }
