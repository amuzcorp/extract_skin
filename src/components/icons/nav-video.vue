<template>
  <path
    d="M2,3.772A.789.789,0,0,1,2.794,3H17.206A.783.783,0,0,1,18,3.772V16.228a.789.789,0,0,1-.794.772H2.794A.784.784,0,0,1,2,16.228Zm1.6.783V15.444H16.4V4.556ZM8.9,7.212l3.9,2.529a.306.306,0,0,1,0,.518L8.9,12.788a.328.328,0,0,1-.328.015A.31.31,0,0,1,8.4,12.53V7.47A.31.31,0,0,1,8.569,7.2a.328.328,0,0,1,.328.016Z"
    transform="translate(-2 -3)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-video",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
