<template>
  <div class="board-create">
    <b-container>
      <div class="create-header"><BoardCreate /></div>
      <div class="create-body"></div>
      <div class="create-footer"></div>
    </b-container>
  </div>
</template>
<script>
import BoardCreate from "@/components/board/purchaseBoard/create.vue";

export default {
  name: "purchaseCreate",
  components: {
    BoardCreate,
  },
};
</script>
<style></style>
