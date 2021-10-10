<template>
  <div>
    <p>和为: {{ num }}</p>
    <p>{{ reverseMessage }}</p>
    <div>
        a<input type="text" v-model.number="a">
        <hr>
        b<input type="text" v-model.number="b">
        
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 10,
      b: 20,
      message: "我是个字符串",
    };
  },
  computed: {
    num() {
      return this.a + this.b;
    },
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>