<template>
  <path
    d="M9.222,6h1.556v8H9.222Zm3.111,3.2h1.556V14H12.333ZM6.111,10.8H7.667V14H6.111Zm6.222-7.2H4.556V16.4H15.444V6.8H12.333ZM3,2.794A.785.785,0,0,1,3.777,2h9.334L17,6V17.194a.79.79,0,0,1-.772.806H3.772A.789.789,0,0,1,3,17.206Z"
    transform="translate(-3 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-report",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
