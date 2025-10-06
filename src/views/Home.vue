<template>
  <div class="bg-[#e8e1df] mt-16">
    <section class="relative">
      <img src="/src//assets/images/hinh_anh_trang_chu.png" class="w-full h-full" alt="hero" />
      <div class="absolute inset-0 bg-black/30 flex flex-col justify-center">
        <div class="ml-[10%]">
          <p class="text-[#9D0602] text-2xl md:text-5xl font-bold font-serif">Hồ Khánh Vân</p>
          <p class="text-[#9D0602] text-2xl md:text-5xl font-serif mb-[10%]">Pianist</p>
          <p class="text-white font-serif text-lg md:text-2xl">"Music starts to breathe,<br>when one lives their life to
            the fullest"</p>
        </div>
      </div>
    </section>

    <!-- Sự kiện -->
    <section class="max-w-[1440px] mx-auto px-4 py-16 font-serif">
      <h2 class="text-center text-2xl md:text-3xl font-bold text-[#940032] mb-8">
        {{ $t('Su_kien') }}
      </h2>
      <img class="w-full" src="../assets/images/su_kien.png" alt="" />
      <div class="space-y-6">
        <EventCard />
      </div>
      <div class="flex justify-center mt-6">
        <button @click="targetToPage('/event')" class="bg-[#940032] text-white pl-6 pr-1 py-2 rounded-full hover:bg-[#8d3e3e]">
          <div class="flex items-center">
            <span class="text-xl uppercase mr-4">{{ $t('xem_them') }}</span><span class="bg-white rounded-2xl h-[90%]">
              <PhArrowUpRight class="text-[#8d3e3e]" :size="30" />
            </span>
          </div>
        </button>
      </div>
    </section>

    <!-- Am_nhac -->
    <section class="py-16 font-serif">
      <div class="w-full mx-auto px-4">
        <h2 class="text-center text-2xl md:text-3xl font-bold text-[#940032] mb-8">
          {{ $t('Am_nhac') }}
        </h2>
        <div ref="sliderMusic"
          class="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 [&::-webkit-scrollbar]:hidden">
          <MusicCard v-for="music in musicList" :key="music.title" :music="music"
            class="flex-shrink-0 w-80 snap-start" />
        </div>
      </div>
      <div class="flex justify-center gap-3 mt-4">
        <button v-for="n in 4" :key="n" @click="goToSlide(n - 1, 'music')" :class="[
          'w-3 h-3 rounded-full transition',
          currentMusicCard === n - 1 ? 'bg-[#940032]' : 'bg-gray-300',
        ]"></button>
      </div>
      <div class="flex justify-center mt-6">
        <button @click="targetToPage('/music')" class="bg-[#940032] text-white pl-6 pr-1 py-2 rounded-full hover:bg-[#8d3e3e]">
          <div class="flex items-center">
            <span class="text-xl uppercase mr-4">{{ $t('xem_them') }}</span><span class="bg-white rounded-2xl h-[90%]">
              <PhArrowUpRight class="text-[#8d3e3e]" :size="30" />
            </span>
          </div>
        </button>
      </div>
    </section>

    <!-- Tin tức -->
    <section class="max-w-[1440px] mx-auto px-4 py-16 font-serif">
      <h2 class="text-center text-2xl md:text-3xl font-bold text-[#940032] mb-8">
        {{ $t('Tin tức') }}
      </h2>
      <div ref="sliderNews"
        class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-6 [&::-webkit-scrollbar]:hidden">
        <NewsCard v-for="item in news" :key="item.title" :new="item" class="flex-shrink-0 w-80 snap-start" />
      </div>

      <div class="flex justify-center gap-3 mt-4">
        <button v-for="n in 4" :key="n" @click="goToSlide(n - 1, 'news')" :class="[
          'w-3 h-3 rounded-full transition',
          currentNewcard === n - 1 ? 'bg-[#940032]' : 'bg-gray-300',
        ]"></button>
      </div>
      <div class="flex justify-center mt-6">
        <button @click="targetToPage('/news')" class="bg-[#940032] text-white pl-6 pr-1 py-2 rounded-full hover:bg-[#8d3e3e]">
          <div class="flex items-center">
            <span class="text-xl uppercase mr-4">{{ $t('xem_them') }}</span><span class="bg-white rounded-2xl h-[90%]">
              <PhArrowUpRight class="text-[#8d3e3e]" :size="30" />
            </span>
          </div>
        </button>
      </div>
    </section>

    <!-- Hình ảnh -->
    <!-- <section class="bg-white py-16 font-serif">
    <div class="max-w-[1440px] mx-auto px-4">
      <h2
        class="text-center text-2xl md:text-3xl font-bold text-[#940032] mb-8"
      >
        Hình ảnh
      </h2>
      <div class="flex flex-col md:flex-row gap-2">
        <div class="grid grid-cols-2 gap-2">
            <img v-for="i in 4" :key="i" src="/src/assets/images/hinh_anh_1.png" class="w-full object-cover" />
        </div>
        <div><img src="/src/assets/images/hinh_anh_1.png" class="w-full md:w-[388px] h-full object-cover" /></div>
        <div class="grid grid-cols-2 gap-2">
            <img v-for="i in 4" :key="i" src="/src/assets/images/hinh_anh_1.png" class="w-full object-cover" />
        </div>
      </div>
      <div class="flex justify-center mt-6">
        <button
        class="bg-[#940032] text-white pl-6 pr-1 py-2 rounded-full hover:bg-[#8d3e3e]"
      >
      <div class="flex items-center">
            <span class="text-xl uppercase mr-4">xem_them</span><span class="bg-white rounded-2xl h-[90%]"><PhArrowUpRight class="text-[#8d3e3e]" :size="30" /></span>
        </div>
      </button>
      </div>
    </div>
  </section> -->
  </div>

