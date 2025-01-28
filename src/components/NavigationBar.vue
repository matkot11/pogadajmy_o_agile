<script setup lang="ts">
import { IconName } from '@/typings/iconName.ts'
import GenericIcon from '@/components/GenericIcon.vue'

const handleScroll = (className: string) => {
  const elementScrollY =
    document.querySelector(className)!.getBoundingClientRect().top + window.scrollY
  const offset = -30

  window.scrollBy({ top: elementScrollY + offset - window.scrollY, behavior: 'smooth' })
}
</script>

<template>
  <nav class="navigation-bar">
    <div class="navigation-bar__inner-wrapper">
      <div class="navigation-bar__buttons-wrapper">
        <button class="navigation-bar__button" @click="() => handleScroll('.about-section')">
          O NAS
        </button>
        <button class="navigation-bar__button" @click="() => handleScroll('.episodes-section')">
          OSTATNIE ODCINKI
        </button>
      </div>

      <div class="navigation-bar__icons-wrapper">
        <a href="https://m.youtube.com/@pogadajmyoagile" target="_blank">
          <GenericIcon :name="IconName.youtube" size="40" />
        </a>
        <a
          href="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
          target="_blank"
        >
          <GenericIcon :name="IconName.spotify" size="40" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.navigation-bar {
  padding: var(--space-12);
  background-color: var(--color-blackish);
  position: sticky;
  top: 0;

  &__inner-wrapper {
    position: relative;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 700px) {
      height: 52px;
    }
  }

  &__buttons-wrapper {
    display: flex;
    gap: var(--space-24);
    grid-row: 1;
  }

  &__button {
    @extend %noto-sans-medium;
    font-size: var(--space-14);
    color: var(--color-white);
    text-decoration: none;
    background-color: inherit;
    border: none;
    cursor: pointer;

    @media only screen and (min-width: 700px) {
      font-size: var(--font-16);
    }
  }

  &__icons-wrapper {
    display: none;
    gap: var(--space-12);
    grid-row: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;

    @media only screen and (min-width: 700px) {
      display: flex;
    }
  }
}
</style>
