<template>
  <div>
    <h1>事件基本用法</h1>

    <p>你要买商品的数量: {{ count }}</p>
    <button v-on:click="count += 1">加一</button>
    <button v-on:click='add'>加一（2）</button>
    <button @click="sub">减一</button>
    <button @click="addt">加二</button>
  </div>
</template>

<script>
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据
// 点击生成按钮, 新增一个li(随机数字)和删除按钮, 点击删除按钮, 删除对应的li和值
//  * 点击事件回调函数this作用：
//  * 1. 可以调用其它methods中定义的方法
//  * 2. 可以获取data中定义的变量并修改=》触发数据驱动视图

export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
      add(){
          this.count++ 
      },
      addt(){
          this.count +=2
      },
      sub(){
          this.count--
      }
  },
};
</script>

<style>
</style>