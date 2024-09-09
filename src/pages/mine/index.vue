<template>
  <view>
    <view class="status-bar-placeholder" />
    Mine
  </view>
</template>

<script setup lang="ts">
import BleManager from '@/modules/BleManager';
import System from '@/modules/System';
import SystemURLEnum from '@/modules/System/enums/SystemURLEnum';
import { useBluetoothAdapterStateStore } from '@/stores/bluetoothAdapterState';
import { onShow } from '@dcloudio/uni-app';

const bleManager = BleManager.getInstance(['2222']);

const store = useBluetoothAdapterStateStore();

store.$subscribe(async (mutation, state) => {
  console.warn(mutation, state);
  if (!state.available) {
    const { confirm, cancel } = await uni.showModal({ title: '蓝牙适配器不可用', content: '是否打开蓝牙适配器开关?' });
    if (/*打开系统蓝牙设置*/ confirm) System.openSystemSetting(SystemURLEnum.BLUETOOTH);
    if (cancel) uni.navigateBack();
  }
});
onShow(async () => {
  try {
    console.log('开始');
    await bleManager.openAdapter();
  } catch (e) {
    console.error(e);
  }
});
</script>

<style scoped lang="scss"></style>
