<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto d-none d-lg-block">
        <a href="/">Strategic Explorations Network</a>
      </h1>

      <h1 class="logo mr-auto d-lg-none">
        <a href="/">Strategic Explorations</a>
      </h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active">
            <a href="/">{{ $t("nav-home") }}</a>
          </li>
          <li class="drop-down">
            <a>{{ $t("nav-services") }}</a>
            <ul>
              <li>
                <a href="https://kb.strexp.net">
                  {{ $t("nav-service.kb") }}
                </a>
              </li>
              <li>
                <router-link to="/services/ip">{{
                  $t("nav-service.ip")
                }}</router-link>
              </li>
              <li>
                <router-link to="/services/hosting">{{
                  $t("nav-service.hosting")
                }}</router-link>
              </li>
              <li>
                <a href="https://lg.strexp.net">{{ $t("nav-service.lg") }}</a>
              </li>
              <li>
                <a href="/globe/">{{ $t("nav-service.globe") }}</a>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/prices">{{ $t("nav-pricing") }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{ $t("nav-contact") }}</router-link>
          </li>
          <li class="drop-down">
            <a>{{ $t("nav-lang") }}</a>
            <ul>
              <li @click="cglang('en')">
                <a>English</a>
              </li>
              <li @click="cglang('zh')">
                <a>简体中文</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- .nav-menu -->

      <a
        href="https://portal.strexp.net"
        class="get-started-btn scrollto d-none d-lg-block"
        >{{ $t("nav-portal") }}</a
      >
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    cglang: function(ln) {
      this.$i18n.locale = ln;
    }
  }
};
</script>

<style></style>
