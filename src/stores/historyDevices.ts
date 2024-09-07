import { JbdDeviceInfo } from '@/modules/JbdDevice/JbdDeviceInfo';
import { defineStore } from 'pinia';

interface State {
  historyDevices: JbdDeviceInfo[];
}
export const useHistoryDevicesStore = defineStore('historyDevices', {
  state: (): State => ({
    historyDevices: [],
  }),
});
