<script setup lang="ts">
// no props; static section, content is hardcoded here
</script>

<template>
  <!-- final CTA before the footer: rounded rectangle, Unsplash bg, dark overlay -->
  <section class="px-6 py-16">
    <div
      class="relative mx-auto max-w-7xl overflow-hidden rounded-3xl"
      style="
        background-image: url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80');
        background-size: cover;
        background-position: center;
      "
    >
      <!-- dark overlay for text legibility -->
      <div class="absolute inset-0 bg-black/65" />

      <!-- content -->
      <div class="relative z-10 flex flex-col items-center px-6 py-24 text-center">
        <h2 class="font-display mb-6 text-4xl font-black text-white md:text-6xl">
          Start creating today.
        </h2>
        <p class="mx-auto mb-10 max-w-lg text-lg text-white/60">
          Templates download instantly. AI credits never expire. No subscription required.
        </p>
        <a
          href="#"
          class="rounded-full bg-brand px-10 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get Started Free
        </a>
      </div>
    </div>
  </section>
</template>
