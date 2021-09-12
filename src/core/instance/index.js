import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue  是一个方法，原型上的各个实例解耦在各个文件中
function Vue (options) {
  console.log(options,'options')
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // mergeOptions 调用 将vm 还有构造函数的options 和当前实例的options 合并
  // 初始化生命周期，events,render ,inject state provide 
  // 调用$mount
  this._init(options)
}
// 将_init挂载到Vue 原型上
initMixin(Vue)
// 将$watch $set 等挂载到原型上
stateMixin(Vue)
// 将$on,off,once,emit 挂载到原型上
eventsMixin(Vue)
// _update $forceUpdate $destroy挂载到原型上
lifecycleMixin(Vue)
// $nextTick _render 挂载到原型上
renderMixin(Vue)

export default Vue
