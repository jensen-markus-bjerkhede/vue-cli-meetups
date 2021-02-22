<template>
  <h1 class="name">{{ meetup.name }}</h1>
  <h1 class="place">{{ meetup.place }}</h1>
</template>

<script>
export default {
   props: {
    meetup: Object
  },
}
</script>

<style>

</style>