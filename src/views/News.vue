<template>
    <section class="min-h-screen bg-[#e6e0da] py-12 font-notoSerifDisplay">
        <div class="mx-auto">
            <img class="w-full" src="/Image_tin_tuc.png" alt="">
            <h2 class="text-3xl md:text-5xl font-bold text-center text-[#950032] mt-16 mb-16">{{ $t('Tin_tuc') }}</h2>
            <div class="flex flex-col justify-center items-center gap-6 max-w-[1200px] mx-auto">
                <div v-for="newsItem in news" class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    <img class="w-[100%]" :src="newsItem.img" alt="">
                    <div class="flex flex-col gap-4">
                        <h3 class="font-semibold text-xl md:text-2xl text-[#572219]">{{ newsItem.title }}</h3>
                        <p class="text-gray-600 mt-1 text-sm md:text-lg">{{ newsItem.desc }}</p>
                        <p class=" text-xs md:text-sm text-[#9D4B4C]">{{ newsItem.date }}</p>
                        <div class="flex md:justify-start justify-center">
                            <button @click="targetLink(newsItem.link)" class="bg-[#940032] text-white pl-6 pr-1 py-2 rounded-full hover:bg-[#8d3e3e] font-notoSerifDisplay">
                            <div class="flex items-center">
                                <span class="md:text-xl text-sm uppercase mr-4">{{ $t('xem_them') }}</span><span
                                    class="bg-white rounded-2xl h-[90%]">
                                    <PhArrowUpRight class="text-[#8d3e3e]" :size="30" />
                                </span>
                            </div>
                        </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import NewsCard from '@/components/NewsCard.vue';
import { PhArrowUpRight } from '@phosphor-icons/vue';

const news = [{
    title: "Klavierabend",
    date: "04.07.2025",
    img: "/tin_tuc_1.jpg",
    desc: "Bachelorprüfung von Hồ Khánh Vân",
    link: "https://www.hfmt-hamburg.de/hochschule/aktuelles/veranstaltungen/12381-2025-07-04-klavierabend"
},
{
    title: "Jeunes talents de l’Académie | Maria-Andrea Mendoza, violoncelle – Khánh Vân Hồ, piano",
    date: "07.07.2024",
    img: "/tin_tuc_2.png",
    desc: "Concerts en Nouvelle-Aquitaine Capbreton",
    link: "https://festivalravel.fr/evenements/jeunes-talents-de-lacademie-maria-andrea-mendoza-violoncelle-khanh-van-ho-piano/"
},
{
    title: "Premio Mauro Paolo Monopoli, tripudio di arte e musica",
    date: "15.05.2023",
    img: "/tin_tuc_3.jpg",
    desc: "Ecco i premiati",
    link: "https://barlettalive.it/2023/05/15/premio-mauro-paolo-monopoli-tripudio-di-arte-e-musica/"
},
{
    title: "Grande successo per il 26mo concorso pianistico 'Premio Mauro Monopoli'",
    date: "05.06.2025",
    img: "/tin_tuc_3.jpg",
    desc: "Vince la pianista vietnamita Ho Khanh Van",
    link: "https://www.barlettaviva.it/notizie/grande-successo-per-il-26mo-concorso-pianistico-premio-mauro-monopoli/"
},
]
const targetLink = (link) => {
  window.open(`${link}`, "_blank");
};
</script>