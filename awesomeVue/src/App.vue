<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model= "newItem"></input>
    <br></br>
    <img src="./assets/logo.png">
    <ul>
        <li v-for = "item in items" v-bind:class = "{finished: item.isFinished}" v-on:click= "toggleFinish(item)"> {{item.label}} </li>
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
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
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
