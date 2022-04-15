<template>
  <path
    d="M7.65,1.369a1,1,0,0,1,1.7,0l1.908,3.074a1,1,0,0,0,.617.445L15.4,5.73a1,1,0,0,1,.526,1.625l-2.343,2.721a1,1,0,0,0-.239.731l.28,3.575a1,1,0,0,1-1.375,1L8.878,14.008a1,1,0,0,0-.757,0L4.749,15.386a1,1,0,0,1-1.375-1l.28-3.575a1,1,0,0,0-.239-.731L1.071,7.355A1,1,0,0,1,1.6,5.73l3.528-.842a1,1,0,0,0,.617-.445Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "icon-star",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
