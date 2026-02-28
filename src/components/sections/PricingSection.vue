<script setup lang="ts">
// subscription plans share identical features; only price and period differ.
// AI Tools is a separate pay-per-use tier with its own feature set.
const subscriptionFeatures = [
  'Unlimited downloads',
  'Access to all assets',
  '10 new assets added every single week',
  'Request the assets you need',
  'Licensed for all personal and commercial usage',
];

const plans = [
  {
    name: 'Creator',
    price: '$29',
    period: '/monthly',
    description: 'Full access to the member library. New video editing assets added every week.',
    cta: 'Create Account',
    features: subscriptionFeatures,
    badge: '',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$299',
    period: '/yearly',
    description: 'Everything in Creator at the best annual rate. Save over 14% compared to monthly.',
    cta: 'Create Account',
    features: subscriptionFeatures,
    badge: 'Most popular',
    highlighted: true,
  },
  {
    name: 'AI Tools',
    price: 'Pay per use',
    period: '',
    description: 'Generate video and images with the latest AI models. Buy a credit pack; no subscription required, credits never expire.',
    cta: 'Buy Credits',
    features: [
      'VEO 3.1 Fast, Sora 2, Kling 2.6 & more',
      'Credits never expire',
      'New models added as they ship',
      'Commercial license on every output',
      'No subscription required',
    ],
    badge: 'New',
    highlighted: false,
  },
];
</script>

<template>
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-6">
      <!-- section header -->
      <div class="mb-16 text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
          Pricing
        </p>
        <h2 class="font-display mb-4 text-4xl font-black text-white md:text-5xl">
          Find your plan
        </h2>
        <p class="text-base text-white/50">
          Get new video editing assets every single week.
        </p>
      </div>

      <!-- three-column plan cards: Creator / Pro / AI Tools -->
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'flex flex-col rounded-2xl p-8',
            plan.highlighted
              ? 'bg-surface-2 ring-1 ring-brand/40'
              : 'bg-surface-1',
          ]"
        >
          <!-- plan name + optional badge -->
          <div class="mb-6 flex items-center justify-between">
            <h3 class="text-lg font-semibold text-white">
              {{ plan.name }}
            </h3>
            <span
              v-if="plan.badge"
              class="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand"
            >
              {{ plan.badge }}
            </span>
          </div>

          <!-- price + period -->
          <p class="mb-3 flex items-baseline gap-1">
            <span class="text-3xl font-black text-white">{{ plan.price }}</span>
            <span class="text-sm text-white/40">{{ plan.period }}</span>
          </p>

          <!-- description -->
          <p class="mb-8 text-sm leading-relaxed text-white/50">
            {{ plan.description }}
          </p>

          <!-- feature list -->
          <ul class="mb-8 flex flex-col gap-3">
            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-start gap-3 text-sm text-white/70"
            >
              <svg
                class="mt-0.5 h-4 w-4 shrink-0 text-brand"
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
              {{ feature }}
            </li>
          </ul>

          <!-- CTA: pushed to bottom of card via mt-auto -->
          <a
            href="#"
            :class="[
              'mt-auto block rounded-full py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90',
              plan.highlighted
                ? 'bg-brand text-white'
                : 'border border-white/20 text-white/80 hover:border-white/40 hover:text-white',
            ]"
          >
            {{ plan.cta }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
