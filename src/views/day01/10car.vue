<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->

      <tr v-for="(item, index) in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.time }}</td>
        <td>
          <button @click="del2(index)">删除</button>
        </td>
      </tr>
      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>
<script>
//  * 点击事件回调函数this作用：
//  * 1. 可以调用其它methods中定义的方法
//  * 2. 可以获取data中定义的变量并修改=》触发数据驱动视图

// - 需求1: 根据给的初始数据, 把购物车页面铺设出来
// - 需求2: 点击对应删除按钮, 删除对应数据
// - 需求3: 当数据没有了, 显示一条提示消息

export default {
  data () {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" },
        { id: 2, name: "宝马", time: "2020-08-02" },
        { id: 3, name: "奥迪", time: "2020-08-03" },
      ],
    }
  },
  methods: {
    del2 (n) {
      this.list.splice(n, 1)
    }
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>