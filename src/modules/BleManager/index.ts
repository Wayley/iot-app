import System from '@/modules/System';
import { useBluetoothAdapterStateStore } from '@/stores/bluetoothAdapterState';

function log(v1: any, ...args: any[]) {
  if (true) console.log(v1, ...args);
}

export class BleManager {
  static #instance: BleManager | null = null;
  #services: string[];

  constructor(services?: string[]) {
    this.#services = services ?? [];
    this
      .#addListeners /*启动全局监听*/
      ();
  }

  static getInstance(services?: string[]): BleManager {
    if (this.#instance == null) this.#instance = new BleManager(services);
    return this.#instance;
  }

  async openAdapter() {
    return new Promise(async (resolve, reject) => {
      const store = useBluetoothAdapterStateStore();
      try {
        if (/*之前已初始化成功*/ store.inited) return resolve(true);
        log(`蓝牙模块初始化 services=${JSON.stringify(this.#services)}`);
        const res = await uni.openBluetoothAdapter();
        store.$patch({ available: true, inited: true });
        return resolve(res);
      } catch (e) {
        store.$patch({ available: false, inited: false });
        return reject(e);
      }
    });
  }

  async closeAdapter() {
    return await uni.closeBluetoothAdapter();
  }

  async getAdapterState() {
    return await uni.getBluetoothAdapterState();
  }
  async startScan() {
    log(`开始扫描 services=${JSON.stringify(this.#services)}`);
    return await uni.startBluetoothDevicesDiscovery({
      services: this.#services,
      allowDuplicatesKey /** Set `True` for ios issue */: System.isIOS,
    });
  }

  async stopScan() {
    log(`停止扫描 services=${JSON.stringify(this.#services)}`);
    return await uni.stopBluetoothDevicesDiscovery();
  }

  #addListeners() {
    log(`添加全局监听 services=${JSON.stringify(this.#services)}`);

    uni.onBluetoothAdapterStateChange(({ available, discovering }) => {
      const store = useBluetoothAdapterStateStore();
      console.log('监听-adapter变化', { available, discovering }, store);
      if (store.available == available && store.discovering == discovering) {
        console.log('相同的变化');
        return;
      }

      let _state = { available, discovering };
      if (/*关闭适配器的时候 标记需要重新初始化*/ store.inited && !available) {
        Object.assign(_state, { inited: false });
      }
      store.$patch(_state);
    });

    uni.onBluetoothDeviceFound(({ devices }) => {
      console.log('监听-发现了设备', devices);
    });
  }
}

export default BleManager;