</template>
<script setup lang="ts">
import EventCard from "@/components/EventCard.vue";
import FootBar from "@/components/FootBar.vue";
import MusicCard from "@/components/MusicCard.vue";
import NewsCard from "@/components/NewsCard.vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";
import { ref } from "vue";
import router from "@/router";

const sliderMusic = ref(null);
const sliderNews = ref(null);
const currentMusicCard = ref(0);
const currentNewcard = ref(0);
const musicList = [{
  title: "F. Liszt - Grandes études de Paganini, S. 141 No.6 | Hồ Khánh Vân",
  img: "/src/assets/images/am_nhac_1.png",
  link: "https://youtu.be/mEZIjBLaKa8?si=lpPeVSS6f8clEqn0"
},
{
  title: "F. Liszt - Après une lecture de Dante: Fantasia quasi Sonata | Hồ Khánh Vân",
  img: "./src/assets/images/am_nhac_2.png",
  link: "https://youtu.be/jhMJ10tzDv0?si=q4jq6ps-gP9pHONc"
},
{
  title: "B. Bartok - Out of Doors, Sz.81 | Hồ Khánh Vân",
  img: "/src/assets/images/am_nhac_3.png",
  link: "https://youtu.be/KkYkd75pk2k?si=sxHJVKw7D7lzGpA6"
},
{
  title: "L.v. Beethoven - Piano Sonata No.31 in A-flat major, Op.110 | Hồ Khánh Vân",
  img: "/src/assets/images/am_nhac_4.png",
  link: "https://youtu.be/rFTi6bmeex8?si=laSDz-On-grNJ-e0"
}
];
const news = [{
  title: "Klavierabend",
  date: "04/07/2025",
  img: "/src/assets/images/tin_tuc_1.jpg",
  desc: "Bachelorprüfung von Hồ Khánh Vân",
  link: "https://www.hfmt-hamburg.de/hochschule/aktuelles/veranstaltungen/12381-2025-07-04-klavierabend"
},
{
  title: "Jeunes talents de l’Académie | Maria-Andrea Mendoza, violoncelle – Khánh Vân Hồ, piano",
  date: "07/07/2024",
  img: "/src/assets/images/tin_tuc_2.png",
  desc: "Concerts en Nouvelle-Aquitaine Capbreton",
  link: "https://festivalravel.fr/evenements/jeunes-talents-de-lacademie-maria-andrea-mendoza-violoncelle-khanh-van-ho-piano/"
},
{
  title: "Premio Mauro Paolo Monopoli, tripudio di arte e musica",
  date: "05/15/2023",
  img: "/src/assets/images/tin_tuc_3.jpg",
  desc: "Ecco i premiati",
  link: "https://barlettalive.it/2023/05/15/premio-mauro-paolo-monopoli-tripudio-di-arte-e-musica/"
},
{
  title: "Grande successo per il 26mo concorso pianistico 'Premio Mauro Monopoli'",
  date: "05/06/2025",
  img: "/src/assets/images/tin_tuc_3.jpg",
  desc: "Vince la pianista vietnamita Ho Khanh Van",
  link: "https://www.barlettaviva.it/notizie/grande-successo-per-il-26mo-concorso-pianistico-premio-mauro-monopoli/"
},
]
// Mỗi dot đại diện cho 3 card (3*width = 3*320px = 960px)
const CARD_WIDTH = 320 + 16; // card + gap
const GROUP_SIZE = 3;

function goToSlide(index, type) {
  if (type === 'music') {
    currentMusicCard.value = index;
    const scrollX = index * CARD_WIDTH * GROUP_SIZE;
    sliderMusic.value.scrollTo({ left: scrollX, behavior: "smooth" });
  } else if (type === 'news') {
    currentNewcard.value = index;
    const scrollX = index * CARD_WIDTH * GROUP_SIZE;
    sliderNews.value.scrollTo({ left: scrollX, behavior: "smooth" });
  }

}
const targetToPage = (url: string) => {
  router.push(url);
};
</script>
