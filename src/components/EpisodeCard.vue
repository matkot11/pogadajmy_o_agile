<script setup lang="ts">
import type { Image } from '@/typings/spotify.ts'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  description: string
  images: Image[]
  duration_ms: number
  release_date: string
  url: string
}>()

const shortenedDescription = computed(() => {
  const dividedDescription = props.description.split('Prowadzący:')
  return dividedDescription[0]
})
const durationInMinutes = computed(() => Math.floor(props.duration_ms / 60000))
</script>

<template>
  <div class="episode-card">
    <div class="episode-card__heading">
      <img :src="images[1].url" alt="Episode cover" class="episode-card__image" />
      <h3 class="episode-card__title">{{ name }}</h3>
    </div>

    <span class="episode-card__description">{{ shortenedDescription }}</span>
    <span class="episode-card__time">{{ release_date }} • {{ durationInMinutes }}min</span>

    <a :href="url" target="_blank" class="episode-card__button">SŁUCHAJ NA SPOTIFY</a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.episode-card {
  padding: var(--space-24);
  display: flex;
  flex-direction: column;
  background-color: var(--color-blackish);
  color: var(--color-white);
  border-radius: 5px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0 54px 55px,
    rgba(0, 0, 0, 0.12) 0 -12px 30px,
    rgba(0, 0, 0, 0.12) 0 4px 6px,
    rgba(0, 0, 0, 0.17) 0 12px 13px,
    rgba(0, 0, 0, 0.09) 0 -3px 5px;

  &__heading {
    @extend %oswald-bold;
    margin-bottom: var(--space-12);
    display: flex;
    align-items: center;
  }

  &__image {
    margin-right: var(--space-8);
    width: 50px;
    height: 50px;
  }

  &__title {
    margin: 0;
    font-size: var(--font-18);
  }

  &__description {
    @extend %oswald-light;
    margin-bottom: var(--space-8);
  }

  &__time {
    @extend %oswald-regular;
    font-size: var(--font-12);
  }

  &__button {
    align-self: flex-end;
    @extend %oswald-bold;
    font-size: var(--font-12);
    text-decoration: none;
    color: var(--color-black);
    background-color: var(--color-green);
    border: 1px solid var(--color-white);
    border-radius: 20px;
    padding: 10px var(--space-24);
    width: max-content;
  }
}
</style>
