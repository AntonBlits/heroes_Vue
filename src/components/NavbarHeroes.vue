<template>
  <div class="flex-0-0">
    <h1 class="mb-5">Tour of Heroes</h1>
    <v-btn variant="outlined" @click="$router.push('/dashboard')">Dashboard</v-btn>
    <v-btn class="ms-5" variant="outlined" @click="$router.push('/heroes')">Heroes</v-btn>
  </div>
</template>

<script>
import DashboardHeroes from "@/pages/DashboardHeroes.vue";

export default {
  components: {DashboardHeroes}

}
</script>

<style lang="scss" scoped>
</style>
