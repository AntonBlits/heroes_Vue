<template>
  <div>
    <ul class="heroes">
      <transition-group name="hero">
        <li
          class="bg-grey-lighten-3 d-flex justify-space-between align-center rounded-lg mb-3"
          v-for="hero in heroes"
          :key="hero.id"
          @click="$router.push(`heroes/${hero.id}`)"
        >
          <p>
            <span class="bg-grey-darken-2 rounded-lg d-inline-block pa-3 me-2">{{ hero.id }}</span> {{ hero.name }}
          </p>
          <v-btn
            class="me-3 py-4 d-flex align-center"
            size="x-small"
            @click.stop="$emit('remove', hero)"
          >x
          </v-btn>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {Hero} from "@/model";

interface Props {
  heroes: Hero[]
}

defineProps<Props>()

</script>

<style lang="scss" scoped>
.heroes {
  list-style-type: none;

  li {
    position: relative;
    cursor: pointer;

    span {
      width: 40px;
      text-align: center;
    }
  }

  li:hover {
    left: .1em;
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
  transform: translateX(-130px);
}

.hero-leave-active {
  position: absolute;
}
</style>
