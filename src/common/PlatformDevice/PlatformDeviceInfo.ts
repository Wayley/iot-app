import BleDeviceModuleType from '../BleDevice/BleDeviceModuleType';
import BleDeviceProductType from '../BleDevice/BleDeviceProductType';
import { PlatformDeviceType } from './PlatformDeviceType';

export interface PlatformDeviceInfo {
  id: number;
  macAddr: string;
  iosUuid?: string;
  clientId: string;
  deviceType: PlatformDeviceType;
  online: boolean;
  bluetoothName?: string;
  sn?: string;
  moduleTypeKey?: BleDeviceModuleType;
  productKey: BleDeviceProductType | 'BLE';
}
