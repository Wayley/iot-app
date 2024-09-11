<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />

    <view class="content">
      <button @click="init">Refreah</button>

      <view>
        <button @click="() => connect(bleDeviceInfo)" v-for="bleDeviceInfo in discoveredDevices">{{ bleDeviceInfo.deviceId }}</button>
      </view>
    </view>
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import BleManager from '@/modules/BleManager';
import { type BleDeviceInfo } from '@/modules/BleManager/BleDeviceInfo';
import { type BleManagerError } from '@/modules/BleManager/BleManagerError';
import System from '@/modules/System';
import SystemURLEnum from '@/modules/System/enums/SystemURLEnum';
import { Timeout } from '@/modules/Timer/Timeout';
import { useDiscoveredDevicesStore } from '@/stores/discoveredDevices';
import { useSelectedDeviceInfoStore } from '@/stores/selectedDeviceInfo';
import { onLoad } from '@dcloudio/uni-app';
import { onUnmounted, Ref, ref } from 'vue';

const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);
const bleManager = BleManager.getInstance(['0000FF00-0000-1000-8000-00805F9B34FB']);
const stopScanTimer = new Timeout(2500, async () => await bleManager.stopScan());

const discoveredDevices: Ref<BleDeviceInfo[]> = ref([]);

const store = useDiscoveredDevicesStore();
store.$subscribe((mutation, state) => {
  discoveredDevices.value = [...state.discoveredDevices];
});
onLoad(() => init());
onUnmounted(async () => {
  if (!stopScanTimer.excuted) {
    console.warn('onUnmounted-', stopScanTimer.excuted);
    stopScanTimer.clear();
    await bleManager.stopScan();
  }
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
    if (/*iOS中未授权*/ System.isIOS && code == 10000) {
      const { confirm, cancel } = await uni.showModal({ title: '蓝牙位置权限未授权', content: '是否进行授权?' });
      if (confirm) uni.openAppAuthorizeSetting();
      if (cancel) uni.navigateBack();
    }
    if (/*蓝牙适配器不可用*/ code == 10001) {
      const { confirm, cancel } = await uni.showModal({ title: '蓝牙适配器不可用', content: '是否打开蓝牙适配器开关?' });
      if (/*打开系统蓝牙设置*/ confirm) System.openSystemSetting(SystemURLEnum.BLUETOOTH);
      if (cancel) uni.navigateBack();
    }
  }
  // 蓝牙权限检测
  if (System.isAndroid) {
    const Build = plus.android.importClass('android.os.Build');
    let permissions = ['android.permission.ACCESS_FINE_LOCATION'];

    // @ts-ignore
    if (Build.VERSION.SDK_INT >= 31) permissions.push('android.permission.BLUETOOTH_SCAN');
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
  } else if (System.isIOS) {
    startScan();
  }
}

async function startScan() {
  console.warn('开始扫描');
  try {
    await bleManager.startScan();
    stopScanTimer.start();
  } catch (e) {
    console.error(e);
  }
}

function connect(selectedDeviceInfo: BleDeviceInfo) {
  useSelectedDeviceInfoStore().$patch({ selectedDeviceInfo });
  uni.switchTab({ url: '/pages/device/index' });
}
</script>
<style scoped lang="scss"></style>
