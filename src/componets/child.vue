<template>
  <div>
    <h2>我是子组件</h2>
  </div>
</template>

<script>
export default {
  // 初始化 =》创建组件  => beforeCreate created
  beforeCreate () {
    // 1. 创建前
    console.log("子组件：beforeCreate --- 实例初始化前")
  },
  created () {
    // 2. 创建后=> 发送ajax请求
    console.log("子组件：created ---  实例初始化后")
  },
  // 挂载 =>渲染显示组件 =>  beforeMount mouted
  beforeMount () {
    // 3. 挂载前
    console.log("子组件：beforeMount --- vue的虚拟DOM, 挂载到真实的网页之前")
    // console.log(document.getElementById("myUl").children[1].innerHTML) // 报错
  },
  mounted () {
    // 4. 挂载后=》操作dom
    console.log("子组件：mounted --- vue的虚拟DOM, 挂载到真实的网页上 ")
    // console.log(document.getElementById("myUl").children[1].innerHTML)

  },
  // 更新 =》修改了变量=》触发视图刷新 => beforeUpdate updated（多次）
  beforeUpdate () {
    // 5. 更新前
    console.log("子组件：beforeUpdate --- 数据更新, 页面更新前")
    // 比如点击新增数组元素, vue会触发此生命周期函数, 但是此时页面并未更新, 所以获取不到新增的li标签
    // console.log(document.getElementById("myUl").children[4].innerHTML) // 报错
  },
  updated () {
    // 6. 更新后
    console.log("子组件：updated --- 数据更新, 页面更新后")

  },
  beforeDestroy () {
    // 7. 销毁前
    // (清除定时器 / 解绑js定义的事件)
    console.log("子组件：beforeDestroy --- 实例销毁之前调用")
  },
  // 销毁 =》切换页面 =》会把组件对象从内存删除 => beforeDestory destoryed
  destroyed () {
    // 8. 销毁后
    // (清除定时器 / 解绑js定义的事件)
    console.log("子组件：destroyed --- 销毁完成")
  },
}
</script>

<style scoped>
</style>