	<template>
  <div>
    <div>
      <h4>1. 查询所有图书信息</h4>
      <button @click="allFn">查询-看控制台</button>
    </div>
    <div>
      <h4>2. 查询某本图书信息</h4>
      <input type="text" placeholder="输入要查询的书名" v-model="bookName" />
      <button @click="selFn">查询-看控制台</button>
    </div>
    <div>
      <h4>3. 新增图书信息</h4>
      <input type="text" placeholder="书名" v-model="obj.bookname" />
      <input type="text" placeholder="作者" v-model="obj.author" />
      <input type="text" placeholder="出版社" v-model="obj.publisher" />
    </div>
    <button @click="addFn">点击新增图书</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 搜索书名
      bookName: "",
      // 新增图书需要的字段
      obj: {
        bookname: "",
        author: "",
        publisher: ""
      }
    }
  },
  methods: {
    // 获取所有图书
    async allFn () {
    //   axios({
    //     url: 'http://123.57.109.30:3006/api/getbooks',
    //     method: 'get'
    //   }).then(res => {
    //     console.log('所有图书：', res.data)
    //   })
      const { data: { data, status, msg } } = await axios({
        url: '/api/getbooks',
        method: 'get'
      })
      console.log('所有图书：', data, status, msg)
    },
    // 查询某个图书信息
    async selFn () {
      const { data: { data } } = await axios({
        url: '/api/getbooks',
        method: 'get',
        params: {
          bookname: this.bookName
        }
      })
      console.log('所有图书：', data)
    },
    // 新增图书
    async addFn () {
      await axios({
        url: '/api/addbook',
        method: 'post',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...this.obj
        }
      })
    }
  },
}
</script>