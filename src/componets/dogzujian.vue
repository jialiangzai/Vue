<template>
  <div class="my_div">
    <img :src="dogo.dogImgUrl" alt="" />
    <p  :style="{ backgroundColor: colorObj }" @click="btn">
     {{dogo.dogName}}
    </p>
  </div>
</template>

<script>
export default {
  // 目标: 修改Dog组件, 实现组件内点击变色
  data() {
    return {
      colorObj: "",
    };
  },
//   props: ['das','dan'],
props:{
    dogo:{
        // type:Array
        type:Object
    },
},
  methods: {
    btn() {
      this.colorObj = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
      this.$emit("love", this.dogo.dogName);
    },
  },
};
</script>

<style lang="css" >
.my_div {
  width: 400px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
}
</style>