<script setup lang="ts">
import { PhFacebookLogo, PhInstagramLogo, PhSpotifyLogo, PhYoutubeLogo } from '@phosphor-icons/vue';

</script>

<template>
    <footer class="bg-[#9c4b4b] text-white py-20">
      <div class="max-w-[1440px] mx-auto px-4 text-center grid grid-cols-3">
        <div class="flex justify-start space-x-4">
          <a href="#">EN</a><a href="#">DE</a><a href="#">VN</a>
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