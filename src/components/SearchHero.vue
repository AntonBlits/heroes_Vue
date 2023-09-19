<template>
  <div>
    <h2>Hero search</h2>
    <v-text-field
      class="mt-3 w-25 pa-0"
      label="Hero name"
      v-model="searchQuery"
    ></v-text-field>
    <ul
      class="heroes"
      v-if="searchQuery"
    >
      <transition-group name="hero">
        <li
          v-for="hero in searchHeroes"
          :key="hero.id"
          class="bg-grey-lighten-3 rounded-lg me-3 pa-5"
          @click="$router.push(`heroes/${hero.id}`)"
        >
          {{ hero.name }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script setup lang="ts">


import {useHeroes, useSearchHero} from "@/hooks";

const {heroes} = useHeroes();
const {searchHeroes, searchQuery} = useSearchHero(heroes);

</script>

<style lang="scss" scoped>
.heroes {
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  text-align: center;

  li {
    cursor: default;

    &:hover {
      background-color: black !important;
      color: white !important;
    }
  }
}

.hero-move,
.hero-enter-active,
.hero-leave-active {
  transition: all 0.5s ease;
}

.hero-enter-from,
.hero-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.hero-leave-active {
  position: absolute;
}

</style>
