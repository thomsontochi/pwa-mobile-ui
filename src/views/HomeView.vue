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
import { useRouter } from 'vue-router'
import type { BottomNavItem, QuickAction } from '@/types/home'

const activeSheetId = ref<string | null>(null)

const activeSheet = computed(() => actionSheets.find((sheet) => sheet.id === activeSheetId.value) ?? null)

const router = useRouter()

const openSheet = (id: string) => {
  activeSheetId.value = id
}

const closeSheet = () => {
  activeSheetId.value = null
}

const handleQuickAction = (action: QuickAction) => {
  if (action.route) {
    router.push(action.route)
    return
  }

  if (action.sheetId) {
    openSheet(action.sheetId)
  }
}

const handleNavSelect = (item: BottomNavItem) => {
  if (item.route === '/transfer') {
    openSheet('transfer')
    return
  }

  if (item.route === '/qr') {
    openSheet('qr')
    return
  }

  if (item.route) {
    router.push(item.route)
  }
}
</script>

<template>
  <main class="relative flex flex-col gap-6">
    <HomeTopBar :notifications="7" :messages="2" account-label="•••• 1234" avatar-initials="AU" />

    <HomeShortcuts :items="homeShortcuts" />

    <ProductCarousel :slides="productSlides" />

    <AlertBanner v-for="banner in alertBanners" :key="banner.id" :item="banner" />

    <QuickActionsGrid :actions="quickActions" @select="handleQuickAction($event)" />

    <ActivityList :activities="accountActivities" />

    <CashbackCard :data="cashbackProgress" />

    <HomeBottomNav :items="bottomNavItems" active-route="/" @select="handleNavSelect($event)" />

    <ActionSheetDrawer :sheet="activeSheet" :show="!!activeSheet" @close="closeSheet" @select="closeSheet" />
  </main>
</template>
