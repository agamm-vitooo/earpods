<template>
  <div id="hero-page" class="bg-center min-h-screen bg-no-repeat bg-[url('https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-700 bg-blend-multiply flex items-center justify-center">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Earpods👋🎶</h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Jelajahi koleksi lengkap earphone terbaik kami yang dirancang untuk membawa Anda dalam perjalanan mendengarkan yang tak terlupakan.</p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a href="#card-page" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-700 rounded-lg bg-white">
          Explore Now
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        <a href="#blog-page" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'HomeSection',
}
</script>
