<script setup lang="ts">
import GenericIcon from '@/components/GenericIcon.vue'
import { IconName } from '@/typings/iconName.ts'
</script>

<template>
  <footer class="footer-section">
    <div class="footer-section__logo-wrapper">
      <GenericIcon :name="IconName.footerLogo" size="150" />
      <span class="footer-section__copyright"
        >&#169; 2025 Pogadajmy O Agile. All Rights Reserved.</span
      >
    </div>

    <hr class="footer-section__divider" />

    <div class="footer-section__socials-wrapper">
      <h3>SŁUCHAJ NAS</h3>
      <div class="footer-section__icons-wrapper">
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

    <div class="footer-section__socials-wrapper">
      <h3>SKONTAKTUJ SIĘ Z NAMI</h3>
      <div class="footer-section__icons-wrapper">
        <a href="https://www.facebook.com/PogadajmyoAgile" target="_blank">
          <GenericIcon :name="IconName.facebook" size="40" />
        </a>
        <a href="mailto:pogadajmyoagile@gmail.com" target="_blank">
          <GenericIcon :name="IconName.gmail" size="40" />
        </a>
        <a href="https://www.linkedin.com/company/pogadajmy-o-agile/" target="_blank">
          <GenericIcon :name="IconName.linkedin" size="40" />
        </a>
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

  &__logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__copyright {
    @extend %oswald-regular;
    font-size: var(--font-8);
  }

  &__divider {
    border-top: 1px solid var(--color-white);
    margin: var(--space-32) 0;
  }

  &__socials-wrapper {
    @extend %oswald-bold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__icons-wrapper {
    display: flex;
    gap: var(--space-16);
  }
}
</style>
