<template>
  <path
    d="M13.855,1.012l5.117,5.117a.4.4,0,0,1-.223.684L17.56,7,13,2.437l.171-1.2a.4.4,0,0,1,.684-.228ZM4.18,16.42c3-2.686,6.445-3.49,10.192-4.451l.36-3.24L11.268,5.265l-3.239.36c-.961,3.748-1.765,7.192-4.45,10.194L2.454,14.695C4.734,12.034,5.59,9.089,6.729,4.147l5.13-.57,4.56,4.561-.57,5.131c-4.94,1.14-7.886,2-10.545,4.276Zm4.26-4.862a1.613,1.613,0,1,1,2.255-.026,1.612,1.612,0,0,1-2.255.026Z"
    transform="translate(-2.454 -0.894)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-design",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
