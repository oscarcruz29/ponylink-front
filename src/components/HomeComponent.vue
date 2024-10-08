<template>
  <div>
    <h1>Bienvenido a la pantalla principal</h1>
    <button @click="goToLogin">Ir a Login</button>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>