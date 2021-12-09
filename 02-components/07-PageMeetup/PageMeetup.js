import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: Number,
  },

  data() {
    return {
      meetup: null,
      errorMeetup: '',
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.meetup = null;
        fetchMeetupById(this.meetupId).then((meetup) =>{
          this.meetup = meetup;
        }).catch(error => {
          // console.log(error.message)
          this.errorMeetup = error.message;
        });
      }
    }
  },

  template: `
    <div class='page-meetup'>
      <template v-if='meetup'>
        <meetup-view :meetup='meetup'/>
      </template>

      <template v-else>
        <ui-container v-if='errorMeetup?.length'>
          <ui-alert>{{ errorMeetup}}</ui-alert>
        </ui-container>

        <ui-container v-else>
          <ui-alert>Загрузка...</ui-alert>
        </ui-container>
      </template>

    </div>
   `,
});
