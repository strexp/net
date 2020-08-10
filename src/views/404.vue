<template>
  <main id="main">
    <BreadCrumbs :pagename="404" />

    <section id="hosting" class="hosting">
      <div class="container" data-aos="fade-up">
        <h1>404 Not Found</h1>
        <p>{{ $t("404") }}</p>
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
