<template>
  <Meetup v-for="meetup in meetups" :key="meetup.id" :meetup="meetup" />
</template>

<script>
import Meetup from "../components/Meetup.vue";
export default {
  name: "Home",
  components: { Meetup },
  props: {
    meetups: Array,
  },
};

</script>

<style>
</style>