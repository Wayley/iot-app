import JbdDeviceModuleEnum from './JbdDeviceModuleEnum';
import JbdDeviceNetworkModelEnum from './JbdDeviceNetworkModelEnum';
import JbdDeviceProductEnum from './JbdDeviceProductEnum';

/**
 * JBD设备-在平台注册/上报的信息
 */
export interface JbdDevicePlatformInfo {
  id: number;
  macAddr: string;
  iosUuid?: string;
  clientId: string;
  deviceType: JbdDeviceNetworkModelEnum;
  online: boolean;
  bluetoothName?: string;
  sn?: string;
  moduleTypeKey?: JbdDeviceModuleEnum;
  productKey: JbdDeviceProductEnum;
}
