<template>





  <div class = "book-content">

    <div id="__wrapper">
                
                <main class="container">
                <p class="dim text-center page-header">欢迎您 ydz627@gmail.com，您可以下载已购内容或进行新的购买</p>
    <div class="row">
            <div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
                <div class="card">
                  <div class="card-image">
                    <a href="/products/swifter-tips"><img src="/images/products/swifter-tips/cover.png"></a>
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
                    <a href="/products/functional-swift"><img src="/images/products/functional-swift/cover.png"></a>
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
                    <a href="/products/core-data"><img src="/images/products/core-data/cover.png"></a>
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
                    <a href="/products/advanced-swift"><img src="/images/products/advanced-swift/cover.png"></a>
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


                <div class="footer">
                <span class="dim">© 2016 <a href="https://onevcat.com">OneV's Den</a> &amp; <a href="http://objccn.io/">ObjC 中国</a><br>本站由 <a href="http://onev.cat">@onevcat</a> 创建</span>
                </div>

            </div>

    <el-row>
      <el-col v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 3 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/iOSCover_1.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
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

.book-content {
    display: flex;
    margin-left: 100px;
    margin-top: 30px;
    margin-right: 100px;
    flex-wrap: wrap;
    justify-content:center;
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
