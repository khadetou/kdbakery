import { ref, onMounted, onUnmounted } from "vue";

export function useScroll() {
  const isScrolled = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    isScrolled,
  };
}
