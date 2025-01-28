<script setup lang="ts">
import AboutCard from '@/components/AboutCard.vue'
</script>

<template>
  <div class="about-section">
    <div class="about-section__about-wrapper">
      <div class="about-section__person-wrapper">
        <img src="@/assets/people/piotr.png" alt="Piotr Wojtera" class="about-section__person" />
        <h3 class="about-section__name">Piotr Wojtera</h3>
      </div>
      <AboutCard
        about="Lorem ipsum odor amet, consectetuer adipiscing elit. Congue cubilia integer sociosqu donec ac. Tortor suscipit mattis condimentum platea iaculis pretium. Lacinia phasellus tristique bibendum tristique luctus mi. Senectus donec netus nec ornare efficitur "
        about-extra="lacinia lacus morbi. Lorem magna porttitor felis habitasse lacinia suscipit. Lorem ipsum odor amet, consectetuer adipiscing elit. Congue cubilia integer sociosqu donec ac. Tortor suscipit mattis condimentum platea iaculis pretium"
      />
    </div>

    <div class="about-section__about-wrapper">
      <div class="about-section__person-wrapper about-section__person-wrapper--secondary">
        <img src="@/assets/people/michal.png" alt="Michał Toczek" class="about-section__person" />
        <h3 class="about-section__name">Michał Toczek</h3>
      </div>
      <AboutCard
        about="Ojciec, mąż, a zawodowo praktyk agile i kierownik projektów z doświadczeniem w zarządzaniu projektami w przemyśle produkcyjnym, morskim, a przede wszystkim IT. Sprawia mi olbrzymią przyjemność dzielenie się swoją wiedzą, prowadzenie szkoleń oraz wspieranie rozwoju zarówno zespołów jak poszczególnych osób."
        about-extra="Latem uprawiam agresywną jazdę na rolkach, zimą morsuję i jeżdżę na snowboard, a w nocy strzegę mojej córki przed potworami i koszmarami."
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.about-section {
  padding: var(--space-56) var(--space-24);
  background: rgb(50, 48, 112);
  background: linear-gradient(85deg, rgba(50, 48, 112, 1) 48%, rgba(0, 180, 235, 1) 100%);
  display: flex;
  flex-direction: column;

  &__person-wrapper {
    display: flex;

    &--secondary {
      margin-top: var(--space-56);
      flex-direction: row-reverse;
    }
  }

  &__name {
    @extend %oswald-bold;
    font-size: var(--font-32);
    color: var(--color-white);
  }

  &__person {
    width: 200px;
  }
}
</style>
