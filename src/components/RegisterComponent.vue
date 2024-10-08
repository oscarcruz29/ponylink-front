<template>
  <div>
    <h1>Crear Cuenta</h1>
    <form @submit.prevent="register">
      <label for="email">Correo electrónico</label>
      <input id="email" v-model="email" type="email" placeholder="Correo electrónico" />
      
      <label for="username">Usuario</label>
      <input id="username" v-model="username" type="text" placeholder="Usuario" />
      
      <label for="password">Contraseña</label>
      <input id="password" v-model="password" type="password" placeholder="Contraseña" />
      
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: ''
    };
  },
  methods: {
    register() {
      // Aquí puedes agregar la lógica de registro
      // Si el registro es exitoso, redirige a la pantalla principal
      this.$router.push('/');
    }
  }
};
</script>