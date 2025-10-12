<template>
    <footer class="bg-[#130000] text-white py-20">
      <div class="max-w-[1440px] mx-auto px-4 text-center grid grid-cols-3">
        <div class="flex justify-start space-x-4">
            <button class="text-gray-300 hover:text-[#9D0602]" :class="{ 'font-bold !text-[#9D0602]': locale === 'vi' }" @click="changeLang('vi')">VI</button>
            <button class="text-gray-300 hover:text-[#9D0602]" :class="{ 'font-bold !text-[#9D0602]': locale === 'en' }" @click="changeLang('en')">EN</button>
            <button class="text-gray-300 hover:text-[#9D0602]" :class="{ 'font-bold !text-[#9D0602]': locale === 'de' }" @click="changeLang('de')">DE</button>
        </div>
        <div class="flex flex-col gap-2">
            <p class="text-sm">Email: hokhanhvanpianist@gmail.com</p>
            <div class="flex gap-1 justify-center">
                <a href="https://www.facebook.com/hokhanhvanpianist">
                  <PhFacebookLogo :size="28" />
                </a>
                <a href="https://www.instagram.com/hokhanhvanpianist/">
                  <PhInstagramLogo :size="28" />
                </a>
                <a href="https://open.spotify.com/artist/7ITTvBdoCqXRKt1SnuV13l?si=-Mnab1afTPGXs_At23PhSw">
                  <PhSpotifyLogo :size="28" />
                </a>
                <a href="https://open.spotify.com/artist/7ITTvBdoCqXRKt1SnuV13l?si=-Mnab1afTPGXs_At23PhSw">
                  <PhSpotifyLogo :size="28" color="#ffff" weight="bold" />
                </a>
            </div>
            <!-- <p class="text-sm">Privacy Policy</p> -->
             <a href="/policy" class="text-sm hover:underline">Privacy Policy</a>
        </div>
        
        <div class="text-sm text-right">&copy; 2025 Ho Khanh Van. All rights reserved.</div>
      </div>
    </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { PhFacebookLogo, PhInstagramLogo, PhSoundcloudLogo, PhSpotifyLogo, PhYoutubeLogo } from '@phosphor-icons/vue';
const { locale } = useI18n()

function changeLang(lang) {
  locale.value = lang
}
</script>