<div class="page-address">
  <h1 class="page-title">select</h1>
  <div class="page-address-wrapper">
    <mo-address
      label="地址选择"
      placeholder="请选择地址"
      cancel-text="放弃"
      confirm-text="选择"
      :visible-item-count="5"
      v-model="addr" 
      :data="adrdata">
    </mo-address>
  </div>
</div>