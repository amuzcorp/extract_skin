<template>
  <div class="my-partner-warp mb-100">
    <SelesHeader />

    <div class="my-partner-header mb-50">
      <h2>실적 리포트</h2>
      <LineChart />
    </div>

    <div class="my-partner-body mb-50">
      <h2>상품별 수익</h2>
    </div>

    <div class="my-partner-footer mb-50">
      <h2>파트너스 활동 상품</h2>
    </div>
  </div>
</template>
<script>
import SelesHeader from "@/components/MyPage/SalesHeader/index.vue";
import LineChart from "@/components/chartjs/partnerLineChart.vue";

export default {
  name: "my-partner-skin",
  components: {
    SelesHeader,
    LineChart,
  },
};
</script>
<style>
.my-partner-warp h2 {
  margin-bottom: 15px;
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
