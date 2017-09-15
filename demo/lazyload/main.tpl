<div class="page-lazyload">
  <h1 class="page-title">Lazy Load</h1>
  <ul class="page-lazyload-list">
    <li class="page-lazyload-listitem" v-for="(item,idx) in list" :key="idx">
      <img v-lazy="item" class="page-lazyload-image">
    </li>
  </ul>
</div>