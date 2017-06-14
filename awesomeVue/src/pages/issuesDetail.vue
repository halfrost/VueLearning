<template>
<main class="container">
  <div class="article article-container">
    <div class="article-header">
      <div class="article-header-top row">
        <div class="col-xs-6 col-xs-offset-0">
          <router-link class="article-back" to="/issues/" style="color: #337AB7;background-color: transparent;"><span class="glyphicon glyphicon-menu-left"></span> 返回期刊列表</router-link>
        </div>
      </div>
      <div>
        <div class="article-title">{{this.issuesDetail.issue_item_title}}</div>
        <div class="article-meta text-center">
          <div class="article-meta-item"><span class="glyphicon glyphicon-user"></span> <a :href=selectAuthorInfo.authorLink>{{selectAuthorInfo.authorName}}</a></div>
          <div class="article-meta-item"><span class="glyphicon glyphicon-calendar"></span>{{' ' + this.issuesDetail.issue_date}}</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="article-content">
      这里是markdown里面的内容。
    </div>
    <div class="article-author-detail">
      <div class="article-author">
        <div class="article-author-title">
          译者简介
        </div>
        <figure class="artical-media_image artical-author-photo">
          <img width="300" height="300" :src=selectAuthorInfo.authorAvatar>
        </figure>
        <div class="article-author-body">
          <h4 class="article-author-body">
                    <a :href=selectAuthorInfo.authorLink>{{' ' + selectAuthorInfo.authorName + ' '}}</a>
                </h4>
          <div class="article-author-bio" v-html="selectAuthorInfo.authorDescribe">
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</main>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import axios from 'axios'

export default {
  data() {
    return {
      authorInfo: {},
      issuesListInfo: [],
      issuesDetail: {},
      chapter: 0,
      section: 0
    }
  },
  props: [],
  components: {
    VueMarkdown
  },
  computed: {
    selectAuthorInfo() {
      if (this.issuesDetail.authorInfo === undefined) {
        return this.authorInfo
      } else {
        return this.issuesDetail.authorInfo
      }
    }
  },
  created() {
    axios.post('/api/getIssuesListInfo')
      .then((response) => {
        var array = this.$route.params['issuesNum'].split('-')
        this.chapter = array[1]
        this.section = array[2]
        console.log('@@@@@@@@@', this.chapter, this.section)
        this.issuesListInfo = response.data
        this.issuesDetail = this.issuesListInfo[this.chapter - 1].issue_content_list[this.section]
        console.log('****', this.issuesDetail)
      })
      .catch((error) => {
        console.log('issuesDetail 页面出错了', error)
      })
  }
}
</script>

<style>

</style>
