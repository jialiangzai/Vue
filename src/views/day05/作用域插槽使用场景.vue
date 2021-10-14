<template>
  <div>
    <MyTable :arr="list">
      <template #img="{ src }">
        <!-- <p>{ src }</p> -->
        <img :src="src" alt="" />
      </template>
    </MyTable>
    <MyTable :arr="list">
      <template #img="{ src }">
        <h2 style="color: blue">{{ src }}</h2>
      </template>
    </MyTable>
    <MyTable :arr="list">
      <template #img>
        <h2 style="color: blue"></h2>
      </template>
    </MyTable>
  </div>
</template>

<script>
// 插槽使用：
// 在封装组件时地一些不确定的部分(html)渲染，定义在子组件中slot双标签(内置的全局组件)可以写默认的结构或元素当无html结构传入就是默认结构 ； 使用在父组件中给子组件标签内容区域抽离出指定、不定结构，
// 具名插槽 一个组件内有2处以上需要外部传入标签的地方  在子组件中用slot标签添加多个插槽，赋予name属性 name =""  在父组件中为子组件标签区域需要外部传入标签的地方用template包裹，
import MyTable from "./table.vue";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl: "https://gitee.com/mengi/imgs/raw/master/img/1.jpeg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl: "https://gitee.com/mengi/imgs/raw/master/img/3.jpeg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl: "https://gitee.com/mengi/imgs/raw/master/img/4.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
</style>