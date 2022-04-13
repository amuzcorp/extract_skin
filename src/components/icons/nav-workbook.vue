<template>
  <path
    d="M16.545,2A2.428,2.428,0,0,1,19,4.4V6H17.364v9.6A2.428,2.428,0,0,1,14.909,18H3.455A2.428,2.428,0,0,1,1,15.6V14H14.091v1.6a.807.807,0,0,0,.722.794l.1.006a.812.812,0,0,0,.812-.706l.006-.094V3.6H5.091a.812.812,0,0,0-.812.706L4.273,4.4v8H2.636v-8A2.428,2.428,0,0,1,5.091,2Z"
    transform="translate(-1 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-workbook",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
