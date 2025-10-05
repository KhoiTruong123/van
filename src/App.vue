<script setup>
import FootBar from './components/FootBar.vue';
import Topbar from './components/Topbar.vue';

</script>

<template>
  <div class="flex flex-col">
    <div>
      <Topbar/>
    </div>
    <router-view/>
    <FootBar />
  </div>
  

</template>

<style scoped></style>
