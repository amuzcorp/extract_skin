<template>
  <!-- w.24 h.24 -->
  <path
    d="M4,18H6v2H18V4H6V6H4V3A1,1,0,0,1,5,2H19a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1Zm2-7h7v2H6v3L1,12,6,8Z"
    transform="translate(-1 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconSell5",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
