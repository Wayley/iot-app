import { ref } from 'vue';

export interface Config {
  /** Toast组件提示延时关闭时间 ms */
  TOAST_DURATION: number;

  /** 蓝牙适配器自动停止扫描延时 ms */
  BT_SCANNING_AUTO_STOP_DELAY: number;

  /** 蓝牙连接超时 ms */
  BLE_CONNECTING_TIMEOUT: number;

  /** 蓝牙指令响应超时 ms */
  BLE_RESPONSE_TIMEOUT: number;

  /** 蓝牙指令响应失败重试次数 */
  BLE_RETRY_TIMES: number;

  /** 蓝牙指令响应失败重试超时 */
  BLE_RETRY_TIMEOUT: number;

  /** 蓝牙进行WiFi配网超时 ms */
  BLE_WIFI_STA_SET_TIMEOUT: number;

  /** 设备向平台轮询时间间隔 ms */
  DEVICE_POLLING_TO_PLATFORM_INTERVAL: number;

  /** 设备信息MQTT上报间隔时间 ms */
  DEVICE_MQTT_REPORTING_INTERVAL: number;
}

export const CONFIG_DEFALT: Config = {
  TOAST_DURATION: 1500,
  BT_SCANNING_AUTO_STOP_DELAY: 7000,
  BLE_CONNECTING_TIMEOUT: 4500,
  BLE_RESPONSE_TIMEOUT: 2500,
  BLE_RETRY_TIMES: 2,
  BLE_RETRY_TIMEOUT: 6,
  BLE_WIFI_STA_SET_TIMEOUT: 15000,
  DEVICE_POLLING_TO_PLATFORM_INTERVAL: 2000,
  DEVICE_MQTT_REPORTING_INTERVAL: 0,
};

export function useConfig() {
  const config = ref<Config>({ ...CONFIG_DEFALT });
  return { config };
}

export default useConfig;
