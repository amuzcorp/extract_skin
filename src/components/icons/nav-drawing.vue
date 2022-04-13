<template>
  <path
    d="M9.226,3.708V2h1.549V3.708a3.158,3.158,0,0,1,2.217,2.281,3.3,3.3,0,0,1-.821,3.125l4.7,8.438-1.341.8-4.7-8.438a2.993,2.993,0,0,1-1.659,0l-4.7,8.438-1.341-.8,4.7-8.438a3.3,3.3,0,0,1-.821-3.125A3.158,3.158,0,0,1,9.226,3.708ZM10,8.428A1.608,1.608,0,1,0,8.451,6.821,1.579,1.579,0,0,0,10,8.428Z"
    transform="translate(-3.134 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-drawing",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
