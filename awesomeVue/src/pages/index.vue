  <template>
<div class="book-content">

  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header">欢迎您 ydz627@gmail.com，您可以下载已购内容或进行新的购买</p>

      <div class="row" >
          <book-card v-for="item in bookInfo" :key="item.id" :book-cover-image=item.bookCoverImage :book-price="item.bookPrice"></book-card>
      </div>
    </main>

  </div>
</div>
</template>

<script>
import BookCard from '@/components/bookCard'
export default {
  components: {
    BookCard
  },
  data () {
    return {
      bookInfo: [
        {
          bookCoverImage: '../static/iOSCover_1.png',
          bookPrice: '49.00'
        },
        {
          bookCoverImage: '../static/iOSCover_1.png',
          bookPrice: '89.00'
        },
        {
          bookCoverImage: '../static/iOSCover_1.png',
          bookPrice: '59.00'
        },
        {
          bookCoverImage: '../static/iOSCover_1.png',
          bookPrice: '69.00'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';

@font-face {
  font-family: 'iconfont';
  src: url('../fonts/iconfont.eot');
  src: url('../fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../fonts/iconfont.woff') format('woff'),
  url('../fonts/iconfont.ttf') format('truetype'),
  url('../fonts/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

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

.icon_lists{
  width: 100% !important;

}

/*.icon_lists li{
  float:left;
  width: 100px;
  height:180px;
  text-align: center;
  list-style: none !important;
}*/
.icon_lists .icon{
  font-size: 42px;
  line-height: 100px;
  margin: 10px 0;
  color:#333;
  -webkit-transition: font-size 0.25s ease-out 0s;
  -moz-transition: font-size 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s;

}
/*这一行打开会让所有icon，鼠标移动到上面就触发这个hover，这里是放大效果*/
/*.icon_lists .icon:hover{
  font-size: 100px;
}*/
</style>
