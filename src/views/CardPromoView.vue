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
  <main class="flex min-h-screen flex-col gap-6 bg-brand-surface px-4 pb-6 pt-6 text-brand-text-primary sm:gap-8 sm:px-6 sm:pb-10 sm:pt-8 md:gap-10 md:px-8 lg:px-12 xl:mx-auto xl:max-w-screen-lg">
    <header class="flex items-center gap-3 text-sm font-semibold sm:gap-4 md:text-base">
      <button
        type="button"
        class="flex h-9 w-9 items-center justify-center rounded-full bg-brand-card text-brand-text-primary sm:h-10 sm:w-10"
        @click="goBack"
        aria-label="Geri dön"
      >
        <AppIcon name="chevron-left" :stroke-width="2" />
      </button>
      <span>Akbank ATM Bilgilendirmesi</span>
    </header>

    <section class="space-y-3 text-center sm:space-y-4 md:space-y-5">
      <h1 class="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
        Akbank ATM'leri tamamen ücretsiz.
      </h1>
      <p class="mx-auto max-w-2xl text-sm text-brand-text-secondary sm:text-base md:text-lg">
        Papara Card ile tüm ATM'lerden para çekebilir, Akbank ATM'lerinde tamamen ücretsiz para yatırabilir ve çekebilirsin.
      </p>
    </section>

    <div class="relative mx-auto flex max-w-xs items-end justify-center gap-3 sm:max-w-sm sm:gap-4 md:max-w-md md:gap-5 lg:max-w-lg">
      <div class="h-36 w-24 rounded-2xl bg-brand-card/60 shadow-card sm:h-44 sm:w-28 sm:rounded-3xl md:h-52 md:w-32 lg:h-60 lg:w-40" />
      <div class="h-40 w-28 -translate-y-2 rounded-2xl bg-brand-card shadow-card sm:h-48 sm:w-32 sm:-translate-y-4 sm:rounded-3xl md:h-56 md:w-36 lg:h-64 lg:w-44" />
      <div class="h-36 w-24 rounded-2xl bg-brand-card/80 shadow-card sm:h-44 sm:w-28 sm:rounded-3xl md:h-52 md:w-32 lg:h-60 lg:w-40" />
    </div>

    <div class="mt-auto space-y-2.5 sm:space-y-3 md:mx-auto md:w-full md:max-w-md">
      <button
        class="w-full rounded-full border border-brand-text-primary/40 px-4 py-2.5 text-sm font-semibold text-brand-text-primary transition hover:bg-brand-card/70 sm:py-3 md:text-base"
        @click="handleSecondaryCta"
      >
        ATM Bul
      </button>
      <button
        class="w-full rounded-full bg-brand-text-primary px-4 py-2.5 text-sm font-semibold text-brand-surface transition hover:bg-brand-text-primary/90 sm:py-3 md:text-base"
        @click="handlePrimaryCta"
      >
        Papara Card İste
      </button>
    </div>
  </main>
</template>