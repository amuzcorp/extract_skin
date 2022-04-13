<template>
  <path
    d="M17,6.8V17.194a.79.79,0,0,1-.772.806H3.772A.784.784,0,0,1,3,17.206V2.794A.792.792,0,0,1,3.779,2h8.552Zm-1.556.8H11.556v-4h-7V16.4H15.444ZM6.889,6H9.222V7.6H6.889Zm0,3.2h6.222v1.6H6.889Zm0,3.2h6.222V14H6.889Z"
    transform="translate(-3 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-pdf-book",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
