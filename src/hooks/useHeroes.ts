import {onMounted, ref, inject} from "vue";
import {getHeroes} from "@/api/heroes";

export const useHeroes = () => {
  const heroes = ref([]);
  const loading = inject("loading");

  const fetchHeroes = async () => {
    try {
      loading.showLoading(true);
      heroes.value = await getHeroes();
    } catch (error) {
      alert(error)
    } finally {
      loading.showLoading(false);
    }
  }
  onMounted(() => fetchHeroes());

  return {
    heroes,
    fetchHeroes
  }
}
