
<template>
  <div class="parent">
    <h1 class="red">样式模块化</h1>
    <hr />
    <Child />
  </div>
</template>

<script>
import Child from "../../componets/zimokuai.vue";

export default {
  components: {
    Child: Child,
  },
};
</script>

<style scoped>
/* 属性选择器和后代选择器 */
/*  .类名[data-v-哈希值] ，加：deep或/deep/是在类名前加[data-v-哈希值] */
.red {
  color: blue;
}
.parent /deep/ .content {
  color: crimson;
  border: 2px solid pink;
}
/* 列外子组件根元素不能加deep 默认已经加了 ，再加反而出错 */
.parent .child {
  border: 10px solid orchid;
}
</style>