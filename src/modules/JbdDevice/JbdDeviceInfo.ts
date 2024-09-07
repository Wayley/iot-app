import { BleDeviceInfo } from '@/modules/BluetoothManager/BleDeviceInfo';
import { JbdDevicePlatformInfo } from './JbdDevicePlatformInfo';

/**
 * JBD设备-设备信息
 *
 * 信息包含:
 * - 蓝牙广播出来的设备信息
 * - 平台注册/上报的设备信息
 */
export interface JbdDeviceInfo extends JbdDevicePlatformInfo, BleDeviceInfo {}
