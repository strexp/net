<template>
  <!-- ======= Counts Section ======= -->
  <section id="counts" class="counts section-bg">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <span data-toggle="counter-up">60+</span>
            <p>{{ $t("counts.descr1") }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <span data-toggle="counter-up">{{ $t("counts.num2") }}</span>
            <p>{{ $t("counts.descr2") }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <span data-toggle="counter-up">15+</span>
            <p>{{ $t("counts.descr3") }}</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
          <div class="count-box">
            <span data-toggle="counter-up">50+</span>
            <p>{{ $t("counts.descr4") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Counts Section -->
</template>

<script>
export default {};
</script>

<style></style>
