<div class="page-poplist">
  <h1 class="page-title">Poplist</h1>
  <div class="page-poplist-wrapper">
    <mt-field label="选择输入" v-model="content">
      <img @click="changePop" src="img/more.png" height="30px" width="30px">
    </mt-field>
  </div>
  <mo-poplist 
    v-model="isOpen"
    :query="content" 
    :data="defaultResult" 
    filter-field="name"
    @changed="selectChanged">
    <template scope="scope">
      <div class="list-item" v-for="(item, index) in scope.data" :key="index" v-text="item.name" @click="scope.getContent(item)"></div>
    </template>
  </mo-poplist>
</div>