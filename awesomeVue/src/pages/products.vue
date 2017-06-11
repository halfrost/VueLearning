<template>
<div id="__wrapper">
  <div class="products-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</div>
</template>

<script>
import productsDetailInfo from './productsDetailInfo'
import productsHome from './productsHome'

export default {
  components: {
    productsDetailInfo,
    productsHome
  },
  created() {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
