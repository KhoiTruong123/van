<template>
  <div class="flex flex-col gap-10 items-center font-serif">
    <img src="/src/assets/images/su_kien_moi.png" class="w-full" alt="">
    <section class="max-w-[1440px] w-full pb-20 grid grid-cols-1 p-4 gap-4">
      <div class="col-span-1 text-[50px] text-[#950032] text-center">{{$t('Su_kien')}}</div>
      <div class="space-y-4 col-span-3 pt-10">
        <div
        v-for="(event, i) in events"
        :key="i"
        class="grid grid-cols-1 md:grid-cols-3 md:items-start border-b border-gray-400 pb-4 md:divide-x md:divide-gray-400"
      >
        <!-- Icon + Date -->
        <div class="">
          <div class="flex items-center mb-2">
            <PhCalendarDots
              color="#572219"
              class="w-5 h-5 text-rose-900 mr-2"
            />
            <span class="text-sm text-[#572219]">{{ $t(event.date) }}</span>
          </div>
          <div class="flex items-center mb-2">
            <PhMapPinArea
              class="w-5 h-5 text-rose-900 mr-2"
              :size="32"
              color="#8b2727"
            />
            <span class="text-sm text-[#572219]">{{ $t(event.place) }}</span>
          </div>
        </div>
        <!-- <div class="hidden md:block w-[1px] h-[30px] bg-gray-400 mr-4"></div> -->

        <!-- Title + Desc -->
        <div class="flex items-center justify-between mt-4 md:mt-0 h-full col-span-2">
          <div class="flex-1 pl-0 md:pl-6 h-full">
            <div
              class="text-xl flex items-center cursor-pointer text-[#572219]"
              @click="toggle(i)"
            >
              {{ $t(event.title) }}
              <PhCaretDown
                :size="22"
                color="#572219"
                weight="bold"
                class="ml-2 transform transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === i }"
              />
            </div>
  
            <transition name="fade">
              <p
                style="white-space: pre-line"
                v-if="openIndex === i"
                class="text-sm text-gray-600 mt-1"
              >
                {{ $t(event.desc) }}
              </p>
            </transition>
          </div>
          <a :href="event.link" target="_blank">
            <PhArrowSquareOut color="#950032" :size="24" />
          </a>
        </div>
      </div>
      </div>
    </section>
  </div>

</template>

<script setup>
import { PhArrowSquareOut, PhCalendarDots, PhCaretDown, PhMapPinArea } from '@phosphor-icons/vue'
import { ref } from 'vue'
// Bạn có thể đổi sang Phosphor Icons nếu thích.

const events = [
  {
    date: "ngay_4_thang_7_2025_20_30",
    place: "place_bieu_dien_tot_nghiep",
    title: "bieu_dien_tot_nghiep",
    desc: "bieu_dien_tot_nghiep_desc",
    link:"https://www.hfmt-hamburg.de/hochschule/aktuelles/veranstaltungen/12381-2025-07-04-klavierabend"
  },
  {
    date: "ngay_2_tháng_1_2025_20_30",
    place: "place_mot_doi_nguoi",
    title: "mot_doi_nguoi",
    desc: "mot_doi_nguoi_desc",
    link:""
  },
  {
    date: "ngay_2_tháng_1_2025_17_30",
    place: "place_ly_tuong_song",
    title: "ly_tuong_song",
    desc: "ly_tuong_song_desc",
    link:""
  },
  {
    date: "ngay_29_thang_12_2024_19_00",
    place: "place_tro_ve",
    title: "tro_ve",
    desc: "tro_ve_desc",
    link:"https://saigonclassical.vn/2024/12/14/wiederkehr-29-12-2024"
  },
  {
    date: "ngay_15_tháng_12_2024_19_30",
    place: "place_cuoc_tim_kiem",
    title: "cuoc_tim_kiem",
    desc: "cuoc_tim_kiem_desc",
    link:"https://www.facebook.com/bechstein.com.vn/posts/pfbid0pfCBx8wQ8NDbpTuYNvz91XWM2iVm4yCBXEvy8aPcFNieWSRwKLSJGbaBMEsbUiQVl?rdid=vYwkP3pJEjWCM9YC#"
  },
  {
    date: "ngay_14_tháng_12_2024_18_30",
    place: "place_hanh_trinh_giac_mo",
    title: "hanh_trinh_giac_mo",
    desc: "hanh_trinh_giac_mo_desc",
    link:"https://www.facebook.com/steinway.vn/posts/pfbid065Bu4Q6fCETJGNzBu254QeSUVDV5H7fjpBbMaRF4cFXCUJCL9sxkKZZ6zVh7q1dfl?rdid=qHVcRgG0NXQO0GJA#"
  },
  {
    date: "ngay_7_tháng_7_2024_20_00",
    place: "place_tac_pham_cho_piano_va_Cello",
    title: "tac_pham_cho_piano_va_Cello",
    desc: "tac_pham_cho_piano_va_Cello_desc",
    link:"https://festivalravel.fr/evenements/jeunes-talents-de-lacademie-maria-andrea-mendoza-violoncelle-khanh-van-ho-piano"
  },
  {
    date: "ngay_4_tháng_5_2024_19_00",
    place: "place_bieu_dien_hoc_vu",
    title: "bieu_dien_hoc_vu",
    desc: "bieu_dien_hoc_vu_desc",
    link:"https://www.hfmt-hamburg.de/hochschule/aktuelles/veranstaltungen/11286-2024-05-04-studiokonzert-klavier"
  },
];

const openIndex = ref(null)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
/* transition cho mô tả */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>