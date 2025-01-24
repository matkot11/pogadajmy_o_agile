<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyData } from '@/composables/useSpotifyData.ts'
import EpisodeCard from '@/components/EpisodeCard.vue'

const { getSpotifyData, spotifyData, loading } = useSpotifyData()

onMounted(async () => {
  await getSpotifyData()
})
</script>

<template>
  <div class="episodes-section">
    <h1 class="episodes-section__heading">SPRAWDŹ NOWE ODCINKI</h1>

    <span v-if="loading">LOADING</span>
    <template v-else-if="spotifyData">
      <EpisodeCard
        v-for="{
          id,
          name,
          description,
          images,
          duration_ms,
          release_date,
          external_urls: { spotify: url },
        } in spotifyData.items"
        :key="id"
        :name="name"
        :description="description"
        :images="images"
        :duration_ms="duration_ms"
        :release_date="release_date"
        :url="url"
        class="episodes-section__card"
      />
    </template>

    <a
      href="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
      target="_blank"
      class="episodes-section__button"
    >
      WIĘCEJ ODCINKÓW
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.episodes-section {
  padding: var(--space-32) 0;
  background-color: var(--color-gray);

  &__heading {
    @extend %oswald-bold;
    margin-top: 0;
    margin-bottom: var(--space-32);
    font-size: var(--font-32);
    text-align: center;
  }

  &__card {
    margin: 32px;
  }

  &__button {
    @extend %oswald-bold;
    text-decoration: none;
    color: var(--color-black);
    background-color: var(--color-green);
    border-radius: 45px;
    padding: var(--space-16) var(--space-32);
    margin: var(--space-64) auto var(--space-32) auto;
    display: block;
    width: max-content;
    align-self: center;
  }
}
</style>
