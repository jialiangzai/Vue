<template>
  <div>
      <ul>
          <li v-for="(i,n) in str" :key="i">
              <span>{{i}}</span>
              <button @click="dl(n)">删除</button>
          </li>
      </ul>
      <button @click="crea">生成</button>
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
            str:[1]
        }
    },
    methods: {
        dl(n){
            this.str.splice(n,1)
        },
        crea(){
            this.str.push(Math.floor(Math.random()*20+1))
        }
    },
};
</script>

<style>
body{
    font-size: 14px;
}
button{
    margin: 14px 20px;
}
</style>