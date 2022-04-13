<template>
  <path
    d="M16.867,3V14.658a3.341,3.341,0,1,1-1.67-2.885V4.665H7.681v9.993a3.341,3.341,0,1,1-1.67-2.885V3ZM4.34,16.324a1.665,1.665,0,1,0-1.67-1.665A1.668,1.668,0,0,0,4.34,16.324Zm9.186,0a1.665,1.665,0,1,0-1.67-1.665A1.668,1.668,0,0,0,13.527,16.324Z"
    transform="translate(-1 -3)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-music",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
