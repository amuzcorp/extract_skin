<template>
  <path
    d="M16,18H14.5V16.381a2.344,2.344,0,0,0-2.25-2.429H7.75A2.344,2.344,0,0,0,5.5,16.381V18H4V16.381a3.907,3.907,0,0,1,3.75-4.048h4.5A3.907,3.907,0,0,1,16,16.381Zm-6-7.286A4.689,4.689,0,0,1,5.5,5.857,4.689,4.689,0,0,1,10,1a4.689,4.689,0,0,1,4.5,4.857A4.689,4.689,0,0,1,10,10.714ZM10,9.1a3.126,3.126,0,0,0,3-3.238,3.126,3.126,0,0,0-3-3.238A3.126,3.126,0,0,0,7,5.857,3.126,3.126,0,0,0,10,9.1Z"
    transform="translate(-4 -1)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-model",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
