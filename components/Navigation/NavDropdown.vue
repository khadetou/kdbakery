<script setup lang="ts">
import { ref } from "vue";

interface Props {
  isScrolled: boolean;
  items: {
    text: string;
    to: string;
  }[];
}

const props = defineProps<Props>();
const isOpen = ref(false);
</script>

<template>
  <div class="relative group">
    <slot />
    <div
      class="absolute left-0 mt-2 w-48 rounded-md shadow-lg transform opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
      :class="[isScrolled ? 'bg-white' : 'bg-gray-900']"
    >
      <div class="py-1">
        <NuxtLink
          v-for="item in items"
          :key="item.to"
          :to="item.to"
          class="block px-4 py-2 text-sm transition-colors duration-200"
          :class="[
            isScrolled
              ? 'text-[#402316] hover:bg-gray-100'
              : 'text-white hover:bg-gray-800',
          ]"
        >
          {{ item.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
