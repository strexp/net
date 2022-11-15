<template>
  <div id="home">
    <Hero />
    <main id="main">
      <About />
      <Clients />
      <Counts />
      <CTA />
      <Services />
    </main>
  </div>
</template>

<script>
import Hero from "@/components/home/hero.vue";
import About from "@/components/home/about.vue";
import Counts from "@/components/home/counts.vue";
import Clients from "@/components/home/clients.vue";
import CTA from "@/components/home/cta.vue";
import Services from "@/components/home/services.vue";

export default {
  name: "App",
  components: {
    Hero,
    About,
    Counts,
    Clients,
    CTA,
    Services,
  },
};
</script>
