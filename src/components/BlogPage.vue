<template>
  <div id="blog-page" class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="text text-center">
      <h1 class="text-black font-bold text-3xl mt-5">
        Our Blog
      </h1>
      <p class="text-black text-opacity-50 p-8 text-justify sm:text-center">
        Selamat datang di halaman blog kami yang penuh antusiasme, <br> di mana kami akan membahas secara rinci mengenai pertemuan terkait peluncuran produk baru kami yang paling dinanti-nantikan
      </p>

      <div class="flex flex-wrap p-8 gap-12">
        <div v-for="(item, index) in items" :key="index" class="max-w-sm bg-white flex flex-wrap rounded-lg mb-8 text-left mx-auto">
          <a :href="item.link">
            <img class="rounded-t-lg object-cover w-full h-64" :src="item.image" alt="" />
          </a>
          <div class="p-5">
            <a :href="item.link">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-left text-gray-900 dark:text-white">{{ item.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{{ item.description }}</p>
            <a :href="item.buttonLink" class="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-white rounded-lg hover:bg-slate-100 focus:ring-4 focus:outline-none">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Meeting terkait produk baru',
          description: 'Saksikanlah saat kami memecahkan batas konvensional dengan desain yang revolusioner, kualitas suara yang menggelegar, dan fitur-fitur pintar yang akan merubah cara Anda menikmati musik sehari-hari. Dapatkan wawasan mendalam tentang proses pengembangan dari para ahli di balik layar, dan temui tim desain yang telah berjuang keras untuk menciptakan earphone terbaik yang memenuhi standar kualitas tinggi kami.',
          buttonLink: '#',
          buttonText: 'Find out more',
          image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        },
        {
          title: 'Produktivitas meningkat',
          description: 'Tingkatkan gaya hidup mobile Anda dengan koneksi nirkabel yang nyaman, membebaskan Anda dari kabel yang kusut dan memberikan kebebasan untuk bergerak tanpa batasan. Serahkan diri Anda pada kualitas suara kristal yang memanjakan telinga Anda, sambil tetap merasakan sentuhan lembut dan ringan yang membuat Anda lupa bahwa Anda memakai headphones.',
          buttonLink: '#',
          buttonText: 'Find out more',
          image: 'https://images.unsplash.com/photo-1617803021651-8df9d37672a6?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        },
        {
          title: 'Kenyamanan dalam setiap aspek',
          description: 'Dengan bantalan lembut yang melingkupi telinga Anda seperti belaian lembut, dan desain ergonomis yang dirancang untuk menyesuaikan diri dengan kontur kepala Anda, headphones kami menciptakan keseimbangan sempurna antara gaya dan kenyamanan. Nikmati setiap detik mendengarkan musik, podcast, atau panggilan konferensi dengan tanpa gangguan, berkat fitur noise-cancellation yang canggih.',
          buttonLink: '#',
          buttonText: 'Find out more',
          image: 'https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        },
        // Add more items as needed
      ],
    };
  },
};
</script>
