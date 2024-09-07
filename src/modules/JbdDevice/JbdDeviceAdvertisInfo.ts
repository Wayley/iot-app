import JbdDeviceModuleEnum from './JbdDeviceModuleEnum';
import JbdDeviceProductEnum from './JbdDeviceProductEnum';

/**
 * JBD设备-蓝牙广播信息
 */
export interface JbdDeviceAdvertisInfo {
  /* 设备mac地址 */
  macAddr: string;

  /* 模块类型 */
  moduleType?: JbdDeviceModuleEnum;

  /* soc */
  soc?: string;

  /* 产品类型 */
  productType?: JbdDeviceProductEnum;
}

export default JbdDeviceAdvertisInfo;
