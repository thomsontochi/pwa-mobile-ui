<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import type { AlertBanner } from '@/types/home'

defineProps<{
  item: AlertBanner
}>()
</script>

<template>
  <article class="flex items-start gap-3 rounded-3xl bg-brand-card px-4 py-3 shadow-card">
    <div class="mt-1 flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-control text-brand-text-primary">
      <AppIcon name="bell" :stroke-width="2" />
    </div>
    <div class="flex-1 space-y-1 text-sm">
      <p class="text-[11px] uppercase tracking-wide text-brand-text-secondary">{{ item.time }}</p>
      <h3 class="text-sm font-semibold text-brand-text-primary">{{ item.title }}</h3>
      <p class="text-xs text-brand-text-secondary">{{ item.description }}</p>
    </div>
    <span
      v-if="item.badgeCount"
      class="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold"
    >
      {{ item.badgeCount }}
    </span>
  </article>
</template>
