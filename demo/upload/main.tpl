<div class="page-upload">
  <h1 class="page-title">Upload</h1>
  <div class="page-upload-wrapper">
      <h3>点击上传</h3>
      <mt-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList">
        <mt-button type="primary">点击上传</mt-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </mt-upload>
      <h3>照片墙</h3>
      <mt-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar"> -->
        <i class="mintui-bigplus avatar-uploader-icon"></i>
      </mt-upload>

      <h3>图片列表缩略图</h3>
      <mt-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList2"
        list-type="picture">
        <mt-button type="primary">点击上传</mt-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </mt-upload>
  </div>
</div>