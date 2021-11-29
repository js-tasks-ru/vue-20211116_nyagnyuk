import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
    },
  },

  computed: {
    feedItemIcon() {
      // console.log(agendaItemDefaultTitles)
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`;
    },

    feedItemTitle() {
      if (this.agendaItem.title == null) {
        return agendaItemDefaultTitles[this.agendaItem.type];
      } else {
        return this.agendaItem.title;
      }
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
<!--        <img src="/assets/icons/icon-key.svg" class="icon" :alt="agendaItem.type" />-->
        <img :src="feedItemIcon" class="icon" :alt="agendaItem.type"/>
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ feedItemTitle }}</h3>
        <p class="agenda-item__talk">
          <span>{{ agendaItem.speaker}}</span>
          <span class="agenda-item__dot" v-if="agendaItem.speaker"></span>
          <span class="agenda-item__lang" v-if="agendaItem.speaker">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
