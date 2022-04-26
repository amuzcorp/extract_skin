<template>
  <!-- w.24 h.24 -->
  <path
    d="M12,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm0-2a8,8,0,1,0-8-8A8,8,0,0,0,12,20ZM11,7h2V9H11Zm0,4h2v6H11Z"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "myIconBuy1",
  props: {
    iconColor: { require: true },
  },
};
</script>
<style></style>
