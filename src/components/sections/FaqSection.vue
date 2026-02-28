<script setup lang="ts">
import { ref } from 'vue';

const faqs = [
  {
    q: 'What is PromptEdit and what\'s included in the subscription?',
    a: 'PromptEdit provides the most affordable subscription to high-quality video editing assets designed to save content creators time in post production. Your subscription gives you access to download any asset from our Member Library. Each week a minimum of 10 new video editing assets are added to the site.',
  },
  {
    q: 'Can I use the assets for commercial & personal use?',
    a: 'Yes. As a PromptEdit subscriber, you can use any asset for commercial or personal use for life.',
  },
  {
    q: 'Can I change my subscription or cancel at any time?',
    a: 'Yes. You can cancel any time. Otherwise your account will automatically renew at the end of each billing cycle. To switch plans, email support@promptedit.com or use the Manage Subscription link in your Dashboard.',
  },
  {
    q: 'Is it really unlimited downloads?',
    a: 'Absolutely. As a subscriber you get unlimited downloads of any asset in the member library. We do not allow automated downloading tools.',
  },
  {
    q: 'What happens to my distributed videos after cancelling?',
    a: 'All videos created and published during an active subscription are cleared from third-party copyright claims permanently.',
  },
  {
    q: 'Which AI models are available?',
    a: 'We currently offer VEO 3.1 Fast, Sora 2, Nano Banana, Nano Banana Pro, Kling 2.6, and Kling 2.5 Turbo. New models are added as they become available.',
  },
];

// track which item is open; null = all closed
const openIndex = ref<number | null>(null);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-3xl px-6">
      <!-- section header -->
      <div class="mb-12 text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
          FAQ
        </p>
        <h2 class="font-display text-4xl font-black text-white md:text-5xl">
          Common questions
        </h2>
      </div>

      <!-- accordion list -->
      <div class="flex flex-col divide-y divide-white/10">
        <div
          v-for="(faq, i) in faqs"
          :key="faq.q"
        >
          <!-- question row: full-width button for accessibility -->
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="text-base font-semibold text-white">{{ faq.q }}</span>
            <!-- plus/minus icon animates on open -->
            <span
              :class="[
                'shrink-0 text-white/40 transition-transform duration-300',
                openIndex === i ? 'rotate-45' : '',
              ]"
              aria-hidden="true"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
              </svg>
            </span>
          </button>

          <!-- answer: conditionally rendered, no transition library -->
          <p
            v-if="openIndex === i"
            class="pb-5 text-sm leading-relaxed text-white/50"
          >
            {{ faq.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
