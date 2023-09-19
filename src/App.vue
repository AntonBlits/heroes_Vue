<template>
  <v-app class="pa-10">
    <navbar-heroes></navbar-heroes>

    <div class="mt-10">
      <router-view></router-view>
    </div>
    <v-snackbar
      top
      right
      v-model="snackbar"
      :timeout="1500"
      rounded="pill"
      color="grey"
    >
      {{ message }}
    </v-snackbar>
    <img
      v-if="loading"
      class="load"
      src="./assets/images/loader.svg"
    />
  </v-app>
</template>

<script setup lang="ts">
import NavbarHeroes from "@/components/NavbarHeroes.vue";
import {useLoading, useNotifications} from "@/hooks";

const {message, snackbar} = useNotifications();
const {loading} = useLoading();
</script>

<style lang="scss">
.v-snackbar__wrapper {
  bottom: 90% !important;
  left: 85% !important;
}

.load {
  position: fixed;
  top: 30%;
  left: 40%;
  color: red;
  font-size: 32px;
}

</style>
