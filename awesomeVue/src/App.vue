<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input v-model= "newItem" v-on:keyup.enter = "addNewItem"></input>
    <br></br>
    <img src="./assets/logo.png">
    <ul>
        <li v-for = "item in items" v-bind:class = "{finished: item.isFinished}" v-on:click= "toggleFinish(item)"> {{item.label}} </li>
    </ul>
    <hello></hello>
  </div>
</template>



<script>
import Store from './store.js'
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      title: 'Welcome to My First Vue.js App',
      msg: 'Hello world',
      items: Store.fetch(),
      newItem: '',
      liClass: 'this is LiClass'
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }

  },
  components: { Hello },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNewItem: function () {
      this.items.push({

        label: this.newItem,
        isFinished: true

      })
      this.newItem = ''
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
