<template>
  <div>
    <button @click="addFood">增加新菜</button>
    <button @click="changeCount">打折</button>
    <hr />
    <Child @changeCount="fn" :discount="discount" :data="t" v-for="t in foods" :key="t.id" />
  </div>
</template>

<script>
import Child from "../../componets/子组件通信.vue";
export default {
  //  原则：单向数据流=》父的数据传递给子，只能在父组件中修改
  components: { Child },
  data() {
    return {
      foods: [
        { id: 1, name: "过油肉", price: 9.9 },
        { id: 2, name: "锅包肉", price: 19.9 },
        { id: 3, name: "回锅肉", price: 29.9 },
      ],
      discount: 5,
    };
  },
  methods: {
    // 新增菜品
    addFood() {
      this.foods.unshift({
        id: Date.now(),
        name: Math.floor(Math.random() * 100) + "菜",
        price: Math.floor(Math.random() * 20),
      });
    },
    // 打折
    changeCount() {
      this.discount = Math.floor(Math.random() * 10 + 1);
    },
    fn(){
        this.discount=9
    }
  },
};
</script>

<style>
</style>