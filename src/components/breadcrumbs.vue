<template>
  <!-- ======= Breadcrumbs ======= -->
  <section class="breadcrumbs">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h2>{{ pagename }}</h2>
        <ol>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>{{ pagename }}</li>
        </ol>
      </div>
    </div>
  </section>
  <!-- End Breadcrumbs -->
</template>

<script>
export default {
  props: ["pagename"]
};
</script>

<style></style>
