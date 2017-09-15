<div class="page-tab-container-wrapper">
  <div class="nav">
    <mt-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</mt-button>
    <mt-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</mt-button>
    <mt-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</mt-button>
  </div>
  <div class="page-tab-container">
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
      <mt-tab-container-item id="tab-container1">
        <mt-cell v-for="n in 10" :key="n" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2">
        <mt-cell v-for="n in 5" :key="n" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3">
        <mt-cell v-for="n in 7" :key="n" title="tab-container 3"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</div>