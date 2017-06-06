<template>
<div id="app">
  <b-navbar toggleable>
    <div class="container navbar-container">
      <div class="navbar-header navbar-container">
        <b-link class="navbar-brand disable-active" to="/">
          <span class="nav-text">[@] ObjC 中国</span>
        </b-link>
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      </div>

      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <b-link class="nav-link" to="/issues">
            <span class="nav-text">期刊</span>
          </b-link>
          <b-link class="nav-link" to="/products">
            <span class="nav-text">书籍</span>
          </b-link>
          <b-link class="nav-link" to="/goodscart">
            <span class="nav-text">购物车</span>
          </b-link>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">

          <b-link class="nav-link" to="/login">
            <span class="nav-text">登录</span>
          </b-link>
        </b-nav>
      </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  props: []
}
</script>

<style>
.nav-text {
  color: #777;
}

.navbar-light .navbar-nav .nav-link {
  color: #777;
  padding-left: 15px;
  /*这里如果设置为0，那么nav缩小之后的下拉栏的文字会顶到头*/
  padding-right: 15px;
  /*这里如果设置为0，那么nav缩小之后的下拉栏的文字会顶到头*/
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
  .navbar-header {
    margin-right: -15px;
    margin-left: -15px;
    border-bottom: 1px solid #e7e7e7;
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

.disable-active {
  color: #555;
  background-color: #f8f8f8;
}

@media (min-width: 768px) {
  .container-fluid>.navbar-collapse,
  .container-fluid>.navbar-header,
  .container>.navbar-collapse,
  .container>.navbar-header {
    margin-right: 0;
    margin-left: 0;
  }
}

.navbar-header {
  margin-right: -15px;
  margin-left: -15px;
  /*border-bottom: 1px solid #e7e7e7;*/
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
  margin-right: 0px;
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
