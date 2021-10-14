<template>
  <div>
    <h1>自定义指令</h1>
    <h1 v-if="color">自定义指令</h1>
    <hr />
    <input v-foc type="text" />
    <h3 v-sty="color">长津湖</h3>
    <button @click="color = 'orange'">修改指令颜色</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "green",
    };
  },
  directives: {
    //  key(指令名):val对象（写逻辑）
    sty: {
      //   inserted (el) {
      //     console.log(el)
      //     el.style.color = 'red'
      // 当被绑定的元素插入到 DOM 中时执行一次
      inserted(el, binding) {
        console.log(el, binding);
        // 操作DOM
        // 通过binding.value获取指令绑定到变量值
        el.style.color = binding.value;
      },
      // 变量变化会执行多次
      update(el, binding) {
        console.log("更新后执行：", el, binding);
        el.style.color = binding.value;
      },
    },
  },
};
