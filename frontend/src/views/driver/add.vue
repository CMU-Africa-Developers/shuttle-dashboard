<template>

  <driver-model :is-edit="false" />

</template>

<script>
  import  DriverModel from './components/DriverModel'

  export default {
    name: "AddDriver",
    components: {DriverModel},
  }
</script>

<style scoped>

</style>
