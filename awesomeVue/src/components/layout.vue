<template>
<div>

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

export default {
  components: {
    navgationBar,
    bookCard,
    footerView
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
