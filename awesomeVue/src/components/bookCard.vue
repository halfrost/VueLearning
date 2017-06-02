<template>
<div class="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-0">
  <div class="card">
    <div class="card-image">
      <a href="/products/swifter-tips"><img :src=bookCoverImage></a>
    </div>
    <div class="card-action">
      <b-input-group left="¥">
        <b-form-input type="text" class="form-control" :placeholder=bookPrice disabled></b-form-input>
        <!-- <b-input-group-button slot="right">

            </b-input-group-button> -->
        <b-dropdown text="下载" variant="success" right>
          <b-dropdown-item><a href="/loot/swifter-tips/?download_type=pdf">PDF 格式</a></b-dropdown-item>
          <b-dropdown-item><a href="/loot/swifter-tips/?download_type=mobi">mobi 格式</a></b-dropdown-item>
          <b-dropdown-item><a href="/loot/swifter-tips/?download_type=epub">epub 格式</a></b-dropdown-item>
          <span role="separator" class="divider"></span>
          <b-dropdown-item><a href="/loot/swifter-tips/">打包下载</a></b-dropdown-item>
        </b-dropdown>
        <b-button href="/products/swifter-tips">详细
        </b-button>
      </b-input-group>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'book-cover-image',
    'book-price'
  ]
}
</script>

<style>

</style>
