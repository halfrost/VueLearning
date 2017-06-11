<template>
<div class="book-content">
  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header">欢迎您 ydz627@gmail.com，您可以下载已购内容或进行新的购买</p>
      <div class="row" >
          <book-card v-for="item in bookInfo" :key="item.id" :book-cover-image=item.bookCoverImage :book-price="item.bookPrice" :book-detail-info=item.bookDetailInfo></book-card>
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
      bookInfo: [{
        bookCoverImage: 'https://objccn.io/images/products/swifter-tips/cover.png',
        bookPrice: '49.00',
        bookDetailInfo: '/products/swifter-tips'
      },
      {
        bookCoverImage: 'https://objccn.io//images/products/functional-swift/cover.png',
        bookPrice: '69.00',
        bookDetailInfo: '/products/functional-swift'
      },
      {
        bookCoverImage: 'https://objccn.io//images/products/core-data/cover.png',
        bookPrice: '69.00',
        bookDetailInfo: '/products/core-data'
      },
      {
        bookCoverImage: 'https://objccn.io//images/products/advanced-swift/cover.png',
        bookPrice: '69.00',
        bookDetailInfo: '/products/advanced-swift'
      }]
    }
  }
}
</script>

<style scoped>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
