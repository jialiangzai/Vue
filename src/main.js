

// vue程序执行的开始(入口) (打包入口)
// 导入vue (构造函数)
import Vue from 'vue'
// 导入一个页面
// import App from './App.vue'
// 导入01基础用法
// import App from './views/day01/01基础用法.vue'
// 导入 02
// import App from './views/day01/02属性动态绑定.vue'
// 导入03
// import App from './views/day01/03事件绑定.vue'

// 导入04
// import App from './views/day01/04事件修饰符.vue'
// 导入 05 
// import App from './views/day01/05this指向.vue'
// 导入 06 
// import App from './views/day01/06翻转世界.vue'
// 导入07
// import App from './views/day01/07v-for用法.vue'
// 导入作业一 帅哥
// 导入 08 
// import App  from './views/day01/08shuai.vue'
// 导入 09
// import App  from './views/day01/09加加减减.vue'
// 导入 10
// import App from './views/day01/10car.vue'

// 第二遍
// 01
// import App from './views/day0101/002on.vue'
// 03
// import App from './views/day0101/003params.vue'

// 04
// import App  from './views/day0101/004mod.vue'

// 05
import App from './views/day0101/005reverse.vue'

// 06
// import App from './views/day0101/006v-for.vue'

// 07 作业一数组
// import App from './views/day0101/007cxy.vue'
// 08 作业二 加加减减
// import App from './views/day0101/008add.vue'
// 09 购物车
// import App from './views/day0101/009car.vue'






// 生产环境提示关闭
Vue.config.productionTip = false

new Vue({
  // render渲染页面的
  render: h => h(App),
}).$mount('#app') //是要渲染的html的文件不是app.vue
