<div class="page-cell">
  <div class="page-title">Cell Swipe</div>
  <mt-cell-swipe
    v-for="n in 10"
    :key="n"
    :param="n"
    :right="rightButtons"
    title="swipe me">
  </mt-cell-swipe>
</div>