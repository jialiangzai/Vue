<template>
  <div>
    <h1>v-show的盒子</h1>
    <h1>v-if的盒子</h1>

    <div>
      <p v-if="isOk">我成年了</p>
      <p v-show="age > 18">还得多吃饭</p>
    </div>

    <div>
      <p>您的考试成绩如下:</p>
      <p v-if="grade > 90">优秀</p>
      <p v-else-if="grade > 80">良好</p>
      <p v-else-if="grade > 70">中等</p>
      <p v-else-if="grade > 60">及格</p>
      <p v-else>不及格</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOk: true,
      age: 15,
      grade: 40,
    };
  },
};
</script>

<style>
</style>