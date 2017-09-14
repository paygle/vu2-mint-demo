<div class="page-checklist">
  <div class="page-title">Checklist</div>

  <mt-checklist
    class="page-part"
    title="复选框列表"
    v-model="value1"
    :options="options1">
  </mt-checklist>

  <div>
    <mt-cell title="选中的项">{{ value1 }}</mt-cell>
  </div>

  <mt-checklist
    class="page-part"
    title="第二个复选框列表"
    v-model="value2"
    :options="options2">
  </mt-checklist>

  <div>
    <mt-cell title="选中的项">{{ value2 }}</mt-cell>
  </div>

  <mt-checklist
    class="page-part"
    title="最多选两个"
    :max="2"
    v-model="value3"
    :options="options3">
  </mt-checklist>

  <div>
    <mt-cell title="选中的项">{{ value3 }}</mt-cell>
  </div>

  <mt-checklist
    align="right"
    class="page-part"
    title="右对齐"
    v-model="value4"
    :options="options4">
  </mt-checklist>
</div>