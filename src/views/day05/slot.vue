<template>
  <div>
    <h1>插槽使用</h1>
    <hr />
    <Pannel>
      <!-- 这个下边写的html结构如果没有template包裹都是默认插槽的内容 -->
      <!-- 1. 传递插槽内容（html） -->
      <p class="red">{{ msg }}</p>
      <p>白毛浮绿水，红掌拨清波</p>
      <template v-slot:one={row}>
          <!-- <p>{{ scope }}</p> 插槽的名字后加等号赋值，值为一个对象，对象的名字规范scope可以解构 scope对象包装的数据，键自定义数据变量名
        <p>{{ scope.row.name }}</p> -->
        <p>{{ row.name + ":" + row.age }}</p>
        <h2>我是具名插槽内容1</h2>
        <p>内容</p>
      </template>
       <template #two>
        <h2>我是具名插槽内容2</h2>
        <p>内容</p>
      </template>
      <template #title>
        <h4>咏鹅 骆宾王</h4>
      </template>
      <h3>wo</h3>
    </Pannel>
    <Pannel>
      <!-- 1. 传递插槽内容（html） -->
      <p>鹅鹅鹅，曲项向天歌2</p>
      <p>白毛浮绿水，红掌拨清波2</p>
      <p>白毛浮绿水，红掌拨清波2</p>
    </Pannel>
    <Pannel />
  </div>
</template>

<script>
/**
 * 插槽使用
 * 插槽的概念和作用：vue的插槽起到渲染html结构的作用（指定传入）
 * 目的：让一个组件借助插槽技术=》复用最大化
 * (1). 默认插槽(1个)
 * 使用步骤：1. 在子组件标签内写html结构（可以控制样式+绑定父的变量传入）2. 在子组件template中指定位置写个slot元素（vue框架内置全局组件）接收插槽传递内容
 * (2). 具名插槽（多个）=> 起名字 v-slot:名字 === #名字（推荐）
 * 使用步骤：1. 在子组件标签内用template包裹写html结构，template加个v-slot:名字 2. 在子组件template中指定位置写个slot元素（vue框架内置全局组件）接收插槽传递内容,同时指定name值（和v-slot:name的值）
 * 3. 作用域插槽
 */
export default {
  data () {
    return {
      msg: '鹅鹅鹅，曲项向天歌啊~'
    }
  },
}
</script>

<style scoped>
.red {
  color: red;
}
</style>