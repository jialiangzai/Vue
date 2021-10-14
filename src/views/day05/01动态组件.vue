<template>
  <div>
    <h1>动态组件</h1>
    <ul>
    <li @click="switchTab('D1')">dy1</li>
      <li @click="switchTab('D2')">dy2</li>
    </ul>
    <hr />
    <!-- component是vue框架的内置全局组件 也是.vue文件 -->
    <!-- 用来切换不同的.vue文件 -->
    <!-- 官方要求is加冒号值为引号变量，变量current的值就是要显示的组件的标签名   动态绑定  -->
    <component :is="current"></component>
  </div>
</template>

<script>
import D1 from "../../componets/005dy1.vue";
import D2 from "../../componets/005dy2.vue";
export default {
  components: {
    D1,
    D2,
  },
  data() {
    return {
      current: "D1",
    };
  },
  methods: {
    switchTab(n) {
        this.current = n
    },
  },
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  li {
    margin: 15px;
  }
}
</style>