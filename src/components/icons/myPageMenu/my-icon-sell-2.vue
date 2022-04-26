<template>
  <!-- w.24 h.24 -->
  <path
    d="M17,16h2V4H9V6h8Zm0,2v3a1,1,0,0,1-1.007,1H4.007A1,1,0,0,1,3,21L3,7A1,1,0,0,1,4.01,6H7V3A1,1,0,0,1,8,2H20a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1ZM5,8,5,20H15V8Zm2,8h4.5a.5.5,0,0,0,0-1h-3a2.5,2.5,0,0,1,0-5H9V9h2v1h2v2H8.5a.5.5,0,0,0,0,1h3a2.5,2.5,0,1,1,0,5H11v1H9V18H7Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconSell2",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
