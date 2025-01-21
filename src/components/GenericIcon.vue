<script setup lang="ts">
import { computedAsync } from '@vueuse/core'
import { IconName } from '@/typings/iconName.ts'

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: string
  }>(),
  {
    size: '24',
  },
)

const iconComponent = computedAsync(
  async () => await import(`@/assets/icons/${props.name}.svg`),
  'svg',
)
</script>

<template>
  <component :is="iconComponent" :width="size" :height="size" />
</template>
