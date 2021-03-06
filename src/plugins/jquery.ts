import jQuery from 'jquery';
import Vue from 'vue';

// Register JQuery on the window
Object.assign(window, {
  $: jQuery,
  jQuery
});

/**
 * @param {Vue} V The vue instance.
 */
function JQueryPlugin(V: typeof Vue): void {
  V.prototype.$$ = jQuery;
}

declare module 'vue/types/vue' {
  interface Vue {
    $$: JQueryStatic;
  }
}

Vue.use(JQueryPlugin);

export default JQueryPlugin;
