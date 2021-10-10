<template>
  <div>
    {{ msg }}
    <!-- 1. 过滤器格式: vue变量 | 过滤器名 -->
    <!-- 翻转过滤器reverse -->
    <p>{{ msg | reverse }}</p>
    <!-- 首字母过滤器first -->
    <p :title="msg | toUp">鼠标长时间停留</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello, world",
    };
  },
  filters: { // 3. 局部过滤器: 只能在当前的vue文件中使用
    reverse(val) {
      return val.split("").reverse().join("");
    },
  },
};
</script>