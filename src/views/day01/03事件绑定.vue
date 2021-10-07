<template>
  <div>
    <h1>基础用法</h1>
    <!-- vue指令:   v-on事件绑定-->
    <p>你要买商品的数量: {{ count }}</p>
    <div>
      <button v-on:click="count += 1">增加1</button>
      <button v-on:click="addFn">增加1个</button>
      <button @click="addFns(5)">增加5</button>
      <button @click="subFn">减少</button>
      <!-- 事件对象- 无传参, 通过形参直接接收
- 传参, 通过$event指代事件对象传给事件处理函数
 -->
      <button v-on:click="handl">无参数</button>
      <button v-on:click="handl(3, $event)">事件对象</button>
    </div>
    <div>
      <!-- 其他事件 及事件参数-->
      <p @click="adsd">点击小老弟</p>
      <li><a v-on:click="handlec" :href="url">欢迎来到王者峡谷！</a></li>
    </div>
    <div v-on:mousemove="mousem(123, $event)" class="box">鼠标事件</div>
    <input type="text" @click="unfocus" />
  </div>
</template>

<script>
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据
// * 语法
//   * v-on:事件名="要执行的少量代码"
//   * v-on:事件名="methods中的函数"
//   * v-on:事件名="methods中的函数(实参)"
// * 简写: @事件名="methods中的函数  常用@事件名, 给dom标签绑定事件, 以及=右侧事件处理函数"
export default {
  data() {
    return {
      count: 1,
      url: "https://pvp.qq.com/",
    };
  },
  methods: {
    unfocus(e) {
      console.log(e.target);
    },
    mousem(s, e) {
      console.log(s, e.pageX , e.pageY);
    },
    addFn() {
      // this代表export default后面的组件对象(下属有data里return出来的属性)
      this.count++;
    },
    addFns(n) {
      this.count += n;
    },
    subFn() {
      this.count--;
    },
    handl(n, e) {
      console.log(n, e);
    },
    adsd(e) {
      console.log(e.target);
    },
    handlec(e) {
      console.log(e);
      e.preventDefault();
    },
  },
};
</script>

<style>
.box {
  width: 300px;
  height: 300px;
  background-color: red;
  line-height: 300px;
  text-align: center;
}
</style>