<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />
    <view class="content">
      <view>ENV: {{ env }}</view>

      <button @click="goDiscoveryPage">+</button>
      <template v-show="store.historyDevices.length > 0">
        <view>历史设备</view>
        <view v-for="deviceInfo in store.historyDevices">
          <button @click="goDetailPage(deviceInfo)" style="width: 45vw">{{ deviceInfo.macAddr }}</button>
        </view>
      </template>
    </view>
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import type { DeviceInfo } from '@/modules/Device/DeviceInfo';
import { useHistoryDevicesStore } from '@/stores/historyDevices';
import { useSelectedDeviceInfoStore } from '@/stores/selectedDeviceInfo';
import { ref } from 'vue';

const env = import.meta.env.VITE_ENV_VARIABLE;
const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);
const store = useHistoryDevicesStore();

function goDiscoveryPage() {
  uni.navigateTo({ url: '/pages/discovery/index' });
}

function goDetailPage(selectedDeviceInfo: DeviceInfo) {
  useSelectedDeviceInfoStore().$patch({ selectedDeviceInfo });
  uni.switchTab({ url: '/pages/device/index' });
}
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
