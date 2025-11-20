<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import type { HomeShortcut } from '@/types/home'

const props = defineProps<{
  items: HomeShortcut[]
}>()

const listRef = ref<HTMLElement | null>(null)
const canScrollLeft = ref(false)
const canScrollRight = ref(false)

const updateScrollState = () => {
  const el = listRef.value
  if (!el) {
    canScrollLeft.value = false
    canScrollRight.value = false
    return
  }

  canScrollLeft.value = el.scrollLeft > 4
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

const handleScroll = () => updateScrollState()

const scrollByAmount = (amount: number) => {
  const el = listRef.value
  if (!el) return
  el.scrollBy({ left: amount, behavior: 'smooth' })
  window.requestAnimationFrame(updateScrollState)
}

onMounted(() => {
  nextTick(() => {
    updateScrollState()
    listRef.value?.addEventListener('scroll', handleScroll, { passive: true })
  })
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  listRef.value?.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateScrollState)
})

watch(
  () => props.items,
  () => {
    nextTick(() => {
      updateScrollState()
    })
  },
  { deep: true }
)

const getInitials = (label: string) => {
  const [firstWord] = label.split(' ')
  return firstWord?.charAt(0).toUpperCase() ?? '•'
}
</script>

<template>
  <div class="relative">
    <button
      v-show="canScrollLeft"
      type="button"
      class="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-brand-control/90 p-2 text-brand-text-primary shadow-card transition hover:bg-brand-control md:block"
      @click="scrollByAmount(-150)"
      aria-label="Önceki kısayollar"
    >
      <AppIcon name="chevron-left" :stroke-width="2" />
    </button>

    <section
      ref="listRef"
      class="-mx-4 flex gap-3 overflow-x-auto pb-2 px-4 touch-pan-x md:-mx-6 md:px-6 lg:-mx-10 lg:px-10"
    >
      <article
        v-for="shortcut in props.items"
        :key="shortcut.id"
        class="relative flex w-24 shrink-0 flex-col items-center gap-2 rounded-3xl bg-brand-card px-3 py-4 text-center text-xs font-medium text-brand-text-primary shadow-card"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-brand-control text-sm font-semibold">
          {{ getInitials(shortcut.label) }}
        </div>
        <span class="leading-tight text-brand-text-secondary">{{ shortcut.label }}</span>
        <span
          v-if="shortcut.badgeCount && shortcut.badgeCount > 0"
          class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent-red text-[10px] font-semibold"
        >
          {{ shortcut.badgeCount }}
        </span>
      </article>
    </section>

    <button
      v-show="canScrollRight"
      type="button"
      class="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-brand-control/90 p-2 text-brand-text-primary shadow-card transition hover:bg-brand-control md:block"
      @click="scrollByAmount(150)"
      aria-label="Sonraki kısayollar"
    >
      <AppIcon name="chevron-right" :stroke-width="2" />
    </button>
  </div>
</template>
