<template>
<div class="buy-button-group row">
  <a class="col-sm-3 col-sm-offset-2 col-xs-10 col-xs-offset-1 btn btn-success btn-lg" @click="goGoodsCart"><span class="glyphicon glyphicon-ok"></span>  购买电子书</a>
  <router-link class="col-sm-3 col-sm-offset-2 col-xs-10 col-xs-offset-1 btn btn-default btn-lg" :to="previewUrl + '/preview'"><span class="glyphicon glyphicon-book"></span>  在线试读</router-link>
</div>
</template>

<script>
import router from '@/router'

export default {
  props: [
    'preview-url'
  ],
  methods: {
    goGoodsCart() {
      this.$store.state.user.isLogin ? router.push('/goodscart') : router.push('/login')
    }
  }
}
</script>

<style>

</style>
