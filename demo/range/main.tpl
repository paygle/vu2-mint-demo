<div class="page-range">
  <h1 class="page-title">Range</h1>
  <p class="page-range-header">基本功能</p>
  <mt-cell v-for="(item,idx) in cells1" :key="idx" :title="item.title" :label="'value:' + item.value">
    <mt-range v-model="item.value">
      <div slot="start" v-if="item.start">{{ item.start }}</div>
      <div slot="end" v-if="item.end">{{ item.end }}</div>
    </mt-range>
  </mt-cell>
  <p class="page-range-header">自定义</p>
  <mt-cell v-for="(item,idx) in cells2" :key="idx" :title="item.title" :label="'value:' + item.value">
    <mt-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1" :bar-height="item.barHeight || 1" :disabled="item.disabled">
      <div slot="start" v-if="item.start">{{ item.start }}</div>
      <div slot="end" v-if="item.end">{{ item.end }}</div>
    </mt-range>
  </mt-cell>
  <p class="page-range-header">场景举例</p>
  <mt-cell v-for="(item,idx) in cells3" :key="idx" :title="item.title" :label="'value:' + item.value">
    <mt-range v-model="item.value" :min="item.min || 0" :max="item.max || 100" :step="item.step || 1">
      <div slot="start" v-if="item.start" :style="{ 'font-size': item.start + 'px' }">{{ item.start }}</div>
      <div slot="end" v-if="item.end" :style="{ 'font-size': item.end + 'px' }">{{ item.end }}</div>
    </mt-range>
  </mt-cell>
</div>