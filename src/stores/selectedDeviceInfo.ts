import { type DeviceInfo } from '@/modules/Device/DeviceInfo';
import { defineStore } from 'pinia';

interface State {
  selectedDeviceInfo: DeviceInfo | null;
}
export const useSelectedDeviceInfoStore = defineStore('selectedDeviceInfo', {
  state: (): State => ({
    selectedDeviceInfo: null,
  }),
});
