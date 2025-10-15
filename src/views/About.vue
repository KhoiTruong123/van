<template>
  <div class="flex justify-center items-center font-notoSerifDisplay py-20 bg-[#e6e0da]">
    <div class="max-w-[1440px] mx-auto px-4 py-12 flex flex-col gap-20">
      <!-- Phần About -->
      <section class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Text -->
        <div class="space-y-4">
          <div class="flex justify-end flex-col items-center md:items-end gap-4">
            <h2 class="text-center md:text-right text-xl text-pink-800 ">{{ $t('Ve_Van') }}</h2>
            <div class="text-center md:text-right w-1/3 h-[1px] bg-black mx-auto md:mx-0 rounded"></div>
            <h1 class="text-center md:text-right text-4xl font-bold text-pink-900">Vân</h1>
          </div>
          <p class="text-gray-700 leading-relaxed text-center md:text-left">
           {{ $t('Loi_tua') }}
          </p>
        </div>
        <!-- Ảnh -->
        <div class="flex justify-center">
          <img src="/tieu_su.png" alt="Vân"
            class="rounded-2xl shadow-lg max-w-xl w-full object-cover" />
        </div>
      </section>

      <!-- Nội dung dưới -->
      <section class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1 space-y-4">
          <h2 class="text-3xl font-notoSerifDisplay text-pink-900 leading-snug">
            {{ $t('Ly_lich_ngan') }}
          </h2>
          <!-- <p class="text-gray-600 font-medium">5/5/2024</p> -->
        </div>
        <div  style="white-space: pre-line" class="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          {{ $t('Ly_lich') }}
        </div>
      </section>
    </div>
  </div>

</template>
