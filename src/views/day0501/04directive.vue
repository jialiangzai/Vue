<template>
    <div>
        <input type="text" v-focus>
        <h1 v-color="theColor">自定义指令测试</h1>
        <button @click="changeColor">更改颜色</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                theColor: 'red'
            }
        },
        directives: {
            focus:{
                inserted(el){
                    el.focus()
                }
            },
            color:{ 
                // 传值   增
                inserted(el,binding){
                    el.style.color = binding.value
                },
                // 更新绑定的变量时触发此函数=》手动更新  改
                update(el,binding){
                    el.style.color= binding.value
                }

            }
        },
        methods: {
           changeColor(){
              
               this.theColor=`rgb(${ Math.floor(Math.random()*256)},${ Math.floor(Math.random()*256)},${ Math.floor(Math.random()*256)})`
           } 
        },
    }
</script>

<style lang="css" scoped>

</style>