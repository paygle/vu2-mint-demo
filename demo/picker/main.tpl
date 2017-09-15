<div class="page-picker">
  <h1 class="page-title">Picker</h1>
  <div class="page-picker-wrapper">
    <mt-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="3"></mt-picker>
  </div>
  <p class="page-picker-desc">出生年份: {{ year }}</p>

  <div class="page-picker-wrapper">
    <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="3"></mt-picker>
  </div>
  <p class="page-picker-desc">在校时间: {{ dateStart }} 至 {{ dateEnd }}</p>

  <div class="page-picker-wrapper">
    <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
  </div>
  <p class="page-picker-desc">地址: {{ addressProvince }} {{ addressCity }}</p>
  
  <!-- defaultIndex 参数变化 -->
  <div class="page-picker-wrapper">
    <mt-picker :slots="numberSlot" @change="onNumberChange" :visible-item-count="3"></mt-picker>
  </div>
  <p class="page-picker-desc">动态默认选项: {{ number }}</p>
</div>