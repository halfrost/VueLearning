<template>
<div class="book-content">
  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header">欢迎您 ydz627@gmail.com，您可以下载已购内容或进行新的购买</p>
      <div class="row">
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
          <div class="card">
            <div class="card-image">
              <a href="/products/swifter-tips"><img src="../assets/iOSCover_1.png"></a>
            </div>
            <div class="card-action">
              <div class="input-group">
                <span class="input-group-addon">¥</span>
                <input type="text" class="form-control" placeholder="49.00" disabled>

                <span class="input-group-btn">
                            <button class="dropdown btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                                下载
                                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu products-dropdown-menu">
                  <li><a href="/loot/swifter-tips/?download_type=pdf">PDF 格式</a></li>
                  <li><a href="/loot/swifter-tips/?download_type=mobi">mobi 格式</a></li>
                  <li><a href="/loot/swifter-tips/?download_type=epub">epub 格式</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="/loot/swifter-tips/">打包下载</a></li>
                </ul>
                <a href="/products/swifter-tips" class="btn btn-default" type="button">详细</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
          <div class="card">
            <div class="card-image">
              <a href="/products/functional-swift"><img src="../assets/iOSCover_1.png"></a>
            </div>
            <div class="card-action">
              <div class="input-group">
                <span class="input-group-addon">¥</span>
                <input type="text" class="form-control" placeholder="69.00" disabled>

                <span class="input-group-btn">
                            <button class="dropdown btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                                下载
                                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu products-dropdown-menu">
                  <li><a href="/loot/functional-swift/?download_type=pdf">PDF 格式</a></li>
                  <li><a href="/loot/functional-swift/?download_type=mobi">mobi 格式</a></li>
                  <li><a href="/loot/functional-swift/?download_type=epub">epub 格式</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="/loot/functional-swift/">打包下载</a></li>
                </ul>
                <a href="/products/functional-swift" class="btn btn-default" type="button">详细</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
          <div class="card">
            <div class="card-image">
              <a href="/products/core-data"><img src="../assets/iOSCover_1.png"></a>
            </div>
            <div class="card-action">
              <div class="input-group">
                <span class="input-group-addon">¥</span>
                <input type="text" class="form-control" placeholder="69.00" disabled>

                <span class="input-group-btn">
                            <button class="dropdown btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                                下载
                                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu products-dropdown-menu">
                  <li><a href="/loot/core-data/?download_type=pdf">PDF 格式</a></li>
                  <li><a href="/loot/core-data/?download_type=mobi">mobi 格式</a></li>
                  <li><a href="/loot/core-data/?download_type=epub">epub 格式</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="/loot/core-data/">打包下载</a></li>
                </ul>
                <a href="/products/core-data" class="btn btn-default" type="button">详细</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
          <div class="card">
            <div class="card-image">
              <a href="/products/advanced-swift"><img src="../assets/iOSCover_1.png"></a>
            </div>
            <div class="card-action">
              <div class="input-group">
                <span class="input-group-addon">¥</span>
                <input type="text" class="form-control" placeholder="69.00" disabled>

                <span class="input-group-btn">
                            <button class="dropdown btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                                下载
                                <span class="caret"></span>
                </button>
                <ul class="dropdown-menu products-dropdown-menu">
                  <li><a href="/loot/advanced-swift/?download_type=pdf">PDF 格式</a></li>
                  <li><a href="/loot/advanced-swift/?download_type=mobi">mobi 格式</a></li>
                  <li><a href="/loot/advanced-swift/?download_type=epub">epub 格式</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="/loot/advanced-swift/">打包下载</a></li>
                </ul>
                <a href="/products/advanced-swift" class="btn btn-default" type="button">详细</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';

.book-content {
  margin-top: 70px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
