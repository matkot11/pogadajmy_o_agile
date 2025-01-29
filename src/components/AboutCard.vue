<script setup lang="ts">
import GenericIcon from '@/components/GenericIcon.vue'
import { IconName } from '@/typings/iconName.ts'

defineProps<{
  about: string
  aboutExtra: string
  linkedin: string;
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

    <a :href="linkedin" class="about-card__link">
      <GenericIcon :name="IconName.linkedinWhite" size="32" />
      <span>Linkedin</span>
    </a>
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

  &__link {
    @extend %noto-sans-medium;
    margin: var(--space-12) 0 0 auto;
    padding: var(--space-8) var(--space-12);
    width: max-content;
    display: flex;
    align-items: center;
    background-color: var(--color-blackish);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 10px;
  }
}
</style>
