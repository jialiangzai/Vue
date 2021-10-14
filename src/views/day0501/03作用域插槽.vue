<template>
  <div>
    <Tb :arr="arr">
      <template #img="{src}">
        <img :src="src" />
      </template>
    </Tb>





    <Tb :arr="arr" />
    <Tb :arr="arr">
      <template #uu="{ src }">
        <h2 style="color: blue">{{ src }}</h2>
      </template>
    </Tb>
  </div>
</template>

<script>
import Tb from "./0301作用域应用.vue";

export default {
  components: {
    Tb,
  },
  data() {
    return {
      arr: [
         {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "https://gitee.com/mengi/imgs/raw/master/img/1.jpeg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "https://gitee.com/mengi/imgs/raw/master/img/3.jpeg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "https://gitee.com/mengi/imgs/raw/master/img/4.jpeg",
        }
      ],
    };
  },
};
</script>

<style lang="css" scoped>
img {
  width: 300px;
  height: 300px;
}
</style>