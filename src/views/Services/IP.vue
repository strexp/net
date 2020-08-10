<template>
  <main id="main">
    <BreadCrumbs :pagename="$t('serv-ip.main')" />

    <section id="serv-ip" class="serv-ip">
      <div class="container" data-aos="fade-up">
        <h2>{{ $t("serv-ip.peering") }}</h2>
        <p>{{ $t("serv-ip.peering-descr") }}</p>
        <ul>
          <li>EVIX Fremont</li>
          <li>4IXP Zurich</li>
          <li>IXP.cat London</li>
          <li>IXP.cat Singapore</li>
        </ul>
        <p>
          <router-link to="/peering-policy">{{
            $t("serv-ip.peering-policy")
          }}</router-link>
        </p>
        <h2>{{ $t("serv-ip.transit") }}</h2>
        <p>{{ $t("serv-ip.transit-descr") }}</p>
        <h2>{{ $t("serv-ip.ip-leasing") }}</h2>
        <p>{{ $t("serv-ip.ip-leasing-descr") }}</p>
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
