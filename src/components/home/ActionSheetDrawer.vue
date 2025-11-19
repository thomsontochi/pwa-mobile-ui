<script setup lang="ts">
import AppIcon from '@/components/common/AppIcon.vue'
import type { ActionSheet } from '@/types/home'

const props = defineProps<{
  sheet: ActionSheet | null
  show: boolean
}>()

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'select', optionId: number): void
}>()

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    emits('close')
  }
}
</script>

<template>
  <transition name="fade">
    <div
      v-if="show && sheet"
      class="fixed inset-0 z-40 flex flex-col justify-end bg-black/60 backdrop-blur-sm"
      @click="handleBackdropClick"
    >
      <transition name="sheet">
        <section
          v-if="sheet"
          class="rounded-t-3xl bg-brand-card px-6 pb-8 pt-6 text-brand-text-primary shadow-card"
        >
          <header class="mb-5 flex items-center justify-between text-sm font-semibold">
            <span>{{ sheet.title }}</span>
            <button class="text-xs text-brand-text-secondary" @click="$emit('close')">{{ sheet.cancelLabel ?? 'Kapat' }}</button>
          </header>

          <ul class="space-y-3">
            <li v-for="option in sheet.options" :key="option.id">
              <button
                class="flex w-full items-center gap-3 rounded-2xl bg-brand-control/50 px-4 py-3 text-left text-sm font-medium hover:bg-brand-control"
                @click="$emit('select', option.id)"
              >
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-brand-control text-brand-text-primary">
                  <AppIcon :name="option.icon as any" :stroke-width="2" />
                </span>
                <span>{{ option.label }}</span>
              </button>
            </li>
          </ul>

          <button
            class="mt-6 w-full rounded-2xl bg-brand-control px-4 py-3 text-center text-sm font-semibold text-brand-text-primary hover:bg-brand-control/80"
            @click="$emit('close')"
          >
            {{ sheet.cancelLabel ?? 'Kapat' }}
          </button>
        </section>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sheet-enter-active,
.sheet-leave-active {
  transition: transform 0.25s ease;
}
.sheet-enter-from,
.sheet-leave-to {
  transform: translateY(100%);
}
</style>
