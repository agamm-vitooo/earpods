<template>
  <footer class="bg-white border border-y-4">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <a
        class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
        href="#hero-page"
      >
        <span class="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div class="flex justify-center text-teal-600 lg:justify-start">
          <a href="#hero-page" class="flex items-center space-x-1 rtl:space-x-reverse">
            <img width="24" height="24" src="https://img.icons8.com/external-thin-kawalan-studio/24/external-earphone-shopping-e-commerce-thin-kawalan-studio.png" alt="external-earphone-shopping-e-commerce-thin-kawalan-studio"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Earpods</span>
          </a>
        </div>
        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
        >
        Dengarkan lebih dari sekadar suara, dengarkan kisah yang menggetarkan hati.
        </p>
      </div>

      <ul
        class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
            Tentang
          </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
            Produk
          </a>
        </li>

        <li>
          <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
            Contact
          </a>
        </li>
      </ul>
    </div>

    <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>
</template>