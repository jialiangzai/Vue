

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

// 
// 01
// import App from './views/day0101/002on.vue'
// 03
// import App from './views/day0101/003params.vue'

// 04
// import App  from './views/day0101/004mod.vue'

// 05
// import App from './views/day0101/005reverse.vue'

// 06
// import App from './views/day0101/006v-for.vue'

// 07 作业一数组
// import App from './views/day0101/007cxy.vue'
// 08 作业二 加加减减
// import App from './views/day0101/008add.vue'
// 09 购物车
// import App from './views/day0101/009car.vue'

// 11双向绑定
// import App from './views/day01/11双向绑定.vue'
// import App from './views/day01/12vif.vue'
// 12
// import App from "./views/day01/13shi.vue"

//第二天
// import App from './views/day02/01class.vue' 

// import App from './views/day02/03filter.vue'
// 计算属性
// import App from './views/day02/04computed.vue'
// import App from './views/day02/02pin.vue'
// import App from './views/day02/05computeyou.vue'
// get  set 完整写法对象格式
// import App from './views/day02/06完整写法.vue'
// 全选
// import App from './views/day02/07全选.vue'
// shu
// import App from './views/day02/08shu.vue'
// 求和
// import App from './views/day02/09count.vue'
// 二
// 折叠面板
// import App from './views/day0201/02devlop.vue'
// 品牌
// import  moment from 'moment'

// import App from './views/day0201/03pinp.vue'
// Vue.filter('gett',(obj)=>{
//   return moment(obj).format("YYYY-MM-DD")
// })

// 全选
// import App from './views/day0201/04全选.vue'
// 书
// import App from './views/day0201/05shu.vue'
// shu求和
// import App from './views/day0201/06add.vue'









// watch
// import App from './views/day03/01watch.vue'

// 缓存
// import App from './views/day02/02pin.vue'

// import App from './views/day03/02zujian.vue'
// 引入组件
// import panel from './componets/panel.vue'
// 注册组件
// Vue.component('Panel',panel)

// import App from './views/day03/03zubu.vue'

// scoped
// import App from './views/day03/04scoped.vue'

// 组件通信
// import App from './views/day03/05组件通信.vue'




// san


// import App from './views/day0301/01comp.vue'
// import Panel from './componets/panel.vue'
// 全局注册组件必须写
// Vue.component('Panel',Panel)

// import App from './views/day0301/02scoped.vue'

//  通信
import App from './views/day0301/03组件通信.vue'
 // Vue.filter("toUp", (val) => { // 2. 全局过滤器: 到处使用=>全局注册在main.js中注册, 一处注册到处使用
//   return val.toUpperCase();
// });



// 生产环境提示关闭
Vue.config.productionTip = false

new Vue({
  // render渲染页面的
  render: h => h(App),
}).$mount('#app') //是要渲染的html的文件不是app.vue
