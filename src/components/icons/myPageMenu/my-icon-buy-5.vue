<template>
  <!-- w.24 h.24 -->
  <path
    d="M15,18h1.5a2.5,2.5,0,1,0,0-5H3V11H16.5a4.5,4.5,0,1,1,0,9H15v2l-4-3,4-3ZM3,4H21V6H3ZM9,18v2H3V18Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconBuy5",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
