<template>
  <div>
    <h1>动态组件</h1>
    <button @click="cone">账号密码</button> 
    <button @click="ctwo">个人信息</button>
    <hr>
    <!-- 默认的时候每次切换，都会把上次显示的组件销毁了=》后创建并显示当前组件（反复）=》没有缓存 -->
    <!-- 必须是组件的name属性 -->
    
    <keep-alive include=[One,Two]>
      <!-- 因为是动态切换不能直接写:is后跟要显示的组件的标签名 注册组件的标签名  而是用变量然后data存储-->
    <component :is="chec"></component>
    </keep-alive>
  </div>
</template>

<script>
import One from "./01动态组件test1.vue";
import Two from "./01动态组件test2.vue";
export default {
    data() {
        return {
            chec: 'One'
        }
    },
    
  components: {
    One,
    Two,
  },
  methods: {
    cone() {
        this.chec='Two'
    },
    ctwo() {
         this.chec= 'One'
    },
  },
};
</script>

<style>
</style>