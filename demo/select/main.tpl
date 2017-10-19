<div class="page-select">
  <h1 class="page-title">select</h1>
  <div class="page-select-wrapper">

    <mo-select label="选项" v-model="select" placeholder="请输入" :options-data="options">
      <mo-option val="1" label="选项1"></mo-option>
      <mo-option val="2" label="选项2"></mo-option>
      <mo-option val="3" label="选项3"></mo-option>
    </mo-select>

    <mo-select
      label="参数" 
      placeholder="请输入类型"  
      v-model="selectp" 
      :fill-options="fillParamOptions">
    </mo-select>

    <mo-select
      label="类型" 
      placeholder="请输入类型"  
      v-model="selectM" 
      @change="getItems"
      :fill-options="fillOptions" 
      :fill-params="combParam">
    </mo-select>

  </div>
</div>