<script lang="ts" setup>
import { ref } from "vue";

const show = ref(true);
</script>

<template>
  <div>
    <section class="tw-bg-gray-100 tw-py-12">
      <div class="tw-container tw-mx-auto">
        <div class="tw-text-center">
          <h2 class="tw-text-3xl tw-font-bold tw-text-gray-800">About Us</h2>
          <p class="tw-mt-4 tw-text-lg tw-text-gray-600">
            Welcome to our restaurant, where culinary excellence meets a warm
            and inviting atmosphere. Our team of expert chefs is dedicated to
            crafting delicious dishes using the finest ingredients.
          </p>
        </div>
        <div class="tw-mt-8 tw-grid tw-grid-cols-1 tw-md:grid-cols-2 tw-gap-8">
          <div class="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-6">
            <h3 class="tw-text-xl tw-font-semibold tw-text-gray-800">
              Our Mission
            </h3>
            <p class="tw-mt-2 tw-text-gray-600">
              To provide an unforgettable dining experience that delights the
              senses and creates lasting memories.
            </p>
          </div>
          <div class="tw-bg-white tw-shadow-lg tw-rounded-lg tw-p-6">
            <h3 class="tw-text-xl tw-font-semibold tw-text-gray-800">
              Our Vision
            </h3>
            <p class="tw-mt-2 tw-text-gray-600">
              To be recognized as a leader in the culinary world, known for our
              innovative dishes and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
