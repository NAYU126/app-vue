<template>
  <div class="wrapper">
    <h1>Let's Vue Lesson</h1>
    <p class="vue-img"><img src="../assets/logo.png" alt=""></p>
    <router-link to="/lesson" class="link-btn">START</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<style scoped>
.wrapper {
  width: 700px;
  margin: 50px auto;
}
h1 {
  font-size: 60px;

}
.vue-img {
  margin-bottom: 30px;
}
.link-btn {
  display: block;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  color: #4fc08d;
  border: 1px solid #4fc08d;
}
.link-btn:hover {
  color: #fff;
  background-color: #4fc08d;
}
</style>
