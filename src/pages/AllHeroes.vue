<template>
  <div class="w-100">
    <h1>My heroes</h1>
    <v-text-field
      class="mt-5 w-25"
      label="Hero name"
      v-model="name"
    ></v-text-field>
    <v-btn
      variant="outlined"
      @click="addHero"
    >Add Hero
    </v-btn>

    <list-heroes
      :heroes="heroes"
      v-if="heroes.length > 0"
      @remove="removeHero"
      class="w-25 mt-10"
    ></list-heroes>
    <h1 class="w-25 mt-10" v-else>Heroes are missing</h1>
  </div>
</template>

<script setup lang="ts">
import ListHeroes from "@/components/ListHeroes.vue";
import {inject, onMounted, ref} from "vue";
import {useHeroes} from "@/hooks/useHeroes";
import {createHeroes, deleteHeroes} from "@/api/heroes";
import {Hero} from "@/model";

const name = ref("");

const {heroes, fetchHeroes} = useHeroes();
const notification = inject("notification");

onMounted(() => {
  notification.showNotification(`fetched heroes`);
});

const addHero = () => {
  if (name.value) {
    const hero = {id: Math.ceil(Math.random() * 100), name: name.value};
    createHeroes(hero);
    fetchHeroes();
    notification.showNotification(`added hero name: ${name.value}`);

    name.value = "";
  }
}

const removeHero = (hero: Hero) => {
  deleteHeroes(hero.id);
  notification.showNotification(`delete hero name: ${hero.name}`);
  fetchHeroes();
}

</script>

<style lang="scss" scoped>

</style>
