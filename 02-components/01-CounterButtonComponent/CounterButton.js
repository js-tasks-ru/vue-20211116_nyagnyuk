import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: () => 0,
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {

    buttonClick(count){
      this.$emit('update:count', count + 1);
    }
  },

  // Шаблон потребуется отредактировать
  template: `<button type="button"
                     @click='buttonClick(count)'>{{ count }}</button>`,
});
