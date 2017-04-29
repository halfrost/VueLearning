<template>
  <div>
    <h1>I am apple</h1>
    <router-view></router-view>
    <button @click='addOne'>add One </button>
    <button @click='minusOne'>minus One </button>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      msg: 'I am apple',
      price: 5
    }
  },
  methods: {

    addOne () {
      this.$store.dispatch('increase', this.price)
    },

    minusOne () {
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
