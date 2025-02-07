<template>
  <div class="arrow bounce text-center">
    <a href="#" :data-scroll-nav="scrollNav" class="">
      <i class="ti-arrow-down"></i>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  scrollNav: number;
}>();
</script>
