<script setup lang="ts">
// no props; static section, all content is hardcoded here
</script>

<template>
  <!--
    Full-viewport hero section.
    Background is a muted autoplay video (Pexels, royalty-free).
    Swap the <source> src for a brand video once available.
    The gradient overlay keeps text legible over any background content.
  -->
  <section class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
    <!--
      autoplay + muted required for browsers to play without user interaction.
      playsinline prevents fullscreen takeover on Safari.
    -->
    <video
      autoplay
      :muted="true"
      loop
      playsinline
      preload="auto"
      class="absolute inset-0 h-full w-full object-cover"
    >
      <source
        src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4"
        type="video/mp4"
      >
    </video>

    <!-- layered gradient: darkens top and bottom edges, preserves center brightness -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

    <!-- main content block, sits above the gradient via z-10 -->
    <div class="relative z-10 mx-auto max-w-4xl px-6">
      <!-- eyebrow label -->
      <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
        Templates + AI Tools for Video Creators
      </p>

      <!-- h1 headline -->
      <h1 class="font-display mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
        Create any video<br>
        <span class="text-brand">you can imagine.</span>
      </h1>

      <!-- subheadline -->
      <p class="mx-auto mb-10 max-w-xl text-lg text-white/60 md:text-xl">
        Time-saving templates and pay-per-use AI tools. No subscription required.
      </p>

      <!-- primary and secondary CTAs -->
      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#"
          class="rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
        >
          Start for Free
        </a>
        <a
          href="#"
          class="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition-all hover:border-white/60 hover:text-white"
        >
          Browse Templates
        </a>
      </div>
    </div>

    <!-- scroll indicator at the bottom of the hero -->
    <div class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
      <span class="text-xs uppercase tracking-widest text-white/30">Scroll</span>
      <div class="h-8 w-px bg-white/20" />
    </div>
  </section>
</template>
