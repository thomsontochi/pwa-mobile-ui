<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from '@/components/common/AppIcon.vue'
import type { ProductSlide } from '@/types/home'

const props = defineProps<{
  slides: ProductSlide[]
}>()

const activeIndex = ref(0)

const activeSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0] ?? null)

const setSlide = (index: number) => {
  if (index >= 0 && index < props.slides.length) {
    activeIndex.value = index
  }
}
</script>

<template>
  <section class="space-y-5">
    <div class="flex items-center justify-between">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-brand-text-secondary">Türk Lirası Hesabı</h2>
      <button class="rounded-full bg-brand-control px-3 py-1 text-xs font-medium text-brand-text-secondary">
        <AppIcon name="more-horizontal" :stroke-width="2" />
      </button>
    </div>

    <article v-if="activeSlide" class="relative overflow-hidden rounded-3xl bg-brand-card p-6">
      <div class="flex items-start justify-between gap-4">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span
              v-if="activeSlide.badgeLabel"
              class="rounded-full bg-brand-control px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-text-secondary"
            >
              {{ activeSlide.badgeLabel }}
            </span>
          </div>
          <h3 class="text-2xl font-bold text-brand-text-primary">{{ activeSlide.title }}</h3>
          <p class="text-sm text-brand-text-secondary">{{ activeSlide.subtitle }}</p>
        </div>

        <div class="flex h-16 w-16 items-center justify-center rounded-2xl" :style="{ backgroundColor: activeSlide.accentColor }">
          <AppIcon name="dot" :size="20" />
        </div>
      </div>

      <div class="mt-6 flex items-center gap-3">
        <button class="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-control px-4 py-3 text-sm font-semibold text-brand-text-primary">
          {{ activeSlide.cta }}
        </button>
        <button class="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-control">
          <AppIcon name="more-horizontal" :stroke-width="2" />
        </button>
      </div>
    </article>

    <div class="flex items-center justify-center gap-2">
      <button
        v-for="(_, idx) in props.slides"
        :key="idx"
        @click="setSlide(idx)"
        class="h-2 rounded-full transition"
        :class="idx === activeIndex ? 'w-6 bg-brand-text-primary' : 'w-2 bg-brand-text-secondary/40'"
        aria-label="Go to slide"
      />
    </div>
  </section>
</template>
