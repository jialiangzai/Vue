<template>
  <div>
    <Dogsm
      v-for="(item, index) in arr"
      :key="index"
      :das="item.dogImgUrl"
      :dan="item.dogName"
      :dogo="item"
       @love="loveFn"
    />
    <hr />
    <p>显示喜欢的狗:</p>
    <ul>
      <li v-for="(t, index) in loveArr" :key="index">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
import Dogsm from "../../componets/dogzujian.vue";

export default {
  components: {
    Dogsm,
  },
  data() {
    return {
      loveArr: [],
      arr: [
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "博美",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "金毛",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
            "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  methods: {
    loveFn(dname) {
      this.loveArr.push(dname);
    },
  },
};
</script>

