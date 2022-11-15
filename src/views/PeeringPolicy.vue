<template>
  <main id="peering-policy">
    <BreadCrumbs :pagename="$t('peering-policy.main')" />

    <section id="peering-policy" class="peering-policy">
      <div class="container" data-aos="fade-up">
        <h2>{{ $t("peering-policy.range") }}</h2>
        <ul>
          <li v-for="it in $t('peering-policy.range-list')" :key="it">
            {{ it }}
          </li>
        </ul>
        <h2>{{ $t("peering-policy.cost") }}</h2>
        <p>{{ $t("peering-policy.cost-descr") }}</p>
        <h2>{{ $t("peering-policy.prefix") }}</h2>
        <p>{{ $t("peering-policy.prefix-descr") }}</p>
        <ul>
          <li v-for="ip in ips" :key="ip">{{ ip }}</li>
        </ul>
        <h2>{{ $t("peering-policy.filtering") }}</h2>
        <ul>
          <li v-for="it in $t('peering-policy.filtering-list')" :key="it">
            {{ it }}
          </li>
        </ul>
        <h2>SLA</h2>
        <p>{{ $t("peering-policy.sla-descr") }}</p>
        <h2>{{ $t("peering-policy.keep") }}</h2>
        <ul>
          <li v-for="it in $t('peering-policy.keep-list')" :key="it">
            {{ it }}
          </li>
        </ul>
        <h2>{{ $t("peering-policy.contact") }}</h2>
        <p>{{ $t("peering-policy.contact-descr") }}</p>
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
    ips: [
      "2a0c:b641:7a0::/44",
      "2602:feda:3c8::/46",
      "2406:9dc0:10::/44",
      "2a0d:2683::/32",
      "2a0e:b107:b70::/44",
    ],
  }),
};
</script>

<style></style>
