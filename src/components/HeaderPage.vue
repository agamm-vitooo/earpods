<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white fixed w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#hero-page" class="flex items-center space-x-1 rtl:space-x-reverse">
        <img width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/24/external-earphone-shopping-e-commerce-thin-kawalan-studio.png" alt="external-earphone-shopping-e-commerce-thin-kawalan-studio"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Earpods</span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <a href="#card-page" onclick="handleClick()" class="hover:bg-slate-100 hover:rounded-md">
          <img width="32" height="32" src="https://img.icons8.com/small/32/shopping-bag.png" alt="shopping-bag"/>
        </a>
        <button data-collapse-toggle="navbar-sticky" @click="toggleMobileMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky" :class="{ 'hidden': !isMobileMenuOpen }">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <li>
            <a href="#hero-page" class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home </a>
          </li>
          <li>
            <a href="#card-page" class="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700" >Produk</a>
          </li>
          <li>
            <a href="#testimonials-page" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Testimoni</a>
          </li>
          <li>
            <a href="#blog-page" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleMenu() {
      // Add your logic for the "Get started" button here
    },
    handleClick() {
      alert('Icon clicked!');
      // Add your desired logic when the icon is clicked
    },
  },
};
</script>
