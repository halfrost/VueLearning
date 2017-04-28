<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link :to= "{path:'apple'}">to apple</router-link>
    <router-link :to= "{path:'banana'}">to banana</router-link>
    <router-link :to= "{path:'apple/red'}">to banana</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
