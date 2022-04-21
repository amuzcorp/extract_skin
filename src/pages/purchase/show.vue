<template>
  <div class="purchase-view-wrap">
    <b-container>
      <BoardShow />
    </b-container>
  </div>
</template>
<script>
import BoardShow from "@/components/board/purchaseBoard/show.vue";

export default {
  name: "purchaseShow",
  components: {
    BoardShow,
  },
};
</script>
<style></style>
