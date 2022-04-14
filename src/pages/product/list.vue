<template>
  <b-container>
    <div class="prod-wrap">
      <b-row class="align-items-center">
        <b-col cols="3">
          <VerticalCategory />
        </b-col>
        <b-col cols="9">List</b-col>
      </b-row>

      <h2>Product List</h2>
      <router-link :to="{ name: 'productView' }"> View </router-link>
    </div>
    <!-- <b-row class="align-items-center">
      <b-col cols="6"></b-col>
    </b-row> -->
  </b-container>
</template>
<script>
import VerticalCategory from "@/components/vertical_category.vue";

export default {
  name: "productList",
  components: {
    VerticalCategory,
  },
};
</script>
<style></style>
