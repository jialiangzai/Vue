<template>
  <div>
    <h1>基础用法</h1>
    <ul>
      <li>{{ a }}</li>
      <li>{{ b }}</li>
      <li>{{ c }}</li>
      <li>{{ obj.name }}</li>
      <li>{{ obj.age > 18 ? "成年" : "未成年" }}</li>
      <li>{{ 1 + 2 }}</li>
      <li>{{ arr[1] }}</li>
      <li>{{ arr[4]}}</li>
    </ul>
  </div>
</template>

<script>
// js逻辑：dom中插值表达式赋值, vue的变量必须在data里声明
// 在data函数中定义使用的变量=》任意类型
//  在template中借助插值语法(胡子语法)=》{{变量名}} ===》放变量和简单的表达式 复杂的是字符串，通过复杂类型的api来获取对应的数据
export default {
  data() {
    return {
      // 定义一个变量，key(变量名):value(变量值)
      a: 2,
      b: "str",
      c: null,
      obj: {
        name: "小红",
        age: 3,
      },
      arr: [
        3,
        6,
        9,
        {
          a: 2,
          b: 3,
        },
      ],
    };
  },
};
</script>

<style>
</style>