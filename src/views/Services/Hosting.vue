<template>
  <main id="main">
    <BreadCrumbs :pagename="$t('hosting.main')" />

    <section id="hosting" class="hosting">
      <div class="container" data-aos="fade-up">
        <ul>
          <li v-for="it in $t('hosting.list')" :key="it">{{ it }}</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import BreadCrumbs from "@/components/breadcrumbs.vue";

export default {
  components: {
    BreadCrumbs
  }
};
</script>

<style></style>
