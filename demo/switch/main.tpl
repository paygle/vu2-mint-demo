<div class="page-switch">
  <div class="page-title">Switch</div>
  <div class="page-part page-switch-padding">
    <mt-switch v-model="value1" switch-on="开森"  switch-off="不开森" @change="handleChange">
      <label v-text="value1"></label>
    </mt-switch>
  </div>

  <div class="page-part page-switch-padding">
    <mt-switch v-model="value3" @change="handleChange">
      <label v-text="value3"></label>
    </mt-switch>
  </div>

  <mt-cell :title="'选项 ' + value2">
    <mt-switch v-model="value2"  :switch-on="1"  :switch-off="0" @change="handleChange"></mt-switch>
  </mt-cell>
  <mt-cell :title="'选项 ' + value4">
    <mt-switch disabled switch-on="on"  switch-off="off" color-off="#26a2ff" color-on="red" v-model="value4" @change="handleChange"></mt-switch>
  </mt-cell>
</div>