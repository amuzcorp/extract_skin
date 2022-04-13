<template>
  <path
    d="M3,4.995A2,2,0,0,1,4.995,3h14.01A2,2,0,0,1,21,4.995v14.01A2,2,0,0,1,19.005,21H4.995A2,2,0,0,1,3,19ZM5,5V19H19V5ZM7.972,18.18A9.983,9.983,0,0,1,6.221,17.2a7,7,0,0,1,11.659-.155,10,10,0,0,1-1.724,1.025,5,5,0,0,0-8.184.108ZM12,13a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,12,13Zm0-2a1.5,1.5,0,1,0-1.5-1.5A1.5,1.5,0,0,0,12,11Z"
    transform="translate(-3 -3)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "mypage-profile",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
