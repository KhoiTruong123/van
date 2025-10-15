<template>
    <div>
        <section class="bg-[#e6e0da] py-16 font-notoSerifDisplay">
            <div class="mx-auto">
                <img class="w-full" src="/su_kien.png" alt="">
                <h2 class="text-3xl md:text-5xl font-notoSerifDisplay text-pink-900 text-center font-bold mt-16">{{ $t('Am_nhac') }}</h2>
                <div class="flex flex-wrap justify-center gap-6 pt-16 w-full">
                    <NewsCard
                        v-for="(music, index) in musics"
                        :key="index"
                        :new="music"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import NewsCard from '@/components/NewsCard.vue';

const musics = [{
  title: "F. Liszt - Grandes études de Paganini, S. 141 No.6 | Hồ Khánh Vân",
  img: "/music-1.PNG",
  link: "https://youtu.be/mEZIjBLaKa8?si=lpPeVSS6f8clEqn0"
},
{
  title: "26th MPM International Competition - Final Stage - Beethoven: Piano Concerto No. 4 (Khanh Van Ho)",
  img: "/music-2.PNG",
  link: "https://www.youtube.com/watch?v=AQYxh_jC49c"
},
{
  title: "B. Bartok - Out of Doors, Sz.81 | Hồ Khánh Vân",
  img: "/music-3.PNG",
  link: "https://youtu.be/KkYkd75pk2k?si=sxHJVKw7D7lzGpA6"
},
{
  title: "L.v. Beethoven - Piano Sonata No.31 in A-flat major, Op.110 | Hồ Khánh Vân",
  img: "/music-4.PNG",
  link: "https://youtu.be/rFTi6bmeex8?si=laSDz-On-grNJ-e0"
}
];
</script>