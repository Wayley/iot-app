import DeviceModuleEnum from './enums/DeviceModuleEnum';
import DeviceProductEnum from './enums/DeviceProductEnum';

/**
 * 设备-蓝牙广播信息
 */
export interface DeviceAdvertisInfo {
  /* 设备mac地址 */
  macAddr: string;

  /* 模块类型 */
  moduleType?: DeviceModuleEnum;

  /* soc */
  soc?: string;

  /* 产品类型 */
  productType?: DeviceProductEnum;
}

export default DeviceAdvertisInfo;
