<div class="page-progress">
  <h1 class="page-title">Progress</h1>
  <mt-cell title="默认">
    <mt-progress></mt-progress>
  </mt-cell>
  <mt-cell title="设置 value">
    <mt-progress :value="20"></mt-progress>
  </mt-cell>
  <mt-cell title="左右文字">
    <mt-progress :value="40">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </mt-progress>
  </mt-cell>
  <mt-cell title="定义线宽">
    <mt-progress :value="60" :bar-height="5"></mt-progress>
  </mt-cell>
  <div class="page-progress-wrapper">
    <mt-button size="large" type="primary" @click.native="uploadFile">上传文件</mt-button>
    <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">
      <div slot="end">{{ value }}%</div>
    </mt-progress>
  </div>
</div>