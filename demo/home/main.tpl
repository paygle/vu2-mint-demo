<section class="page-demo">
  <div v-for="(group, gidx) in navs" :key="gidx">
    <div class="page-title" v-text="group.title"></div>
    <mt-cell
      v-for="(item, index) in group.list"
      :key="index"
      :to="'/example.html#' + item.path"
      is-link>
      <div slot="title">
        <i :class="['indexicon', 'icon-' + item.icon]"></i>
        <span>{{ item.name }}</span>
      </div>
    </mt-cell>
  </div>
</section>