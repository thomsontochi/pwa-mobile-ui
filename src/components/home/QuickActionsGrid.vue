<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import type { QuickAction } from '@/types/home'

defineProps<{
  actions: QuickAction[]
}>()

const emit = defineEmits<{
  (e: 'select', action: QuickAction): void
}>()
</script>

<template>
  <section class="space-y-4">
    <header class="flex items-center justify-between text-sm font-semibold text-brand-text-secondary">
      <span>Daha İyi Bir Papara Deneyimi</span>
      <button class="flex items-center gap-1 text-xs text-brand-text-primary/70">
        2 / 5
        <AppIcon name="chevron-right" :stroke-width="2" :size="16" />
      </button>
    </header>

    <div class="grid grid-cols-2 gap-3">
      <component
        v-for="action in actions"
        :key="action.id"
        :is="action.route ? 'RouterLink' : 'button'"
        :to="action.route"
        class="flex flex-col items-center justify-center gap-2 rounded-3xl border border-brand-border/50 bg-brand-card px-4 py-5 text-center text-sm font-medium text-brand-text-primary shadow-card transition hover:border-brand-text-primary/40"
        @click="!action.route && emit('select', action)"
      >
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-control text-brand-text-primary">
          <AppIcon :name="action.icon as any" :stroke-width="2" />
        </div>
        <span class="leading-tight text-brand-text-secondary">{{ action.label }}</span>
      </component>
    </div>
  </section>
</template>
