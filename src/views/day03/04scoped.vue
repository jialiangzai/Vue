<template>
<div class="parent">
    <h1 class="red">样式模块化</h1>
   <hr/>
    <Child/>
</div>
</template>

<script>
import Child from '../../componets/zimokuai.vue'
export default {
    components:{
        Child:Child
    }
}
</script>

<style scoped>
.red {
  color: blue;
}
/* 样式模块化下，如果想控制子组件样式=》再要控制的子组件样式前加 /deep/ :deep */
.parent /deep/ .content {
  color: crimson;
  border: 2px solid pink;
}
/* 例外 子组件根部可以直接控制 他会自动添加data-v-哈希*/
.parent .child {
  border: 10px solid orchid;
}
</style>