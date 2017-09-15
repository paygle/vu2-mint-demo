<div class="page-radio">
  <div class="page-title">radio</div>

  <mt-radio
    class="page-part"
    title="单选框列表"
    v-model="value1"
    :options="options1" />
  <div>
    <mt-cell title="选中的项">{{ value1 }}</mt-cell>
  </div>

  <mt-radio
    class="page-part"
    title="第二个单选框列表"
    v-model="value2"
    :options="options2" />
  <div>
    <mt-cell title="选中的项">{{ value2 }}</mt-cell>
  </div>

  <mt-radio
    align="right"
    class="page-part"
    title="右对齐"
    v-model="value3"
    :options="options3" />
</div>