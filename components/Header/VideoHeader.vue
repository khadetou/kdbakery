<template>
  <header class="header">
    <div class="video-fullscreen-wrap">
      <div class="video-fullscreen-video" data-overlay-dark="3">
        <video>
          <source
            v-for="(source, index) in videoSources"
            :key="index"
            :src="source.src"
            :type="source.type"
            autoplay=""
            loop=""
            muted=""
          />
        </video>
      </div>
      <div class="v-middle caption overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h6>{{ established }}</h6>
              <h1>
                {{ title }}<span>{{ subtitle }}</span>
              </h1>
              <h4>{{ address }}</h4>
              <a
                :href="menuLink.href"
                :data-scroll-nav="menuLink.scrollNav"
                class="button-1 mt-30"
              >
                {{ menuLink.text }}<span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ReservationButton />
    <ScrollDownArrow :scrollNav="1" />
  </header>
</template>

<script setup lang="ts">
interface Props {
  established: string;
  title: string;
  subtitle: string;
  address: string;
  menuLink: {
    href: string;
    scrollNav: number;
    text: string;
  };
  videoSources: Array<{
    src: string;
    type: string;
  }>;
}

defineProps<Props>();
</script>
