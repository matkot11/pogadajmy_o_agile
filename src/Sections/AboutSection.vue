<script setup lang="ts">
import AboutCard from '@/components/AboutCard.vue'
</script>

<template>
  <div class="about-section">
    <div class="about-section__about-wrapper">
      <img src="@/assets/people/piotr.png" alt="Piotr Wojtera" class="about-section__person" />
      <h3 class="about-section__name">Piotr Wojtera</h3>
      <AboutCard
        class="about-section__card"
        about="Mentor, trener, agent zmiany, agile coach. Od 20 lat w branży IT. Od kilku lat blisko współpracuję ze Scaled Agile, ale pamiętam też czasy gdy w rozwoju oprogramowania królowały projekty. Z zaciekawieniem obserwuję małe zmiany i mega cykle, które przetaczają się przez rynek IT w ostatnich latach. Poszukuję. Właśnie dlatego rozmowy w podkaście  są dla mnie wartościowe. Sam nie wiem z jakimi wnioskami skończymy odcinek."
        linkedin="https://www.linkedin.com/in/piotr-wojtera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      />
    </div>

    <div class="about-section__about-wrapper about-section__about-wrapper--secondary">
      <img
        src="@/assets/people/michal.png"
        alt="Michał Toczek"
        class="about-section__person about-section__person--secondary"
      />
      <h3 class="about-section__name about-section__name--secondary">Michał Toczek</h3>
      <AboutCard
        class="about-section__card about-section__card--secondary"
        about="Ojciec, mąż, a zawodowo praktyk agile i kierownik projektów z doświadczeniem w zarządzaniu projektami w przemyśle produkcyjnym, morskim, a przede wszystkim IT. Sprawia mi olbrzymią przyjemność dzielenie się swoją wiedzą, prowadzenie szkoleń oraz wspieranie rozwoju zarówno zespołów jak poszczególnych osób."
        about-extra="Latem uprawiam agresywną jazdę na rolkach, zimą morsuję i jeżdżę na snowboard, a w nocy strzegę mojej córki przed potworami i koszmarami."
        linkedin="https://www.linkedin.com/in/micha%C5%82-toczek-5b251a29?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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

  @media only screen and (min-width: 800px) {
    padding: var(--space-56) var(--space-32);
    flex-direction: row;
    gap: var(--space-32);
  }

  &__about-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px auto;

    @media only screen and (min-width: 800px) {
      grid-template-rows: 400px auto;
    }

    @media only screen and (min-width: 1300px) {
      grid-template-columns: 1fr auto;
      grid-template-rows: 150px auto;
      gap: var(--space-24);
    }

    &--secondary {
      margin-top: var(--space-56);

      @media only screen and (min-width: 800px) {
        margin-top: 0;
      }

      @media only screen and (min-width: 1300px) {
        grid-template-columns: auto 1fr;
      }
    }
  }

  &__name {
    grid-column: 2;
    grid-row: 1;
    @extend %oswald-bold;
    font-size: var(--font-32);
    color: var(--color-white);
    margin: 0;
    width: min-content;

    @media only screen and (min-width: 800px) {
      font-size: var(--font-40);
    }

    @media only screen and (min-width: 1000px) {
      font-size: var(--font-56);
    }

    @media only screen and (min-width: 1300px) {
      grid-column: 1 / -1;
      margin: 0 0 var(--space-32) 0;
      width: max-content;
      text-align: end;
      justify-self: end;
      margin-right: var(--space-56);
      font-size: 80px;
    }

    &--secondary {
      grid-column: 1;
      justify-self: end;

      @media only screen and (min-width: 1300px) {
        grid-column: 1 / -1;
        text-align: start;
        justify-self: start;
        margin-left: var(--space-56);
        margin-right: 0;
      }
    }
  }

  &__person {
    height: 300px;
    grid-row: 1;
    grid-column: 1;
    justify-self: end;
    align-self: end;

    @media only screen and (min-width: 800px) {
      height: 400px;
    }

    @media only screen and (min-width: 1300px) {
      grid-row: 2;
      grid-column: 2;
      align-self: end;
    }

    @media only screen and (min-width: 1400px) {
      height: 450px;
    }

    &--secondary {
      grid-column: 2;
      justify-self: start;

      @media only screen and (min-width: 1300px) {
        grid-column: 1;
      }
    }
  }

  &__card {
    grid-column: 1 / -1;
    grid-row: 2;
    height: max-content;

    @media only screen and (min-width: 1300px) {
      grid-column: 1;
    }

    &--secondary {
      @media only screen and (min-width: 1300px) {
        grid-column: 2;
      }
    }
  }
}
</style>
