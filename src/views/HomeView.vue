<script setup lang="ts">
const shortcuts = [
  { id: 1, label: 'Papara Sticker', icon: '🎫', hasAlert: true },
  { id: 2, label: 'Superman Card', icon: '🦸‍♂️' },
  { id: 3, label: 'e-Şans 150 TL', icon: '🎯' },
  { id: 4, label: 'Yatırım Hesabı', icon: '💹' },
  { id: 5, label: 'Altın Hediyem', icon: '🥇' },
]

const quickActions = [
  { id: 1, label: 'Yatır / Çek' },
  { id: 2, label: 'Gönder' },
  { id: 3, label: 'İste' },
]

const accountActivities = [
  { id: 1, name: 'Hidayet Salt', type: 'FAST Para Transferi', amount: '-20.000,00', time: '14 Eylül 2025 20:14' },
  { id: 2, name: 'Garanti BBVA', type: 'FAST Para Transferi', amount: '+20.000,00', time: '14 Eylül 2025 20:12' },
]
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-sm flex-col gap-6 bg-neutral-950 px-4 pb-8 pt-10">
    <header class="flex items-center justify-between">
      <button class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-neutral-800">
        <span class="sr-only">Open menu</span>
        <span aria-hidden="true" class="text-lg">☰</span>
      </button>
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-neutral-800">
          <span class="text-lg">🔔</span>
        </div>
        <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-neutral-800">
          <span class="text-lg">👤</span>
        </div>
      </div>
    </header>

    <section class="flex gap-3 overflow-x-auto pb-2">
      <article
        v-for="shortcut in shortcuts"
        :key="shortcut.id"
        class="relative flex w-24 shrink-0 flex-col items-center gap-2 rounded-2xl bg-neutral-900 p-3 text-center text-xs font-medium text-neutral-200"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-lg">
          <span aria-hidden="true">{{ shortcut.icon }}</span>
        </div>
        <span class="leading-tight">{{ shortcut.label }}</span>
        <span
          v-if="shortcut.hasAlert"
          class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold"
        >
          •
        </span>
      </article>
    </section>

    <section class="rounded-3xl bg-neutral-900 p-5 text-neutral-100">
      <div class="mb-6 flex items-start justify-between">
        <div>
          <p class="text-xs uppercase tracking-wide text-neutral-400">Türk Lirası Hesabı</p>
          <p class="mt-4 text-4xl font-semibold">₺0,00</p>
          <p class="mt-1 text-xs text-neutral-500">IBAN • TR05 …</p>
        </div>
        <div class="flex flex-col items-end gap-2 text-right text-xs text-neutral-400">
          <span class="flex items-center gap-2 rounded-full bg-neutral-800 px-3 py-1">
            <span class="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Aktif
          </span>
          <span class="rounded-full bg-neutral-800 px-3 py-1">•••</span>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <button
          v-for="action in quickActions"
          :key="action.id"
          class="rounded-2xl bg-neutral-800 px-4 py-3 text-sm font-semibold text-neutral-200 transition hover:bg-neutral-700"
        >
          {{ action.label }}
        </button>
      </div>
    </section>

    <section class="rounded-3xl bg-neutral-900 p-5 text-neutral-200">
      <header class="mb-4 flex items-center justify-between text-sm font-semibold">
        <span>Hesap Hareketleri</span>
        <button class="text-xs text-sky-400">Tümü →</button>
      </header>
      <ul class="space-y-4 text-sm">
        <li v-for="activity in accountActivities" :key="activity.id" class="flex items-start justify-between">
          <div>
            <p class="font-medium">{{ activity.name }}</p>
            <p class="text-xs text-neutral-400">{{ activity.type }}</p>
            <p class="text-xs text-neutral-500">{{ activity.time }}</p>
          </div>
          <p :class="activity.amount.startsWith('-') ? 'text-rose-400' : 'text-emerald-400'">
            {{ activity.amount }}
          </p>
        </li>
      </ul>
    </section>

    <footer class="mt-auto rounded-3xl bg-neutral-900 px-4 py-5">
      <nav class="flex items-center justify-between text-xs text-neutral-400">
        <button class="flex flex-col items-center gap-1 text-sky-400">
          <span class="text-lg">🏠</span>
          Ana Sayfa
        </button>
        <button class="flex flex-col items-center gap-1">
          <span class="text-lg">🔍</span>
          QR İşlemleri
        </button>
        <button class="flex flex-col items-center gap-1">
          <span class="text-lg">💸</span>
          Para Transferi
        </button>
        <button class="flex flex-col items-center gap-1">
          <span class="text-lg">📄</span>
          Ödemeler
        </button>
        <button class="flex flex-col items-center gap-1">
          <span class="text-lg">💳</span>
          Papara Card
        </button>
      </nav>
    </footer>
  </main>
</template>
