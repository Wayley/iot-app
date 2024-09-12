import type DeviceModuleEnum from './enums/DeviceModuleEnum';
import type DeviceNetworkModelEnum from './enums/DeviceNetworkModelEnum';
import type DeviceProductEnum from './enums/DeviceProductEnum';

/**
 * 设备-在平台注册/上报的信息
 */
export interface DevicePlatformInfo {
  id: number;
  macAddr: string;
  iosUuid?: string;
  clientId: string;
  deviceType: DeviceNetworkModelEnum;
  online: boolean;
  bluetoothName?: string;
  sn?: string;
  moduleTypeKey?: DeviceModuleEnum;
  productKey: DeviceProductEnum;
}
