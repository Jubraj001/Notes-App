import { createRouter, createWebHistory } from "vue-router";

import NotesView from "@/views/NotesView.vue";
import StatsView from "@/views/StatsView.vue";

const routes = [
  {
    path: '/',
    component: NotesView,
    name: 'notes'
  },
  {
    path: '/stats',
    component: StatsView,
    name: 'stats'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
