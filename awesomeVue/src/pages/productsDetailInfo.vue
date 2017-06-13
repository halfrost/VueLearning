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
        console.log('*******', response)
        this.productsDetailInfoList = response.data
        this.selectDetailInfo = this.productsDetailInfoList[this.$route.path]
      })
      .catch((error) => {
        console.log('出错啦~', error)
        console.log(error)
      })
  },
  // computed: {
  //   selectDetailInfo() {
  //     console.log(this.$route.path)
  //     console.log('^^^^^^^^^^^^^', this.productsDetailInfoList[this.$route.path])
  //     return this.productsDetailInfoList[this.$route.path]
  //   }
  // },
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
      selectDetailInfo: {}
      // productsDetailInfoList: {
      //   '/products/swifter-tips': {
      //     productTitle: 'Swifter - Swift 开发者必备 Tips',
      //     productPrice: '¥49.00',
      //     authorList: [{
      //       authorLink: 'http://onev.cat',
      //       authorName: '王巍',
      //       authorAvatar: require('../assets/weiwang.jpg'),
      //       authorDescribe: '<p>ObjC 中国的创始人之一，objc.io 书籍翻译工作组织者。使用 onevcat 作为 ID 活跃在中国 iOS 开发界，Swift 使用者。</p> '
      //     }],
      //     translatorList: [
      //     ],
      //     productSubtitle: '介绍 Swift 使用中那些隐藏的小技巧，帮助您迅速熟悉和掌握 Swift 编程语言',
      //     productText: '<p>Swift 是 Apple 于 WWDC 2014 提出的一门全新的开发语言。这门语言从其他很多语言中继承和学习了不少优点，语法非常优美，并且具有轻便灵活等特点，一经推出就备受瞩目。</p><p>活跃在 iOS 开发一线的本书作者王巍 (onevcat) 参加了 WWDC 14 开发者大会，亲历了这门语言的诞生，并在第一时间进行了大量的学习和研究。在本书中作者通过总结和分享了 Swift 中 100 条十分实用的小技巧和需要特别注意的地方，希望能让大家更好更快地掌握 Swift。</p>',
      //     contentInfo: [{
      //       title: '字面量转换',
      //       subtitle: '如何使用字面量表达简化代码，提高可读性'
      //     },
      //     {
      //       title: '多类型和容器',
      //       subtitle: '在 Swift 泛型容器中添加多类型支持'
      //     },
      //     {
      //       title: '模式匹配',
      //       subtitle: '探索 switch 语句的原理，并发挥其最大潜能'
      //     },
      //     {
      //       title: 'Protocol Extension',
      //       subtitle: '通过面向接口的设计方式解耦代码'
      //     },
      //     {
      //       title: '值类型和引用类型',
      //       subtitle: '区别 Swift 中的值和类型，值类型的容器使用上的注意点'
      //     },
      //     {
      //       title: '获取对象类型',
      //       subtitle: '如何在 Swift 中进行自举，并使用类型系统帮助写出安全的代码'
      //     },
      //     {
      //       title: 'String 还是 NSString',
      //       subtitle: 'Swift 的 String 和 Foundation 的 NSString 的互换性和使用上的权衡'
      //     },
      //     {
      //       title: 'C 指针内存管理',
      //       subtitle: '在 Swift 中使用 unsafe 类型与 C 协作'
      //     },
      //     {
      //       title: 'Swift 命令行工具',
      //       subtitle: '使用 Swift 命令行工具进行编译以及输出编译的中间结果'
      //     },
      //     {
      //       title: 'Playground 可视化',
      //       subtitle: '使用 XCPlayground 强化 Playground 的使用'
      //     },
      //     {
      //       title: 'Core Data',
      //       subtitle: '使用 @NSManaged 解决动态代码生成'
      //     },
      //     {
      //       title: '列举 enum 类型',
      //       subtitle: '定义接口来对 enum 中的所有值进行枚举'
      //     }],
      //     problemList: [{
      //       question: '这本书是针对 Swift 3 的吗？',
      //       answer: '是的，我们针对最新版本的 Swift 3 编写和修订本书，并使用了全新的语言特性。'
      //     },
      //     {
      //       question: '我能在哪里找到书中的示例代码？',
      //       answer: '书中的示例代码都放在了 GitHub 的<a href="https://github.com/swifter-tips/Playground">这个仓库</a>中，您可以随时查阅。'
      //     },
      //     {
      //       question: '阅读本书需要 Swift 知识吗？',
      //       answer: '是的，本书面向的是至少阅读过 Apple 的 <a href="https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/">Swift 入门书籍</a>，并想要进一步深入了解 Swift 编程语言的开发者。'
      //     },
      //     {
      //       question: '这本书有纸质书吗？',
      //       answer: '本书纸质书已经由电子工业出版社博文视点出版，您可以在各图书销售商店或网上找到该书信息。请注意我们无法为纸质书提供免费的更新。'
      //     },
      //     {
      //       question: '我能在什么设备上阅读本书？',
      //       answer: '我们提供排版精美且 DRM free 的 PDF、mobi 和 epub 格式图书，这意味着您可以在任意带有 PDF 阅读器的桌面或移动平台、iBooks 以及 Kindle 等绝大部分常见阅读设备上进行阅读。'
      //     },
      //     {
      //       question: '付款方式是怎样，我能获得后续更新吗？',
      //       answer: '您可以通过 FastSpring 购买本书，如果您需要使用支付宝支付，请将区域选为中国 (China)，就可以看到 Alipay 的付款方式。在购买时请确认您填写了正确的邮箱地址，您将可以通过邮箱地址和账号在本站下载书籍的后续更新。'
      //     },
      //     {
      //       question: '为什么付款时需要我的手机和住址信息？',
      //       answer: '这是 FastSpring 的要求，您的信息可以在发生支付纠纷时作为凭证。我们 (ObjC 中国) 不会收集和存储除了姓名和邮箱之外的您的个人信息。我们建议您正确填写您的电话号码，以确保付款时权益。'
      //     },
      //     {
      //       question: '我成功购买了，但是下载时总是失败或者没有速度？',
      //       answer: '我们现在使用的是亚马逊的云存储服务，应该是没有问题的。如果连接中断或者速度很慢的话，请尝试检查或者更换您的网络设置。此外，您也可以选择登录我们的网站，在书籍页面直接从我们的网站进行下载。'
      //     },
      //     {
      //       question: '除了本书，还有其他推荐的图书吗？',
      //       answer: '请您关注本站的<a href="/products/">书籍页面</a>以获取更多信息。'
      //     },
      //     {
      //       question: '我还有其他问题。',
      //       answer: '欢迎使用邮件<a href="mailto:mail@objccn.io">联系我们</a>，我们随时准备好为您提供服务。'
      //     }]
      //   },
      //   '/products/functional-swift': {
      //     productTitle: '函数式 Swift',
      //     productPrice: '¥69.00',
      //     authorList: [{
      //       authorLink: 'https://twitter.com/chriseidhof',
      //       authorName: 'Chris Eidhof',
      //       authorAvatar: require('../assets/chriseidhof.jpg'),
      //       authorDescribe: '<p>Chris 是 objc.io 的创始人之一。他之前是一名 Haskell 程序员，最近几年 Chris 专注于 Apple 平台并进行了深入研究。</p>'
      //     },
      //     {
      //       authorLink: 'https://twitter.com/floriankugler',
      //       authorName: 'Florian Kugler',
      //       authorAvatar: require('../assets/floriankugler.jpg'),
      //       authorDescribe: '<p>Florian 是 objc.io 的创始人之一。他已经对 OOP 编程范式如数家珍，现在他正在研究单子和函子的终极奥义。</p> '
      //     },
      //     {
      //       authorLink: 'https://twitter.com/wouterswierstra',
      //       authorName: 'Wouter Swierstra',
      //       authorAvatar: require('../assets/wouterswierstra.jpg'),
      //       authorDescribe: '<p>Wouter 在函数式编程领域有 15 以上年的经验。他在工业界，教育界和出版界均有关于函数式编程的建树。</p> '
      //     }
      //     ],
      //     translatorList: [{
      //       authorLink: 'http://ckitakishi.com/',
      //       authorName: '陈聿菡',
      //       authorAvatar: require('../assets/chenyuhan.jpg'),
      //       authorDescribe: '<p>陈聿菡目前在日本从事 iOS 开发，在此之前是一名前端开发者，对图像处理感兴趣，正在为写出优美的代码而修炼。</p> '
      //     },
      //     {
      //       authorLink: 'http://bifidy.net',
      //       authorName: '杜欣',
      //       authorAvatar: require('../assets/duxin.jpg'),
      //       authorDescribe: '<p>杜欣是一名热衷于分享的 iOS 开发者，此前曾多次参与 ObjC 中国社区的翻译工作。会在闲暇时撰写博客分享一些学习心得，是个聊起开发偶尔会停不下来的家伙。</p> '
      //
      //     },
      //     {
      //       authorLink: 'https://weibo.com/onevcat',
      //       authorName: '王巍',
      //       authorAvatar: require('../assets/weiwang.jpg'),
      //       authorDescribe: '<p>ObjC 中国的创始人之一，objc.io 书籍翻译工作组织者。使用 onevcat 作为 ID 活跃在中国 iOS 开发界，Swift 使用者。</p> '
      //     }
      //     ],
      //     productSubtitle: '学习 Swift 函数式编程的核心观点，并将其运用到真实世界的开发中去。',
      //     productText: '<p>Swift 为编程世界打开了一扇新的大门，在本书中我们将带领您遨游这个世界。正如 Swift 的创造者 Chris&nbsp;Lattner 所言：</p><blockquote> <p>“没有 C 的 Objective-C” 确实是在做减法，但是 Swift 引入了泛型和函数式编程的概念，这极大扩展了语言设计的空间。</p> </blockquote> <p>在 Swift 中引入函数式编程为我们的开发带来了无限的乐趣。在本书中我们将阐述函数式编程的理念，并向您展示如何在 Swift 中将它们运用于程序设计，这可以帮助我们写出更加简洁和明确的代码。</p>',
      //     contentInfo: [{
      //       title: '函数式编程思想',
      //       subtitle: '了解函数式编程范式'
      //     },
      //     {
      //       title: 'Map、Filter 和 Reduce',
      //       subtitle: '高阶函数以及用函数操作集合类型'
      //     },
      //     {
      //       title: '函数式 API',
      //       subtitle: '设计可组装且类型安全的函数式 API'
      //     },
      //     {
      //       title: '可选值',
      //       subtitle: 'Swift 如何解决 “无” 的问题，为什么要选取这个解决方案'
      //     },
      //     {
      //       title: '纯粹性',
      //       subtitle: '值类型以及不可变的优势'
      //     },
      //     {
      //       title: '枚举',
      //       subtitle: '使用 Swift 枚举类型创建自己的数据结构，以保证表意清晰，类型安全'
      //     },
      //     {
      //       title: '纯函数式数据结构',
      //       subtitle: '使用递归枚举来实现简单的数据结构'
      //     },
      //     {
      //       title: '生成器和序列',
      //       subtitle: '理解 Swift 集合类型背后的机制'
      //     },
      //     {
      //       title: '解析和求值',
      //       subtitle: '使用函数式编写的解析框架，构建能处理的表格数据的简单 app'
      //     },
      //     {
      //       title: '适用函子及单子',
      //       subtitle: '介绍函数式代码背后的思想和通用模式'
      //     }],
      //     problemList: [{
      //       question: '这本书针对的 Swift 版本是？',
      //       answer: '本书是针对 Swift 3 编写的，书中的概念和示例代码都遵循 Swift 3 规范，请您放心阅读。购买后，您也可以免费获取后续的所有更新内容。'
      //     },
      //     {
      //       question: '我能在哪里找到书中的示例代码？',
      //       answer: '书中的示例代码都放在了 GitHub 的<a href="https://github.com/objcio/functional-swift">这个仓库</a>中，您可以随时查阅。另外，您也可以从本站打包下载所有的示例代码。'
      //     },
      //     {
      //       question: '阅读本书需要 Swift 知识吗？',
      //       answer: '我们假设您已经知道面向对象编程的一般知识，并至少阅读过 Apple 的 <a href="https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/">Swift 入门书籍</a>。'
      //     },
      //     {
      //       question: '这本书是 objc.io 的英文书，为什么会有中文版本？',
      //       answer: '我们是 <a href="http://objccn.io">“ObjC 中国”</a> 组织，我们与 <a href="https://www.objc.io">objc.io</a> 展开了深度合作，并获得了 objc.io 的授权，在中国拥有这系列图书的独占翻译和销售权。'
      //     },
      //     {
      //       question: '中文版和英文版有什么不同？会保持同步吗？',
      //       answer: '中文版和英文原版内容是一致的。书中偶有难以理解或国内鲜见的语汇，对此我们通过译注的形式进行了进一步的解释，以帮助读者理解。本书将继续更新并和英文版保持同步，但是在中英文版更新之间会有一定时间差。'
      //     },
      //     {
      //       question: '翻译书籍一般都很烂，这本书的质量可以信任吗？',
      //       answer: '“ObjC 中国”致力于最优秀的翻译作品，我们希望能将先进的 Swift 开发技术以更易懂的方式介绍给中文社区的开发者们。本书由国内有深厚英文背景的一线开发者花费大量时间和精力翻译，由 onevcat 逐句进行审核。我们保证，本书一定会是一本由开发者书写，经开发者翻译，最终提供给开发者阅读的优秀图书。'
      //     },
      //     {
      //       question: '这本书有纸质书吗？',
      //       answer: '暂时没有纸质书销售，不过我们会在时机合适的时候与出版社进行联系，为读者提供纸质版本的书籍。但是我们无法为纸质版本提供后续升级，请您谅解。'
      //     },
      //     {
      //       question: '我能在什么设备上阅读本书？',
      //       answer: '我们提供排版精美且 DRM free 的 PDF、mobi 和 epub 格式图书，这意味着您可以在任意带有 PDF 阅读器的桌面或移动平台、iBooks 以及 Kindle 等绝大部分常见阅读设备上进行阅读。'
      //     },
      //     {
      //       question: '付款方式是怎样，我能获得后续更新吗？',
      //       answer: '您可以通过 FastSpring 购买本书，如果您需要使用支付宝支付，请将区域选为中国 (China)，就可以看到 Alipay 的付款方式。在购买时请确认您填写了正确的邮箱地址，您将可以通过邮箱地址和账号在本站下载书籍的后续更新。'
      //     },
      //     {
      //       question: '为什么付款时需要我的手机和住址信息？',
      //       answer: '这是 FastSpring 的要求，您的信息可以在发生支付纠纷时作为凭证。我们 (ObjC 中国) 不会收集和存储除了姓名和邮箱之外的您的个人信息。我们建议您正确填写您的电话号码，以确保付款时权益。'
      //     },
      //     {
      //       question: '我成功购买了，但是下载时总是失败或者没有速度？',
      //       answer: '我们现在使用的是亚马逊的云存储服务，应该是没有问题的。如果连接中断或者速度很慢的话，请尝试检查或者更换您的网络设置。此外，您也可以选择登录我们的网站，在书籍页面直接从我们的网站进行下载。'
      //     },
      //     {
      //       question: '除了本书，还有其他推荐的图书吗？',
      //       answer: '请您关注本站的<a href="/products/">书籍页面</a>以获取更多信息。'
      //     },
      //     {
      //       question: '我还有其他问题。',
      //       answer: '欢迎使用邮件<a href="mailto:mail@objccn.io">联系我们</a>，我们随时准备好为您提供服务。'
      //     }]
      //   },
      //   '/products/core-data': {
      //     productTitle: 'Core Data',
      //     productPrice: '¥69.00',
      //     authorList: [{
      //       authorLink: 'https://twitter.com/floriankugler',
      //       authorName: 'Florian Kugler',
      //       authorAvatar: require('../assets/floriankugler.jpg'),
      //       authorDescribe: '<p>Florian 是 objc.io 的创始人之一。他现在负责维护像是 <a href="http://decksetapp.com/">Deckset</a> 和 <a href="http://getscenery.com/">Scenery</a> 这样的 Mac 应用。同时 Florian 也是<a href="/products/functional-swift/">《函数式 Swift》</a>的作者之一。</p>'
      //     },
      //     {
      //       authorLink: 'https://twitter.com/danielboedewadt',
      //       authorName: 'Daniel Eggert',
      //       authorAvatar: require('../assets/danieleggert.jpg'),
      //       authorDescribe: '<p>Daniel 是 objc.io 的创始人之一。他已经和 Core Data 打交道 10 年之久了，特别是在照片和图像处理方面经验非常丰富。Daniel 在 Apple 工作了五年，并帮助 Apple 将照片应用和相机应用迁移到基于 Core Data 的架构上来。</p> '
      //     }
      //     ],
      //     translatorList: [{
      //       authorLink: 'http://weibo.com/hewigovens',
      //       authorName: '徐涛',
      //       authorAvatar: require('../assets/xutao.jpg'),
      //       authorDescribe: '<p>Geek /iOS & Mac Dev, Swift 使用者，平时喜欢开发一些小工具，开源软件爱好与贡献者。</p> '
      //     },
      //     {
      //       authorLink: 'https://www.linkedin.com/in/shijia-qian',
      //       authorName: '钱世家',
      //       authorAvatar: require('../assets/qianshijia.jpg'),
      //       authorDescribe: '<p>目前在澳大利亚做 iOS 开发，喜欢用 Swift 和 Python 来解决问题。PS4 狂热爱好者，闲暇时间基本都花在打游戏上了。</p> '
      //     },
      //     {
      //       authorLink: 'https://weibo.com/onevcat',
      //       authorName: '王巍',
      //       authorAvatar: require('../assets/weiwang.jpg'),
      //       authorDescribe: '<p>ObjC 中国的创始人之一，objc.io 书籍翻译工作组织者。使用 onevcat 作为 ID 活跃在中国 iOS 开发界，Swift 使用者。</p> '
      //     }
      //     ],
      //     productSubtitle: '使用例子为您详解 Core Data 从简单的持久化到多线程及同步等高级应用的最佳实践。',
      //     productText: '<p>本书将向您介绍使用 Core Data 时需要特别注意的事项，这将帮助您避开使用 Core Data 这个十分灵活且异常强大的框架时的一些陷阱。我们从一个简单的应用例子开始，逐步将其扩展为包含关系，高级数据类型，并发，同步以及其他很多特性的完整例子，并在这个过程中对所有这些主题进行了讲解。</p> <p>在本书后半部本，我们还会超出这个基本应用所需要涉及的范围，将我们的知识点深入扩展到 Core Data 幕后的工作原理上。我们会学习如何获取高性能，不同 Core Data 设置之间的权衡，以及如何对你的 Core Data 代码进行调试和性能测试。</p><p>本书所有的代码都使用 Swift 书写， 我们也展示了如何将 Swift 的语言特性融入到 Core Data 中，并写出优雅和安全的代码。我们希望您在阅读本书的时候有一定的 Swift 和 iOS 开发基础，不过相信不论是新人还是富有经验的开发者，都能从本书中找到实用的信息和设计模式。</p>',
      //     contentInfo: [{
      //       title: 'Core Data 和 Swift',
      //       subtitle: '探索如何将 Swift 运用到 Core Data 中并写出优雅安全的代码'
      //     },
      //     {
      //       title: '示例代码',
      //       subtitle: '查看包括 CloudKit 同步功能在内的完整示例应用'
      //     },
      //     {
      //       title: '最佳实践',
      //       subtitle: '使用高效的模式使代码保持简洁'
      //     },
      //     {
      //       title: '数据类型',
      //       subtitle: '正确地使用内建数据类型及自定义数据类型'
      //     },
      //     {
      //       title: 'Core Data 栈',
      //       subtitle: '理解不同 Core Data 配置之间的优劣'
      //     },
      //     {
      //       title: '底层实现',
      //       subtitle: '获取 Core Data 架构的详细知识'
      //     },
      //     {
      //       title: '并发',
      //       subtitle: '理解多个上下文的使用场景和方式'
      //     },
      //     {
      //       title: '性能',
      //       subtitle: '为你的应用获取优异的性能'
      //     },
      //     {
      //       title: '内存使用',
      //       subtitle: '探索 Core Data 强大的高效率内存使用机制'
      //     },
      //     {
      //       title: '与网络端同步',
      //       subtitle: '使本地 Core Data 存储与远端数据保持同步的诀窍'
      //     },
      //     {
      //       title: '调试和调优',
      //       subtitle: '寻找性能瓶颈或其他问题'
      //     }],
      //     problemList: [{
      //       question: '这本书针对的 Swift 版本是？',
      //       answer: '本书是针对 Swift 3 编写的，但是因为 Core Data 框架和 Swift 语言本身关系不大，所以在不同版本的 Swift 下，阅读时应该也不会存在障碍。'
      //     },
      //     {
      //       question: '我能在哪里找到书中的示例代码？',
      //       answer: '书中的示例代码都放在了 GitHub 的<a href="https://github.com/objcio/core-data">这个仓库</a>中，您可以随时查阅。'
      //     },
      //     {
      //       question: '阅读本书需要 Swift 和 Core Data 的知识吗？',
      //       answer: '我们假设您已经知道 Swift 的基本语法和使用，您不需要对 Swift 有非常深入的了解也能阅读本书。对于 Core Data，希望您能大概知道使用该框架的目的，您即使没有任何 Core Data 经验也可以阅读本书。'
      //     },
      //     {
      //       question: '这本书是 objc.io 的英文书，为什么会有中文版本？',
      //       answer: '我们是 <a href="http://objccn.io">“ObjC 中国”</a> 组织，我们与 <a href="https://www.objc.io">objc.io</a> 展开了深度合作，并获得了 objc.io 的授权，在中国拥有这系列图书的独占翻译和销售权。'
      //     },
      //     {
      //       question: '中文版和英文版有什么不同？会保持同步吗？',
      //       answer: '中文版和英文原版内容是一致的。书中偶有难以理解或国内鲜见的语汇，对此我们通过译注的形式进行了进一步的解释，以帮助读者理解。本书将继续更新并和英文版保持同步，但是在中英文版更新之间会有一定时间差。'
      //     },
      //     {
      //       question: '翻译书籍一般都很烂，这本书的质量可以信任吗？',
      //       answer: '“ObjC 中国”致力于最优秀的翻译作品，我们希望能将先进的 Swift 开发技术以更易懂的方式介绍给中文社区的开发者们。本书由国内有深厚英文背景的一线开发者花费大量时间和精力翻译，由 onevcat 逐句进行审核。我们保证，本书一定会是一本由开发者书写，经开发者翻译，最终提供给开发者阅读的优秀图书。'
      //     },
      //     {
      //       question: '这本书有纸质书吗？',
      //       answer: '暂时没有纸质书销售，不过我们会在时机合适的时候与出版社进行联系，为读者提供纸质版本的书籍。但是我们无法为纸质版本提供后续升级，请您谅解。'
      //     },
      //     {
      //       question: '我能在什么设备上阅读本书？',
      //       answer: '我们提供排版精美且 DRM free 的 PDF、mobi 和 epub 格式图书，这意味着您可以在任意带有 PDF 阅读器的桌面或移动平台、iBooks 以及 Kindle 等绝大部分常见阅读设备上进行阅读。'
      //     },
      //     {
      //       question: '付款方式是怎样，我能获得后续更新吗？',
      //       answer: '您可以通过 FastSpring 购买本书，如果您需要使用支付宝支付，请将区域选为中国 (China)，就可以看到 Alipay 的付款方式。在购买时请确认您填写了正确的邮箱地址，您将可以通过邮箱地址和账号在本站下载书籍的后续更新。'
      //     },
      //     {
      //       question: '为什么付款时需要我的手机和住址信息？',
      //       answer: '这是 FastSpring 的要求，您的信息可以在发生支付纠纷时作为凭证。我们 (ObjC 中国) 不会收集和存储除了姓名和邮箱之外的您的个人信息。我们建议您正确填写您的电话号码，以确保付款时权益。'
      //     },
      //     {
      //       question: '我成功购买了，但是下载时总是失败或者没有速度？',
      //       answer: '我们现在使用的是亚马逊的云存储服务，应该是没有问题的。如果连接中断或者速度很慢的话，请尝试检查或者更换您的网络设置。此外，您也可以选择登录我们的网站，在书籍页面直接从我们的网站进行下载。'
      //     },
      //     {
      //       question: '除了本书，还有其他推荐的图书吗？',
      //       answer: '请您关注本站的<a href="/products/">书籍页面</a>以获取更多信息。'
      //     },
      //     {
      //       question: '我还有其他问题。',
      //       answer: '欢迎使用邮件<a href="mailto:mail@objccn.io">联系我们</a>，我们随时准备好为您提供服务。'
      //     }]
      //   },
      //   '/products/advanced-swift': {
      //     productTitle: 'Swift 进阶',
      //     productPrice: '¥69.00',
      //     authorList: [{
      //       authorLink: 'https://twitter.com/chriseidhof',
      //       authorName: 'Chris Eidhof',
      //       authorAvatar: require('../assets/chriseidhof.jpg'),
      //       authorDescribe: '<p>Chris 是 objc.io 的创始人之一。他创建了 <a href="http://decksetapp.com/">Deckset</a> 和 <a href="http://www.getscenery.com/">Scenery</a> 等应用。同时，他也是<a href="/products/functional-swift/">《函数式 Swift》</a>一书的作者。 </p> '
      //     },
      //     {
      //       authorLink: 'https://twitter.com/olebegemann',
      //       authorName: 'Ole Begemann',
      //       authorAvatar: require('../assets/olebegemann.jpg'),
      //       authorDescribe: '<p>Ole 是一个自由职业开发者，同时他也是作家和科技网站编辑。Ole 在 Swift 发布伊始就在自己的<a href="https://oleb.net/">博客</a>上发表了很多看法，他在 Unicode 和字符串处理方面是权威专家。</p> '
      //     },
      //     {
      //       authorLink: 'http://airspeedvelocity.net/',
      //       authorName: 'Airspeed Velocity',
      //       authorAvatar: require('../assets/airspeedvelocity.jpg'),
      //       authorDescribe: '<p><a href="http://airspeedvelocity.net/">Airspeed Velocity 的博客</a>从 Swift 早期的第一个 beta 版本开始就在关注和研究 Swift 的发展进程。该博客主要着眼于 Swift 标准库的实现以及 Swift 中的特性于标准库之间的配合。博主想要与这个世界分享知识，但是又略为娇羞，因此他选择了匿名参与本书的写作。</p> '
      //     }
      //     ],
      //     translatorList: [{
      //       authorLink: 'https://weibo.com/onevcat',
      //       authorName: '王巍',
      //       authorAvatar: require('../assets/weiwang.jpg'),
      //       authorDescribe: '<p>ObjC 中国的创始人之一，objc.io 书籍翻译工作组织者。使用 onevcat 作为 ID 活跃在中国 iOS 开发界，Swift 使用者。</p> '
      //     }
      //     ],
      //     productSubtitle: '讨论 Swift 特性中从低层级编程到高阶抽象的各个方面的进阶知识',
      //     productText: '<p>在本书中，我们涵盖了 Swift 程序设计的一些进阶话题。如果你已经通读 Apple 的 Swift 编程指南，并且想要深入探索关于这门语言的更多内容，那么这本书正适合你！</p><p>Swift 非常适合用来进行系统编程，而同时它也能被用于书写高层级的代码。我们在书中既会研究像是泛型、协议这样的高层级抽象的内容，也会涉足像是封装 C 代码以及字符串内部实现这样的低层级话题。</p>',
      //     contentInfo: [{
      //       title: '集合',
      //       subtitle: '如何用好 Swift 内建的集合类型，如何实现自定义的集合类型'
      //     },
      //     {
      //       title: '可选值',
      //       subtitle: '使用可选值改进代码安全性和可读性的秘诀'
      //     },
      //     {
      //       title: '泛型',
      //       subtitle: '书写可以作用于多个类型的函数和方法'
      //     },
      //     {
      //       title: '协议',
      //       subtitle: '使用协议简化你的代码设计'
      //     },
      //     {
      //       title: '字符串',
      //       subtitle: '如何正确使用字符串，它们在 Swift 中的工作方式'
      //     },
      //     {
      //       title: '可变性',
      //       subtitle: 'Swift 为处理可变性提供了强大的特性'
      //     },
      //     {
      //       title: '内存管理',
      //       subtitle: '学习值类型和引用类型的行为模式和需要注意的地方'
      //     },
      //     {
      //       title: '错误处理',
      //       subtitle: '理解 Swift 中内建的错误处理机制'
      //     },
      //     {
      //       title: '互用性',
      //       subtitle: '使用 Swift 封装 C API，将它们以更自然的方式呈现在 Swift 中'
      //     }],
      //     problemList: [{
      //       question: '这本书是针对 Swift 3 的吗？',
      //       answer: '是的，我们针对最新版本的 Swift 编写和修订本书，并使用了全新的语言特性。'
      //     },
      //     {
      //       question: '我需要先阅读<a href="/products/functional-swift/">《函数式 Swift》</a>吗？',
      //       answer: '完全不需要，不过我们建议你已经先阅读 <a href="https://developer.apple.com/library/ios/documentation/Swift/Conceptual/Swift_Programming_Language/">Swift Programming Guide</a>，并且具备一定的编程经验后再阅读本书。'
      //     },
      //     {
      //       question: '这本书是 objc.io 的英文书，为什么会有中文版本？',
      //       answer: '我们是 <a href="http://objccn.io">“ObjC 中国”</a> 组织，我们与 <a href="https://www.objc.io">objc.io</a> 展开了深度合作，并获得了 objc.io 的授权，在中国拥有这系列图书的独占翻译和销售权。'
      //     },
      //     {
      //       question: '中文版和英文版有什么不同？会保持同步吗？',
      //       answer: '中文版和英文原版内容是一致的。书中偶有难以理解或国内鲜见的语汇，对此我们通过译注的形式进行了进一步的解释，以帮助读者理解。本书将继续更新并和英文版保持同步，但是在中英文版更新之间会有一定时间差。'
      //     },
      //     {
      //       question: '翻译书籍一般都很烂，这本书的质量可以信任吗？',
      //       answer: '“ObjC 中国”致力于最优秀的翻译作品，我们希望能将先进的 Swift 开发技术以更易懂的方式介绍给中文社区的开发者们。本书由国内有深厚英文背景的一线开发者花费大量时间和精力翻译，由 onevcat 逐句进行审核。我们保证，本书一定会是一本由开发者书写，经开发者翻译，最终提供给开发者阅读的优秀图书。'
      //     },
      //     {
      //       question: '这本书有纸质书吗？',
      //       answer: '暂时没有纸质书销售，不过我们会在时机合适的时候与出版社进行联系，为读者提供纸质版本的书籍。但是我们无法为纸质版本提供后续升级，请您谅解。'
      //     },
      //     {
      //       question: '我能在什么设备上阅读本书？',
      //       answer: '我们提供排版精美且 DRM free 的 PDF、mobi 和 epub 格式图书，这意味着您可以在任意带有 PDF 阅读器的桌面或移动平台、iBooks 以及 Kindle 等绝大部分常见阅读设备上进行阅读。'
      //     },
      //     {
      //       question: '付款方式是怎样，我能获得后续更新吗？',
      //       answer: '您可以通过 FastSpring 购买本书，如果您需要使用支付宝支付，请将区域选为中国 (China)，就可以看到 Alipay 的付款方式。在购买时请确认您填写了正确的邮箱地址，您将可以通过邮箱地址和账号在本站下载书籍的后续更新。'
      //     },
      //     {
      //       question: '为什么付款时需要我的手机和住址信息？',
      //       answer: '这是 FastSpring 的要求，您的信息可以在发生支付纠纷时作为凭证。我们 (ObjC 中国) 不会收集和存储除了姓名和邮箱之外的您的个人信息。我们建议您正确填写您的电话号码，以确保付款时权益。'
      //     },
      //     {
      //       question: '我成功购买了，但是下载时总是失败或者没有速度？',
      //       answer: '我们现在使用的是亚马逊的云存储服务，应该是没有问题的。如果连接中断或者速度很慢的话，请尝试检查或者更换您的网络设置。此外，您也可以选择登录我们的网站，在书籍页面直接从我们的网站进行下载。'
      //     },
      //     {
      //       question: '除了本书，还有其他推荐的图书吗？',
      //       answer: '请您关注本站的<a href="/products/">书籍页面</a>以获取更多信息。'
      //     },
      //     {
      //       question: '我还有其他问题。',
      //       answer: '欢迎使用邮件<a href="mailto:mail@objccn.io">联系我们</a>，我们随时准备好为您提供服务。'
      //     }]
      //   }
      // }
    }
  }
}
</script>

<style>

</style>
