<script setup lang="ts">
import GenericIcon from '@/components/GenericIcon.vue'
import { IconName } from '@/typings/iconName.ts'
</script>

<template>
  <div class="home-section">
    <div class="home-section__logo-wrapper">
      <GenericIcon :name="IconName.logo" size="240" class="home-section__logo" />
    </div>

    <hr class="home-section__divider" />

    <p class="home-section__about">
      W "Pogadajmy o Agile" chcemy zadawać pytania na które odpowiedź nie jest prosta ani
      jednoznaczna, poruszać tematy ważne, drażliwe i zmuszające osoby praktykujące Agile do
      przemyśleń. Zapraszamy do słuchania.
    </p>

    <div class="home-section__socials">
      <a href="https://m.youtube.com/@pogadajmyoagile" target="_blank">
        <GenericIcon :name="IconName.youtube" size="60" />
      </a>
      <a
        href="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
        target="_blank"
      >
        <GenericIcon :name="IconName.spotify" size="60" />
      </a>
      <a href="https://www.linkedin.com/company/pogadajmy-o-agile/" target="_blank">
        <GenericIcon :name="IconName.linkedin" size="60" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.home-section {
  &__logo-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    background: rgb(79, 32, 108);
    background: linear-gradient(90deg, rgba(79, 32, 108, 1) 0%, rgba(197, 60, 0, 1) 100%);
  }

  &__logo {
    margin: 80px;
  }

  &__divider {
    margin: var(--space-56);
    border-top: 2px solid var(--color-black);
  }

  &__about {
    @extend %noto-sans-semi-bold;
    margin: 0 5 var(--space-56);
    text-align: center;
  }

  &__socials {
    margin-top: var(--space-56);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-56);
  }
}
</style>
