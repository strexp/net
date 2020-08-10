<template>
  <main id="main">
    <BreadCrumbs :pagename="$t('price.main')" />

    <Pricing />
  </main>
</template>

<script>
import Pricing from "@/components/prices/pricing.vue";
import BreadCrumbs from "@/components/breadcrumbs.vue";

export default {
  components: {
    Pricing,
    BreadCrumbs
  }
};
</script>

<style></style>
