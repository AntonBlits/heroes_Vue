<template>
  <div>
    <h1>{{ name }} Detail</h1>
    <div>
      <span>id: </span>
      <span>{{ id }}</span>
      <v-text-field
        class="mt-5 w-25"
        label="Hero name"
        v-model="name"
      ></v-text-field>
      <div class="d-flex">
        <v-btn
          @click="$router.back"
        >go back
        </v-btn>
        <v-btn
          class="ms-2"
          @click="save"
        >save
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useHero} from "@/hooks/useHero";
import {ref, inject, onMounted} from "vue";
import {editHero} from "@/api/heroes";
import router from "@/router/router";

const route = useRoute();
const id = ref(route.params.id);
const {name} = useHero(+id.value);
const notification = inject("notification");

onMounted(() => {
  notification.showNotification(`Detail info hero id: ${id.value}`);
});

const save = () => {
  const hero = {id: +id.value, name: name.value};
  editHero(hero);
  router.back();
}

</script>

<style lang="scss" scoped>

</style>
