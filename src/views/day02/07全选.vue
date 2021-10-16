<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="iss" />
    <button @click="isv">反选</button>
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
  //   计算属性虽然是函数形式，实质是一个变量存储数据(结果值)依赖data变量，是一个值键控函数内用到data变量的值===》一旦发生变化，函数就会重复执行
  // 缓存计算结果(数据没有变化就不会重新执行计算)，性能好
  computed: {
    //  计算属性默认函数写法=》不能被修改// 计算arr列表是否是全部选中状态=> 决定全选框是否选中
    // 相当于完整写法的get()
    //   iss(){
    //       return this.arr.every((obj)=>obj.checked === true)
    //   }
    iss: {
      get() {
        // 在ES6中，由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
        return this.arr.every((obj) => obj.checked === true);
      },
      // 设置isAll的值的时候触发此方法, 传入要设置的值
      // val是全选框的true/false的值
      set(val) {
        return this.arr.forEach(t => {
          t.checked = val;
        });
      },
    },
  },
  methods: {
    isv() {
      this.arr.forEach((obj) => (obj.checked = !obj.checked));
    },
  },
};
</script>

<style>
</style>