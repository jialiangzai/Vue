<template>
  <div>
    <input type="text" v-foc />
  </div>
</template>

<script>
export default {
  // 局部注册
  directives: {
    foc: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>