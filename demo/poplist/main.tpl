<div class="page-poplist">
  <h1 class="page-title">Poplist</h1>
  <div class="page-poplist-wrapper" style="height: 1000px;">
    <mt-field label="选择输入1" v-model="content1">
      <img @click="changePop1" src="img//more.png" height="30px" width="30px">
    </mt-field>
    <mt-field label="选择输入2" v-model="content2">
      <img @click="changePop2" src="img//more.png" height="30px" width="30px">
    </mt-field>
  </div>
  <mo-poplist 
    v-model="isOpen1"
    :query="content1" 
    :data="defaultResult" 
    filter-field="name"
    @changed="selectChanged1">
    <template scope="scope">
       <div class="list-item" v-for="(item, index) in scope.data" :key="index" v-text="item.name" @click="scope.getContent(item)"></div>
    </template>
  </mo-poplist>
  <mo-poplist 
    v-model="isOpen2"
    :query="content2" 
    :data="defaultResult" 
    filter-field="name"
    @changed="selectChanged2">
    <template scope="scope">
       <div class="list-item" v-for="(item, index) in scope.data" :key="index" v-text="item.name" @click="scope.getContent(item)"></div>
    </template>
  </mo-poplist>
</div>