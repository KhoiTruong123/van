<template>
    <footer class="bg-[#9c4b4b] text-white py-20">
      <div class="max-w-[1440px] mx-auto px-4 text-center grid grid-cols-3">
        <div class="flex justify-start space-x-4">
            <button class="text-gray-300 hover:text-white" :class="{ 'font-bold text-white': locale === 'vi' }" @click="changeLang('vi')">VI</button>
            <button class="text-gray-300 hover:text-white" :class="{ 'font-bold text-white': locale === 'en' }" @click="changeLang('en')">EN</button>
            <button class="text-gray-300 hover:text-white" :class="{ 'font-bold text-white': locale === 'de' }" @click="changeLang('de')">DE</button>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm">Email: hokhanhvanpianist@gmail.com</p>
            <div class="flex gap-1 justify-center">
                <PhFacebookLogo :size="28" />
                <PhInstagramLogo :size="28" />
                <PhYoutubeLogo :size="28" />
                <PhSpotifyLogo :size="28" />
            </div>
            <p class="text-sm">Privacy Policy</p>
        </div>
        
        <div class="text-sm text-right">&copy; 2024 Ho Khanh Van. All rights reserved.</div>
      </div>
    </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { PhFacebookLogo, PhInstagramLogo, PhSpotifyLogo, PhYoutubeLogo } from '@phosphor-icons/vue';
const { locale } = useI18n()

function changeLang(lang) {
  locale.value = lang
}
</script>