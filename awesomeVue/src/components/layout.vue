<template>
<div>

  <div id="app">

    <b-navbar toggleable>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <div class="container navbar-container">
        <b-link class="navbar-brand" to="#">
          <span class="nav-text">[@] ObjC 中国</span>
        </b-link>

        <b-collapse is-nav id="nav_collapse">

          <b-nav is-nav-bar>
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
    <span>© 2017 <a href='https://halfrost.com'>Halfrost's Field | 冰霜之地</a> & <a href=''>这是一个神秘的项目</a></span>
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
}

/*@media (min-width: 576px) {
  .container {
    margin-right: 0px !important;
  }
}*/

@media (max-width: 767px) {
  .container {
    position: static;
    margin-right: 0px ;
  }
}


.navbar {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
  border-color: rgb(231, 231, 231);
}

.navbar-collapse {
  border-color: rgb(231, 231, 231);
}

.active {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.open,
.navbar-light .navbar-nav .open>.nav-link {
  color: #555;
  background-color: #e7e7e7;
}


/*.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.open, .navbar-light .navbar-nav .open>.nav-link {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    color: #555;
    background-color: #e7e7e7;
}*/
</style>
