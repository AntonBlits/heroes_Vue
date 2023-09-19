<template>
  <div>
    <h1>Top heroes</h1>
    <ul
      class="heroes d-flex mt-10"
      v-if="heroes.length > 0"
    >
      <li
        class="bg-grey-lighten-3 rounded-lg pa-5 me-5"
        v-for="hero in topHeroes"
        :key="hero.id"
        @click="$router.push(`heroes/${hero.id}`)"
      >
        {{ hero.name }}
      </li>
    </ul>
    <h2
      class="w-25 mt-10"
      v-else
    >Heroes are missing</h2>
    <search-hero class="mt-10"></search-hero>
  </div>
</template>

<script setup lang="ts">
import {useHeroes} from "@/hooks/useHeroes";
import {computed, inject, onMounted} from "vue";
import SearchHero from "@/components/SearchHero.vue";

const {heroes} = useHeroes();
const notification = inject("notification");

const topHeroes = computed(() => heroes.value.slice(0, 5));

onMounted(() => {
  notification.showNotification(`fetched heroes`);
});

</script>

<style lang="scss" scoped>
.heroes {
  list-style-type: none;
  cursor: default;

  li {
    width: 200px;
    height: 120px;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:hover {
    color: white !important;
    background-color: black !important;
  }
}
</style>
