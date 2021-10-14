<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <div>
      <div class="title">
        <slot name="title"> </slot>
        <h4>{{capti}}</h4>
        <span class="btn" @click="handisShow">
          {{ isShow ? "收起" : "展开" }}
        </span>
      </div>
      <div class="container" v-if="isShow">
        <!-- <slot name="two"></slot>
        <slot name="one" :row="row" abc="我" c="123"></slot>
        <slot>
        </slot> -->
        <slot></slot>
        <slot name="twoName"></slot>
        <slot name="thr" :row="row"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"Pannel",
      isShow: true,
      row: {
        name: '小红',
        age: 18
      },
      capti:'诗句'
    };
  },
  methods: {
    handisShow() {
      //   取决于上一次的点击结果
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>