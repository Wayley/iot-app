<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
onLaunch(() => {
  console.log('App Launch');
  try {
    uni.openBluetoothAdapter();
    uni.onBluetoothAdapterStateChange(function (res) {
      console.log('adapterState changed, now is', res);
    });
    uni.onBLECharacteristicValueChange(function (res) {
      console.warn('adapterState changed, now is', res);
    });
    uni.createBLEConnection({
      deviceId: 'AA:C2:37:00:03:A4',
      success: () => {
        console.log('success');
      },
      fail: (e) => {
        console.log('fail', e);
      },
    });
  } catch (e) {
    console.error(e);
  }
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style lang="scss">
@import '@/static/styles/common.scss';
</style>
