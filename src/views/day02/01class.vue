<template>
  <div>
      <!-- style -->
    <p :style="{color: colorStr}">value变量的值, 将被赋予给css属性的key生效</p>
     <div>
         <!-- class -->
    <p class="redStr" :class="someName">值为类名</p>     
    <p :class="{redStr: bool}">值为true, key作为类名生效</p>
  </div>
  </div>
  
</template>
<script>
//  - - class="变量类名/表达式"
//   - :class="{类名1: 布尔值/表达式/变量, 类名2: 布尔值/表达式/变量}"可以和静态class共存
//  :style="{css样式名: 值/变量(实际是样式值分号分隔，遇到-连接的用驼峰)}"说明：可以和静态style共存 动态style的key都是css属性名


export default {
    data() {
        return {
            bool:true,
            someName:'blueStr',
            colorStr:'red' //类名不加点
        }
    },
}
</script>

<style>
.redStr{
  color: red;
}
.blueStr{
  color: blue;
}
.pinkStr{
  color: pink;
}
</style>