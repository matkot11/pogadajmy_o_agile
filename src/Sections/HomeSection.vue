<script setup lang="ts">
import GenericIcon from '@/components/GenericIcon.vue'
import { IconName } from '@/typings/iconName.ts'
import SocialButton from '@/components/SocialButton.vue'
</script>

<template>
  <div class="home-section">
    <div class="home-section__inner-wrapper">
      <div class="home-section__logo-wrapper">
        <GenericIcon :name="IconName.logo" class="home-section__logo" />
      </div>

      <hr class="home-section__divider" />

      <p class="home-section__about">
        W "Pogadajmy o Agile" chcemy zadawać pytania na które odpowiedź nie jest prosta ani
        jednoznaczna, poruszać tematy ważne, drażliwe i zmuszające osoby praktykujące Agile do
        przemyśleń. Zapraszamy do słuchania.
      </p>
    </div>

    <div class="home-section__socials--mobile">
      <a
        href="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
        target="_blank"
      >
        <GenericIcon :name="IconName.spotify" size="60" />
      </a>
      <a href="https://m.youtube.com/@pogadajmyoagile" target="_blank">
        <GenericIcon :name="IconName.youtube" size="60" />
      </a>
    </div>

    <div class="home-section__socials--desktop">
      <SocialButton
        :icon="IconName.spotify"
        name="Spotify"
        link="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
      />
      <SocialButton
        :icon="IconName.applePodcast"
        name="Apple Podcasts"
        link="https://podcasts.apple.com/us/podcast/pogadajmy-o-agile/id1499729984"
      />

      <SocialButton
        :icon="IconName.youtube"
        name="YouTube"
        link="https://m.youtube.com/@pogadajmyoagile"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.home-section {
  padding-bottom: var(--space-56);

  &__inner-wrapper {
    @media only screen and (min-width: 700px) {
      padding: 60px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: rgb(79, 32, 108);
      background: linear-gradient(90deg, rgba(79, 32, 108, 1) 0%, rgba(197, 60, 0, 1) 100%);
    }

    @media only screen and (min-width: 1000px) {
      padding: 100px;
    }
  }

  &__logo-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    background: rgb(79, 32, 108);
    background: linear-gradient(90deg, rgba(79, 32, 108, 1) 0%, rgba(197, 60, 0, 1) 100%);

    @media only screen and (min-width: 700px) {
      background: none;
    }
  }

  &__logo {
    margin: 80px;
    height: 240px;
    width: 240px;

    @media only screen and (min-width: 700px) {
      margin: 0;
    }

    @media only screen and (min-width: 1000px) {
      height: 300px;
      width: 300px;
    }

    @media only screen and (min-width: 1400px) {
      height: 400px;
      width: 400px;
    }
  }

  &__divider {
    margin: var(--space-56);
    border: 1px solid var(--color-black);

    @media only screen and (min-width: 700px) {
      margin: 0;
      height: 240px;
    }

    @media only screen and (min-width: 1000px) {
      height: 300px;
    }

    @media only screen and (min-width: 1300px) {
      height: 400px;
      border: 2px solid var(--color-black);
    }
  }

  &__about {
    @extend %noto-sans-semi-bold;
    margin: 0 var(--space-56);
    text-align: center;

    @media only screen and (min-width: 700px) {
      margin: 0;
      max-width: 240px;
    }

    @media only screen and (min-width: 1000px) {
      max-width: 300px;
      font-size: var(--font-18);
    }

    @media only screen and (min-width: 1400px) {
      max-width: 400px;
      font-size: var(--font-24);
    }
  }

  &__socials--mobile {
    margin: var(--space-56) var(--space-56) 0 var(--space-56);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 700px) {
      display: none;
    }
  }

  &__socials--desktop {
    display: none;

    @media only screen and (min-width: 700px) {
      padding-top: var(--space-56);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }
  }
}
</style>
