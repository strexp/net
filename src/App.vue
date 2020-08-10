<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <a href="#" class="back-to-top">
      <i class="ri-arrow-up-line"></i>
    </a>
    <div id="preloader"></div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer
  },

  mounted: function() {
    if (navigator.language || navigator.userLanguage === "zh-CN")
      this.$i18n.locale = "zh";
  }
};
</script>
