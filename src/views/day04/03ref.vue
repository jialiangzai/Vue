<template>
  <div>
    <h1 ref="h1">$ref使用</h1>
    <button @click="operDom">操作DOM</button>
    <button @click="invokeChildFn">调用子组件的方法</button>
    <Zi ref="child"/>
  </div>
</template>

<script>
import Zi from '../../componets/ziref.vue'
//  * $refs作用：
//  * 步骤：1. 在元素身上写ref的属性：<p ref="p">value</p> 2.获取=》this.$refs.h1
//  * 1. 获取dom对象
//  * 2. 获取组件实例(.vue)=》调用方法=》干事   
export default {
    components: {
        Zi,
    },
  mounted() {
    console.log("组件实例：", this, this.$refs);
  },
  methods: {
      operDom() {
          this.$refs.h1.style.color='red'
      },
      // 点击执行子组件方法
      invokeChildFn(){
          this.$refs.child.setMsg()
      }

  },
};
</script>

<style lang="scss" scoped>
</style>