<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// tracks whether the user has scrolled past the hero threshold.
// drives the backdrop-blur + dark bg transition on the nav.
const scrolled = ref(false);
const menuOpen = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

// attach and clean up the scroll listener properly to avoid memory leaks
onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent',
    ]"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- logo: swap for SVG once brand assets are available -->
      <a
        href="/"
        class="flex shrink-0 items-center gap-2"
      >
        <span class="font-display text-xl font-bold text-white">PromptEdit</span>
      </a>

      <!-- desktop nav links: hidden below md -->
      <ul class="hidden items-center gap-8 md:flex">
        <li>
          <a
            href="#"
            class="text-sm text-white/70 transition-colors hover:text-white"
          >
            Browse Templates
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm text-white/70 transition-colors hover:text-white"
          >
            AI Tools
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm text-white/70 transition-colors hover:text-white"
          >
            Pricing
          </a>
        </li>
      </ul>

      <!-- desktop CTAs: hidden below md -->
      <div class="hidden items-center gap-5 md:flex">
        <a
          href="#"
          class="text-sm text-white/70 transition-colors hover:text-white"
        >
          Sign In
        </a>
        <a
          href="#"
          class="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get Started
        </a>
      </div>

      <!-- mobile hamburger: visible below md, three spans animate into X when open -->
      <button
        type="button"
        class="flex flex-col gap-1.5 md:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? 'translate-y-2 rotate-45' : '',
          ]"
        />
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block h-0.5 w-6 bg-white transition-all duration-300',
            menuOpen ? '-translate-y-2 -rotate-45' : '',
          ]"
        />
      </button>
    </nav>

    <!-- mobile dropdown: rendered when menuOpen is true; links close menu on click -->
    <div
      v-if="menuOpen"
      class="border-t border-white/10 bg-black/95 px-6 py-5 md:hidden"
    >
      <ul class="flex flex-col gap-5">
        <li>
          <a
            href="#"
            class="text-sm text-white/70 hover:text-white"
            @click="menuOpen = false"
          >
            Browse Templates
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm text-white/70 hover:text-white"
            @click="menuOpen = false"
          >
            AI Tools
          </a>
        </li>
        <li>
          <a
            href="#"
            class="text-sm text-white/70 hover:text-white"
            @click="menuOpen = false"
          >
            Pricing
          </a>
        </li>
        <li class="border-t border-white/10 pt-4">
          <a
            href="#"
            class="text-sm text-white/70 hover:text-white"
            @click="menuOpen = false"
          >
            Sign In
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-block rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white"
            @click="menuOpen = false"
          >
            Get Started
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
