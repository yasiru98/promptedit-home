<script setup lang="ts">
// all 6 platform AI tools; add new entries here as tools ship
const tools = [
  'VEO 3.1 Fast',
  'Sora 2',
  'Nano Banana',
  'Nano Banana Pro',
  'Kling 2.6',
  'Kling 2.5 Turbo',
];
</script>

<template>
  <!--
    Thin strip showing available AI generation models.
    The inner list is duplicated so the CSS marquee can loop seamlessly.
  -->
  <section class="border-y border-white/5 bg-surface-1 py-5">
    <div class="mx-auto flex max-w-7xl items-center gap-6 px-6">
      <!-- label anchors the strip on desktop -->
      <span class="shrink-0 text-xs font-semibold uppercase tracking-widest text-white/30">
        Generate with
      </span>

      <!-- overflow-hidden clips the scrolling content -->
      <div class="min-w-0 flex-1 overflow-hidden">
        <!-- w-max lets the inner row size to its content so the translate math works.
             Two copies of the list; animation shifts by -50% then resets. -->
        <div class="flex w-max animate-marquee items-center gap-4">
          <span
            v-for="tool in tools"
            :key="tool"
            class="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium text-white/60"
          >
            {{ tool }}
          </span>
          <!-- duplicate set: hidden from AT, only here for visual loop -->
          <span
            v-for="tool in tools"
            :key="`d-${tool}`"
            aria-hidden="true"
            class="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium text-white/60"
          >
            {{ tool }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
