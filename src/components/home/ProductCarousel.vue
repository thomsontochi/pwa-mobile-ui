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
    <header class="flex items-center justify-between">
      <button
        class="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-control text-brand-text-secondary"
        @click="setSlide(Math.max(0, activeIndex - 1))"
        :disabled="activeIndex === 0"
        :class="activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:text-brand-text-primary'
          + ' transition'"
        aria-label="Go to previous slide"
      >
        <AppIcon name="chevron-left" :stroke-width="2" />
      </button>
      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-text-secondary">
        <span>{{ activeIndex + 1 }} / {{ props.slides.length }}</span>
        <span>Hesaplar</span>
      </div>
      <button
        class="flex h-9 w-9 items-center justify-center rounded-2xl bg-brand-control text-brand-text-secondary"
        @click="setSlide(Math.min(props.slides.length - 1, activeIndex + 1))"
        :disabled="activeIndex === props.slides.length - 1"
        :class="activeIndex === props.slides.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:text-brand-text-primary'
          + ' transition'"
        aria-label="Go to next slide"
      >
        <AppIcon name="chevron-right" :stroke-width="2" />
      </button>
    </header>

    <article
      v-if="activeSlide"
      class="relative overflow-hidden rounded-3xl bg-brand-card p-6 shadow-card"
    >
      <div class="flex items-start justify-between gap-6">
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

          <ul v-if="activeSlide.details?.length" class="space-y-2 pt-2 text-sm text-brand-text-secondary">
            <li v-for="detail in activeSlide.details" :key="detail">• {{ detail }}</li>
          </ul>
        </div>

        <div
          class="flex h-20 w-20 items-center justify-center rounded-2xl text-brand-text-primary"
          :style="{ backgroundColor: activeSlide.accentColor }"
        >
          <AppIcon name="dot" :size="20" />
        </div>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          class="flex items-center justify-center gap-2 rounded-2xl bg-brand-text-primary px-4 py-3 text-sm font-semibold text-brand-surface transition hover:bg-brand-text-primary/90"
        >
          {{ activeSlide.primaryCta ?? activeSlide.cta }}
        </button>
        <button
          v-if="activeSlide.secondaryCta"
          class="flex items-center justify-center gap-2 rounded-2xl bg-brand-control px-4 py-3 text-sm font-semibold text-brand-text-primary transition hover:bg-brand-control/80"
        >
          {{ activeSlide.secondaryCta }}
        </button>
      </div>
    </article>

    <div class="flex items-center justify-center gap-2">
      <button
        v-for="(_, idx) in props.slides"
        :key="idx"
        @click="setSlide(idx)"
        class="h-2 rounded-full transition"
        :class="idx === activeIndex ? 'w-8 bg-brand-text-primary' : 'w-2 bg-brand-text-secondary/40 hover:bg-brand-text-secondary/70'"
        aria-label="Go to slide"
      />
    </div>
  </section>
</template>
