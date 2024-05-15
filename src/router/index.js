import { createRouter, createWebHistory } from "vue-router";

import NotesView from "@/views/NotesView.vue";
import StatsView from "@/views/StatsView.vue";
import EditNoteView from "@/views/EditNoteView.vue";
import AuthView from "@/views/AuthView.vue";

const routes = [
  {
    path: '/',
    component: NotesView,
    name: 'notes'
  },
  {
    path: '/edit-note/:id',
    component: EditNoteView,
    name: 'editNote'
  },
  {
    path: '/stats',
    component: StatsView,
    name: 'stats'
  },
  {
    path: '/auth',
    component: AuthView,
    name: 'auth'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
