<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />
    <view class="content">
      <view>ENV: {{ env }}</view>

      <button @click="goDiscoveryPage">+</button>
      <view v-for="i in 9">
        <button @click="goDetailPage(`A8:C2:37:00:01:0${i}`)">{{ `A8:C2:37:00:01:0${i}` }}</button>
      </view>
    </view>
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import { type DeviceInfo } from '@/modules/Device/DeviceInfo';
import DeviceNetworkModelEnum from '@/modules/Device/enums/DeviceNetworkModelEnum';
import DeviceProductEnum from '@/modules/Device/enums/DeviceProductEnum';
import { useSelectedDeviceInfoStore } from '@/stores/selectedDeviceInfo';
import { ref } from 'vue';

const env = import.meta.env.VITE_ENV_VARIABLE;
const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);

function goDiscoveryPage() {
  uni.navigateTo({ url: '/pages/discovery/index' });
}

function goDetailPage(deviceId: string) {
  const selectedDeviceInfo: DeviceInfo = {
    id: 0,
    macAddr: deviceId,
    clientId: 'ASDFQAZWSDF',
    deviceType: DeviceNetworkModelEnum.WIFI,
    online: false,
    productKey: DeviceProductEnum.ES_HOST,
    deviceId,
  };
  const store = useSelectedDeviceInfoStore();
  store.$patch({ selectedDeviceInfo });
  uni.switchTab({ url: '/pages/device/index' });
}
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
