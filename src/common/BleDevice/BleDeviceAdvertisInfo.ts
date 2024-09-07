import { BleDeviceModuleType } from './BleDeviceModuleType';
import { BleDeviceProductType } from './BleDeviceProductType';

export interface BleDeviceAdvertisInfo {
  /**设备mac地址 */
  macAddr: string;

  /**模块类型 */
  moduleType?: BleDeviceModuleType;

  /**soc */
  soc?: string;

  /**产品类型 */
  productType?: BleDeviceProductType;
}

export default BleDeviceAdvertisInfo;
