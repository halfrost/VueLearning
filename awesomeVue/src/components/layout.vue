<template>
  <div>

    <div id="app">
  <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>Swift 老司机</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item>Support</b-nav-item>
        <b-nav-item>Docs</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>

      <b-nav is-nav-bar class="ml-auto">

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right-alignment>
          <b-dropdown-item to="#">EN</b-dropdown-item>
          <b-dropdown-item to="#">ES</b-dropdown-item>
          <b-dropdown-item to="#">RU</b-dropdown-item>
          <b-dropdown-item to="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right-alignment>

          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>
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
  components: {
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: ''
    }
  },
  methods: {
    aboutClick () {
      this.isShowAboutDialog = true
    },
    logClick () {
      this.isShowLogDialog = true
    },
    regClick () {
      this.isShowRegDialog = true
    },
    closeDialog (attr) {
      this[attr] = false
    },
    onSuccessLog (data) {

    }
  }
}

</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
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
