<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import HomeTopBar from '@/components/home/HomeTopBar.vue'
import HomeShortcuts from '@/components/home/HomeShortcuts.vue'
import ProductCarousel from '@/components/home/ProductCarousel.vue'
import AlertBanner from '@/components/home/AlertBanner.vue'
import QuickActionsGrid from '@/components/home/QuickActionsGrid.vue'
import ActivityList from '@/components/home/ActivityList.vue'

import {
  accountActivities,
  alertBanners,
  homeShortcuts,
  productSlides,
  quickActions,
} from '@/data/homeContent'
</script>

<template>
  <main class="flex flex-col gap-6">
    <HomeTopBar :notifications="7" :messages="2" account-label="•••• 1234" avatar-initials="AU" />

    <HomeShortcuts :items="homeShortcuts" />

    <ProductCarousel :slides="productSlides" />

    <AlertBanner v-for="banner in alertBanners" :key="banner.id" :item="banner" />

    <QuickActionsGrid :actions="quickActions" />

    <ActivityList :activities="accountActivities" />

    <section class="space-y-3 rounded-3xl bg-brand-card px-5 py-6 shadow-card">
      <header class="flex items-center justify-between">
        <div class="flex items-center gap-2 text-brand-text-secondary">
          <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-control text-brand-text-primary">
            <AppIcon name="lock" :stroke-width="2" />
          </div>
          <div>
            <p class="text-sm font-semibold text-brand-text-primary">Cashback</p>
            <p class="text-xs text-brand-text-secondary">₺500 harcama hedefini tamamla, Cashback kazanmaya başla.</p>
          </div>
        </div>
        <AppIcon name="info" :stroke-width="2" />
      </header>

      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs text-brand-text-secondary">
          <span>₺500,00 kaldı</span>
          <span>%0 Tamamlandı</span>
        </div>
        <div class="h-2 w-full overflow-hidden rounded-full bg-brand-control">
          <div class="h-full w-1/6 rounded-full bg-accent-amber"></div>
        </div>
      </div>

      <div class="mt-4 flex items-center gap-3 rounded-3xl bg-brand-control px-4 py-4">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-amber/20 text-brand-text-primary">
          <AppIcon name="sparkles" :stroke-width="2" />
        </div>
        <div>
          <p class="text-sm font-semibold text-brand-text-primary">₺960 anında nakit kazan</p>
          <p class="text-xs text-brand-text-secondary">Ekim 2025 kampanyasını kaçırma</p>
        </div>
      </div>
    </section>

    <nav class="mt-6 flex items-center justify-between rounded-3xl bg-brand-card px-6 py-4 text-xs text-brand-text-secondary">
      <button class="flex flex-col items-center gap-1 text-brand-text-primary">
        <AppIcon name="home" :stroke-width="2" />
        Ana Sayfa
      </button>
      <button class="flex flex-col items-center gap-1">
        <AppIcon name="qr-code" :stroke-width="2" />
        QR İşlemleri
      </button>
      <button class="flex flex-col items-center gap-1">
        <AppIcon name="send" :stroke-width="2" />
        Para Transferi
      </button>
      <button class="flex flex-col items-center gap-1">
        <AppIcon name="wallet" :stroke-width="2" />
        Ödemeler
      </button>
      <button class="flex flex-col items-center gap-1">
        <AppIcon name="credit-card" :stroke-width="2" />
        Papara Card
      </button>
    </nav>
  </main>
</template>
