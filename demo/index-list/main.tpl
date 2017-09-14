<div class="page-indexlist">
  <h1 class="page-title">Index List</h1>
  <p class="page-indexlist-desc">此例请使用手机查看</p>
  <div class="page-indexlist-wrapper">
    <mt-index-list>
      <mt-index-section v-for="(item, idx) in alphabet" :key="idx" :index="item.initial">
        <mt-cell v-for="(cell, id1) in item.cells" :key="id1" :title="cell"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</div>