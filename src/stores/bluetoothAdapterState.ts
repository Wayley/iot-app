import { defineStore } from 'pinia';

interface State {
  available: boolean;
  discovering: boolean;
  inited: boolean;
}
export const useBluetoothAdapterStateStore = defineStore('bluetoothAdapterState', {
  state: (): State => ({
    available: false,
    discovering: false,
    inited: false,
  }),
});
