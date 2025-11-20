<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const segments = [
  { id: 1, label: 'Ulaşım Kartları', color: '#0EA5E9', icon: '🚉' },
  { id: 2, label: 'Oyun & Dijital Kod', color: '#8B5CF6', icon: '🎮' },
  { id: 3, label: 'Şans Oyunları', color: '#22D3EE', icon: '🎲' },
  { id: 4, label: 'Bağış', color: '#F97316', icon: '❤️' },
  { id: 5, label: 'Findeks', color: '#38BDF8', icon: '📊' },
  { id: 6, label: 'Havalimanı Hizmetleri', color: '#0EA5E9', icon: '✈️' },
  { id: 7, label: 'GSM TL/Paket', color: '#F59E0B', icon: '📱' },
]

const goBack = () => {
  router.back()
}
</script>

<template>
  <main class="relative flex min-h-screen flex-col gap-10 bg-gradient-to-br from-[#111113] via-[#0E0E12] to-[#1C1C21] px-6 pb-12 pt-10 text-brand-text-primary">
    <header class="flex items-center justify-between text-sm font-semibold">
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-card text-brand-text-primary"
        @click="goBack"
        aria-label="Geri dön"
      >
        <span class="text-lg">←</span>
      </button>
      <div class="flex items-center gap-2 text-xs text-brand-text-secondary">
        <span>Özet</span>
        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-brand-card text-brand-text-primary">◎</span>
      </div>
    </header>

    <section class="flex flex-1 flex-col items-center gap-8">
      <div class="relative flex items-center justify-center">
        <div
          class="h-60 w-60 rounded-full shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          style="background: conic-gradient(#0EA5E9 0deg 60deg, #8B5CF6 60deg 120deg, #22D3EE 120deg 180deg, #F97316 180deg 225deg, #38BDF8 225deg 270deg, #0EA5E9 270deg 315deg, #F59E0B 315deg 360deg);"
        />
        <div class="absolute h-36 w-36 rounded-full bg-[#101013]" />
        <div class="absolute text-center">
          <p class="text-xs uppercase tracking-wide text-brand-text-secondary">Toplam</p>
          <p class="text-3xl font-semibold">₺3.417,50</p>
        </div>
      </div>

      <ul class="grid w-full gap-3 text-sm text-brand-text-secondary">
        <li
          v-for="segment in segments"
          :key="segment.id"
          class="flex items-center gap-3 rounded-2xl bg-brand-card/40 px-4 py-3"
        >
          <span class="flex h-8 w-8 items-center justify-center rounded-full text-base" :style="{ backgroundColor: segment.color }">
            {{ segment.icon }}
          </span>
          <span>{{ segment.label }}</span>
        </li>
      </ul>

      <p class="text-center text-base font-semibold text-brand-text-primary">
        Ödemelerini aylık olarak kategori bazlı görüntüleyebilirsin.
      </p>
    </section>

    <button
      class="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-text-secondary/50 text-brand-text-secondary"
      @click="goBack"
    >
      ✕
    </button>
    <p class="text-center text-xs text-brand-text-secondary">Anladım</p>
  </main>
</template>
