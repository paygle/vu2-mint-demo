<div class="page-swipe">
  <h1 class="page-title">Swipe</h1>
  <p class="page-swipe-desc">基础用法</p>
  <mt-swipe :auto="4000">
    <mt-swipe-item class="slide1">1</mt-swipe-item>
    <mt-swipe-item class="slide2">2</mt-swipe-item>
    <mt-swipe-item class="slide3">3</mt-swipe-item>
  </mt-swipe>

  <p class="page-swipe-desc">隐藏 indicators</p>
  <mt-swipe :show-indicators="false">
    <mt-swipe-item class="slide1">1</mt-swipe-item>
    <mt-swipe-item class="slide2">2</mt-swipe-item>
    <mt-swipe-item class="slide3">3</mt-swipe-item>
  </mt-swipe>

  <p class="page-swipe-desc">取消自动播放</p>
  <mt-swipe :auto="0">
    <mt-swipe-item class="slide1">1</mt-swipe-item>
    <mt-swipe-item class="slide2">2</mt-swipe-item>
    <mt-swipe-item class="slide3">3</mt-swipe-item>
  </mt-swipe>

  <p class="page-swipe-desc">设置默认显示页</p>
  <mt-swipe :auto="0" :defaultIndex="1">
    <mt-swipe-item class="slide1">1</mt-swipe-item>
    <mt-swipe-item class="slide2">2</mt-swipe-item>
    <mt-swipe-item class="slide3">3</mt-swipe-item>
  </mt-swipe>

  <p class="page-swipe-desc">单个幻灯片</p>
  <mt-swipe :show-indicators="false">
    <mt-swipe-item class="slide1">SINGLE SLIDE</mt-swipe-item>
  </mt-swipe>
</div>