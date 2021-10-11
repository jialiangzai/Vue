<template>
  <ul>
    <li v-for="(n, i) in arr" :key="i" style="display: inline-block">
      <input type="checkbox" v-model="newarr" :value="n" />
      <span>{{ n }}</span>
    </li>
    <p>您选中的数字的和为：{{ total }}</p>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newarr: [],
    };
  },
  computed: {
    total() {
      return this.newarr.reduce((sum1, obj) => (sum1 += obj), 0);
    },
  },
};
</script>

<style>
</style>