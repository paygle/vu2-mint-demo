<div class="page-search">
  <mt-search autofocus v-model="value" :query="query" :loading.sync="loading">
    <template scope="scope">
      <div v-for="(item, index) in scope.result" :key="index" v-text="item"></div>
    </template>
  </mt-search>
</div>