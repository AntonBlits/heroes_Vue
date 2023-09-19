import {provide, ref} from "vue";

export const useNotifications = () => {
  const snackbar = ref(false);
  const message = ref("");

  const showNotification = (text: string) => {
    snackbar.value = true;
    message.value = text;
  };

  provide("notification", {snackbar, message, showNotification});


  return {
    snackbar,
    message
  }
}


