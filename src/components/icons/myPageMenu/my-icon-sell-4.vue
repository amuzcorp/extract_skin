<template>
  <!-- w.24 h.24 -->
  <path
    d="M3,10H2V4a1,1,0,0,1,.992-1H21.008A.99.99,0,0,1,22,4v6H21V20a1,1,0,0,1-.993,1H3.993A1,1,0,0,1,3,20Zm16,0H5v9H19ZM4,5V8H20V5Zm5,7h6v2H9Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconSell4",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
