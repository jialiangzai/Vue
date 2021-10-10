<template>
  <div>
    <div>
      <span>名字:</span>
      <input type="text" v-model="full">
    </div>
  </div>
</template>

<script>
export default {
 data () {
    return {
      msg: 'full'
    }
  },
  computed: {
    full: { 
      get(){ // 获取full的值
        console.log("get方法触发");
        return this.msg
      },
      set(val){ // 要给full赋值
        console.log(val)
        this.msg = val
      }
    }
  }
}
</script>