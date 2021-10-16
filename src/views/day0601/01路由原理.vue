<template>
  <div >
    <h1>路由原理</h1>
    <div class="menu">
      <a href="#/Home">首页</a>
      <a href="#/About">关于</a>
      <a href="#/Contact">联系</a>
    </div>

    <hr />
    <component :is="curr"></component>
  </div>
</template>

<script>
import Home from "./02home.vue";
import About from "./03about.vue";
import Contact from "./04contact.vue";
export default {
  data() {
    return {
      curr: "",
    };
  },
  components: {
    Home,
    About,
    Contact,
  },
  created() {
    window.location.onhashchange = () => {
      console.log("url中的hash值变化了，" + location.hash);
      const currhash = location.hash;
      if (currhash === "Home") {
        this.currc = "Home";
      } else if (currhash === "About") {
        this.currc = "About";
      } else {
        this.currc = "Contact";
      }
    };
  },
};
</script>

<style lang="less" scoped>
.menu {
  a {
    display: inline-block;
    margin: 10px;
  }
}

</style>