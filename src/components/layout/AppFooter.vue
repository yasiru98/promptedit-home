<script setup lang="ts">
// footer link columns; update hrefs once real pages exist
const columns = [
  {
    heading: 'AI Tools',
    links: [
      { label: 'VEO 3.1 Fast', href: '#' },
      { label: 'Sora 2', href: '#' },
      { label: 'Nano Banana', href: '#' },
      { label: 'Nano Banana Pro', href: '#' },
      { label: 'Kling 2.6', href: '#' },
      { label: 'Kling 2.5 Turbo', href: '#' },
    ],
  },
  {
    heading: 'Templates',
    links: [
      { label: 'Premiere Pro', href: '#' },
      { label: 'DaVinci Resolve', href: '#' },
      { label: 'After Effects', href: '#' },
      { label: 'Final Cut Pro', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Pricing', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
];
</script>

<template>
  <footer class="border-t border-white/5 bg-black">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <!-- top row: logo + mission left, link columns right -->
      <div class="grid grid-cols-1 gap-12 md:grid-cols-5">
        <!-- logo + mission: spans 1 of 5 cols -->
        <div class="md:col-span-1">
          <a
            href="/"
            class="font-display mb-4 block text-xl font-bold text-white"
          >
            PromptEdit
          </a>
          <p class="text-sm leading-relaxed text-white/40">
            Templates and AI tools for the modern video creator.
          </p>
        </div>

        <!-- link columns -->
        <div class="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-4">
          <div
            v-for="col in columns"
            :key="col.heading"
          >
            <h4 class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
              {{ col.heading }}
            </h4>
            <ul class="flex flex-col gap-2.5">
              <li
                v-for="link in col.links"
                :key="link.label"
              >
                <a
                  :href="link.href"
                  class="text-sm text-white/50 transition-colors hover:text-white"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- bottom bar: copyright left, legal links right -->
      <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
        <p class="text-xs text-white/25">
          &copy; {{ new Date().getFullYear() }} PromptEdit. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a
            href="#"
            class="text-xs text-white/25 transition-colors hover:text-white/60"
          >
            Terms
          </a>
          <a
            href="#"
            class="text-xs text-white/25 transition-colors hover:text-white/60"
          >
            Privacy
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
