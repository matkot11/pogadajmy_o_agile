<script setup lang="ts">
import { IconName } from '@/typings/iconName.ts'
import GenericIcon from '@/components/GenericIcon.vue'

defineProps<{
  icon: IconName
  iconSize?: string
  name: string
  link: string
}>()
</script>

<template>
  <a :href="link" target="_blank" class="social-button">
    <GenericIcon :name="icon" size="50" />

    <div class="social-button__text-wrapper">
      <span class="social-button__text-listen">Listen on</span>
      <span class="social-button__text-social">{{ name }}</span>
    </div>
  </a>
</template>

<style scoped lang="scss">
@use '@/assets/typography';

.social-button {
  @extend %noto-sans-medium;
  padding: var(--space-8) 80px var(--space-8) var(--space-12);
  background: var(--color-black);
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-8);
  border-radius: 10px;
  font-size: var(--font-18);

  &__text {
    &-wrapper {
      display: flex;
      flex-direction: column;
    }

    &-listen {
      font-size: var(--font-12);
    }

    &-social {
      font-size: var(--font-20);
      letter-spacing: 0.8px;
    }
  }
}
</style>
