<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isa" />
    <button @click="invert">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.checked" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          checked: false,
        },
        {
          name: "孙悟空",
          checked: false,
        },
        {
          name: "唐僧",
          checked: false,
        },
        {
          name: "白龙马",
          checked: false,
        },
      ],
    };
  },
  computed: {
    //   isa() {
    //       return this.arr.every((obj)=>obj.checked === true)
    //   }
    // 计算属性默认函数写法=》不能被修改// 计算arr列表是否是全部选中状态=> 决定全选框是否选中
    //   li依赖动态   li全改变全按钮  获取计算属性依赖   点击全选按钮 修改了li的状态是设置
    isa: {
      get() {
        return this.arr.every((obj) => obj.checked === true);
      },
      // set 有参数是全选按钮的状态
      set(val) {
        return this.arr.forEach((t) => (t.checked = val));
      },
    },
  },
  methods: {
      invert() {
          this.arr.forEach((t) => (t.checked = !t.checked));
      }
  },
};
</script>

<style>
</style>