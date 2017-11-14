<div class="page-digital">
  <h1 class="page-title">digital</h1>
  <div class="page-digital-wrapper">

    <mo-digital
      label="数字格式化"
      placeholder="请输入数字"
      type="number"
      v-model="num"
      :precision="5"
      :validate="validate"
      @update-validate="updateValidate" formated>
    </mo-digital>
    <mo-digital
      label="百分比"
      placeholder="请输入数字"
      type="percent"
      v-model="num"
      :precision="1"
      :validate="validate"
      @update-validate="updateValidate">
    </mo-digital>
    <mo-digital
      label="千分比"
      placeholder="请输入数字"
      type="permillage"
      v-model="num"
      :precision="1"
      :validate="validate"
      @update-validate="updateValidate">
    </mo-digital>
    <mt-button type="primary" @click="submit">提交</mt-button>
  </div>
</div>