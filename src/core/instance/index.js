import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue  是一个方法，原型上的各个实例解耦在各个文件中
function Vue (options) {
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
// core/global-api/index.js 中 将'component','directive','filter' 这三个属性挂载到Vue.options
// 同时也将 Vue 赋值给 Vue.options._base 
// 将_init挂载到Vue 原型上
initMixin(Vue)
// 将$watch $set 等挂载到原型上
stateMixin(Vue)
// 将$on,off,once,emit 挂载到原型上
eventsMixin(Vue)
// _update $forceUpdate $destroy挂载到原型上
// 父子组件生命周期钩子函数执行顺序: 
// parent BeforeCreate → parent Created → parent beforeMount → child beforeCreate → child created → child beforeMount 
// → child mounted → parent mounted 
// 销毁子组件：child beforeDestroy → child destroyed
// 销毁父组件: parent beforeDestroy  → child beforeDestroy() → child destroyed() → parent destroyed()
// 更新子组件： 目前测试结果  child beforeUpdate → child updated
// 更新父组件: parent beforeUpdate → child beforeUpdate → child updated → parent updated
lifecycleMixin(Vue)
// $nextTick _render 挂载到原型上
renderMixin(Vue)

export default Vue
