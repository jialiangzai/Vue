<template>
  <h1>D2</h1>
</template>

<script>
export default {
  name: "dy2",
  created() {
    console.log("dy2组件被创建了！");
  },
  destroyed() {
    console.log("dy2组件被销毁了！");
  },
  activated() {
    console.log("dy2组件被缓存=》进来了！");
  },
  deactivated() {
    console.log("dy2组件被缓存=》离开了！");
  },
};
</script>

<style scoped>
</style>