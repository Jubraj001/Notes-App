import { auth } from "@/js/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { defineStore } from "pinia"
import { ref } from "vue";

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const init = () => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        console.log(userDetails)
        const uid = userDetails.uid;
        user.value = { email: userDetails.email, uid };
      } else {
        user.value = {};
      }
    });
  };

  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => [

      ]);
  }

  return {
    registerUser,
    loginUser,
    logoutUser,
    init,
    user
  }
})
