import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import FeedComponent from '../components/FeedComponent.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import EditProfileComponent from '../components/EditProfileComponent.vue'; // Importa el nuevo componente

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/feed', component: FeedComponent },
  { path: '/profile', component: ProfileComponent }, 
  { path: '/edit-profile', component: EditProfileComponent }, // Añade la nueva ruta
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;