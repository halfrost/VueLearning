<template>
<div>

  <navgation-bar>
  </navgation-bar>

  <div class="app-content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

  <nav class="navbar navbar-default">
     <div class="container">
       <!-- Brand and toggle get grouped for better mobile display -->
       <div class="navbar-header">
         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="navbar-brand" href="/">[@] ObjC 中国</a>
       </div>

       <div class="collapse navbar-collapse" id="navbar-collapse">
         <ul class="nav navbar-nav">
           <li class="active"><a href="/issues/">期刊</a></li>
           <li ><a href="/products/">书籍</a></li>
         </ul>

          <ul class="nav navbar-nav navbar-right">
             <li><a href="/login/"><span class="glyphicon glyphicon-log-in"></span> 登录</a></li>
         </ul>

       </div>
     </div>
   </nav>


  <div id="__wrapper">
      <div class="article article-container">
        <div class="article-header">
          <div class="article-header-top row">
            <div class="col-xs-6 col-xs-offset-0">
              <a class="article-back" href="/issues/"><span class="glyphicon glyphicon-menu-left"></span> 返回期刊列表</a>
            </div>
          </div>
          <div>
            <div class="article-title">整洁的 Table View 代码</div>
            <div class="article-meta text-center">
              <div class="article-meta-item"><span class="glyphicon glyphicon-user"></span> <a href="http://tang3w.com">唐天勇</a></div>
              <div class="article-meta-item"><span class="glyphicon glyphicon-calendar"></span> 2014/03/19</div>
            </div>
          </div>
        </div>
        <hr>
        <div class="article-content">
          <p>Table view 是 iOS 应用程序中非常通用的组件。许多代码和 table view 都有直接或间接的关系，随便举几个例子，比如提供数据、更新 table view，控制它的行为以及响应选择事件。在这篇文章中，我们将会展示保持 table view 相关代码的整洁和良好组织的技术。</p>
          <h2 id="uitableviewcontroller-vs-uiviewcontroller">UITableViewController vs. UIViewController</h2>
          <p>Apple 提供了 <code>UITableViewController</code> 作为 table views 专属的 view controller 类。Table view controllers 实现了一些非常有用的特性，来帮你避免一遍又一遍地写那些死板的代码！但是话又说回来，table view controller 只限于管理一个全屏展示的 table view。大多数情况下，这就是你想要的，但如果不是，还有其他方法来解决这个问题，就像下面我们展示的那样。</p>
          <h3 id="table-view-controllers-">Table View Controllers 的特性</h3>
          <p>Table view controllers 会在第一次显示 table view 的时候帮你加载其数据。另外，它还会帮你切换 table view 的编辑模式、响应键盘通知、以及一些小任务，比如闪现侧边的滑动提示条和清除选中时的背景色。为了让这些特性生效，当你在子类中覆写类似 <code>viewWillAppear:</code> 或者 <code>viewDidAppear:</code> 等事件方法时，需要调用 super 版本。</p>
          <p>Table view controllers 相对于标准 view controllers 的一个特别的好处是它支持 Apple 实现的“下拉刷新”。目前，文档中唯一的使用 <code>UIRefreshControl</code> 的方式就是通过 table view controller ，虽然通过努力在其他地方也能让它工作（<a href="http://stackoverflow.com/questions/12805003/uirefreshcontrol-issues">见此处</a>），但很可能在下一次
            iOS 更新的时候就不行了。</p>
          <p>这些要素加一起，为我们提供了大部分 Apple 所定义的标准 table view 交互行为，如果你的应用恰好符合这些标准，那么直接使用 table view controllers 来避免写那些死板的代码是个很好的方法。</p>
          <h3 id="table-view-controllers-">Table View Controllers 的限制</h3>
          <p>Table view controllers 的 view 属性永远都是一个 table view。如果你稍后决定在 table view 旁边显示一些东西（比如一个地图），如果不依赖于那些奇怪的 hacks，估计就没什么办法了。</p>
          <p>如果你是用代码或 .xib 文件来定义的界面，那么迁移到一个标准 view controller 将会非常简单。但是如果你使用了 storyboards，那么这个过程要多包含几个步骤。除非重新创建，否则你并不能在 storyboards 中将 table view controller 改成一个标准的 view controller。这意味着你必须将所有内容拷贝到新的 view controller，然后再重新连接一遍。</p>
          <p>最后，你需要把迁移后丢失的 table view controller 的特性给补回来。大多数都是 <code>viewWillAppear:</code> 或 <code>viewDidAppear:</code> 中简单的一条语句。切换编辑模式需要实现一个 action 方法，用来切换 table view 的 <code>editing</code> 属性。大多数工作来自重新创建对键盘的支持。</p>
          <p>在选择这条路之前，其实还有一个更轻松的选择，它可以通过分离我们需要关心的功能（关注点分离），让你获得额外的好处：</p>
          <h3 id="-child-view-controllers">使用 Child View Controllers</h3>
          <p>和完全抛弃 table view controller 不同，你还可以将它作为 child view controller 添加到其他 view controller 中（<a href="http://objccn.io/issue-1-4">关于此话题的文章</a>）。这样，parent view controller 在管理其他的你需要的新加的界面元素的同时，table view controller 还可以继续管理它的 table view。</p>
          <pre><code>- (void)addPhotoDetailsTableView
  {
      DetailsViewController *details = [[DetailsViewController alloc] init];
      details.photo = self.photo;
      details.delegate = self;
      [self addChildViewController:details];
      CGRect frame = self.view.bounds;
      frame.origin.y = 110;
      details.view.frame = frame;
      [self.view addSubview:details.view];
      [details didMoveToParentViewController:self];
  }
  </code></pre>
          <p>如果你使用这个解决方案，你就必须在 child view controller 和 parent view controller 之间建立消息传递的渠道。比如，如果用户选择了一个 table view 中的 cell，parent view controller 需要知道这个事件来推入其他 view controller。根据使用习惯，通常最清晰的方式是为这个 table view controller 定义一个 delegate protocol，然后到 parent view
            controller 中去实现。</p>
          <pre><code>@protocol DetailsViewControllerDelegate
  - (void)didSelectPhotoAttributeWithKey:(NSString *)key;
  @end

  @interface PhotoViewController ()
  @end

  @implementation PhotoViewController
  // ...
  - (void)didSelectPhotoAttributeWithKey:(NSString *)key
  {
      DetailViewController *controller = [[DetailViewController alloc] init];
      controller.key = key;
      [self.navigationController pushViewController:controller animated:YES];
  }
  @end
  </code></pre>
          <p>就像你看到的那样，这种结构为 view controller 之间的消息传递带来了额外的开销，但是作为回报，代码封装和分离非常清晰，有更好的复用性。根据实际情况的不同，这既可能让事情变得更简单，也可能会更复杂，需要读者自行斟酌和决定。</p>
          <h2 id="-separating-concerns-">分离关注点（Separating Concerns）</h2>
          <p>当处理 table views 的时候，有许多各种各样的任务，这些任务穿梭于 models，controllers 和 views 之间。为了避免让 view controllers 做所有的事，我们将尽可能地把这些任务划分到合适的地方，这样有利于阅读、维护和测试。</p>
          <p>这里描述的技术是文章<a href="http://objccn.io/issue-1-1">更轻量的 View Controllers</a> 中的概念的延伸，请参考这篇文章来理解如何重构 data source 和 model 的逻辑。结合 table views，我们来具体看看如何在 view controllers 和 views 之间分离关注点。</p>
          <h3 id="-model-cells-">搭建 Model 对象和 Cells 之间的桥梁</h3>
          <p>有时我们需要将想显示的 model 层中的数据传到 view 层中去显示。由于我们同时也希望让 model 和 view 之间明确分离，所以通常把这个任务转移到 table view 的 data source 中去处理：</p>
          <pre><code>- (UITableViewCell *)tableView:(UITableView *)tableView
           cellForRowAtIndexPath:(NSIndexPath *)indexPath
  {
      PhotoCell *cell = [tableView dequeueReusableCellWithIdentifier:@&quot;PhotoCell&quot;];
      Photo *photo = [self itemAtIndexPath:indexPath];
      cell.photoTitleLabel.text = photo.name;
      NSString* date = [self.dateFormatter stringFromDate:photo.creationDate];
      cell.photoDateLabel.text = date;
  }
  </code></pre>
          <p>但是这样的代码会让 data source 变得混乱，因为它向 data source 暴露了 cell 的设计。最好分解出来，放到 cell 类的一个 category 中。</p>
          <pre><code>@implementation PhotoCell (ConfigureForPhoto)

  - (void)configureForPhoto:(Photo *)photo
  {
      self.photoTitleLabel.text = photo.name;
      NSString* date = [self.dateFormatter stringFromDate:photo.creationDate];
      self.photoDateLabel.text = date;
  }

  @end
  </code></pre>
          <p>有了上述代码后，我们的 data source 方法就变得简单了。</p>
          <pre><code>- (UITableViewCell *)tableView:(UITableView *)tableView
           cellForRowAtIndexPath:(NSIndexPath *)indexPath
  {
      PhotoCell *cell = [tableView dequeueReusableCellWithIdentifier:PhotoCellIdentifier];
      [cell configureForPhoto:[self itemAtIndexPath:indexPath]];
      return cell;
  }
  </code></pre>
          <p>在我们的示例代码中，table view 的 data source 已经<a href="http://objccn.io/issue-1-1">分解到单独的类中了</a>，它用一个设置 cell 的 block 来初始化。这时，这个 block 就变得这样简单了：</p>
          <pre><code>TableViewCellConfigureBlock block = ^(PhotoCell *cell, Photo *photo) {
      [cell configureForPhoto:photo];
  };
  </code></pre>
          <h3 id="-cells-">让 Cells 可复用</h3>
          <p>有时多种 model 对象需要用同一类型的 cell 来表示，这种情况下，我们可以进一步让 cell 可以复用。首先，我们给 cell 定义一个 protocol，需要用这个 cell 显示的对象必须遵循这个 protocol。然后简单修改 category 中的设置方法，让它可以接受遵循这个 protocol 的任何对象。这些简单的步骤让 cell 和任何特殊的 model 对象之间得以解耦，让它可适应不同的数据类型。</p>
          <h3 id="-cell-cell-">在 Cell 内部控制 Cell 的状态</h3>
          <p>如果你想自定义 table views 默认的高亮或选择行为，你可以实现两个 delegate 方法，把点击的 cell 修改成我们想要的样子。例如：</p>
          <pre><code>- (void)tableView:(UITableView *)tableView
          didHighlightRowAtIndexPath:(NSIndexPath *)indexPath
  {
      PhotoCell *cell = [tableView cellForRowAtIndexPath:indexPath];
      cell.photoTitleLabel.shadowColor = [UIColor darkGrayColor];
      cell.photoTitleLabel.shadowOffset = CGSizeMake(3, 3);
  }

  - (void)tableView:(UITableView *)tableView
          didUnhighlightRowAtIndexPath:(NSIndexPath *)indexPath
  {
      PhotoCell *cell = [tableView cellForRowAtIndexPath:indexPath];
      cell.photoTitleLabel.shadowColor = nil;
  }
  </code></pre>
          <p>然而，这两个 delegate 方法的实现又基于了 view controller 知晓 cell 实现的具体细节。如果我们想替换或重新设计 cell，我们必须改写 delegate 代码。View 的实现细节和 delegate 的实现交织在一起了。我们应该把这些细节移到 cell 自身中去。</p>
          <pre><code>@implementation PhotoCell
  // ...
  - (void)setHighlighted:(BOOL)highlighted animated:(BOOL)animated
  {
      [super setHighlighted:highlighted animated:animated];
      if (highlighted) {
          self.photoTitleLabel.shadowColor = [UIColor darkGrayColor];
          self.photoTitleLabel.shadowOffset = CGSizeMake(3, 3);
      } else {
          self.photoTitleLabel.shadowColor = nil;
      }
  }
  @end
  </code></pre>
          <p>总的来说，我们在努力把 view 层和 controller 层的实现细节分离开。delegate 肯定得清楚一个 view 该显示什么状态，但是它不应该了解如何修改 view 结构或者给某些 subviews 设置某些属性以获得正确的状态。所有这些逻辑都应该封装到 view 内部，然后给外部提供一个简单的 API。</p>
          <h3 id="-cell-">控制多个 Cell 类型</h3>
          <p>如果一个 table view 里面有多种类型的 cell，data source 方法很快就难以控制了。在我们示例程序中，photo details table 有两种不同类型的 cell：一种用于显示几个星，另一种用来显示一个键值对。为了划分处理不同 cell 类型的代码，data source 方法简单地通过判断 cell 的类型，把任务派发给其他指定的方法。</p>
          <pre><code>- (UITableViewCell *)tableView:(UITableView *)tableView
           cellForRowAtIndexPath:(NSIndexPath *)indexPath
  {
      NSString *key = self.keys[(NSUInteger) indexPath.row];
      id value = [self.photo valueForKey:key];
      UITableViewCell *cell;
      if ([key isEqual:PhotoRatingKey]) {
          cell = [self cellForRating:value indexPath:indexPath];
      } else {
          cell = [self detailCellForKey:key value:value];
      }
      return cell;
  }

  - (RatingCell *)cellForRating:(NSNumber *)rating
                      indexPath:(NSIndexPath *)indexPath
  {
      // ...
  }

  - (UITableViewCell *)detailCellForKey:(NSString *)key
                                  value:(id)value
  {
      // ...
  }
  </code></pre>
          <h3 id="-table-view">编辑 Table View</h3>
          <p>Table view 提供了易于使用的编辑特性，允许你对 cell 进行删除或重新排序。这些事件都可以让 table view 的 data source 通过 <a href="http://developer.apple.com/library/ios/#documentation/uikit/reference/UITableViewDataSource_Protocol/Reference/Reference.html#//apple_ref/occ/intfm/UITableViewDataSource/tableView:commitEditingStyle:forRowAtIndexPath:">delegate 方法</a>得到通知。因此，通常我们能在这些
            delegate 方法中看到对数据的进行修改的操作。</p>
          <p>修改数据很明显是属于 model 层的任务。Model 应该为诸如删除或重新排序等操作暴露一个 API，然后我们可以在 data source 方法中调用它。这样，controller 就可以扮演 view 和 model 之间的协调者，而不需要知道 model 层的实现细节。并且还有额外的好处，model 的逻辑也变得更容易测试，因为它不再和 view controllers 的任务混杂在一起了。</p>
          <h2 id="-">总结</h2>
          <p>Table view controllers（以及其他的 controller 对象！）应该在 model 和 view 对象之间扮演<a href="http://developer.apple.com/library/mac/#documentation/General/Conceptual/DevPedia-CocoaCore/ControllerObject.html">协调者和调解者的角色</a>。它不应该关心明显属于 view 层或 model 层的任务。你应该始终记住这点，这样
            delegate 和 data source 方法会变得更小巧，最多包含一些简单的样板代码。</p>
          <p>这不仅减少了 table view controllers 那样的大小和复杂性，而且还把业务逻辑和 view 的逻辑放到了更合适的地方。Controller 层的里里外外的实现细节都被封装成了简单的 API，最终，它变得更加容易理解，也更利于团队协作。</p>
          <h3 id="-">扩展阅读</h3>
          <ul>
            <li><a href="http://www.sebastianrehnby.com/blog/2013/01/01/skinnier-controllers-using-view-categories/">Blog: Skinnier Controllers using View Categories</a></li>
            <li><a href="http://developer.apple.com/library/ios/#documentation/userexperience/conceptual/tableview_iphone/AboutTableViewsiPhone/AboutTableViewsiPhone.html">Table View Programming Guide</a></li>
            <li><a href="http://developer.apple.com/library/mac/#documentation/General/Conceptual/DevPedia-CocoaCore/ControllerObject.html">Cocoa Core Competencies: Controller Object</a></li>
          </ul>
          <hr>
          <p>原文<a href="http://www.objc.io/issue-1/table-views.html">Clean table view code</a></p>
          <p>译文<a href="http://tang3w.com/translate/objective-c/objc.io/2013/10/23/整理-table-view-的代码.html">整理 Table View 的代码 - 言无不尽</a></p>

        </div>
        <div class="article-author-detail">
          <div class="article-author">
            <div class="article-author-title">
              译者简介
            </div>
            <figure class="artical-media_image artical-author-photo">
              <img width="300" height="300" src="/images/issues/authors/2014/Mar/2226563.jpg">
            </figure>
            <div class="article-author-body">
              <h4 class="article-author-body">
                      <a href="http://tang3w.com"> 唐天勇 </a>
                  </h4>
              <div class="article-author-bio">
                <p>iOS 开发者</p>
              </div>
            </div>
          </div>
          <hr>
        </div>

</div>
</div>
        <footerView>
        </footerView>


      </div>
</template>

<script>
import navgationBar from './navigationBar'
import bookCard from './bookCard'
import footerView from './footerView'

export default {
  components: {
    navgationBar,
    bookCard,
    footerView
  },
  data() {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username: '',
      activeClass: 'navbar-item-select'
    }
  },
  methods: {
    aboutClick() {
      this.isShowAboutDialog = true
    },
    logClick() {
      this.isShowLogDialog = true
    },
    regClick() {
      this.isShowRegDialog = true
    },
    closeDialog(attr) {
      this[attr] = false
    },
    onSuccessLog(data) {

    }
  }
}
</script>

<style>
@import '../style/style.css';
@import '../style/bootstrap-flat.min.css';
</style>
