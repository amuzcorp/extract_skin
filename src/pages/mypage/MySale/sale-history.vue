<template>
  <div class="my-withdraw-warp mb-100">
    <SalesHeader />

    <SaleBoard :boardTit="'판매내역'" :boardList="borderList" />
  </div>
</template>
<script>
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import SaleBoard from "@/components/board/saleBoard/list";

export default {
  name: "my-withdraw-skin",
  components: {
    SalesHeader,
    SaleBoard,
  },
  data() {
    return {
      borderList: [
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {},
        },
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {
            name: "(주)아뮤즈",
            compNum: "812-12-12345",
            compCert: "(주)아뮤즈 사업자등록증.jpg",
            email: "amuz@amuz.co.kr",
          },
        },
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {},
        },
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {},
        },
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {},
        },
        {
          label: "회사소개서 양식 팝니다!",
          date: "2022-01-01",
          productNum: "22-9876-1234",
          price: "₩ 25,000",
          amount: "₩ 4,950,000",
          bill: {
            name: "(주)아뮤즈",
            compNum: "812-12-12345",
            compCert: "(주)아뮤즈 사업자등록증.jpg",
            email: "amuz@amuz.co.kr",
          },
        },
      ],
    };
  },
};
</script>
<style></style>
