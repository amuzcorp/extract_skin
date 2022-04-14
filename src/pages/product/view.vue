<template>
  <div>
    <a @click="$router.go(-1)" ref="back_link">
      <h2>뒤로가기</h2>
    </a>
    <h2>Product View</h2>
  </div>
</template>
<script>
export default {
  name: "productView",
};
</script>
<style></style>
