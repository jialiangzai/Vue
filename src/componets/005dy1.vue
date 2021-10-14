<template>
  <h1>D1</h1>
</template>

<script>
export default {
  // name相当于组件的ID，唯一的，而且不能和html已知元素名一样
  name: "dy1",
  activated() {
    // 使用场景：被缓存之后，再次进来=》想干事儿（实现功能）
    console.log("dy1组件被缓存=》进来了！");
  },
  deactivated() {
    console.log("dy1组件被缓存=》离开了！");
  },
  created() {
    console.log("dy1组件被创建了！");
  },
  destroyed() {
    console.log("dy1组件被销毁了！");
  },
};
</script>

<style>
</style>