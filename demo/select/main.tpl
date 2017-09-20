<div class="page-select">
  <h1 class="page-title">select</h1>
  <div class="page-select-wrapper">

    <mo-select label="类型1" placeholder="请选择" v-model="select1">
      <mo-option val="1" label="选项1"></mo-option>
      <mo-option val="2" label="选项2"></mo-option>
      <mo-option val="3" label="选项3"></mo-option>
    </mo-select>

    <mo-select 
      label="类型2"
      placeholder="请选择"
      v-model="select2"  
      :options-data="options">
    </mo-select>
    
    <mo-select 
      label="类型3" 
      placeholder="请选择类型"  
      v-model="select3" 
      :fill-options="fillOptions" 
      fill-params="xxx">
    </mo-select>
  </div>
</div>