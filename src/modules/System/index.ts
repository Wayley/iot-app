import AndroidSystemURLEnum from './enums/AndroidSystemURLEnum';
import IOSSystemURLEnum from './enums/IOSSystemURLEnum';
import SystemURLEnum from './enums/SystemURLEnum';

export class System {
  static get isIOS(): boolean {
    return uni.getSystemInfoSync().osName == 'ios';
  }
  static get isAndroid(): boolean {
    return uni.getSystemInfoSync().osName == 'android';
  }
  static get statusBarHeight(): number {
    return uni.getSystemInfoSync().statusBarHeight!;
  }
  static get appVersion(): string {
    return uni.getSystemInfoSync().appVersion;
  }

  /** 打开系统设置
   *
   * @param url SystemURLEnum 系统URL
   * @returns boolean
   */
  static openSystemSetting(url: SystemURLEnum): boolean {
    try {
      if (this.isAndroid) {
        const mainActivity = plus.android.runtimeMainActivity();
        const Intent = plus.android.importClass('android.content.Intent');
        let intentURL = '';
        if (url == SystemURLEnum.BLUETOOTH) intentURL = AndroidSystemURLEnum.BLUETOOTH;
        if (url == SystemURLEnum.WIFI) intentURL = AndroidSystemURLEnum.WIFI;

        // @ts-ignore
        mainActivity.startActivity(new Intent(intentURL));
      } else if (this.isIOS) {
        let intentURL = '';
        if (url == SystemURLEnum.BLUETOOTH) intentURL = IOSSystemURLEnum.BLUETOOTH;
        if (url == SystemURLEnum.WIFI) intentURL = IOSSystemURLEnum.WIFI;
        plus.runtime.openURL(intentURL);
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default System;
