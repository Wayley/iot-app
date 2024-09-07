import BleDeviceInfo from '@/common/BleDevice/BleDeviceInfo';
import { defineStore } from 'pinia';

interface State {
  historyDevices: BleDeviceInfo[];
}
export const useHistoryDevicesStore = defineStore('historyDevices', {
  state: (): State => ({
    historyDevices: [],
  }),
});
