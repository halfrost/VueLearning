<template>
<div>

  <div id="app">

    <b-navbar toggleable>
      <div class="container navbar-container">

        <div class="navbar-header navbar-container">
          <b-link class="navbar-brand">
            <span class="nav-text">[@] ObjC 中国</span>
          </b-link>
          <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        </div>

        <b-collapse is-nav id="nav_collapse">

          <b-nav is-nav-bar >
            <b-link class="nav-link" to="/issue">
              <span class="nav-text">期刊</span>
            </b-link>
            <b-link class="nav-link" to="/products">
              <span class="nav-text">书籍</span>
            </b-link>
            <b-link class="nav-link" to="/goods">
              <span class="nav-text">购物车</span>
            </b-link>
          </b-nav>
          <b-nav is-nav-bar class="ml-auto">

            <b-link class="nav-link" to="/login">
              <span class="nav-text">登录</span>
            </b-link>
            <!-- <b-nav-item-dropdown right-alignment>
              <template slot="text">
          <span style="font-weight: bold;">登录</span>
             </template>

              <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown> -->
          </b-nav>

        </b-collapse>
      </div>
    </b-navbar>
    <!-- </div> -->
  </div>

  <!-- <nav class="navbar navbar-inverse " role="navigation">
      <div class="container">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">这是一个神秘的项目</a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li ><a href="/issues/">期刊</a></li>
            <li class="active"><a href="/products/">书籍</a></li>
          </ul>

           <ul class="nav navbar-nav navbar-right">
              <li><a href="#">ydz627@gmail.com</a></li>
              <li><a href="/logout/">注销 <span class="glyphicon glyphicon-log-out"></span></a></li>
          </ul>
        </div>
      </div>
    </nav> -->
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
export default {
  components: {},
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

.nav-text {
  color: #777;
}

.navbar-light .navbar-nav .nav-link {
  color: #777;
  padding-left: 15px;  /*这里如果设置为0，那么nav缩小之后的下拉栏的文字会顶到头*/
  padding-right: 15px; /*这里如果设置为0，那么nav缩小之后的下拉栏的文字会顶到头*/
}



/*
有一个很讨厌的样式，

@media (min-width: 576px) {
.container {
    width: 540px;
    max-width: 100%;
  }
}

如何去除掉这个样式，可以减少一些bug，这个样式在最后被加载，所以很难被覆盖。


*/

@media (max-width: 767px) {
  .container {
    position: static;
    margin-right: 0px;
  }
}

.navbar-nav {
  /*margin: 7.5px -15px;*/
  /*如果打开这个，就能让navbar下拉栏里面的选中阴影铺满一行，但是缩起来的时候会有动画问题，暂时先隐藏*/
}

.navbar {
  background-color: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
  padding-top: 0;
  padding-bottom: 0;
}


.navbar-brand {
  /*float: left;*/
  height: 50px;
  padding: 15px 15px;
  margin-left: 0px;
  margin-right: 0px;
  font-size: 18px;
  line-height: 20px;
  color: #777;
}

@media (min-width: 767px) {
  .navbar-brand {
    margin-left: 15px;
  }
}

.navbar-collapse {
  border-color: rgb(231, 231, 231);

}

.active {
  color: #555;
  background-color: #e7e7e7;
}

@media (min-width: 768px) {
.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
}
}
.navbar-header {
  margin-right: -15px;
  margin-left: -15px;
  border-bottom: 1px solid #e7e7e7;
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.open,
.navbar-light .navbar-nav .open>.nav-link {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-toggler {
  position: relative;
  float: right;
  margin-top: 8px;
  margin-right: 15px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.navbar-toggler-icon {
  width: 1em;
  height: 1em;
}



/*@media (min-width: 576px) {
  .container {
    margin-right: 0px !important;
  }
}*/

/*.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.open, .navbar-light .navbar-nav .open>.nav-link {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #555;
    background-color: #e7e7e7;
}*/
</style>
