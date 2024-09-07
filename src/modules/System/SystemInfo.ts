export class SystemInfo {
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
}

export default SystemInfo;
