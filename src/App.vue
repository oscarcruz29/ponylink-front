<template>
  <main class="flex overflow-hidden flex-col pb-80 bg-gray-200 max-w-[360px]">
    <section class="flex flex-col px-6 pt-28 w-full bg-sky-900 rounded-full">
      <div class="flex z-10 flex-col px-8 pt-2.5 pb-6 mb-0 w-full bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.45)]">
        <div class="flex flex-col justify-center items-center self-center px-2.5 bg-white rounded-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[200px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/606e65290639ce4fc3d66d0dd40b7a8f08dd63f377a0ee0c8ad9a2ab7e1b37cf?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="Login logo" class="object-contain w-full aspect-[1.06]" />
        </div>
        <h1 class="self-start mt-3.5 text-2xl font-semibold text-slate-900">
          Iniciar Sesión
        </h1>
        <form>
          <label for="emailOrUsername" class="sr-only">Correo electrónico o usuario</label>
          <input id="emailOrUsername" type="text" class="px-4 pt-5 pb-3 mt-5 text-base rounded-md border-b border-sky-900 bg-neutral-100 text-stone-900 w-full" placeholder="Correo electrónico o usuario" />
          
          <div class="relative mt-9">
            <label for="password" class="sr-only">Contraseña</label>
            <input id="password" type="password" class="px-5 pt-2 text-base whitespace-nowrap rounded-md border-b border-sky-900 bg-neutral-100 text-stone-900 w-full" placeholder="Contraseña" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7d617623d1a0a42163ef782ec36da3d68906bf05ae4668525139f7be670ea7?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="" class="object-contain absolute right-2 top-2 w-5 aspect-[0.53]" />
          </div>
          
          <a href="#" class="block self-end mt-2.5 text-xs text-red-800">¿Olvidaste tu contraseña?</a>
          
          <button type="submit" class="self-center px-6 py-2.5 mt-7 max-w-full text-base font-bold text-white whitespace-nowrap bg-sky-900 rounded-xl border border-sky-900 border-solid w-[100px]">
            Ingresar
          </button>
        </form>
        
        <a href="#" class="self-center px-4 py-3 mt-2.5 max-w-full text-base font-bold text-sky-900 rounded-md border-b border-sky-900 bg-neutral-100 w-[126px] text-center">
          Crear Cuenta
        </a>
        
        <hr class="shrink-0 mt-6 ml-5 h-0.5 border border-solid border-sky-900 border-opacity-80 w-[233px]" />
        
        <p class="self-center mt-3 ml-3 text-xs text-sky-900">Otras opciones</p>
        
        <div class="flex gap-4 self-center mt-4 max-w-full w-[137px]">
          <a href="#" class="flex flex-col justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[35px]" aria-label="Login with Facebook">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dba8edadfe5710d86a6802f4ec40dd5c0946cce9b71138a9e6118f6612e83713?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="" class="object-contain aspect-square w-[23px]" />
          </a>
          <a href="#" class="flex flex-col justify-center items-center px-2 rounded-full bg-zinc-300 h-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[35px]" aria-label="Login with Google">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88beac3430f7da8a23db6d6acfebd34437ec733c1962b4d78d2926bd0d4cd63a?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="" class="object-contain aspect-square w-[22px]" />
          </a>
          <a href="#" class="flex flex-col justify-center items-center px-1.5 rounded-full bg-zinc-300 h-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[35px]" aria-label="Login with Apple">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8db13d9d0eb57af853e5c18885a918abc9a8e974aebe539d828ba72aa658c05?placeholderIfAbsent=true&apiKey=55e491f87d61487b9b7b3861f7502d13" alt="" class="object-contain aspect-square w-[23px]" />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
builder-component {
  max-width: none !important;
}
</style>