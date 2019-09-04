<template>
  <div>
    <h1>Vue.js Lesson</h1>
    <div class="contents">
      <section>
        <h2>Question</h2>

        <section>
          <h3>Q1. v-modelをつかってデータバインディングさせてください。</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>Q2. ボタンを押すたびにカウントアップさせてください。<br />3未満なら「3より小さい」、3〜5であれば「3より大きく5より小さい」、6以上であれば「大きすぎます」という文言を表示させてください。</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>Q3. axios、v-forをつかってJSONデータを取得し、テーブルに表示させてください。</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->
            <!--  ① axiosが使えるようにscript内のaxiosのコメントアウトを外す。
                  ② created内にaxiosを書いてください。
                  ③ staticフォルダーのtodo.jsonからデータを取得してください。
            -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <section>
          <h3>Q4. リストから○円以下の商品検索して○件のみ表示させる機能を実装してください。</h3>
          <div class="wrapper">
            <!-- ここにかいてください。 -->
            <!-- staticフォルダーのlist.jsonからデータを取得してください。 -->

            <!-- ここにかいてください。 -->
          </div>
        </section>

        <div class="link-list">
          <router-link to="/lesson">Lesson</router-link>
          <router-link to="/answer">Answer</router-link>
        </div>

      </section>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'answer',
  data () {
    return {
      // ここにかいてください。
    }
  },
  created () {
    // ここにかいてください。
  },
  methods: {
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
  padding-bottom: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
h3 {
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
.contents {
  width: 800px;
  margin: 0 auto;
}
.wrapper {
  margin-bottom: 30px;
  text-align: left;
}
table {
  width: 100%;
  border: 1px solid #ddd;
  border-spacing: 0;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  vertical-align: top;
  border: 1px solid #ddd;
  border-bottom-width: 2px;
}
thead:first-child > tr:first-child > th,
thead:first-child > tr:first-child > td {
  border-top: 0;
}
thead > tr > th:first-child,
thead > tr > td:first-child {
  border-left: 0;
}
thead > tr > th:last-child,
thead > tr > td:last-child {
  border-right: 0;
}
tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
thead > th:last-child {
  border-right: 0;
}
tbody > tr > td {
  border-left: 0;
  border-bottom: 0;
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
