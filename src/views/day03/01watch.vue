<template>
  <div>
    <h1>监听属性</h1>
    <p>{{ msg }}</p>
    <p>{{ obj }}</p>
    <button @click="changeMsg">修改msg</button>
    <button @click="changeObj">修改obj</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      obj: {
        name: "小明",
        age: 15,
      },
    };
  },
  watch: {
    // msg(newv, oldv) {
    //   return console.log(newv, oldv);
    // },
    obj: {
    immediate:true,
    deep:true,
      handler(news, olds) {
        return console.log(news, olds);
      },
    },
  },
  methods: {
    changeMsg() {
      this.obj.age = Math.floor(Math.random() * 100 + 1);
    },
    changeObj() {
      this.obj.age = Math.floor(Math.random() * 100 + 1);
    },
  },
};
</script>
<style scoped>
</style>
