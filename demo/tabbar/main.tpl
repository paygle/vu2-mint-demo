<div class="page-tabbar">
  <div class="page-wrap">
    <div class="page-title">Tabbar</div>
    <div>
      <mt-cell class="page-part" title="当前选中" :value="selected" />
    </div>

    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="外卖">
        <mt-cell v-for="n in 10" :key="n" :title="'餐厅 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="订单">
        <mt-cell v-for="n in 5" :key="n" :title="'订单 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <mt-cell v-for="n in 7" :key="n" :title="'发现 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <div class="page-part">
          <mt-cell v-for="n in 12" :key="n" :title="'我的 ' + n" />
        </div>
        <router-link to="/">
          <mt-button type="danger" size="large">退出</mt-button>
        </router-link>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

  <mt-tabbar v-model="selected" fixed>
    <mt-tab-item id="外卖">
      <img slot="icon" src="../img/100x100.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="订单">
      <img slot="icon" src="../img/100x100.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="../img/100x100.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../img/100x100.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>