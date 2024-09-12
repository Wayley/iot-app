import type { BleDeviceInfo } from '@/modules/BleManager/BleDeviceInfo';
import type { DevicePlatformInfo } from './DevicePlatformInfo';

/**
 * 设备信息
 *
 * 包括
 *
 * - 蓝牙广播出来的设备信息
 * - 平台注册/上报的设备信息
 * - 运行时状态信息(蓝牙连接状态/WiFi在线状态)
 */
export interface DeviceInfo extends DevicePlatformInfo, BleDeviceInfo {
  /** 是否WiFi在线 */
  isWiFiOnline?: boolean;

  /** 是否蓝牙已连接 */
  isBTConnected?: boolean;
}
