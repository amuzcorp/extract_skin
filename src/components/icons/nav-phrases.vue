<template>
  <path
    d="M3,15.2V4.4A2.367,2.367,0,0,1,5.333,2H16.222A.789.789,0,0,1,17,2.8V17.2a.789.789,0,0,1-.778.8H5.722A2.762,2.762,0,0,1,3,15.2Zm12.444,1.2V14H5.722a1.2,1.2,0,0,0,0,2.4ZM4.556,12.67a2.649,2.649,0,0,1,1.167-.27h9.722V3.6H5.333a.789.789,0,0,0-.778.8Z"
    transform="translate(-3 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-phrases",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
