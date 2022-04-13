<template>
  <path
    d="M12.333,3.6H4.556V16.4H15.444V6.8H12.333ZM3,2.794A.785.785,0,0,1,3.777,2h9.334L17,6V17.194a.79.79,0,0,1-.772.806H3.772A.789.789,0,0,1,3,17.206ZM10,9.6a2,2,0,1,1,1.944-2A1.973,1.973,0,0,1,10,9.6ZM6.521,14a3.491,3.491,0,0,1,6.958,0Z"
    transform="translate(-3 -2)"
    :fill="iconColor"
  />
</template>
<script>
export default {
  name: "nav-pictorial",
  props: {
    iconColor: { require: true },
    iconClass: { require: true },
  },
};
</script>
<style></style>
