<script setup lang="ts">
import AppNav from './components/layout/AppNav.vue';
import AppFooter from './components/layout/AppFooter.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AiToolStrip from './components/sections/AiToolStrip.vue';
import AiToolsSection from './components/sections/AiToolsSection.vue';
import TemplatesSection from './components/sections/TemplatesSection.vue';
import SocialProofSection from './components/sections/SocialProofSection.vue';
import PricingSection from './components/sections/PricingSection.vue';
import FaqSection from './components/sections/FaqSection.vue';
import CtaBanner from './components/sections/CtaBanner.vue';
</script>

<template>
  <div class="bg-base min-h-screen">
    <AppNav />
    <HeroSection />
    <AiToolStrip />
    <AiToolsSection />
    <TemplatesSection />
    <SocialProofSection />
    <PricingSection />
    <FaqSection />
    <CtaBanner />
    <AppFooter />
  </div>
</template>
