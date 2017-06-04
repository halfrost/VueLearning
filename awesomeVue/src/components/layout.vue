<template>
<div>

 <navgation-bar>
 </navgation-bar>

<book-card>
</book-card>
  
  <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <div class="app-foot">
    <span>© 2017 <a href='https://onevcat.com/'>OneV's Den</a> & <a href='https://objccn.io/'>ObjC 中国</a></span>
    <span>本站由 <a href='https://halfrost.com'>@halfrost</a> 创建</span>
  </div>


</div>
</template>

<script>

import navgationBar from './navigationBar'
import bookCard from './bookCard'

export default {
  components: {
    navgationBar,
    bookCard
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

.app-foot {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  line-height: 20px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
  bottom: 0;
  width: 100%;
  background: #f8f8f8;
  border: 1px solid #e7e7e7;
  text-align: center
}


</style>
