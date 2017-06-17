<template>
<main class="container">
  <div class="product">

    <products-header :product-title=selectDetailInfo.productTitle  :product-price=selectDetailInfo.productPrice  :author-list=selectDetailInfo.authorList   :translator-list=selectDetailInfo.translatorList>
    </products-header>

    <products-download-tool>
    </products-download-tool>

    <div class="product-description">
      <products-introduce :product-subtitle=selectDetailInfo.productSubtitle :product-text=selectDetailInfo.productText>
      </products-introduce>

      <products-content :content-info=selectDetailInfo.contentInfo>
      </products-content>

      <hr>

      <products-author :author-list=selectDetailInfo.authorList :translator-list=selectDetailInfo.translatorList>
      </products-author>

      <hr>

      <products-problem :problem-list=selectDetailInfo.problemList>
      </products-problem>

      <hr>

      <products-download-tool>
      </products-download-tool>
    </div>
  </div>

</main>
</template>

<script>
import ProductsHeader from '@/components/productsDetailInfo/productsHeader'
import ProductsDownloadTool from '@/components/productsDetailInfo/ProductsDownloadTool'
import ProductsIntroduce from '@/components/productsDetailInfo/productsIntroduce'
import ProductsContent from '@/components/productsDetailInfo/productsContent'
import ProductsAuthor from '@/components/productsDetailInfo/productsAuthor'
import ProductsProblem from '@/components/productsDetailInfo/productsProblem'
import axios from 'axios'

export default {
  created() {
    axios.post('/api/getProductsDetailInfoList')
      .then((response) => {
        this.productsDetailInfoList = response.data
        this.selectDetailInfo = this.productsDetailInfoList[this.$route.path]
      })
      .catch((error) => {
        console.log('出错啦~', error)
      })
  },
  computed: {
    selectDetailInfo() {
      console.log(this.$route.path)
      console.log('^^^^^^^^^^^^^', this.productsDetailInfoList[this.$route.path])
      if (this.productsDetailInfoList[this.$route.path] === undefined) {
        return this.defaultDetailInfo
      } else {
        return this.productsDetailInfoList[this.$route.path]
      }
    }
  },
  components: {
    ProductsHeader,
    ProductsDownloadTool,
    ProductsIntroduce,
    ProductsContent,
    ProductsAuthor,
    ProductsProblem
  },
  data() {
    return {
      productsDetailInfoList: {},
      defaultDetailInfo: {
        productTitle: '',
        productPrice: '',
        authorList: [],
        translatorList: [],
        productSubtitle: '',
        productText: '',
        contentInfo: [],
        problemList: []
      }
    }
  }
}
</script>

<style>

</style>
