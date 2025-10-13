<template>
    <div>
        <section class="bg-gray-100 py-16">
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
  img: "/am_nhac_1.png",
  link: "https://youtu.be/mEZIjBLaKa8?si=lpPeVSS6f8clEqn0"
},
{
  title: "F. Liszt - Après une lecture de Dante: Fantasia quasi Sonata | Hồ Khánh Vân",
  img: "/am_nhac_2.png",
  link: "https://youtu.be/jhMJ10tzDv0?si=q4jq6ps-gP9pHONc"
},
{
  title: "B. Bartok - Out of Doors, Sz.81 | Hồ Khánh Vân",
  img: "/am_nhac_3.png",
  link: "https://youtu.be/KkYkd75pk2k?si=sxHJVKw7D7lzGpA6"
},
{
  title: "L.v. Beethoven - Piano Sonata No.31 in A-flat major, Op.110 | Hồ Khánh Vân",
  img: "/am_nhac_4.png",
  link: "https://youtu.be/rFTi6bmeex8?si=laSDz-On-grNJ-e0"
}
];
</script>