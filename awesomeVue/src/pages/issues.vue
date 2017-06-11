<template>
<div class="book-issues">

  <div id="__wrapper">
    <main class="container">
      <p class="dim text-center page-header">为中国 Apple 开发社区带来最佳实践和先进技术</p>

      <div class="row">
        <issues-list v-for="issuesItem in issuesListInfo" :key="issuesItem.id" :issue_content_title=issuesItem.issue_content_title
        :issue_header_meta=issuesItem.issue_header_meta
        :issue_content_list=issuesItem.issue_content_list></issues-list>
      </div>
    </main>

  </div>
</div>
</template>

<script>
import IssuesList from '@/components/issuesList'
export default {
  created() {
    console.log(this.issuesListInfo)
  },
  components: {
    IssuesList
  },
  data() {
    return {
      issuesListInfo: [{
        issue_content_title: '更轻量的 View Controllers',
        issue_header_meta: '#1 - 2013 年 7 月',
        issue_content_list: [{
          issue_content_item: 'issue-1-0',
          issue_item_title: '介绍'
        },
        {
          issue_content_item: 'issue-1-1',
          issue_item_title: '更轻量的 View Controllers'
        },
        {
          issue_content_item: 'issue-1-2',
          issue_item_title: '整洁的 Table View 代码'
        },
        {
          issue_content_item: 'issue-1-3',
          issue_item_title: '测试 View Controllers'
        },
        {
          issue_content_item: 'issue-1-4',
          issue_item_title: 'View Controller 容器'
        }
        ]
      },
      {
        issue_content_title: '并发编程',
        issue_header_meta: '#2 - 2013 年 8 月',
        issue_content_list: [{
          issue_content_item: 'issue-2-0',
          issue_item_title: '卷首语'
        },
        {
          issue_content_item: 'issue-2-1',
          issue_item_title: '并发编程：API 及挑战'
        },
        {
          issue_content_item: 'issue-2-2',
          issue_item_title: '常见的后台实践'
        },
        {
          issue_content_item: 'issue-2-3',
          issue_item_title: '底层并发 API'
        },
        {
          issue_content_item: 'issue-2-4',
          issue_item_title: '线程安全类的设计'
        },
        {
          issue_content_item: 'issue-2-5',
          issue_item_title: '测试并发程序'
        }
        ]
      },
      {
        issue_content_title: '视图',
        issue_header_meta: '#3 - 2013 年 8 月',
        issue_content_list: [{
          issue_content_item: 'issue-3-0',
          issue_item_title: '卷首语'
        },
        {
          issue_content_item: 'issue-3-1',
          issue_item_title: '绘制像素到屏幕上'
        },
        {
          issue_content_item: 'issue-3-2',
          issue_item_title: '理解 Scroll Views'
        },
        {
          issue_content_item: 'issue-3-3',
          issue_item_title: '自定义 Collection View 布局'
        },
        {
          issue_content_item: 'issue-3-4',
          issue_item_title: '自定义控件'
        },
        {
          issue_content_item: 'issue-3-5',
          issue_item_title: '先进的自动布局工具箱'
        }
        ]
      },
      {
        issue_content_title: '更轻量的 View Controllers',
        issue_header_meta: '#1 - 2013 年 7 月',
        issue_content_list: [{
          issue_content_item: 'issue-1-0',
          issue_item_title: '介绍'
        },
        {
          issue_content_item: 'issue-1-1',
          issue_item_title: '更轻量的 View Controllers'
        },
        {
          issue_content_item: 'issue-1-2',
          issue_item_title: '整洁的 Table View 代码'
        },
        {
          issue_content_item: 'issue-1-3',
          issue_item_title: '测试 View Controllers'
        },
        {
          issue_content_item: 'issue-1-4',
          issue_item_title: 'View Controller 容器'
        }
        ]
      }
      ]
    }
  }
}
</script>

<style>

</style>
