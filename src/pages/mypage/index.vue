<template>
  <div class="mypage-wrap">
    <b-container>
      <div class="mypage-row">
        <div class="mypage-nav-col"><MyPageNav /></div>
        <div class="mypage-col">
          <router-view />
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import MyPageNav from "@/components/MyPage/MyPageMenu/index.vue";

export default {
  name: "myPageIndex",
  components: {
    MyPageNav,
  },
};
</script>
<style>
/* 그리드 */
.mypage-row {
  display: flex;
}
.mypage-row .mypage-nav-col {
  width: 290px;
  min-width: 290px;
}
.mypage-row .mypage-col {
  flex-grow: 1;
  overflow: hidden;
}
</style>
