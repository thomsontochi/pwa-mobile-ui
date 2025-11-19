<script setup lang="ts">
const props = defineProps<{
  padded?: boolean
}>()
</script>

<template>
  <div class="min-h-screen bg-brand-surface text-brand-text-primary">
    <div
      class="mx-auto flex min-h-screen w-full flex-col"
      :class="props.padded ? 'max-w-[420px] px-4 pb-8 pt-6' : 'max-w-[420px]'"
    >
      <slot />
    </div>
  </div>
</template>
