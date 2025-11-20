<script setup lang="ts">
import { useRouter } from 'vue-router'
import AppIcon from '@/components/common/AppIcon.vue'

const router = useRouter()

const goBack = () => {
  router.back()
}

const handlePrimaryCta = () => {
  // Placeholder action hook for "Papara Card İste"
  router.back()
}

const handleSecondaryCta = () => {
  // Placeholder action hook for "ATM Bul"
  router.back()
}
</script>

<template>
  <main class="flex min-h-screen flex-col gap-10 bg-brand-surface px-6 pb-10 pt-8 text-brand-text-primary">
    <header class="flex items-center gap-4 text-sm font-semibold">
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card text-brand-text-primary"
        @click="goBack"
        aria-label="Geri dön"
      >
        <AppIcon name="chevron-left" :stroke-width="2" />
      </button>
      <span>Akbank ATM Bilgilendirmesi</span>
    </header>

    <section class="space-y-4 text-center">
      <h1 class="text-3xl font-bold leading-tight">Akbank ATM’leri tamamen ücretsiz.</h1>
      <p class="text-base text-brand-text-secondary">
        Papara Card ile tüm ATM’lerden para çekebilir, Akbank ATM’lerinde tamamen ücretsiz para yatırabilir ve çekebilirsin.
      </p>
    </section>

    <div class="relative mx-auto flex max-w-xs items-end justify-center gap-4">
      <div class="h-44 w-28 rounded-3xl bg-brand-card/60 shadow-card" />
      <div class="h-48 w-32 -translate-y-4 rounded-3xl bg-brand-card shadow-card" />
      <div class="h-44 w-28 rounded-3xl bg-brand-card/80 shadow-card" />
    </div>

    <div class="mt-auto space-y-3">
      <button
        class="w-full rounded-full border border-brand-text-primary/40 px-4 py-3 text-sm font-semibold text-brand-text-primary transition hover:bg-brand-card/70"
        @click="handleSecondaryCta"
      >
        ATM Bul
      </button>
      <button
        class="w-full rounded-full bg-brand-text-primary px-4 py-3 text-sm font-semibold text-brand-surface transition hover:bg-brand-text-primary/90"
        @click="handlePrimaryCta"
      >
        Papara Card İste
      </button>
    </div>
  </main>
</template>
