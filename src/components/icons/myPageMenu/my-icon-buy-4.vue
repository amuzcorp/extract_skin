<template>
  <!-- w.24 h.24 -->
  <path
    d="M3,3H21a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3Zm17,8H4v8H20Zm0-2V5H4V9Zm-6,6h4v2H14Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconBuy4",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
