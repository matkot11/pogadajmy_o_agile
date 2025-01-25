<script setup lang="ts">
const handleScroll = (className: string) => {
  const elementScrollY =
    document.querySelector(className)!.getBoundingClientRect().top + window.scrollY
  const offset = -20

  window.scrollBy({ top: elementScrollY + offset - window.scrollY, behavior: 'smooth' })
}
</script>

<template>
  <nav class="navigation-bar">
    <button class="navigation-bar__button" @click="() => handleScroll('.about-section')">
      O NAS
    </button>
    <button class="navigation-bar__button" @click="() => handleScroll('.episodes-section')">
      OSTATNIE ODCINKI
    </button>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.navigation-bar {
  padding: var(--space-12);
  display: flex;
  justify-content: center;
  gap: var(--space-24);
  background-color: var(--color-black);
  position: sticky;
  top: 0;

  &__button {
    @extend %noto-sans-medium;
    font-size: var(--space-14);
    color: var(--color-white);
    text-decoration: none;
    background-color: var(--color-black);
    border: none;
  }
}
</style>
