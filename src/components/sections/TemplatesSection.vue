<script setup lang="ts">
// One card per supported editing platform.
// image: Unsplash placeholder; swap for real template previews once available
const categories = [
  {
    platform: 'Premiere Pro',
    label: 'Transitions · Color Grades · Titles',
    count: '240+ templates',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
  },
  {
    platform: 'DaVinci Resolve',
    label: 'LUTs · Fusion Templates · Titles',
    count: '180+ templates',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80',
  },
  {
    platform: 'After Effects',
    label: 'Motion Graphics · Lower Thirds · FX',
    count: '320+ templates',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80',
  },
  {
    platform: 'Final Cut Pro',
    label: 'Titles · Transitions · Generators',
    count: '150+ templates',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80',
  },
];
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- section header -->
      <div class="mb-12">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
          Templates
        </p>
        <h2 class="font-display text-4xl font-black text-white md:text-5xl">
          Time-saving templates
        </h2>
      </div>

      <!-- 2x2 grid; each card is full-bleed with a bottom gradient overlay -->
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article
          v-for="cat in categories"
          :key="cat.platform"
          class="group relative h-80 overflow-hidden rounded-xl md:h-96"
        >
          <!-- background image -->
          <img
            :src="cat.image"
            :alt="cat.platform"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          >

          <!-- gradient: transparent top, dark bottom -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <!-- card content anchored to bottom-left -->
          <div class="absolute inset-x-0 bottom-0 p-6">
            <p class="mb-1.5 text-xs font-semibold uppercase tracking-widest text-white/40">
              {{ cat.label }}
            </p>
            <h3 class="font-display mb-4 text-2xl font-black text-white">
              {{ cat.platform }}
            </h3>
            <div class="flex items-center justify-between">
              <span class="text-sm text-white/50">{{ cat.count }}</span>
              <a
                href="#"
                class="text-sm font-semibold text-brand transition-opacity hover:opacity-80"
              >
                Browse &rarr;
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
