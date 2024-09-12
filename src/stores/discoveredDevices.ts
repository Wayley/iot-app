import type { BleDeviceInfo } from '@/modules/BleManager/BleDeviceInfo';
import { defineStore } from 'pinia';

interface State {
  discoveredDevices: BleDeviceInfo[];
}
export const useDiscoveredDevicesStore = defineStore('discoveredDevices', {
  state: (): State => ({
    discoveredDevices: [],
  }),
});
