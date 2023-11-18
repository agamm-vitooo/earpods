<template>
  <section id="testimonials-page" class="bg-gray-50 min-h-screen flex p-4 items-center">
    <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:flex md:items-end md:justify-between">
        <div class="max-w-xl">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <p class="mt-6 max-w-lg leading-relaxed text-gray-700">
            Terima kasih kepada pelanggan setia kami yang telah berbagi pengalaman luar biasa mereka selama penjualan! Kami bangga menjadi bagian dari perjalanan Anda dalam menemukan produk earphone terbaik.
          </p>
        </div>

        <a
          href="#"
          class="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
        >
          <span class="font-medium"> Read all reviews </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 rtl:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <!-- Loop through cardItems -->
        <blockquote v-for="(item, index) in cardItems" :key="index" class="card-testi flex h-full flex-col border border-gray-200 rounded-2xl justify-between bg-white p-6 shadow-sm sm:p-8">
          <div>
            <div class="flex gap-0.5 text-green-500">
              <!-- Include your existing SVG icons here -->
            </div>

            <div class="mt-4">
              <p class="text-2xl font-bold text-rose-600 sm:text-3xl">
                {{ item.title }}
              </p>

              <p class="mt-4 leading-relaxed text-gray-700">
                {{ item.description }}
              </p>
            </div>
          </div>

          <footer class="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
            &mdash; {{ item.author }}
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import data array for card items
const cardItems = [
  {
    title: 'Chris Martin',
    description: 'Earphone yang saya beli di sini benar-benar memenuhi harapan saya! Kualitas suara yang luar biasa, nyaman digunakan, dan desainnya pun sangat stylish. Sungguh investasi yang sangat memuaskan untuk pengalaman mendengarkan musik yang lebih baik!',
    author: 'Michael Scott',
  },
  {
    title: 'Anthony',
    description: 'Saya tidak pernah membayangkan bahwa earphone bisa membuat perbedaan besar, tetapi setelah mencoba produk dari situs ini, saya benar-benar terkesan. Kualitas suara yang jernih dan fitur-fitur canggih membuat setiap lagu terdengar lebih hidup. Sangat puas dengan pembelian saya!',
    author: 'Michael Scott',
  },
  {
    title: 'Enzo Fernandez',
    description: 'Pengiriman cepat dan pelayanan pelanggan yang ramah membuat pengalaman belanja di sini sangat menyenangkan. Earphone yang saya beli tidak hanya memenuhi ekspektasi, tetapi juga memberikan nilai tambah yang luar biasa. Saya pasti akan merekomendasikan kepada teman-teman saya!',
    author: 'Michael Scott',
  },
  // Add more items as needed
];
</script>
