<script setup lang="ts">
import type { AccountActivity } from '@/types/home'

defineProps<{
  activities: AccountActivity[]
}>()
</script>

<template>
  <section class="space-y-4">
    <header class="flex items-center justify-between text-sm font-semibold text-brand-text-secondary">
      <span>Hesap Hareketleri</span>
      <button class="flex items-center gap-1 text-xs text-brand-text-primary/70">
        Tümü
      </button>
    </header>

    <ul class="space-y-3">
      <li
        v-for="activity in activities"
        :key="activity.id"
        class="flex items-center justify-between rounded-3xl bg-brand-card px-4 py-3 shadow-card"
      >
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-control text-sm font-semibold text-brand-text-primary">
            {{ activity.avatarSymbol }}
          </div>
          <div class="space-y-1">
            <p class="text-sm font-semibold text-brand-text-primary">{{ activity.name }}</p>
            <p class="text-xs text-brand-text-secondary">{{ activity.type }}</p>
            <p class="text-[11px] text-brand-text-muted">{{ activity.timestamp }}</p>
          </div>
        </div>
        <p :class="activity.isPositive ? 'text-accent-green' : 'text-accent-alert'" class="text-sm font-semibold">
          {{ activity.amount }}
        </p>
      </li>
    </ul>
  </section>
</template>
