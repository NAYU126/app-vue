<template>
  <div>
    <h1>Vue.js Lesson</h1>
    <div class="contents">
      <section>
        <h2>Let's Vue.js</h2>
        <section>
          <h3>1. v-modelをつかってデータバインディング</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>2. v-forをつかってリストのデータの表示</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>3. v-ifをつかって出し分け</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>4. axiosをつかってデータ取得</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>5. vue.jsのイベントハンドリング</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>6. 算出プロパティ</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <div class="link-list">
          <router-link to="/">TOP</router-link>
          <router-link to="/question">Question</router-link>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'lesson',
  data () {
    return {
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
      ]
    }
  },
  created () {
    // ここにかいてください。

    // ここにかいてください。
  },
  methods: {
    // ここにかいてください。

    // ここにかいてください。
  },
  computed: {
    // ここにかいてください。

    // ここにかいてください。
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
.link-list {
  display: flex;
  margin-top: 60px;
  justify-content: space-between
}
</style>
