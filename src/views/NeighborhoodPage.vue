<template>
  <React.Fragment>
    <div>
      <h1>Page du quartier</h1>
      <Agenda />
    </div>
  </React.Fragment>
</template>

<script>
import Agenda from '../components/AgendaComponent.vue';

export default {
  components: {
    Agenda
  }
};
</script>
