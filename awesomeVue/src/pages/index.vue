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
