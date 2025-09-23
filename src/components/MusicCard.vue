<template>
    <div @click="targetYoutube(props.music.link)" class="bg-white rounded-3xl shadow flex flex-col items-start gap-4 w-[45%] md:w-[24%] cursor-pointer">
      <img :src="props.music.img" class="w-full h-60 object-cover rounded-t-2xl" />
      <div class="p-4">
        <h3 class="font-semibold text-lg">{{ props.music.title }}</h3>
        <!-- <p class="text-gray-600 mt-1 text-sm">Mô tả sự kiện ngắn gọn...</p> -->
      </div>
    </div>
    <!-- Dot navigation -->
</template>
<script setup lang="ts">
const props = defineProps({
  // Bạn có thể thêm các props nếu cần thiết
  music: Object
});
const targetYoutube = (link) => {
  window.open(`${link}`, "_blank");
};
</script>
