<template>
  <header
    class="bg-[#130000] text-white fixed top-0 left-0 w-full z-50 font-serif h-16"
  >
    <div class="max-w-[1440px] mx-auto flex items-center justify-between p-4">
      <div class="cursor-pointer" @click="router.push('/')">
        <h1 class="text-2xl font-bold">Hồ Khánh Vân</h1>
      </div>
      <button @click="isOpenMenu = !isOpenMenu">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <nav
        v-if="isOpenMenu"
        class="flex flex-col text-center gap-4 py-24 bg-[#e7e0dc] text-2xl text-[#a24c4c] relative"
      >
        <button
          @click="isOpenMenu = !isOpenMenu"
          class="absolute top-8 right-12"
        >
          <PhX :size="28" color="#8b2727" weight="bold" />
        </button>
        <TransitionGroup
        name="stagger"
        tag="div"
        class="flex flex-col gap-4 text-center"
      >
        <a class="hover:underline" href="/about">{{ $t('Ve_Van') }}</a>
        <a href="/event" class="hover:underline">{{ $t('Su_kien') }}</a>
        <a href="/program" class="hover:underline">{{ $t('Chuong_trinh_bieu_dien') }}</a>
        <a href="/music" class="hover:underline">{{ $t('Am_nhac') }}</a>
        <a href="/news" class="hover:underline">{{ $t('Tin_tuc') }}</a>
        <a href="/gallery" class="hover:underline">{{ $t('Hinh_anh') }}</a>
        <a href="/contact" class="hover:underline">{{ $t('Lien_he') }}</a>
      </TransitionGroup>
        
      </nav>
    </Transition>
  </header>
</template>
<script setup lang="ts">
import router from "@/router";
import { PhX } from "@phosphor-icons/vue";
import { ref } from "vue";

const isOpenMenu = ref(false);
</script>
<style scoped>
/* class cho TransitionGroup */
.stagger-enter-active,
.stagger-leave-active {
  transition: all 0.3s ease;
}
.stagger-enter-from,
.stagger-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
