<template>
  <section class="clients">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="owl-carousel owl-theme">
            <div
              v-for="(client, index) in clients"
              :key="index"
              class="clients-logo"
            >
              <a :href="client.href">
                <img :src="client.imgSrc" :alt="client.alt || ''" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Client {
  href: string;
  imgSrc: string;
  alt?: string;
}

const clients: Client[] = [
  { href: "#0", imgSrc: "/assets/img/clients/2.png" },
  { href: "#0", imgSrc: "/assets/img/clients/3.png" },
  { href: "#0", imgSrc: "/assets/img/clients/4.png" },
  { href: "#0", imgSrc: "/assets/img/clients/5.png" },
  { href: "#0", imgSrc: "/assets/img/clients/6.png" },
];
</script>
