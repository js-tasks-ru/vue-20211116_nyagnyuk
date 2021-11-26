import { createApp } from './vendor/vue.esm-browser.js';

const Counter = {
  data() {
    return {
      counter: 0,
    }
  },

  methods: {
    clickCounter() {
      this.counter++
    }
  }
}

const app = createApp(Counter);
const vm = app.mount('#app');
