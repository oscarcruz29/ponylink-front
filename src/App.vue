<!-- src/App.vue -->
<template>
  <div id="app">
    <Navbar v-if="!isLoginView" />
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
    const isLoginView = computed(() => route.path === '/login');
    return { isLoginView };
  },
};
</script>

<style>
/* Estilos globales */
</style>