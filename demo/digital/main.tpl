<div class="page-digital">
  <h1 class="page-title">digital</h1>
  <div class="page-digital-wrapper">

    <mo-digital 
      label="数字" 
      placeholder="请输入数字" 
      type="number" 
      v-model="num" 
      ref="digital"
      :validate="validate" 
      @update-validate="updateValidate" formated>
    </mo-digital>
    <mt-button type="primary" @click="submit">提交</mt-button>
  </div>
</div>