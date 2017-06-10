<template>
<div id="navigationbar">
  <nav class="navbar navbar-default">

          <div class="container">

            <div class="navbar-header">
              <!-- <div class="container"> -->
              <button type="button" class="navbar-toggle collapsed" @click="showNavbar=!showNavbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" role="button">[@] ObjC 中国</a>
            </div>
            <collapse class="navbar-collapse text-align" v-model="showNavbar">
              <ul class="nav navbar-nav">
                <li ><a href="/issues/">期刊</a></li>
                <li class="active"><a href="/products/">书籍</a></li>
                <li ><a href="/issues/">购物车</a></li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li><a class="iconstyle"><iframe frameborder="0" height="20px" scrolling="0" src="https://ghbtns.com/github-btn.html?user=halfrost&amp;repo=Halfrost-Field&amp;type=star&amp;count=true&amp;" width="100px"></iframe></a></li>
                <li><a href="/login/"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
              </ul>
            </collapse>
          </div>
          <!-- </div> -->
        </nav>
</div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      showNavbar: false
    }
  }
}
</script>

<style scoped>
.iconstyle{
  padding-bottom: 10px;
  margin-right: 0px;
}
</style>
