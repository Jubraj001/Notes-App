import { auth } from "@/js/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia"

export const useAuthStore = defineStore('authStore', () => {
  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    registerUser
  }
})
