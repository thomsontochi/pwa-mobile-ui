<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'

defineProps<{
  notifications?: number
  messages?: number
  avatarInitials?: string
  accountLabel?: string
}>()
</script>

<template>
  <header class="flex items-center justify-between">
    <button class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-card shadow-inset">
      <AppIcon name="menu" :stroke-width="2" />
      <span
        v-if="notifications"
        class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold"
      >
        {{ notifications }}
      </span>
    </button>

    <div class="flex flex-1 items-center justify-center gap-3 text-sm font-medium text-brand-text-secondary">
      <button class="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-card shadow-inset">
        <AppIcon name="message-square" :stroke-width="2" />
        <span
          v-if="messages"
          class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold"
        >
          {{ messages }}
        </span>
      </button>

      <div class="flex flex-col items-center text-xs">
        <span class="uppercase tracking-wide text-brand-text-secondary">Papara No</span>
        <span class="font-semibold text-brand-text-primary" v-if="accountLabel">{{ accountLabel }}</span>
        <span class="font-semibold text-brand-text-primary" v-else>•••• 1234</span>
      </div>

      <button class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-card shadow-inset">
        <AppIcon name="search" :stroke-width="2" />
      </button>
    </div>

    <button class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-card shadow-inset">
      <span class="text-sm font-semibold text-brand-text-primary">{{ avatarInitials ?? 'AU' }}</span>
    </button>
  </header>
</template>
