import {onMounted, ref, inject} from "vue";
import {getHero} from "@/api/heroes";

export const useHero = (id: number) => {
  const name = ref<string>();
  const loading = inject("loading");

  const fetchHero = async () => {
    try {
      loading.showLoading(true);
      name.value = (await getHero(id)).name;
    } catch (error) {
      alert(error)
    } finally {
      loading.showLoading(false);
    }
  }
  onMounted(fetchHero);

  return {
    name
  }
}
