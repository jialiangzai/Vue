<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="btn">逆转世界</button>
  </div>
</template>
<script>
export default {

    data() {
        return {
            message:'看那蔚蓝色的星球'
        }
    },
    methods: {
        btn(){
            // 转数组用reverse方法再转为字符串 最后重新赋值给message赋值
            // 总结: 记住方法特点, 多做需求, vue是数据变化视图自动更新, 减少操作DOM时间, 提高开发效率
             this.message = this.message.split('  ').reverse().join('   ')
             console.log(this.message);
        }
    },
};
</script>
<style >
</style>