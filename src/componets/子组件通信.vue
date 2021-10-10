<template>
  <div class="food">
    <h2>菜名：{{ data.name }}</h2>
    <h3>价格：{{ data.price }}</h3>
    <h4>开业大酬宾打{{ discount }}折</h4>
    <button @click="changeParentData">修改父组件数据</button>
  </div>
</template>

<script>
export default {
  // props:['data']// 声明属性, 等待接收外部传入的值
  // 接收数据属性名和父组件传递属性名保持一致
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    discount: {
      type: Number,
      default: 5,
    },
  },

  methods: {
    changeParentData() {
      // console.log(this.discount)
      // 按照单向数据流=》简单类型不能修改
      // this.discount = 1
      // this.data = { name: '新菜', price: 12 }
      // 例外：可以局部修改
      //   this.data.name = '鱼香肉丝' //不正规
      //     子传父，把子组件的数据传递给父组件使用==》干事 回调函数
      // 在父组件中为子组件绑定一个自定义事件+回调函数，（回头触发）
      // 在子组件内部触发自定义事件 ：固定语法：  this.$emit('事件名'，data)   事件名是绑定的自定义事件名字，data是参数可选

      this.$emit("changeCount");
    },
  },
};
</script>

<style scoped>
.food {
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border: 1px solid #eee;
  background-color: peachpuff;
  border-radius: 10px;
}
</style>