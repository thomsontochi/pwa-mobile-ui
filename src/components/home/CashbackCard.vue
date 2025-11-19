<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import type { CashbackProgress } from '@/types/home'

defineProps<{
  data: CashbackProgress
}>()
</script>

<template>
  <section class="space-y-3 rounded-3xl bg-brand-card px-5 py-6 shadow-card">
    <header class="flex items-center justify-between">
      <div class="flex items-center gap-3 text-brand-text-secondary">
        <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-control text-brand-text-primary">
          <AppIcon name="lock" :stroke-width="2" />
        </div>
        <div class="space-y-1">
          <p class="text-sm font-semibold text-brand-text-primary">{{ data.label }}</p>
          <p class="text-xs text-brand-text-secondary">{{ data.description }}</p>
        </div>
      </div>
      <AppIcon name="info" :stroke-width="2" />
    </header>

    <div class="space-y-2">
      <div class="flex items-center justify-between text-xs text-brand-text-secondary">
        <span>{{ data.remainingLabel }}</span>
        <span>{{ Math.round(data.progress / data.target * 100) }}% Tamamlandı</span>
      </div>
      <div class="h-2 w-full overflow-hidden rounded-full bg-brand-control">
        <div
          class="h-full rounded-full bg-accent-amber transition-all"
          :style="{ width: `${Math.min(100, Math.round(data.progress / data.target * 100))}%` }"
        ></div>
      </div>
    </div>

    <div class="mt-4 flex items-center gap-3 rounded-3xl bg-brand-control/60 px-4 py-4">
      <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-amber/20 text-brand-text-primary">
        <AppIcon name="sparkles" :stroke-width="2" />
      </div>
      <div class="space-y-1">
        <p class="text-sm font-semibold text-brand-text-primary">{{ data.promoTitle }}</p>
        <p class="text-xs text-brand-text-secondary">{{ data.promoDescription }}</p>
      </div>
    </div>
  </section>
</template>
