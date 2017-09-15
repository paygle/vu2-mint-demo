<div class="page-loadmore">
  <h1 class="page-title">Pull up</h1>
  <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
  <p class="page-loadmore-desc">此例请使用手机查看</p>
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="page-loadmore-list">
        <li v-for="(item,idx) in list" :key="idx" class="page-loadmore-listitem">{{ item }}</li>
      </ul>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
        <span v-show="bottomStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>
  </div>
</div>