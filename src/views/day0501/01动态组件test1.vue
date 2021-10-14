<template>
  <div>
      <span>人生格言</span>
      <input type="text" value="人生格言">
      <hr>
      <span>自我介绍</span>
      <input type="textarea">
  </div>
</template>

<script>
export default {
    name:'One',
    activated() {
      console.log('进入了：第一次组件创建页会执行一次');
    },
    deactivated() {
      console.log('（离开了） =》前提条件：只有当前组件被缓存才会执行');
    },
    created() {
      console.log('创建了，第一次且只有一次执行');
    },
    destroyed() {
      console.log('我销毁了');
    },
}
</script>

<style>

</style>