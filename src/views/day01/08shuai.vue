<template>
  <div>
    <h1>帅哥美女靠靠边</h1>
    <ul>
      <li v-for="(item, index) in myArr" :key="item">{{index}}-{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据
export default {
  data() {
    return {
      myArr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      // 不断在末尾添加在开头删除 此时的数组是动态的
      this.myArr.push(this.myArr[0])
      this.myArr.shift()
    },
  },
};
</script>

<style>
</style>