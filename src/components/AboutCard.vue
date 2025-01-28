<script setup lang="ts">
defineProps<{
  about: string
  aboutExtra: string
}>()
</script>

<template>
  <div class="about-card">
    <div class="about-card__buttons">
      <div class="about-card__button about-card__button--red" />
      <div class="about-card__button about-card__button--orange" />
      <div class="about-card__button about-card__button--green" />
    </div>

    <p class="about-card__about">{{ about }}</p>
    <p class="about-card__about">{{ aboutExtra }}</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.about-card {
  padding: var(--space-24);
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  border-radius: 20px;

  &__buttons {
    display: flex;
    gap: var(--space-8);
  }

  &__button {
    width: 10px;
    height: 10px;
    border: 1px solid var(--color-black);
    border-radius: 100%;

    &--red {
      background-color: #db291a;
    }

    &--orange {
      background-color: #ffa500;
    }

    &--green {
      background-color: #1ed760;
    }
  }

  &__about {
    @extend %oswald-bold;
    font-size: var(--font-14);

    @media only screen and (min-width: 1000px) {
      font-size: var(--font-18);
    }
  }
}
</style>
