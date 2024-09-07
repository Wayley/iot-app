/**
 * JBD设备-产品类型
 */
export const enum JbdDeviceProductEnum {
  /* 储能主机 */
  ES_HOST = '03',

  /* 高压储能 */
  HVES = '04',

  /* 储能从机 */
  ES_SUB = '07',

  /* 未知类型 */
  UNKNOWN = 'ff',

  /* 未知类型-蓝牙产品(平台特有) */
  BLE = 'BLE',
}

export default JbdDeviceProductEnum;
