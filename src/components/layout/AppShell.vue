<script setup lang="ts">
const props = defineProps<{
  padded?: boolean
}>()
</script>

<template>
  <div class="min-h-screen bg-brand-surface text-brand-text-primary">
    <div
      class="mx-auto flex min-h-screen w-full flex-col transition-all"
      :class="
        props.padded
          ? 'max-w-[420px] px-4 pb-8 pt-6 md:max-w-[520px] md:px-6 md:pb-10 md:pt-8 lg:max-w-[640px] lg:px-10 lg:pb-12 lg:pt-10'
          : 'max-w-[420px] md:max-w-[520px] lg:max-w-[640px]'
      "
    >
      <slot />
    </div>
  </div>
</template>
