import Vue from 'vue'
import {sync,isEmptyfn} from './components/sync'
import App from './components/sync/App.vue'

console.log("Hello World111!");
sync();
isEmptyfn("88888");
isEmptyfn("99999");
import (/* webpackChunkName:"async-banner" */"./components/banner").then((_) => {
   _.default.init();
})
console.log("end!!!");
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
