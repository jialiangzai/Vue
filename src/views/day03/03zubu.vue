<template>
  <div>
      <h1>局部组件演示</h1>
  <Jb/>
  </div>
</template>

<script>
// 引入
import Jb from "../../componets/03jubu.vue";
export default {
  components: {
    Jb,
  },
};
</script>

<style>
/* 1. 默认组件style 中定义的样式是全局=》存在相同名字覆盖的情况=>父覆盖子
2. 局部样式=》在style标签上加上[scoped属性]=>只会影响自己 */
/* 样式模块化下，如果想控制子组件样式=》再要控制的子组件样式前加 /deep/  */
/* 例外 默认子组件的根元素，会带上父组件的data-v-hash属性，所以可以直接控制 */

</style>