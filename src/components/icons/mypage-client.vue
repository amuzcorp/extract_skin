<template>
  <path
    d="M19.938,8H21a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2H19.938A8,8,0,0,1,12,23V21a6,6,0,0,0,6-6V9A6,6,0,1,0,6,9v7H3a2,2,0,0,1-2-2V10A2,2,0,0,1,3,8H4.062A8,8,0,0,1,19.938,8ZM3,10v4H4V10Zm17,0v4h1V10ZM7.76,15.785l1.06-1.7a6.006,6.006,0,0,0,6.36,0l1.06,1.7a8.006,8.006,0,0,1-8.48,0Z"
    transform="translate(-1 -1.001)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "mypage-client",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
