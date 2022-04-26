<template>
  <div class="mypage-wrap">
    <b-container>
      <div class="mypage-row">
        <div class="mypage-nav-col"><MyPageNav /></div>
        <div class="mypage-col">
          <MyPurchaseHeader v-if="getSkinParm == 'purchase'" />
          <router-view />
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import MyPageNav from "@/components/MyPage/MyPageMenu/index.vue";
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";

export default {
  name: "myPageIndex",
  data() {
    return {
      getSkinParm: [],
    };
  },
  components: {
    MyPageNav,
    MyPurchaseHeader,
  },
  methods: {
    getParam() {
      var paramSplit = document.location.href.split("/");
      this.getSkinParm = paramSplit[paramSplit.length - 1];
    },
  },
  mounted() {
    this.getParam();
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
}
.mypage-row .mypage-col {
  flex-grow: 1;
}
</style>
