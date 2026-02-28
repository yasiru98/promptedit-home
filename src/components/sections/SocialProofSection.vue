<script setup lang="ts">
// Platform differentiators shown in the benefit checklist
const benefits = [
  'New assets added every single week',
  'Expert tutorials on how to use each asset fast',
  'Most affordable marketplace on the planet',
  'All assets cleared for commercial & personal use',
];
</script>

<template>
  <!-- stat left, benefit checklist right, radial glow behind stat -->
  <section class="relative overflow-hidden py-32">
    <!-- radial glow: positions behind the stat number, bleeds off the left edge -->
    <div
      class="pointer-events-none absolute -left-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full"
      style="background: radial-gradient(circle, rgba(230,57,70,0.12) 0%, transparent 70%);"
    />

    <div class="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:items-center md:gap-24">
      <!-- left: big stat -->
      <div class="shrink-0 text-center md:text-left">
        <p class="font-display text-8xl font-black text-white md:text-9xl">
          10k<span class="text-brand">+</span>
        </p>
        <p class="mt-3 text-lg text-white/50">
          creators trust PromptEdit
        </p>
      </div>

      <!-- right: benefit checklist -->
      <ul class="flex flex-col gap-5">
        <li
          v-for="benefit in benefits"
          :key="benefit"
          class="flex items-start gap-4"
        >
          <!-- checkmark icon: inline SVG, no icon library dependency -->
          <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
            <svg
              class="h-3 w-3 text-brand"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="text-base text-white/70">{{ benefit }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
