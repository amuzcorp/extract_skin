<template>
  <div class="board-ad">
    <h2>원하는 상품이 없을땐, <br /><b>삽니다 공고</b>를 올려보세요!</h2>
  </div>
</template>
<script>
export default {
  name: "board-banner",
};
</script>
<style>
.board-ad {
  display: flex;
  align-items: center;
  height: 217px;
  padding: 0 0 0 26%;
  background: center / cover no-repeat url("@/assets/images/board_01.png");
  border-radius: 10px;
}
.board-ad h2 {
  color: #fff;
  font-size: 2.4rem;
  font-weight: 300;
}
.board-ad h2 b {
  font-weight: bold;
}
</style>
