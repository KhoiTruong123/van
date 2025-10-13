<template>
    <div class="font-notoSerifDisplay mt-16">
        <img class="w-full" src="/hinh_anh_chinh.png" alt="" />
        <div class="bg-[#e7e0dc] py-16">
        <h2
            class="text-3xl font-bold text-center text-[#950032] mb-16"
        >{{ $t("Hinh_anh") }}</h2>
        <div class="flex justify-center">
            <div
            class="max-w-[1440px] grid grid-cols-1 gap-4 mx-auto w-full px-4"
            >
            <!-- hinh anh 1 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_1.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_2.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_3.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 2 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="">
                        <img
                            src="/hinh_anh_4.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_5.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 3 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img
                            src="/hinh_anh_6.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_7.png"
                            alt="Gallery Image 1"
                            class="w-full h-full md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_8.png"
                            alt="Gallery Image 2"
                            class="w-full h-full md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 4,5,6 -->
                <div class="grid grid-cols-1 gap-4">
                    <div v-for="(item, index) in sameStyleGallery" :key="index" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img
                            :src="item.img1"
                            alt="Gallery Image 1"
                            class="w-full h-full md:h-[400px]"
                        />
                        <img
                            :src="item.img2"
                            alt="Gallery Image 2"
                            class="w-full h-full md:h-[400px]"
                        />
                        <img
                            :src="item.img3"
                            alt="Gallery Image 3"
                            class="w-full h-full md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 7 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_18.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_19.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_20.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 8 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="">
                        <img
                            src="/hinh_anh_21.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_22.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 9 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img
                            src="/hinh_anh_23.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_24.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_25.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 10 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="">
                        <img
                            src="/hinh_anh_26.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_27.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 11 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_28.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_29.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div>
                        <img
                            src="/hinh_anh_30.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
                <!-- hinh anh 12 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img
                            src="/hinh_anh_31.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_32.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_33.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <!-- hinh anh 13 -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <img
                            src="/hinh_anh_34.png"
                            alt="Gallery Image 3"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img
                            src="/hinh_anh_35.png"
                            alt="Gallery Image 1"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                        <img
                            src="/hinh_anh_36.png"
                            alt="Gallery Image 2"
                            class="w-full h-[200px] md:h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const sameStyleGallery = [
    {
        img1: "/hinh_anh_9.png",
        img2: "/hinh_anh_10.png",
        img3: "/hinh_anh_11.png",
    },
    {
        img1: "/hinh_anh_12.png",
        img2: "/hinh_anh_13.png",
        img3: "/hinh_anh_14.png",
    },
    {
        img1: "/hinh_anh_15.png",
        img2: "/hinh_anh_16.png",
        img3: "/hinh_anh_17.png",
    },
]
</script>