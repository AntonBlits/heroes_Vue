import {computed, inject, Ref, ref} from "vue";
import {Hero} from "@/model";

export function useSearchHero(heroes: Ref<Hero[]>) {
  const searchQuery = ref('');
  const notification = inject("notification");

  const searchHeroes = computed(() => {
      const newHeroes = heroes.value.filter(hero =>
        hero.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

      newHeroes.length
        ? notification.showNotification(`found heroes matching "${searchQuery.value}"`)
        : notification.showNotification(`no heroes matching "${searchQuery.value}"`);

      return newHeroes;
    }
  )

  return {
    searchQuery,
    searchHeroes
  }
}
