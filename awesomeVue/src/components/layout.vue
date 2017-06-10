<template>
<div id="__wrapper">

  <navgation-bar>
  </navgation-bar>

  <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>


  <footerView>
  </footerView>


</div>
</template>

<script>
import navgationBar from './navigationBar'
import bookCard from './bookCard'
import footerView from './footerView'
import axios from 'axios'

export default {
  components: {
    navgationBar,
    bookCard,
    footerView
  },
  created: function() {
    axios.post('api/getNewsList')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    // this.$http.get()
    // .then((res) => {
    //   console.log(res)
    //   this.newsList = res.data
    // }, (err) => {
    //   console.log(err)
    // })
  },
  data() {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: '',
      activeClass: 'navbar-item-select'
    }
  },
  methods: {
    aboutClick() {
      this.isShowAboutDialog = true
    },
    logClick() {
      this.isShowLogDialog = true
    },
    regClick() {
      this.isShowRegDialog = true
    },
    closeDialog(attr) {
      this[attr] = false
    },
    onSuccessLog(data) {

    }
  }
}
</script>

<style>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
