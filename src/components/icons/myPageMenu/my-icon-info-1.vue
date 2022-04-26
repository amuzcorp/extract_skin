<template>
  <!-- w.24 h.24 -->
  <path
    d="M6.455,19,2,22.5V4A1,1,0,0,1,3,3H21a1,1,0,0,1,1,1V18a1,1,0,0,1-1,1Zm-.692-2H20V5H4V18.385ZM11,10h2v2H11ZM7,10H9v2H7Zm8,0h2v2H15Z"
    transform="translate(-2 -3)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconInfo1",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
