import {provide, ref} from "vue";

export const useLoading = () => {
  const loading = ref(false);

  const showLoading = (value) => {
    loading.value = value;
  }

  provide("loading", {showLoading, loading});

  return {
    loading
  }
}
