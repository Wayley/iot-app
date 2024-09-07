import { BleDeviceAdvertisInfo } from './BleDeviceAdvertisInfo';

export interface BleDeviceInfo extends BleDeviceAdvertisInfo {
  deviceId: string;
  name?: string;
  RSSI?: number;
  advertisData?: ArrayBuffer;
  advertisServiceUUIDs?: any[];
  localName?: string;
  serviceData?: any[];
}

export default BleDeviceInfo;
