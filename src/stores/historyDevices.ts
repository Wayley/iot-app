import type { DeviceInfo } from '@/modules/Device/DeviceInfo';
import { defineStore } from 'pinia';

interface State {
  historyDevices: DeviceInfo[];
}
export const useHistoryDevicesStore = defineStore('historyDevices', {
  state: (): State => ({
    historyDevices: [],
  }),
});
