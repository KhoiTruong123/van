<template>
    <section class="py-10">
      <div class="mx-auto space-y-4">
        <div
          v-for="(event, i) in events"
          :key="i"
          class="flex flex-col md:flex-row md:items-start border-b border-gray-400 pb-4 md:divide-x md:divide-gray-400"
        >
          <!-- Icon + Date -->
          <div class="flex items-center mb-2 md:mb-0 md:w-40">
            <PhCalendarDots color="#572219" class="w-5 h-5 text-rose-900 mr-2" />
            <span class="text-sm text-[#572219]">{{ event.date }}</span>

          </div>
          <!-- <div class="hidden md:block w-[1px] h-[30px] bg-gray-400 mr-4"></div> -->

          <!-- Title + Desc -->
          <div class="flex-1 pl-6">
            <h3
              class="text-2xl flex items-center justify-between cursor-pointer text-[#572219]"
              @click="toggle(i)"
            >
              {{ event.title }}
              <PhCaretDown
                :size="22"
                color="#572219"
                weight="bold"
                class=" ml-2 transform transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === i }"
              />
            </h3>
            <transition name="fade">
              <p v-if="openIndex === i" class="text-sm text-gray-600 mt-1">
                {{ event.desc }}
              </p>
            </transition>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { PhCalendarDots, PhCaretDown } from '@phosphor-icons/vue'
import { ref } from 'vue'
  // Bạn có thể đổi sang Phosphor Icons nếu thích.
  
  const events = [
    {
      date: '15 Dec 2024',
      title: 'Vân Live in Paris 2024',
      desc: 'Mô tả sự kiện ngắn gọn, chi tiết bổ sung.'
    },
    {
      date: '20 Jan 2025',
      title: 'Concert Hà Nội',
      desc: 'Chương trình âm nhạc đặc biệt tại Hà Nội.'
    },
    {
      date: '10 Mar 2025',
      title: 'Gala Piano Night',
      desc: 'Đêm nhạc piano với các nghệ sĩ khách mời.'
    }
  ]
  
  const openIndex = ref(null)
  function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i
  }
  </script>
  
  <style scoped>
  /* transition cho mô tả */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>