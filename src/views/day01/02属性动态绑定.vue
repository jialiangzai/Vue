<template>
  <div>
    <h1>基础用法</h1>
    <ul>
      <li><a href="http://www.baidu.com">跳转百度</a></li>
      <li><a v-bind:href="qq">qq v-bind动态属性</a></li>
      <li><a :href="url">跳转百度v-bind动态属性简写</a></li>
      <li>
        <img src="../../assets/logo.png" alt="" />
      </li>
      <li>
        <img :src="src" alt="" />
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import src from "../../assets/logo.png";
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据
export default {
  data() {
    return {
      // 定义一个变量，key(变量名):value(变量值)
      url: "http://www.baidu.com",
      qq: "http://www.qq.com",
      //   图片变量不能直接给绝对路径需要import引入
      src,
    };
  },
};
</script>

<style>
</style>