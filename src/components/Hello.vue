<template>
  <div class="wrapper">
    <h1 class="title">Let's Vue Lesson<span class="boxLoading"></span></h1>
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
.title {
  position: relative;
}
.vue-img {
  text-align: center;
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
.boxLoading {
  width: 50px;
  height: 50px;
  margin: auto;
  position: absolute;
  right: 30px;
  top: -25px;
  bottom: 0;
}
.boxLoading:before {
  content: '';
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 59px;
  left: 0;
  border-radius: 50%;
  animation: shadow .5s linear infinite;
}
.boxLoading:after {
  content: '';
  width: 50px;
  height: 50px;
  background: #4fc08d;
  animation: animate .5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, .9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%, 100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
