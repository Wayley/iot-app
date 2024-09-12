/**
 * 蓝牙API返回的原始设备信息
 */
export interface BleDeviceInfo {
  deviceId: string;
  name?: string;
  localName?: string;
  RSSI?: number;
  advertisData?: any[];
  advertisServiceUUIDs?: any[];
  serviceData?: any[];
}

export default BleDeviceInfo;
