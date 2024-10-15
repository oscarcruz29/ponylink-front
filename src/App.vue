<template>
  <div id="app">
    <Navbar v-if="!isAuthView && !isDashboardView" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    const route = useRoute();
    const isAuthView = computed(() => route.path === '/login' || route.path === '/register');
    const isDashboardView = computed(() => route.path === '/');
    return { isAuthView, isDashboardView };
  },
};
</script>

<style>
/* Estilos globales */
</style>