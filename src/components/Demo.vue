<template>
  <div>
    <h1>Vue.js Lesson</h1>
    <div class="contents">
      <section>
        <h2>Let's Vue.js</h2>
        <section>
          <h3>1. v-modelをつかってデータバインディング</h3>
          <div class="wrapper">
            <input type="text" v-model="textValue">
            <p>{{ textValue }}</p>
          </div>
        </section>

        <section>
          <h3>2. v-forをつかってリストのデータの表示</h3>
          <div class="wrapper">
            <ul>
              <!-- <li v-for="各要素を代入する変数名 in 繰り返したい配列やオブジェクト></li> -->
              <li v-for="item in list" :key="item.id">
                {{ item.name }} {{ item.price }}円
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>3. v-ifをつかって出し分け</h3>
          <div class="wrapper">
            <ul>
              <li v-for="item in list" :key="item.id">
                {{ item.name }} {{ item.price }}円
                <span v-if="item.price > 100" class="red">たかいわ！</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>4. axiosをつかってデータ取得</h3>
          <div class="wrapper">
            <ul>
              <li v-for="item in items" :key="item.id">
                {{ item.name }} {{ item.price }}円
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3>5. vue.jsのイベントハンドリング</h3>
          <div class="wrapper">
            <!-- v-on:は省略して@で記述できる -->
            <button v-on:click="handleClick">クリック</button>
          </div>
        </section>

        <section>
          <h3>6. 算出プロパティ</h3>
          <div class="wrapper">
            姓： <input type="text" v-model="firstName">
            名： <input type="text" v-model="lastName">
            <!-- <p>{{ firstName + lastName }}</p> -->
            <p>{{ fullName }}</p>
          </div>
        </section>

        <p class="link"><router-link to="/question">Question</router-link></p>

      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'lesson',
  data () {
    return {
      textValue: '',
      flag: true,
      list: [
        {
          id: 1,
          name: 'りんご',
          price: '100'
        },
        {
          id: 2,
          name: 'いちご',
          price: '200'
        },
        {
          id: 3,
          name: 'もも',
          price: '500'
        }
      ],
      items: [],
      firstName: '',
      lastName: ''
    }
  },
  created () {
    axios.get('/static/list.json').then((res) => {
      console.log(res)
      this.items = res.data
    })
  },
  methods: {
    handleClick () {
      alert('クリックしたよ')
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + this.lastName
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
h1 {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 30px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
h3 {
  text-align: left;
}
.contents {
  width: 800px;
  margin: 0 auto;
}
.wrapper {
  margin-bottom: 30px;
  text-align: left;
}
.search {
  text-align: left;
  margin-bottom: 10px;
}
.search input {
  padding: 6px 12px;
  font-size: 14px;
}
.red {
  color: red;
}
.link {
  text-align: right;
}
</style>
