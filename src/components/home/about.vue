<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>{{ $t("about.title") }}</h2>
        <p>
          {{ $t("about.descr") }}
        </p>
      </div>

      <div class="row content">
        <div class="col-lg-6">
          <p>
            {{ $t("about.para") }}
          </p>
          <ul>
            <li>
              <i class="ri-check-double-line"></i> {{ $t("about.para1") }}
            </li>
            <li>
              <i class="ri-check-double-line"></i> {{ $t("about.para2") }}
            </li>
            <li>
              <i class="ri-check-double-line"></i> {{ $t("about.para3") }}
            </li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <p>
            {{ $t("about.morepara") }}
          </p>
          <p>
            {{ $t("about.morepara2") }}
          </p>
          <a href="#" class="btn-learn-more">{{ $t("about.more") }}</a>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script>
export default {};
</script>

<style></style>
