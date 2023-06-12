
<template>
  <div id="app">
    <HomePage v-if="showHomePage" />
    <NeighborhoodPage v-else />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue';
import NeighborhoodPage from './views/NeighborhoodPage.vue';

export default {
  components: {
    HomePage,
    NeighborhoodPage
  },
  data() {
    return {
      showHomePage: true
    };
  },
  computed: {
    isNeighborhoodPage() {
      return this.showHomePage === false;
    }
  },
  methods: {
    switchPage() {
      this.showHomePage = !this.showHomePage;
    }
  }
};
</script>
