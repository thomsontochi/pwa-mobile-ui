<script setup lang="ts">
import type { HomeShortcut } from '@/types/home'

const props = defineProps<{
  items: HomeShortcut[]
}>()

const getInitials = (label: string) => {
  const [firstWord] = label.split(' ')
  return firstWord?.charAt(0).toUpperCase() ?? '•'
}
</script>

<template>
  <section class="flex gap-3 overflow-x-auto pb-2">
    <article
      v-for="shortcut in props.items"
      :key="shortcut.id"
      class="relative flex w-24 shrink-0 flex-col items-center gap-2 rounded-3xl bg-brand-card px-3 py-4 text-center text-xs font-medium text-brand-text-primary shadow-card"
    >
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-control text-sm font-semibold">
        {{ getInitials(shortcut.label) }}
      </div>
      <span class="leading-tight text-brand-text-secondary">{{ shortcut.label }}</span>
      <span
        v-if="shortcut.badgeCount && shortcut.badgeCount > 0"
        class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold"
      >
        {{ shortcut.badgeCount }}
      </span>
    </article>
  </section>
</template>
