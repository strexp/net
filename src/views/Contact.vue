<template>
  <main id="main">
    <BreadCrumbs :pagename="$t('contact.main')" />

    <Contact />
  </main>
</template>

<script>
import Contact from "@/components/contact/contact.vue";
import BreadCrumbs from "@/components/breadcrumbs.vue";

export default {
  components: {
    Contact,
    BreadCrumbs,
  },
};
</script>
<style></style>
