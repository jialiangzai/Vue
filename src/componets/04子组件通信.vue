<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }} 元</p>
    <p>
        {{info}}
    </p>
    <p>
      <button @click="kanFns(index)">砍价</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["title",  "price", "info", "index"],
  methods: {
    kanFns() {
        this.$emit("changess", this.index,Math.floor(Math.random() * 10 + 1))
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>