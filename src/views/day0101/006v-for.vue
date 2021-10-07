<template>
  <div>
      <h2>信息匹配v-for</h2>
    
     <p>学生的姓名</p>
      <ul>
          <li v-for="(item,index) in arr" :key="item">{{index}}{{item}}</li>
      </ul>
      <p>学生信息</p>
      <ul>
          <li v-for="(val ) in stuArr" :key="val.id">
        <span>{{ val.name }}</span>
        <span>{{ val.sex }}</span>
        <span>{{ val.hobby }}</span>
          </li>
      </ul>
      <p>老师信息</p>
      <ul>
          <li v-for="(obj,i) in tObj" :key="obj">{{i}}-{{obj}}</li>
      </ul>
      <!-- 序号 -->
      <ul>
          <li v-for="items in count" :key="items">{{items}}</li>
      </ul>
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
      arr: ["小明", "小欢欢", "大黄"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
    };
  },
};
</script></script>

<style>
</style>