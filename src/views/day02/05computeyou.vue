<template>
  <div>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是个字符串",
    };
  },
  computed: {
    reverseMessage() {
      console.log("计算属性执行");
      return this.message.split("").reverse().join("");
    }
  },
  methods: {
    getMessage(){
      console.log("方法执行");
      return this.message.split("").reverse().join("");
    }
  }
};
</script>

<style>
</style>