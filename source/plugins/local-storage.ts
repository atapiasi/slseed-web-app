/**
 * Local Storage plugin module.
 *
 * @module plugins/local-storage
 */

import Vue from 'vue';

import localStorage, { LocalStorage } from '../services/local-storage';

function LocalStoragePlugin(V: typeof Vue): void {
  V.prototype.$storage = localStorage;
}

declare module 'vue/types/vue' {
  interface Vue {
    $storage: LocalStorage;
  }
}

Vue.use(LocalStoragePlugin);

export default LocalStoragePlugin;
