<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />
    Device ID:{{ deviceInfo?.deviceId }}
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import type { DeviceInfo } from '@/modules/Device/DeviceInfo';
import { useHistoryDevicesStore } from '@/stores/historyDevices';
import { useSelectedDeviceInfoStore } from '@/stores/selectedDeviceInfo';
import { onHide, onShow } from '@dcloudio/uni-app';

import { nextTick, type Ref, ref } from 'vue';

const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);
const deviceInfo: Ref<DeviceInfo | null> = ref(null);

onShow(() => {
  const selectedDeviceInfo = checkSelectedDeviceInfo();
  if (selectedDeviceInfo) {
    deviceInfo.value = { ...selectedDeviceInfo };
  } else {
    const options = { content: '请先选择设备', duration: 500, complete: () => uni.switchTab({ url: '/pages/index/index' }) };
    if (globalProvider.value) {
      globalProvider.value.showToast(options);
    } else {
      nextTick(() => globalProvider.value?.showToast(options));
    }
  }
});

onHide(() => {
  // 离开页面时, 重置当前数据
  useSelectedDeviceInfoStore().$patch({ selectedDeviceInfo: null });
});

function checkSelectedDeviceInfo(): DeviceInfo | undefined {
  // 点击选中的设备
  const selectedDeviceInfoStore = useSelectedDeviceInfoStore();
  if (selectedDeviceInfoStore.selectedDeviceInfo) return selectedDeviceInfoStore.selectedDeviceInfo;

  // 历史设备中第一个在线的设备
  const historyDevicesStore = useHistoryDevicesStore();
  if (historyDevicesStore.historyDevices) return historyDevicesStore.historyDevices.find((o) => o.isBTConnected || o.isWiFiOnline);

  return undefined;
}
</script>

<style scoped lang="scss"></style>
