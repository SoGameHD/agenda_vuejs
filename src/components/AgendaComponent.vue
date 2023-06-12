<template>
  <div>
    <div class="agenda">
      <div class="agenda-header">
        <h1>Agenda des événements</h1>
      </div>
      <div class="agenda-content">
        <div v-for="event in events" v-bind:key="event.id" class="event">
          <h2>{{ event.title }}</h2>
          <p >{{ event.datetime }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchEvents,fetchEventsFromAPI } from '../api.js';
export default {
  data() {
    return {
      events: []
    };
  },
  methods: {
    async fetchEvents() {
      const events = await fetchEventsFromAPI();
      this.events = events;
    },
    async fetchEventsFromAPI() {
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 7);
      const neighborhood = 'Mon quartier';

      return await fetchEvents(startDate, endDate, neighborhood);
    }
  },
  mounted() {
    this.fetchEvents();
  }
};
</script>
