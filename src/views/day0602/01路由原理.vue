
<template>
  <div>
    <div class="menu">
      <a href="#/Home">首页</a>
      <a href="#/About">关于</a>
      <a href="#/Contact">联系</a>
    </div>
    <hr>
    <component :is="currs"></component>
  </div>
</template>

<script>
import Home from './02home.vue'
import About from './03about.vue'
import Contact from './04contact.vue'
export default {
  
  data() {
    return {
      currs: ''
    }
  },
  components: {
    Home,
    About,
    Contact,
  },
  created(){
      if (location.hash === "Home") {
        this.currs = "Home"
      }else if (location.hash === "About") {
        this.currs = "About"
      }else {
        this.currs = "Contact"
      }
    // 刷新时候因为有默认值且监听到变化时才会切换hash切页面,url的hash和对应的组件不同步
    window.onhashchange=()=>{
      if (location.hash === "Home") {
        this.currs = "Home"
      }else if (location.hash === "About") {
        this.currs = "About"
      }else {
        this.currs = "Contact"
      }
    }
    
  }
}
</script>

<style lang="less" scoped>
.menu {
  a {
    display: inline-block;
    margin: 10px;
  }
}
</style>