<template>
  <header class="flex flex-col pb-2 rounded-none">
    <!-- Navbar desktop -->
    <div class="hidden md:block pr-4 w-full bg-zinc-100 shadow-lg max-md:pr-2 max-md:max-w-full">
      <div class="flex gap-2 max-md:flex-col items-center">
        <div class="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
          <div class="w-full max-md:mt-5 max-md:max-w-full">
            <div class="flex gap-2 max-md:flex-col items-center">
              <div class="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <div class="flex grow items-center justify-center max-md:mt-2">
                  <img
                    loading="lazy"
                    src="../assets/logop.png"
                    class="logop object-contain shrink-0 max-w-full aspect-[1.11] w-[100px]"
                    alt="Company logo"
                  />
                </div>
              </div>
              <div class="flex flex-col ml-2 w-[70%] max-md:ml-0 max-md:w-full">
                <!-- Corregido: Input habilitado para buscar -->
                <form class="flex items-center px-2 py-2 my-auto w-full text-xl font-bold text-black bg-blue-100 rounded-xl border-b-2 border-slate-900 shadow-md hover:shadow-lg transition duration-200">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08e1293efa47dbcd487dc608b9c8a12fe95be812c48702f436bd2649880b067a?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
                    class="object-contain shrink-0 w-6 aspect-[1.03] mr-2"
                    alt="Search icon"
                  />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    class="flex-1 bg-transparent outline-none"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <nav class="flex items-center ml-auto space-x-4 pr-4"> <!-- Alineación corregida hacia la derecha -->
          <a href="#" class="focus:outline-none focus:ring-2 focus:ring-blue-500" tabindex="0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bebf125e5fa96ab29c5514535c6a5e3de5fd178c274952282cd2996a9da8c5c1?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
              class="object-contain shrink-0 w-8 aspect-square transition-transform duration-200 hover:scale-105"
              alt="Messages icon"
            />
          </a>
          <a href="#" class="focus:outline-none focus:ring-2 focus:ring-blue-500" tabindex="0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab85e0c36766456df23c563955f0a56364e98c300b4d16679af29670ba526d2d?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13"
              class="object-contain shrink-0 self-stretch rounded-full shadow-md aspect-[0.97] w-[50px] transition-transform duration-200 hover:scale-105"
              alt="User profile"
            />
          </a>
        </nav>
      </div>
    </div>

    <!-- Navbar móvil -->
    <div class="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <section class="flex flex-col rounded-none w-full">
        <div class="flex gap-5 justify-between px-7 py-2.5 bg-blue-100 border-t-2 border-slate-900">
          <button class="focus:outline-none">
            <img 
              loading="lazy" 
              src="../assets/home.png" 
              class="object-contain shrink-0 aspect-[0.98] w-[50px]" 
              alt="Inicio" 
            />
          </button>
          <button class="focus:outline-none">
            <img 
              loading="lazy" 
              src="../assets/chats.png" 
              class="object-contain shrink-0 aspect-[0.98] w-[50px]" 
              alt="Buscar" 
            />
          </button>
          <button class="focus:outline-none">
            <img 
              loading="lazy" 
              src="../assets/notifications.png" 
              class="object-contain shrink-0 aspect-[0.98] w-[50px]" 
              alt="Chat" 
            />
          </button>
          <button class="focus:outline-none">
            <img 
              loading="lazy" 
              src="../assets/profile.png" 
              class="object-contain shrink-0 aspect-[0.98] w-[50px]" 
              alt="Perfil" 
            />
          </button>
        </div>
      </section>
    </div>
  </header>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
header {
  background-color: #f9f9f9;
}
.logop {
  transform: scale(3); 
  transform-origin: center;
  margin-left: 60%; 
  margin-right: auto;
}
</style>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    goToHome() {
      this.$router.push('/feed');
    },
    goToSearch() {
      // Implementar navegación a búsqueda
    },
    goToChat() {
      // Implementar navegación a chat
    },
    goToProfile() {
      this.$router.push('/profile');
    }
  }
}
</script>
