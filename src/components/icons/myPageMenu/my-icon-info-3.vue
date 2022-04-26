<template>
  <!-- w.24 h.24 -->
  <path
    d="M22,20H2V18H3V11.031a9,9,0,1,1,18,0V18h1ZM5,18H19V11.031a7,7,0,1,0-14,0Zm4.5,3h5a2.5,2.5,0,1,1-5,0Z"
    transform="translate(-2 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconInfo3",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
