<template>
  <div>
      <a :href="url">百度新闻</a>
      <hr>
      <img :src="src" alt="">
  </div>
</template>

<script>
import src from '../../assets/logo.png'

export default {
    data() {
        return {
            url:'http://news.baidu.com/',
            src
        }
    },
}
</script>

<style>

</style>