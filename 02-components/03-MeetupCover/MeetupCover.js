import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },

    image:  {
      type: String,
    },
  },

  template: `
<!--    <div class="meetup-cover" :style="image &&  {'&#45;&#45;bg-url': \`url('https://course-vue.javascript.ru/api/images/5')\` }">-->
    <div class="meetup-cover" :style="image &&  {'--bg-url': \`url(\${image})\` }">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
