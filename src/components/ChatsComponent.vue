<template>
    <div class="flex flex-col min-h-screen bg-gradient-to-br from-[#E6F0FF] to-[#CCE2FF]">
      <header class="flex items-center justify-between bg-[#001839] text-white rounded-t-lg p-3">
        <h2 class="text-lg font-semibold">Chats</h2>
      </header>
  
      <div class="flex flex-col flex-grow overflow-y-auto p-2 space-y-4">
        <div
          v-for="(chat, index) in chats"
          :key="index"
          class="flex items-center gap-4 p-3 bg-white rounded-lg shadow hover:shadow-md transition border-l-4 border-[#CCE2FF]"
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatsComponent',
    data() {
      return {
        chats: [
          { name: 'Ana', message: 'Hola, ¿cómo estás?', avatar: 'https://via.placeholder.com/50' },
          { name: 'Carlos', message: '¿Revisaste el reporte?', avatar: 'https://via.placeholder.com/50' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  