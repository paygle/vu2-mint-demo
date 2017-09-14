<div class="page-datetime">
  <h1 class="page-title">Datetime Picker</h1>
  <div class="page-datetime-wrapper">
    <mt-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</mt-button>
    <mt-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</mt-button>
    <mt-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</mt-button>
    <mt-button @click.native="open('picker4')" size="large">自定义模板</mt-button>
    <mt-button @click.native="open('picker5')" size="large">设定初始值</mt-button>
  </div>
  <mt-datetime-picker
    ref="picker1"
    v-model="value"
    @confirm="handleChange">
  </mt-datetime-picker>
  <mt-datetime-picker
    ref="picker2"
    type="date"
    v-model="value2"
    @confirm="handleChange">
  </mt-datetime-picker>
  <mt-datetime-picker
    ref="picker3"
    type="time"
    v-model="value3"
    @confirm="handleChange">
  </mt-datetime-picker>
  <mt-datetime-picker
    ref="picker4"
    type="date"
    v-model="value4"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @confirm="handleChange">
  </mt-datetime-picker>
  <mt-datetime-picker
    ref="picker5"
    type="time"
    v-model="value5"
    @confirm="handleChange">
  </mt-datetime-picker>
</div>