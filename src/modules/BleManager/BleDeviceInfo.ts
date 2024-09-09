export interface BleDeviceInfo {
  deviceId: string;
  name?: string;
  localName?: string;
  RSSI?: number;
  advertisData?: any[];
  advertisServiceUUIDs?: any[];
  serviceData?: any[];
}
