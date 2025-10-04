<template>
  <section class="py-10">
    <div class="mx-auto space-y-4">
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
        <div class="flex-1 pl-0 md:pl-6 col-span-2 h-full">
          <h3
            class="text-xl flex items-center justify-between cursor-pointer text-[#572219]"
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
          </h3>
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhCalendarDots, PhCaretDown, PhMapPinArea } from "@phosphor-icons/vue";
import { ref } from "vue";
// Bạn có thể đổi sang Phosphor Icons nếu thích.

const events = [
  {
    date: "ngay_4_thang_7_2025_20_30",
    place: "place_bieu_dien_tot_nghiep",
    title: "bieu_dien_tot_nghiep",
    desc: "bieu_dien_tot_nghiep_desc",
  },
  {
    date: "ngay_2_tháng_1_2025_20_30",
    place: "place_mot_doi_nguoi",
    title: "mot_doi_nguoi",
    desc: "mot_doi_nguoi_desc",
  },
  {
    date: "ngay_2_tháng_1_2025_17_30",
    place: "place_ly_tuong_song",
    title: "ly_tuong_song",
    desc: "ly_tuong_song_desc",
  },
  {
    date: "ngay_29_thang_12_2024_19_00",
    place: "place_tro_ve",
    title: "tro_ve",
    desc: "tro_ve_desc",
  },
  {
    date: "ngay_15_tháng_12_2024_19_30",
    place: "place_cuoc_tim_kiem",
    title: "cuoc_tim_kiem",
    desc: "cuoc_tim_kiem_desc",
  },
  {
    date: "ngay_14_tháng_12_2024_18_30",
    place: "place_hanh_trinh_giac_mo",
    title: "hanh_trinh_giac_mo",
    desc: "hanh_trinh_giac_mo_desc",
  },
  {
    date: "ngay_7_tháng_7_2024_20_00",
    place: "place_tac_pham_cho_piano_va_Cello",
    title: "tac_pham_cho_piano_va_Cello",
    desc: "tac_pham_cho_piano_va_Cello_desc",
  },
  {
    date: "ngay_4_tháng_5_2024_19_00",
    place: "place_bieu_dien_hoc_vu",
    title: "bieu_dien_hoc_vu",
    desc: "bieu_dien_hoc_vu_desc",
  },
];

const openIndex = ref(null);
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i;
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
