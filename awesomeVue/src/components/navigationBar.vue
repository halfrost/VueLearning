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
                <li ><a href="https://github.com/yuche/vue-strap" target="_blank">
            Star this project on Github
            <svg height="16px" fill="#777" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a></li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
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

</style>
