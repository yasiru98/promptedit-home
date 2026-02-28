<script setup lang="ts">
// One entry per AI tool available on the platform.
// image: Unsplash placeholder; swap for real output once available
const tools = [
  {
    name: 'VEO 3.1 Fast',
    description: "Google's fastest model. Cinematic video from a single prompt.",
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    name: 'Sora 2',
    description: 'Photorealistic scenes and complex motion. By OpenAI.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  },
  {
    name: 'Nano Banana',
    description: 'AI image generation at scale. Fast and versatile.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    name: 'Nano Banana Pro',
    description: 'Maximum detail, maximum quality. Pro-grade output.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    name: 'Kling 2.6',
    description: 'Fluid motion, dramatic results. Latest Kling flagship.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
  },
  {
    name: 'Kling 2.5 Turbo',
    description: 'High quality at turbo speed. Best value per generation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  },
];
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- section header -->
      <div class="mb-12">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
          AI Tools
        </p>
        <h2 class="font-display text-4xl font-black text-white md:text-5xl">
          Featured AI models
        </h2>
      </div>

      <!--
        Mobile: horizontal scroll so all 6 cards are reachable without stacking.
        sm+: switch to a 2-col grid. lg: 3 cols.
        The -mx-6 px-6 trick extends scroll area edge-to-edge on mobile.
      -->
      <div
        class="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
      >
        <article
          v-for="tool in tools"
          :key="tool.name"
          class="group w-72 shrink-0 overflow-hidden rounded-xl bg-surface-1 transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
        >
          <!-- card image: hover zooms via group class on the article -->
          <div class="aspect-video overflow-hidden">
            <img
              :src="tool.image"
              :alt="tool.name"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
          </div>

          <!-- card body -->
          <div class="p-5">
            <h3 class="mb-1.5 font-semibold text-white">
              {{ tool.name }}
            </h3>
            <p class="mb-4 text-sm text-white/50">
              {{ tool.description }}
            </p>
            <a
              href="#"
              class="text-sm font-semibold text-brand transition-opacity hover:opacity-80"
            >
              Try it &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
