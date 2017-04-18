<template>
  <div id="app">
    <h1>{{title}}</h1>
    <img src="./assets/logo.png">
    <ul>
        <li v-for = "item in items" v-bind:class = "{finished: item.isFinished}"> {{item.label}} </li>
    </ul>
  </div>
</template>



<script>

export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to My First Vue.js App',
      msg: 'Hello world',
      items: [
        {
          label: 'coding',
          isFinished: false
        },
        {
          label: 'walking',
          isFinished: true
        },
        {
          label: 'reading',
          isFinished: false
        }
      ],
      liClass: 'this is LiClass'
    }
  }
}

</script>





<style>

.finished {
  text-decoration: underline;



}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
