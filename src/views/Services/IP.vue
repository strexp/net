<template>
  <main id="main">
    <BreadCrumbs :pagename="$t('serv-ip.main')" />

    <section id="serv-ip" class="serv-ip">
      <div class="container" data-aos="fade-up">
        <h2>{{ $t("serv-ip.peering") }}</h2>
        <p>{{ $t("serv-ip.peering-descr") }}</p>
        <ul>
          <li v-for="ixp in ixps" :key="ixp">{{ ixp }}</li>
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
    BreadCrumbs,
  },
  data: () => ({
    ixps: [
      "EVIX Fremont",
      "4IXP Zurich",
      "ApertureIX Hong Kong",
      "GeekIX Taoyuan",
      "IX42 Singapore",
      "IX42 Las Vegas",
      "IX42 New York",
      "ZXIX Hangzhou",
      "ZXIX Hong Kong",
      "Unmetered Exchange Vancouver",
      "TOHU IX Guangzhou",
      "OpenSwitch IX Kolkata",
      "LL-IX Poland",
      "KSKB IX Taiwan",
      "KleyReX Frankfurt",
      "IXPSU Hangzhou",
      "IXP.cat London",
      "IXP.cat Singapore",
    ],
  }),
};
</script>

<style></style>
