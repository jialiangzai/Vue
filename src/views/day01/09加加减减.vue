<template>
  <div>
    <h1>加加减减</h1>
    <ul>
      <li v-for="(item , index) in num"  :key="item">
        <span>{{item}}</span>
        <button @click="dele(index)">删除</button>
      </li>
    </ul>
    <!-- <button v-on:click="pu">生成</button> -->
    <button @click="pub">生成</button>
  </div>
</template>

<script>
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据

// 点击生成按钮, 新增一个li(随机数字)和删除按钮, 点击删除按钮, 删除对应的li和值

export default {
  data() {
    return {
      num: [1],
    };
  },
  methods: {
    pub() {
        this.num.push(Math.floor(Math.random()*10+1))
    },
    dele(index){
        this.num.splice(index,1)
    }
  },
};
</script>

<style>
button{
    margin: 20px 40px;
}
</style>