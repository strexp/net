<template>
  <!-- ======= Pricing Section ======= -->
  <section id="pricing" class="pricing">
    <div class="container" data-aos="fade-up">
      <!-- <div class="section-title">
        <h2>{{ $t('price.main') }}</h2>
        <p>
          {{ $t('price.descr') }}
        </p>
      </div> -->

      <div class="row">
        <div class="col-lg-4 col-md-6" data-aos="zoom-im" data-aos-delay="100">
          <div class="box">
            <h3>{{ $t("price.t1") }}</h3>
            <h4>
              <sup>$</sup>0
              <span>/ {{ $t("price.month") }}</span>
            </h4>
            <ul>
              <li>{{ $t("price.t1-1") }}</li>
              <li>{{ $t("price.t1-2") }}</li>
              <li>{{ $t("price.t1-3") }}</li>
              <li>{{ $t("price.t1-4") }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">{{ $t("price.t1-but") }}</a>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="box featured">
            <h3>{{ $t("price.t2") }}</h3>
            <h4>
              {{ $t("price.t2-price") }}
            </h4>
            <ul>
              <li>{{ $t("price.t2-1") }}</li>
              <li>{{ $t("price.t2-2") }}</li>
              <li>{{ $t("price.t2-3") }}</li>
              <li>{{ $t("price.t2-4") }}</li>
              <li>{{ $t("price.t2-5") }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">{{ $t("price.t2-but") }}</a>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="box">
            <h3>{{ $t("price.t3") }}</h3>
            <h4>
              {{ $t("price.t3-price") }}
            </h4>
            <ul>
              <li>{{ $t("price.t3-1") }}</li>
              <li>{{ $t("price.t3-2") }}</li>
              <li>{{ $t("price.t3-3") }}</li>
              <li>{{ $t("price.t3-4") }}</li>
            </ul>
            <div class="btn-wrap">
              <a href="#" class="btn-buy">{{ $t("price.t3-but") }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Pricing Section -->
</template>

<script>
export default {};
</script>

<style>
#pricing {
  padding-top: 40px;
}
</style>
