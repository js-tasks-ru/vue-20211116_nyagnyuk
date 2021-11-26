import { createApp } from './vendor/vue.esm-browser.js';

const Calc = {
  data() {
    return {
      numberFirst: '',
      numberSecond: '',
      picked: '',
    }
  },

  computed: {
    resultCalc: function() {
      if(this.picked == "sum"){
        return this.numberFirst + this.numberSecond;
      }
      if(this.picked == "subtract"){
        return this.numberFirst - this.numberSecond;
      }
      if(this.picked == "multiply"){
        return this.numberFirst * this.numberSecond;
      }
      if(this.picked == "divide"){
        return this.numberFirst / this.numberSecond;
      }
    }
  }
}

const app = createApp(Calc);
const vm = app.mount('#app');
