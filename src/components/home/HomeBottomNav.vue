<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import type { BottomNavItem } from '@/types/home'

defineProps<{
  items: BottomNavItem[]
  activeRoute: string
}>()
</script>

<template>
  <nav class="flex items-center justify-between rounded-3xl bg-brand-card px-6 py-4 text-xs text-brand-text-secondary shadow-card">
    <button
      v-for="item in items"
      :key="item.id"
      class="flex flex-col items-center gap-1 transition"
      :class="item.route === activeRoute ? 'text-brand-text-primary' : 'text-brand-text-secondary/70'
        + ' hover:text-brand-text-primary'"
    >
      <AppIcon :name="item.icon as any" :stroke-width="2" />
      {{ item.label }}
    </button>
  </nav>
</template>
