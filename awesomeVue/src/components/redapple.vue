<template>
  <div>
    <h1>I am red apple</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'I am red apple'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
