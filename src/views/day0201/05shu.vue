<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(n, i) in arr" :key="i">
        <span>{{ n.name }}</span>
        <button @click="buy(i)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <!-- 暂时不考虑 -->
      <tr v-for="(item, index) in arr" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>{{ item.count * item.price }}</td>
      </tr>
    </table>
    <p>总价格为:{{ total }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    buy(i) {
      this.arr[i].count++;
    },
  },
  computed: {
    total() {
      return this.arr.reduce(
        (sum1, sum2) => (sum1 += sum2.count * sum2.price),
        0
      );
    },
  },
};
</script>
<style lang="css">
ul {
  width: 300px;
}
li {
  display: flex;
  justify-content: space-between;
  margin: 4px;
}
</style>