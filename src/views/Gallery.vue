<template>
    <div class="font-serif m-auto">
        <img class="w-full" src="/src/assets/images/van.png" alt="" />
        <div class="bg-[#e7e0dc] py-16">
        <h2
            class="text-3xl font-bold text-center text-[#950032] mb-16"
        >{{ $t("Hinh_anh") }}</h2>
        <div class="flex justify-center">
            <div
            class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full px-4"
            >
            <div
                v-for="(image, index) in images"
                :key="index"
                class="overflow-hidden rounded-lg"
            >
                <img
                :src="image.src"
                :alt="image.alt"
                class="w-full h-auto transform transition-transform duration-300 hover:scale-105"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
</template>