<template>
  <div>
    <!-- 列表渲染 -->
    <ul id="myUl">
      <li v-for="(item, ind) in arr" :key="ind">{{ item }}</li>
    </ul>
    <button
      @click="
        () => {
          arr.push(Math.random() * 10);
        }
      "
    >
      增加一个元素
    </button>
    <hr />
    <Child v-if="isShow" />
    <button @click="destoryChild">触发子组件的销毁</button>
  </div>
</template>

<script>
import Child from '../../componets/child.vue'
export default {
  components: {
    Child,
  },
  data () {
    return {
      msg: "我是变量",
      arr: [1, 2, 3, 4],
      isShow: true,
    }
  },
  methods: {
    destoryChild () {
      this.isShow = !this.isShow
    }
  },
  // 初始化 =》创建组件  => beforeCreate created
  beforeCreate () {
    // 1. 创建前
    console.log("beforeCreate --- 实例初始化前")
    console.log(this, this.msg) // undefined
  },
  created () {
    // 2. 创建后=> 发送ajax请求
    console.log("created ---  实例初始化后")
    console.log(this.msg) // "我是变量"
  },
  // 挂载 =>渲染显示组件 =>  beforeMount mouted
  beforeMount () {
    // 3. 挂载前
    console.log("beforeMount --- vue的虚拟DOM, 挂载到真实的网页之前")
    console.log(document.getElementById("myUl")) // null
    // console.log(document.getElementById("myUl").children[1].innerHTML) // 报错
  },
  mounted () {
    // 4. 挂载后=》操作dom
    console.log("mounted --- vue的虚拟DOM, 挂载到真实的网页上 ")
    // console.log(document.getElementById("myUl").children[1].innerHTML)
    console.log(document.querySelector('#myUl').children[1].innerText)
  },
  // 更新 =》修改了变量=》触发视图刷新 => beforeUpdate updated（多次）
  beforeUpdate () {
    // 5. 更新前
    console.log("beforeUpdate --- 数据更新, 页面更新前")
    // 比如点击新增数组元素, vue会触发此生命周期函数, 但是此时页面并未更新, 所以获取不到新增的li标签
    // console.log(document.getElementById("myUl").children[4].innerHTML) // 报错
  },
  updated () {
    // 6. 更新后
    console.log("updated --- 数据更新, 页面更新后")
    // console.log(document.getElementById("myUl").children[4].innerHTML)
  },
  beforeDestroy () {
    // 7. 销毁前
    // (清除定时器 / 解绑js定义的事件)
    console.log("beforeDestroy --- 实例销毁之前调用")
  },
  // 销毁 =》切换页面 =》会把组件对象从内存删除 => beforeDestory destoryed
  destroyed () {
    // 8. 销毁后
    // (清除定时器 / 解绑js定义的事件)
    console.log("destroyed --- 销毁完成")
  },
};
</script>

<style>
</style>