<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>Strategic Explorations</h3>
            <h4>Internet Services Provider</h4>
            <p>
              71-75, Shelton Street
              <br />London, Greater London ,WC2H 9JQ <br />United Kingdom
              <br />
              <br />
              <strong>{{ $t("footer-phone") }}:</strong> [REDACTED]
              <br />
              <strong>{{ $t("footer-email") }}:</strong> info@strexp.net
              <br />
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>{{ $t("footer-usefullinks.main") }}</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/">{{
                  $t("footer-usefullinks.home")
                }}</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/prices">{{
                  $t("footer-usefullinks.pricing")
                }}</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">{{ $t("footer-usefullinks.tos") }}</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">{{ $t("footer-usefullinks.privacy") }}</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/peering-policy">{{
                  $t("footer-usefullinks.peering-policy")
                }}</router-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>{{ $t("footer-services.main") }}</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="https://dn42.strexp.net">{{
                  $t("footer-services.dn42")
                }}</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/services/ip">{{
                  $t("footer-services.ip")
                }}</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <router-link to="/services/hosting">{{
                  $t("footer-services.hosting")
                }}</router-link>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="https://lg.strexp.net">{{
                  $t("footer-services.lg")
                }}</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="/globe/">{{ $t("footer-services.globe") }}</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>{{ $t("footer-news-title") }}</h4>
            <p>{{ $t("footer-news-descr") }}</p>
            <form action method="post">
              <input type="email" name="email" />
              <input type="submit" :value="$t('footer-news-subs')" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="mr-md-auto text-center text-md-left">
        <div class="copyright">
          &copy; Copyright
          <strong> <span>Strategic Explorations Network</span> </strong>. All
          Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="https://twitter.com/StrategicExp" class="twitter">
          <i class="bx bxl-twitter"></i>
        </a>
        <a href="https://t.me/StrategicExplorations" class="telegram">
          <i class="bx bxl-telegram"></i>
        </a>
        <a href="https://github.com/strexp" class="github">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {};
</script>

<style></style>
