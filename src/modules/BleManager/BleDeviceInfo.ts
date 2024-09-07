export interface BleDeviceInfo {
  deviceId: string;
  name?: string;
  localName?: string;
  RSSI?: number;
  advertisData?: ArrayBuffer;
  advertisServiceUUIDs?: any[];
  serviceData?: any[];
}
