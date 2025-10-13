<template>
    <div @click="targetLink(props.new.link)" class="bg-white rounded-3xl shadow flex flex-col items-start gap-4 w-[95%] md:w-[33%] cursor-pointer">
      <img :src="props.new.img" class="w-full h-60 md:h-60 object-cover rounded-t-2xl" />
      <div class="py-8 px-4 flex flex-col gap-4">
        <p class="text-sm text-gray-500">{{ props.new.date }}</p>
        <h3 class="font-semibold text-sm md:text-lg">{{ props.new.title }}</h3>
        <p class="text-gray-600 mt-1 text-sm">{{ props.new.desc }}</p>
      </div>
    </div>
    <!-- Dot navigation -->
</template>
<script setup lang="ts">
 const props = defineProps({
  // Bạn có thể thêm các props nếu cần thiết
  new: Object 
});
const targetLink = (link) => {
  window.open(`${link}`, "_blank");
};
</script>