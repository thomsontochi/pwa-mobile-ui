<script setup lang="ts">
import { computed } from 'vue'

type IconNode = {
  tag: 'path' | 'circle' | 'rect' | 'line' | 'polyline' | 'polygon'
  attrs: Record<string, string | number>
}

type IconDefinition = {
  viewBox?: string
  nodes: IconNode[]
}

const iconLibrary: Record<string, IconDefinition> = {
  menu: {
    nodes: [
      { tag: 'line', attrs: { x1: 4, y1: 6, x2: 20, y2: 6 } },
      { tag: 'line', attrs: { x1: 4, y1: 12, x2: 20, y2: 12 } },
      { tag: 'line', attrs: { x1: 4, y1: 18, x2: 20, y2: 18 } },
    ],
  },
  'message-square': {
    nodes: [
      {
        tag: 'path',
        attrs: {
          d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
        },
      },
    ],
  },
  bell: {
    nodes: [
      {
        tag: 'path',
        attrs: {
          d: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9',
        },
      },
      { tag: 'path', attrs: { d: 'M13.73 21a2 2 0 0 1-3.46 0' } },
    ],
  },
  search: {
    nodes: [
      { tag: 'circle', attrs: { cx: 11, cy: 11, r: 7 } },
      { tag: 'line', attrs: { x1: 21, y1: 21, x2: 16.65, y2: 16.65 } },
    ],
  },
  user: {
    nodes: [
      { tag: 'path', attrs: { d: 'M20 21c0-3.866-3.582-7-8-7s-8 3.134-8 7' } },
      { tag: 'circle', attrs: { cx: 12, cy: 7, r: 4 } },
    ],
  },
  'arrow-down-circle': {
    nodes: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 9 } },
      { tag: 'path', attrs: { d: 'M12 8v8' } },
      { tag: 'path', attrs: { d: 'm8 12 4 4 4-4' } },
    ],
  },
  'arrow-up-right': {
    nodes: [
      { tag: 'path', attrs: { d: 'm7 17 10-10' } },
      { tag: 'path', attrs: { d: 'M7 7h10v10' } },
    ],
  },
  'credit-card': {
    nodes: [
      { tag: 'rect', attrs: { x: 2, y: 7, width: 20, height: 14, rx: 2 } },
      { tag: 'line', attrs: { x1: 2, y1: 11, x2: 22, y2: 11 } },
      { tag: 'line', attrs: { x1: 6, y1: 15, x2: 8, y2: 15 } },
    ],
  },
  'hand-coins': {
    nodes: [
      { tag: 'path', attrs: { d: 'M12 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Z' } },
      {
        tag: 'path',
        attrs: {
          d: 'M16 20h-5a3 3 0 0 1-2.82-2.01l-.72-2.16A2 2 0 0 1 9.36 13H12',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M20 12v3a3 3 0 0 1-3 3h-3',
        },
      },
      { tag: 'path', attrs: { d: 'M18 7V3a1 1 0 0 1 1-1h2v5' } },
      { tag: 'path', attrs: { d: 'M22 3 18 7' } },
    ],
  },
  home: {
    nodes: [
      { tag: 'path', attrs: { d: 'M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z' } },
      { tag: 'path', attrs: { d: 'M9 22V12h6v10' } },
    ],
  },
  'qr-code': {
    nodes: [
      { tag: 'path', attrs: { d: 'M3 3h6v6H3z' } },
      { tag: 'path', attrs: { d: 'M15 3h6v6h-6z' } },
      { tag: 'path', attrs: { d: 'M3 15h6v6H3z' } },
      { tag: 'path', attrs: { d: 'M15 15h6v6h-6z' } },
      { tag: 'path', attrs: { d: 'M9 7h6' } },
      { tag: 'path', attrs: { d: 'M7 9v6' } },
      { tag: 'path', attrs: { d: 'M17 9v6' } },
      { tag: 'path', attrs: { d: 'M9 17h6' } },
    ],
  },
  send: {
    nodes: [
      { tag: 'path', attrs: { d: 'M22 2 11 13' } },
      { tag: 'path', attrs: { d: 'm22 2-7 20-4-9-9-4Z' } },
    ],
  },
  wallet: {
    nodes: [
      {
        tag: 'path',
        attrs: {
          d: 'M2 7a2 2 0 0 1 2-2h16a1 1 0 0 1 1 1v3H4a2 2 0 0 1-2-2Z',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M2 17v-6a2 2 0 0 1 2-2h17v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z',
        },
      },
      { tag: 'path', attrs: { d: 'M16 11h4' } },
    ],
  },
  'more-horizontal': {
    nodes: [
      { tag: 'circle', attrs: { cx: 5, cy: 12, r: 1 } },
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 1 } },
      { tag: 'circle', attrs: { cx: 19, cy: 12, r: 1 } },
    ],
  },
  clock: {
    nodes: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 9 } },
      { tag: 'path', attrs: { d: 'M12 7v5l3 3' } },
    ],
  },
  'chevron-right': {
    nodes: [{ tag: 'path', attrs: { d: 'm9 18 6-6-6-6' } }],
  },
  'chevron-left': {
    nodes: [{ tag: 'path', attrs: { d: 'm15 18-6-6 6-6' } }],
  },
  dot: {
    nodes: [{ tag: 'circle', attrs: { cx: 12, cy: 12, r: 3 } }],
  },
  lock: {
    nodes: [
      { tag: 'rect', attrs: { x: 4, y: 11, width: 16, height: 10, rx: 2 } },
      { tag: 'path', attrs: { d: 'M8 11V7a4 4 0 0 1 8 0v4' } },
    ],
  },
  info: {
    nodes: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
      { tag: 'line', attrs: { x1: 12, y1: 16, x2: 12, y2: 12 } },
      { tag: 'circle', attrs: { cx: 12, cy: 8, r: 1 } },
    ],
  },
  sparkles: {
    nodes: [
      { tag: 'path', attrs: { d: 'M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10 10.5 8.5z' } },
      { tag: 'path', attrs: { d: 'M5 5.5 5.6 7.4 7.5 8 5.6 8.6 5 10.5 4.4 8.6 2.5 8 4.4 7.4z' } },
      { tag: 'path', attrs: { d: 'M18.5 13.5 19 15 20.5 15.5 19 16 18.5 17.5 18 16 16.5 15.5 18 15z' } },
    ],
  },
  'precious-metals': {
    nodes: [
      { tag: 'path', attrs: { d: 'M6 15h10l2 4H8z' } },
      { tag: 'path', attrs: { d: 'M8 11h9l2 4H10z' } },
      { tag: 'path', attrs: { d: 'M10 7h7l2 4h-9z' } },
      { tag: 'path', attrs: { d: 'm6 15 2-4' } },
      { tag: 'path', attrs: { d: 'm12 15 2-4' } },
      { tag: 'path', attrs: { d: 'm14 19 2-4' } },
    ],
  },
  'investment-account': {
    nodes: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 7 } },
      { tag: 'path', attrs: { d: 'M12 5v7l5.5 1.5' } },
      { tag: 'path', attrs: { d: 'M7.5 13.5 12 12' } },
    ],
  },
  'dollar-account': {
    nodes: [
      { tag: 'rect', attrs: { x: 5, y: 7, width: 14, height: 10, rx: 2 } },
      { tag: 'path', attrs: { d: 'M7 7V5a2 2 0 0 1 2-2h8v4' } },
      { tag: 'path', attrs: { d: 'M12 10c-1.1 0-2 .672-2 1.5s.9 1.5 2 1.5 2 .672 2 1.5-.9 1.5-2 1.5-2-.672-2-1.5' } },
      { tag: 'path', attrs: { d: 'M12 9.5v6' } },
    ],
  },
  globe: {
    nodes: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 9 } },
      { tag: 'path', attrs: { d: 'M3 12h18' } },
      { tag: 'path', attrs: { d: 'M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9' } },
    ],
  },
  shield: {
    nodes: [
      { tag: 'path', attrs: { d: 'M12 3 4.5 6v6c0 5.25 3.75 9.75 7.5 10.5 3.75-.75 7.5-5.25 7.5-10.5V6z' } },
      { tag: 'path', attrs: { d: 'm9 12 2 2 4-4' } },
    ],
  },
  refresh: {
    nodes: [
      { tag: 'path', attrs: { d: 'M21 12a9 9 0 1 1-3-6.7' } },
      { tag: 'path', attrs: { d: 'M21 3v6h-6' } },
    ],
  },
  scan: {
    nodes: [
      { tag: 'path', attrs: { d: 'M5 3H3v2' } },
      { tag: 'path', attrs: { d: 'M3 19v2h2' } },
      { tag: 'path', attrs: { d: 'M19 21h2v-2' } },
      { tag: 'path', attrs: { d: 'M21 5V3h-2' } },
      { tag: 'rect', attrs: { x: 7, y: 7, width: 10, height: 10, rx: 2 } },
    ],
  },
  'atm-withdraw': {
    nodes: [
      { tag: 'rect', attrs: { x: 2, y: 4, width: 20, height: 6, rx: 2 } },
      { tag: 'path', attrs: { d: 'M12 10v8' } },
      { tag: 'path', attrs: { d: 'M9 18h6' } },
      { tag: 'path', attrs: { d: 'M10 14h4' } },
    ],
  },
  'atm-deposit': {
    nodes: [
      { tag: 'rect', attrs: { x: 2, y: 4, width: 20, height: 6, rx: 2 } },
      { tag: 'path', attrs: { d: 'M12 10v8' } },
      { tag: 'path', attrs: { d: 'M9 14h6' } },
      { tag: 'path', attrs: { d: 'M10 18h4' } },
    ],
  },
}

const props = defineProps<{
  name: keyof typeof iconLibrary
  size?: number
  strokeWidth?: number
  class?: string
}>()

const icon = computed(() => iconLibrary[props.name])

if (!icon.value) {
  console.warn(`AppIcon: Unknown icon name \"${props.name}\"`)
}

const size = computed(() => props.size ?? 24)
const strokeWidth = computed(() => props.strokeWidth ?? 1.6)
</script>

<template>
  <svg
    v-if="icon"
    :width="size"
    :height="size"
    :viewBox="icon.viewBox ?? '0 0 24 24'"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <component
      v-for="(node, index) in icon.nodes"
      :is="node.tag"
      :key="index"
      v-bind="node.attrs"
      fill="none"
    />
  </svg>
</template>
