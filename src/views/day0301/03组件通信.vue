<template>
  <div>
    <Child
      v-for="(item ,index) in list"
      :index= "index"
      :key="item.id"
      :title="item.proname"
      :price="item.proprice"
      :info = "item.info"
      :num="item.num"
      @changess="kanFn"
    />
  </div>
</template>

<script>
import Child from "../../componets/04子组件通信.vue";

export default {
  data() {
    return {
        
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
           info: "开业大酬宾, 全场8折",
          num:4,
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
          num:4,
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
          num:4,
        },
      ],
    };
  },
  components: {
    Child,
  },
  methods: {
      kanFn(b,c) {
        this.list[b].proprice = c;
        
      }
  },
};
</script>

<style>
</style>