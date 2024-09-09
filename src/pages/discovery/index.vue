<template>
  <view>
    <view class="status-bar-placeholder" />
    <view class="content">
      <button @click="init">Refreah</button>

      <view>
        <button @click="() => connect(i)" v-for="(device, i) in list">{{ device.deviceId }}</button>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import BleManager from '@/modules/BleManager';
import { type BleDeviceInfo } from '@/modules/BleManager/BleDeviceInfo';
import { type BleManagerError } from '@/modules/BleManager/BleManagerError';
import System from '@/modules/System';
import SystemURLEnum from '@/modules/System/enums/SystemURLEnum';
import { onLoad, onShow } from '@dcloudio/uni-app';
import { Ref, ref } from 'vue';

const bleManager = BleManager.getInstance(['0000FF00-0000-1000-8000-00805F9B34FB']);

const list: Ref<BleDeviceInfo[]> = ref([]);

onLoad(() => {
  init();
});
onShow(() => {
  console.warn('onShow');
});

/**
 * 1. 检测蓝牙适配器是否打开
 *    - 未打开需要跳转到系统蓝牙设置页
 * 2. 检测蓝牙扫描权限
 *    - 临时拒绝的权限-需要再次申请该权限
 *    - 永久拒绝的权限-需要跳转到设置页开启权限
 * 3. 开始扫描附件的蓝牙设备
 */
async function init() {
  // 蓝牙适配器初始化
  try {
    await bleManager.openAdapter();
  } catch (e) {
    console.error(e);
    const { code } = e as BleManagerError;
    if (/*蓝牙适配器不可用*/ code == 10001) {
      const { confirm, cancel } = await uni.showModal({ title: '蓝牙适配器不可用', content: '是否打开蓝牙适配器开关?' });
      if (/*打开系统蓝牙设置*/ confirm) System.openSystemSetting(SystemURLEnum.BLUETOOTH);
      if (cancel) uni.navigateBack();
    }
  }
  const permissions = ['android.permission.ACCESS_FINE_LOCATION', 'android.permission.BLUETOOTH_SCAN'];
  plus.android.requestPermissions(
    permissions,
    async ({ deniedAlways, deniedPresent, granted }) => {
      // 权限被永久拒绝 - 弹框提示需要权限 - 引导用户打开设置页面开启权限
      if (deniedAlways.length > 0) {
        const { confirm, cancel } = await uni.showModal({ title: '蓝牙位置权限未授权', content: '是否进行授权?' });
        if (confirm) uni.openAppAuthorizeSetting();
        if (cancel) uni.navigateBack();
      }
      // 权限被临时拒绝 - 再次申请
      if (deniedPresent.length > 0) {
        plus.android.requestPermissions(
          deniedPresent,
          ({ granted }) => granted.length == deniedPresent.length && startScan(),
          (e) => console.error('Request Permissions error:', e)
        );
      }

      if (granted.length == permissions.length) startScan();
    },
    (e) => console.error('Request Permissions error:', e)
  );
}

async function startScan() {
  console.warn('开始扫描');
  try {
    await bleManager.startScan();
    setTimeout(async () => await bleManager.stopScan(), 5000);
  } catch (e) {
    console.error(e);
  }
}

function connect(index: number) {}
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
