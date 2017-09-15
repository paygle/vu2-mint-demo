<div class="page-popup">
  <h1 class="page-title">Popup</h1>
  <div class="page-popup-wrapper">
    <mt-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</mt-button>
    <mt-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</mt-button>
    <mt-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</mt-button>
    <mt-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</mt-button>
  </div>
  <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
    <h1>popup</h1>
    <p>/ ˈpɑpˌʌp /</p>
    <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
    <p>adj. 弹起的; 有自动起跳装置的</p>
  </mt-popup>
  <mt-popup v-model="popupVisible2" position="top" class="mint-popup-2" :modal="false">
    <p>更新成功</p>
  </mt-popup>
  <mt-popup v-model="popupVisible3" position="right" class="mint-popup-3" :modal="false">
    <mt-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</mt-button>
  </mt-popup>
  <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
    <mt-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></mt-picker>
  </mt-popup>
</div>