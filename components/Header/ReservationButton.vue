<template>
  <div class="reservation">
    <a :href="'tel:' + phoneNumber">
      <div class="icon d-flex justify-content-center align-items-center">
        <i class="flaticon-tray-1"></i>
      </div>
      <div class="call">
        <span>{{ phoneNumber }}</span>
        <br />Reservation
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
const phoneNumber = "855 100 4444";
</script>
