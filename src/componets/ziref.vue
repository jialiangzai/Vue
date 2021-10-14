<template>
  <div>
    <h2>子组件</h2>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hi vue!'
    }
  },
  methods: {
    setMsg () {
      this.msg = 'hi react!'
    }
  },
}
</script>

<style scoped>
</style>