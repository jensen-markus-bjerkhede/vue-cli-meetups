<template>
  <h1 class="hej">{{ meetup.name }}</h1>
  <h1>{{ meetup.place }}</h1>
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