
<template>
  <div>
    <h1>this=>vue组件实例（viewmodel）</h1>
    <h2>{{ count }}, {{ arr }}</h2>
    <p><button @click="add">获取this</button></p>
    <hr />
    <h1>事件修饰符</h1>
    <div class="box" @click="parent">
      父盒子
      <div @click.stop="child" class="inner">子盒子</div>
    </div>
    <p>
      <a @click.prevent="go" href="http://www.baidu.com">跳转百度</a>
    </p>
    <p @click.once="go">事件只会被触发一次</p>

    <hr />
    <h1>按键修饰符</h1>
    <p><input type="text" @keyup.enter="handlerEnter" /></p>
    <p><input type="text" @keyup.tab="handlertabs" /></p>
  </div>
</template>

<script>
/**
 * 点击事件回调函数this作用：
 * 1. 可以调用其它methods中定义的方法
 * 2. 可以获取data中定义的变量并修改=》触发数据驱动视图
 */
export default {
  data() {
    return {
      count: 1,
      arr: [2],
    };
  },
  methods: {
    // 点击加一
    add() {
      console.log("vue实例：", this);
      this.go();
      console.log("获取变量的值：", this.count);
      // 数据驱动视图
      this.count = Math.random() * 100;
      this.arr.push(Math.random() * 10);
    },
    // 回车事件
    handlerEnter() {
      console.log("回车了");
    },
    handlertabs(){
      console.log('tab');
    },
    go() {
      console.log(123);
    },
    // 父盒子点击回调
    parent() {
      console.log("父盒子点击回调");
    },
    // 子盒子点击回调
    child() {
      console.log("子盒子点击回调");
    },
  },
};
</script>

<style scoped>
.box {
  margin: 0 auto;
  width: 300px;
  height: 300px;
  padding: 10px;
  background-color: crimson;
}
.inner {
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: darkcyan;
}
</style>