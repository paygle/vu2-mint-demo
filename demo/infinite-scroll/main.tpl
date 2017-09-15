<div class="page-infinite">
  <h1 class="page-title">Infinite Scroll</h1>
  <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
  <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <li v-for="(item, idx) in list" :key="idx" class="page-infinite-listitem">{{ item }}</li>
    </ul>
    <p v-show="loading" class="page-infinite-loading">
      <mt-spinner type="fading-circle"></mt-spinner>
      加载中...
    </p>
  </div>
</div>