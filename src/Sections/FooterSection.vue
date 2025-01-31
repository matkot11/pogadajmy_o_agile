<script setup lang="ts">
import GenericIcon from '@/components/GenericIcon.vue'
import { IconName } from '@/typings/iconName.ts'
</script>

<template>
  <footer class="footer-section">
    <div class="footer-section__logo-wrapper">
      <div class="footer-section__logo">
        <GenericIcon :name="IconName.footerLogo" />
        <span class="footer-section__copyright">
          &#169; 2025 Pogadajmy O Agile. All Rights Reserved.
        </span>
      </div>

      <hr class="footer-section__divider" />
    </div>

    <div class="footer-section__socials-wrapper">
      <div class="footer-section__socials">
        <h3>SŁUCHAJ NAS</h3>
        <div class="footer-section__icons-wrapper">
          <a
            href="https://open.spotify.com/show/0yYMHIsmd6I5dGXU3xyIcL?si=22efb5324637422b"
            target="_blank"
          >
            <GenericIcon :name="IconName.spotify" size="35" />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/pogadajmy-o-agile/id1499729984"
            target="_blank"
          >
            <GenericIcon :name="IconName.applePodcast" size="35" />
          </a>
          <a href="https://m.youtube.com/@pogadajmyoagile" target="_blank">
            <GenericIcon :name="IconName.youtube" size="35" />
          </a>
        </div>
      </div>

      <div class="footer-section__socials">
        <h3>SKONTAKTUJ SIĘ Z NAMI</h3>
        <div class="footer-section__icons-wrapper">
          <a href="https://www.facebook.com/PogadajmyoAgile" target="_blank">
            <GenericIcon :name="IconName.facebook" size="35" />
          </a>
          <a href="mailto:pogadajmyoagile@gmail.com" target="_blank">
            <GenericIcon :name="IconName.gmail" size="35" />
          </a>
          <a href="https://www.linkedin.com/company/pogadajmy-o-agile/" target="_blank">
            <GenericIcon :name="IconName.linkedin" size="35" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/typography.scss';

.footer-section {
  padding: var(--space-32);
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--color-blackish);
  color: var(--color-white);

  @media only screen and (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &__logo-wrapper {
    display: flex;
    flex-direction: column-reverse;

    @media only screen and (min-width: 550px) {
      flex-direction: row;
    }
  }

  &__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      width: 180px;
      height: 130px;
    }
  }

  &__copyright {
    @extend %oswald-regular;
    font-size: var(--font-10);
  }

  &__divider {
    border-top: 1px solid var(--color-white);
    margin: var(--space-32) 0;

    @media only screen and (min-width: 550px) {
      border-left: 1px solid var(--color-white);
      margin: 0 0 0 70px;
    }
  }

  &__socials-wrapper {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 700px) {
      flex-direction: row;
      gap: 80px;
    }
  }

  &__socials {
    @extend %oswald-bold;
    display: flex;
    flex-direction: column;
  }

  &__icons-wrapper {
    display: flex;
    gap: var(--space-16);
  }
}
</style>
