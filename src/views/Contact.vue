<script setup lang="ts">
import { PhDeviceTabletSpeaker, PhEnvelope, PhPhone, PhUser } from '@phosphor-icons/vue';

</script>

<template>
    <div class="font-notoSerifDisplay bg-[#e6e0da]">
        <div class="mt-16">
                    <img src="/contact.png" alt="Contact"
                        class="w-full" />
                </div>
        <div class="mx-auto px-4 py-12 flex flex-col gap-20 max-w-[1440px]">
            <!-- Phần Contact -->
            
            <section class="grid grid-cols-1 gap-8 items-center">
                
                <!-- Text -->
                <div class="space-y-4">
                    <div class="flex flex-col gap-10 mb-8">
                        <h2 class="text-center text-3xl md:text-5xl text-pink-800 font-bold">{{ $t('Lien_he') }}</h2>
                        <h1 class="text-center text-2xl md:text-3xl text-[#572219]">{{ $t('chia_se_cau_chuyen_cua_ban') }}</h1>
                    </div>
                    <p v-html="$t('ke_chuyen_cua_ban_noi_dung')" style="white-space: pre-line" class="text-[#230E0E] leading-relaxed text-center md:text-left md:text-md text-sm"/>
                </div>
                <div class="flex flex-col gap-2 md:text-md text-sm">
                    <p class="font-bold text-[#572219]">{{ $t('lien_he_voi_minh') }}</p>
                    <div class="flex gap-2">
                        <PhEnvelope :size="22" color="#572219" weight="bold" />
                        <p class="text-[#230E0E]">hokhanhvanpianist@gmail.com</p>
                    </div>
                    <div class="flex gap-2">
                        <PhPhone :size="22" color="#572219" weight="bold" />
                        <p class="text-[#230E0E]">+49 159 0648 5758</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2 md:text-md text-sm">
                    <p class="font-bold text-[#572219]">{{ $t('Website') }}</p>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2">
                            <PhUser :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">Trương Sử Khôi</p>
                        </div>
                        <div class="flex gap-2">
                            <PhDeviceTabletSpeaker :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">Web Developer</p>
                        </div>
                        <div class="flex gap-2">
                            <PhEnvelope :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">khoi5405@gmail.com</p>
                        </div>
                    </div>
                    <div class="w-[20%] h-[1px] bg-gray-300"></div>
                    <div class="flex flex-col gap-2">
                        <div class="flex gap-2">
                            <PhUser :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">Nguyễn Lê Thu Hà</p>                        
                        </div>
                        <div class="flex gap-2">
                            <PhDeviceTabletSpeaker :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">Web Designer</p>
                        </div>
                        <div class="flex gap-2">
                            <PhEnvelope :size="22" color="#572219" weight="bold" />
                            <p class="text-[#230E0E]">mia.nguyen.designer@gmail.com</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>