import Vue from 'vue';
import App from './App.vue';

import { router } from './router.js';

//importovali smo store 
import { chuckStore } from './stores/ChuckStore.js';
import { triviaStore } from './stores/TriviaStore.js';

Vue.config.productionTip = false;

const store = new Vuex.Store({
  //naveli smo store u module koji ce da nam spoje ova dva stora
  modules: {
    chuckStore,
    triviaStore,
  },
});

new Vue({
  router,
  store, //naveli smo store ovde
  render: h => h(App),
}).$mount('#app');
