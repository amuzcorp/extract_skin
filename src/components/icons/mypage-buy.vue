<template>
  <path
    d="M17,17v2a1,1,0,0,0,2,0V4H5V15H3V3A1,1,0,0,1,4,2H20a1,1,0,0,1,1,1V19a3,3,0,0,1-3,3H4a3,3,0,0,1-3-3V17Z"
    transform="translate(-1 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "mypage-buy",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
