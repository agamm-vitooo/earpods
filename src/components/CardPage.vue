<template>
  <section id="card-page" class="mt-10">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
          <div class="max-w-md mx-auto text-center lg:text-left">
            <header>
              <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">Earphone</h2>

              <p class="mt-4 text-gray-500">
                Temukan Koleksi Earphone Terbaik di Sini! Dari bass yang menggelegar hingga desain yang mengagumkan, produk earphone kami dirancang untuk menemani setiap irama hidup Anda.
              </p>
            </header>

            <a
              href="#"
              class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
            >
              Shop Now
            </a>
          </div>
        </div>

        <div class="lg:col-span-2 lg:py-8">
          <ul class="grid grid-cols-2 gap-4">
            <li v-for="(item, index) in cardItems" :key="index">
              <a :href="item.link" class="block group">
                <img
                  :src="item.image"
                  alt=""
                  class="image object-cover w-full rounded aspect-square"
                />

                <div class="mt-3 flex items-center justify-between">
                  <div class="text">
                    <h3
                      class="title font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      {{ item.title }}
                    </h3>
                    <p class="price mt-1 text-sm text-gray-700">{{ item.payment }}</p>
                  </div>
                  <img width="25" height="25" src="https://img.icons8.com/small/32/shopping-bag.png" alt="shopping-bag" class="hover:bg-slate-100"/>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the defineProps function
import { defineProps } from 'vue';

// Props declaration
const props = defineProps(['flexProperties']);

// Data array for card items
const cardItems = [
  {
    title: 'Headphones',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nemo.',
    payment: '$299',
    image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Mivi Headphones',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nemo.',
    payment: '$239',
    image: 'https://images.unsplash.com/photo-1632247541401-3d4a8d516595?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Apple Airpods',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nemo.',
    payment: '$350',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'TWS Earphone',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nemo.',
    payment: '$150',
    image: 'https://images.unsplash.com/photo-1645020089405-ee44c2cd7c58?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
    link: '#',
  },
  // Add more items as needed
];
</script>
