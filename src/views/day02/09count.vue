<template>
  <div>
    <div v-for="(item, index) in arr" :key="index" style="display:inline-block">
      <input type="checkbox" v-model="isc" :value="item" />
      <span>{{item}}</span>
    </div>
    <p>你选中的元素，累加和为：{{sum}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      isc:[]
    };
  },
//  总结, 当计算属性函数里引用的vue变量发生改变, 函数就执行并重新返回结果并缓存起来
  computed: {
    sum(){
        return this.isc.reduce((sum,el)=>{
            return sum+=el
        },0)
    },
  },
};
</script>

<style>
</style>