<template>
  <div id="app">
    <div class="container">
      <!-- 顶部搜索框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | fd }}</td>
            <!-- 也可以用id只不过id还要去找而且在修改删除index后或者在index前添加index就不是唯一的，用索引 -->
            <td><a @click.prevent="dels(index)" href="#">删除</a></td>
          </tr>
          <tr>
            <td>统计</td>
            <td colspan="2">总价：{{ totalPrice }}</td>
            <td colspan="2">均价：{{ advPrice }}</td>
          </tr>
        </tbody>
        <tfoot v-show="list.length === 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline">
        <div class="form-group">
          <div class="input-group">
            <input
              v-model.trim="name"
              type="text"
              class="form-control"
              placeholder="资产名称"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              v-model.number="price"
              type="text"
              class="form-control"
              placeholder="价格"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button @click.prevent="addf" class="btn btn-primary">添加资产</button>
      </form>
      <!-- <p>{{ ttal }}</p> -->
    </div>
  </div>
</template>

<script>
// 需求
// 1. 把默认数据显示到表格上
// 2. 注意资产超过100的, 都用红色字体标记出来
// 3. 点击删除的a标签, 删除数据；无数据提示
// 4. 实现底部添加资产的功能

// 细节:

// - 注意a标签有默认行为-跳转刷新页面(如果有href属性)
// - 添加资产时, 提示用户数据不能为空
// - form表单里的button的点击事件, 会触发默认表单提交的行为

import "bootstrap/dist/css/bootstrap.css"; // 局部样式 从node_module引入不需要带node_module
import moment from "moment";
export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      // list: [
      //   { id: 100, name: "外套", price: 199, time: new Date('2010-08-12') },
      //   { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01') },
      //   { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22') },
      //   { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12') }
      // ]
      list:  JSON.parse(localStorage.getItem('brand-137')) || [],
    };
  },
  filters: {
    fd(val) {
      return moment(val).format("YYYY-MM-DD HH::mm::ss");
    },
  },
  computed: {
    // ttal() {
    //   let total = 0;
    //   this.list.forEach((val) => {
    //     total += val.price;
    //   });
    //   return total;
    // },

    // 完整
    totalPrice() {
      return Math.floor(
        this.list.reduce((acc, item) => (acc += item.price), 0)
      );
    },
    // 平均值
    advPrice() {
      return Math.floor(this.totalPrice / this.list.length);
    },
  },
  watch: {
    list: {
      deep: true,
      immediate: true,
      handler(newList) {
        // localStorage.setItem("datas", JSON.stringify(newv));
        localStorage.setItem('brand-137', JSON.stringify(newList))
      },
    },
  },
    methods: {
    dels(n) {
      this.list.splice(n, 1);
    },
    addf() {
      // chrome浏览器的v8引擎隐式准换
      if (!this.name.length || this.price === 0) {
        return alert("哈哈哈哈哈");
      }
      this.list.unshift({
        id: Date.now(),
        name: this.name,
        price: this.price,
        time: new Date(),
      });
      this.name = "";
      this.price = "";
    },
  },

};
</script>

<style >
.red {
  color: red;
}
</style>