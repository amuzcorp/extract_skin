<template>
  <path
    d="M17.279,18.8H3.84a.84.84,0,0,1-.84-.84V2.84A.84.84,0,0,1,3.84,2H17.279a.84.84,0,0,1,.84.84V17.959A.84.84,0,0,1,17.279,18.8Zm-.84-1.68V3.68H4.68V17.119ZM7.2,6.2h6.719v1.68H7.2Zm0,3.36h6.719v1.68H7.2Zm0,3.36h6.719V14.6H7.2Z"
    transform="translate(-0.48 -0.32)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "prod-announcement",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
