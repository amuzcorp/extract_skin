<template>
  <!-- w.24 h.24 -->
  <path
    d="M20,22H4a1,1,0,0,1-1-1V3A1,1,0,0,1,4,2H20a1,1,0,0,1,1,1V21A1,1,0,0,1,20,22Zm-1-2V4H5V20ZM8,7h8V9H8Zm0,4h8v2H8Zm0,4h5v2H8Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconSell3",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
