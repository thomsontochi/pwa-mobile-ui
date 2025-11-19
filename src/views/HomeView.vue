<script setup lang="ts">
import HomeTopBar from '@/components/home/HomeTopBar.vue'
import HomeShortcuts from '@/components/home/HomeShortcuts.vue'
import ProductCarousel from '@/components/home/ProductCarousel.vue'
import AlertBanner from '@/components/home/AlertBanner.vue'
import QuickActionsGrid from '@/components/home/QuickActionsGrid.vue'
import ActivityList from '@/components/home/ActivityList.vue'
import CashbackCard from '@/components/home/CashbackCard.vue'
import HomeBottomNav from '@/components/home/HomeBottomNav.vue'
import ActionSheetDrawer from '@/components/home/ActionSheetDrawer.vue'

import {
  accountActivities,
  alertBanners,
  homeShortcuts,
  cashbackProgress,
  productSlides,
  quickActions,
  bottomNavItems,
  actionSheets,
} from '@/data/homeContent'

import { ref, computed } from 'vue'

const activeSheetId = ref<string | null>(null)

const activeSheet = computed(() => actionSheets.find((sheet) => sheet.id === activeSheetId.value) ?? null)

const openSheet = (id: string) => {
  activeSheetId.value = id
}

const closeSheet = () => {
  activeSheetId.value = null
}
</script>

<template>
  <main class="relative flex flex-col gap-6">
    <HomeTopBar :notifications="7" :messages="2" account-label="•••• 1234" avatar-initials="AU" />

    <HomeShortcuts :items="homeShortcuts" />

    <ProductCarousel :slides="productSlides" />

    <AlertBanner v-for="banner in alertBanners" :key="banner.id" :item="banner" />

    <QuickActionsGrid :actions="quickActions" />

    <ActivityList :activities="accountActivities" />

    <CashbackCard :data="cashbackProgress" />

    <HomeBottomNav :items="bottomNavItems" active-route="/" />

    <div class="fixed bottom-28 right-6 flex flex-col gap-3">
      <button
        class="rounded-full bg-brand-text-primary px-4 py-2 text-xs font-semibold text-brand-surface shadow-card"
        @click="openSheet('transfer')"
      >
        Para Gönder
      </button>
      <button
        class="rounded-full bg-brand-control px-4 py-2 text-xs font-semibold text-brand-text-primary shadow-card"
        @click="openSheet('qr')"
      >
        QR İşlemleri
      </button>
    </div>

    <ActionSheetDrawer :sheet="activeSheet" :show="!!activeSheet" @close="closeSheet" @select="closeSheet" />
  </main>
</template>
