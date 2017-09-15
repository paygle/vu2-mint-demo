<div class="page-loadmore">
  <h1 class="page-title">Pull down</h1>
  <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
  <p class="page-loadmore-desc">此例请使用手机查看</p>
  <p class="page-loadmore-desc">translate : {{ translate }}</p>
  <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
    translateScale : {{ moveTranslate }} 
  </div>
  <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
      <ul class="page-loadmore-list">
        <li v-for="(item,idx) in list" :key="idx" class="page-loadmore-listitem">{{ item }}</li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
    </mt-loadmore>
  </div>
</div>