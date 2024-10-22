<template>
  <div class="min-h-screen bg-[#F9FAFB] flex">
    <aside class="w-1/4 max-w-[300px] p-6 space-y-6">
      <header class="flex items-center justify-between bg-[#001839] text-white rounded-t-lg p-4 shadow-md">
        <h2 class="text-xl font-bold tracking-wide">Eventos & Proyectos</h2>
      </header>

      <div
        v-for="(event, index) in events"
        :key="index"
        class="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
      >
        <img :src="event.image" alt="Imagen del evento" class="w-full h-32 object-cover" />
        <div class="bg-white p-4 space-y-2">
          <h3 class="text-lg font-semibold text-[#001839]">{{ event.title }}</h3>
          <p class="text-sm text-gray-500">{{ event.description }}</p>
          <button class="mt-4 w-full bg-[#001839] text-white rounded-md py-2 hover:bg-[#A9C8E0] transition">
            Ver más
          </button>
        </div>
      </div>
    </aside>

    <!-- Columna de Publicaciones (centro) -->
    <main class="w-2/4 p-4 overflow-y-auto">
      <!-- Sección para Crear Publicación -->
      <section class="flex flex-col rounded-lg w-full max-w-[1000px] bg-white shadow-lg border border-[#A7C7E0] p-6 mb-6 mt-2 transition duration-200 transform hover:shadow-xl hover:bg-[#F8FBFF]">
        <header class="flex gap-6 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3427795555feb36088d2eb6b44b3f41167f42b03c83757298d11092e9ab87c5c?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
            alt="User profile picture"
            class="object-contain rounded-full shadow-md w-[80px]"
          />
          <div class="flex flex-col grow relative">
            <input
              type="text"
              aria-label="Publica una actualización"
              placeholder="¿Qué estás pensando?"
              class="px-4 py-4 rounded-xl bg-[#E7F3FF] text-neutral-700 placeholder:text-neutral-500 border border-[#A7C7E0] focus:border-blue-500 focus:outline-none transition duration-200 text-lg mb-4"
            />
            <div class="flex gap-4 items-center justify-end">
              <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-[#A7C7E0] shadow-md hover:shadow-lg">
                <img
                  loading="lazy"
                  src="../assets/imagen.png"
                  alt="Attachment icon"
                  class="object-contain w-[30px] h-[30px] mr-2"
                />
              </button>
              <button class="flex items-center justify-center bg-[#CCE2FF] rounded-md h-[40px] px-3 hover:bg-[#A9C8E0] transition duration-200 border border-[#A7C7E0] shadow-md hover:shadow-lg">
                <img
                  loading="lazy"
                  src="../assets/publicar.png"
                  alt="Media options"
                  class="object-contain w-[20px] h-[20px] mr-2"
                />
                <span class="text-base font-bold">Publicar</span>
              </button>
            </div>
          </div>
        </header>
      </section>

      <!-- Publicaciones -->
     
      <div class="space-y-4">
        <section
          v-for="(post, index) in posts"
          :key="index"
          class="flex flex-col rounded-lg w-full max-w-[1000px] bg-white shadow-lg border border-[#A7C7E0] p-6 mb-6 mt-2 transition duration-200 transform hover:shadow-xl hover:bg-[#F8FBFF]"
        >
          <header class="flex gap-6 items-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3427795555feb36088d2eb6b44b3f41167f42b03c83757298d11092e9ab87c5c?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
              alt="User profile picture"
              class="object-contain rounded-full shadow-md w-[80px]"
            />
            <div>
              <h1 class="text-lg font-bold text-[#001839]">Usuario</h1>
              <p class="text-sm text-gray-500">Hace 2 horas</p>
            </div>
          </header>


          <div class="mt-4 text-base text-black">
            <h2 class="font-bold text-[#001839]">{{ post.title }}</h2>
            <p class="mt-2">{{ post.content }}</p>
          </div>

          <div class="flex justify-between items-center mt-6">
            <button 
              v-if="post.type === 'job'" 
              class="bg-[#001839]  text-white font-bold py-2 px-4 rounded-lg flex items-center transition-colors"
            >
              <img loading="lazy" src="../assets/apply.png" alt="Aplicar" class="w-5 h-5 mr-2" />
              {{ post.buttonText }}
            </button>

            <div v-if="post.type === 'status'" class="flex items-center">
              <span class="font-bold text-[#001839]">Estado:</span>
              <span 
                class="ml-2 px-3 py-1 text-white rounded-full"
                :class="post.status === 'En busca de trabajo' ? 'bg-green-500' : 'bg-gray-400'"
              >
                {{ post.status }}
              </span>
            </div>

            <button class="flex items-center text-[#001839]">
              <img loading="lazy" src="../assets/megusta.png" alt="Me gusta" class="w-5 h-5 mr-1" />
              Me gusta
            </button>
            <button class="flex items-center text-[#001839]">
              <img loading="lazy" src="../assets/comentar.png" alt="Comentar" class="w-5 h-5 mr-1" />
              Comentar
            </button>
            <button class="flex items-center text-[#001839]">
              <img loading="lazy" src="../assets/compartir.png" alt="Compartir" class="w-5 h-5 mr-1" />
              Compartir
            </button>
          </div>
        </section>
      </div>
    </main>

    <!-- Columna de Chat (derecha) -->
    <aside class="flex flex-col w-1/3 max-w-[350px] bg-gradient-to-br from-[#E6F0FF] to-[#CCE2FF] rounded-lg shadow-xl border border-gray-300 p-4 ml-auto">
      <header class="flex items-center justify-between bg-[#001839] text-white rounded-t-lg p-3">
        <h2 class="text-lg font-semibold">Chats</h2>
        <button class="text-sm bg-[#CCE2FF] text-[#001839] px-3 py-1 rounded-full hover:bg-[#A9C8E0] transition">+ Nuevo Chat</button>
      </header>

      <div class="flex flex-col overflow-y-auto max-h-[500px] p-2 space-y-4">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          class="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <img
            :src="chat.avatar"
            alt="Profile"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div class="flex flex-col">
            <span class="font-semibold text-[#001839]">{{ chat.name }}</span>
            <p class="text-sm text-gray-600">{{ chat.message }}</p>
          </div>
          <span class="ml-auto text-xs text-gray-400">3 min</span>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        { 
          title: 'Lanzamiento del Proyecto X', 
          description: 'Únete al lanzamiento de nuestro nuevo proyecto.', 
          image: 'https://via.placeholder.com/300x150?text=Proyecto+X' 
        },
        { 
          title: 'Conferencia de Tecnología', 
          description: 'No te pierdas nuestra conferencia el próximo viernes.', 
          image: 'https://via.placeholder.com/300x150?text=Proyecto+X' 
        },
      ],
      posts: [
        { 
          type: 'job', 
          title: 'Oferta de trabajo: Desarrollador Frontend', 
          content: 'Estamos buscando un desarrollador frontend con experiencia en frameworks modernos como Vue.js. El candidato ideal deberá colaborar con diseñadores y desarrolladores backend para crear interfaces atractivas y funcionales.', 
          buttonText: 'Aplicar ahora' 
        },
        { 
          type: 'status', 
          title: 'Cambio de estado', 
          content: 'He actualizado mi estado para reflejar mi situación actual. Estoy "En busca de trabajo" y abierto a nuevas oportunidades donde pueda seguir desarrollándome profesionalmente.', 
          status: 'En busca de trabajo' 
        },
      ],
      chats: [
        { name: 'Ana', message: 'Hola, ¿cómo estás?', avatar: 'https://via.placeholder.com/50' },
        { name: 'Carlos', message: '¿Revisaste el reporte?', avatar: 'https://via.placeholder.com/50' },
      ],
    };
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case 'En busca de trabajo':
          return 'bg-green-100 text-green-800';
        case 'Ocupado':
          return 'bg-red-100 text-red-800';
        case 'Pendiente':
          return 'bg-yellow-100 text-yellow-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  background-color: #F9FAFB;
}

input::placeholder {
  color: #B0B0B0;
}

button {
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.05);
}
</style>
