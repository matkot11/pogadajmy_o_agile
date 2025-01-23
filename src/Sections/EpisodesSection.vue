<script setup lang="ts">
import { onMounted } from 'vue'
import { useSpotifyData } from '@/composables/useSpotifyData.ts'

const { getSpotifyData } = useSpotifyData()

onMounted(async () => {
  await getSpotifyData()
})
</script>

<template>
  <div class="episodes-section">
    <h1>Sprawdź nowe odcinki</h1>
  </div>
</template>

<style scoped lang="scss"></style>
