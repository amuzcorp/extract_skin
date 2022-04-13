<template>
  <path
    d="M9.345,12.25H4.012L2.369,16H.6L5.857,4H7.5l5.257,12H10.988L9.345,12.25Zm-.657-1.5L6.679,6.164,4.669,10.75Zm8.669-.349V10H19v6H17.357v-.4a3.505,3.505,0,0,1-4.159-.671,2.8,2.8,0,0,1,0-3.856A3.505,3.505,0,0,1,17.357,10.4Zm-1.643,4.1A1.576,1.576,0,0,0,17.357,13a1.65,1.65,0,0,0-3.286,0A1.576,1.576,0,0,0,15.714,14.5Z"
    transform="translate(-0.6 -4)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-font",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
