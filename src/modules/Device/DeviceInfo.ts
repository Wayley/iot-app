import { BleDeviceInfo } from '@/modules/BleManager/BleDeviceInfo';
import { DevicePlatformInfo } from './DevicePlatformInfo';

/**
 * 设备信息
 *
 * 包括
 *
 * - 蓝牙广播出来的设备信息
 * - 平台注册/上报的设备信息
 */
export interface DeviceInfo extends DevicePlatformInfo, BleDeviceInfo {}
