<template>
  <div class="my-partner-warp mb-100">
    <PartnerHeader />

    <div class="my-partner-header mb-50">
      <h2>실적 리포트</h2>
      <LineChart />
    </div>

    <div class="my-partner-body mb-50">
      <div class="my-partner-body-header">
        <h2>상품별 수익</h2>
        <div class="my-partner-body-header-select">
          <b-form-select
            v-model="cateSelected"
            :options="cateOptions"
          ></b-form-select>
          <b-form-select
            v-model="revenueSelected"
            :options="revenueOptions"
          ></b-form-select>
        </div>
      </div>
      <!-- 상품 있을 경우 -->
      <div class="mypartner-body-body">
        <div class="revenue-card-list">
          <b-row>
            <b-col cols="3" v-for="(item, i) in revenueList" :key="i">
              <a class="revenue-card box-shadow">
                <h3>
                  <img
                    class="revenue-icon-img"
                    :src="require(`@/assets/images/${item.thumb}.png`)"
                  />
                  {{ item.label }}
                </h3>
                <p>{{ item.price }}</p>
              </a>
            </b-col>
          </b-row>
        </div>

        <div class="more-btn">
          <b-button>
            더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              /></svg
          ></b-button>
        </div>
      </div>

      <!-- 상품 없을 경우 -->
      <!-- <div class="my-partner-body-body box-shadow">
        파트너스 수익 상품이 없습니다.
      </div> -->
    </div>

    <div class="my-partner-footer mb-50">
      <h2>파트너스 활동 상품</h2>
      <!-- 제품 8개 (더보기 클릭 시 추가)  -->
      <ProductList
        :moreBtn="false"
        :breadcrumbs="false"
        :select="false"
        :cols="3"
      />
    </div>
  </div>
</template>
<script>
import PartnerHeader from "@/components/MyPage/PartnerHeader/index.vue";
import LineChart from "@/components/chartjs/partnerLineChart.vue";
import ProductList from "@/components/product/product-list.vue";
import prodList from "@/api/product.json";

export default {
  name: "my-partner-skin",
  components: {
    PartnerHeader,
    LineChart,
    ProductList,
  },
  data() {
    return {
      cateSelected: null,
      cateOptions: [
        { value: null, text: "카테고리" },
        { value: "design", text: "디자인" },
        { value: "font", text: "폰트" },
      ],
      revenueSelected: null,
      revenueOptions: [
        { value: null, text: "높은수익순" },
        { value: "rowRevenue", text: "낮은수익순" },
      ],
      prodList,
      revenueList: [
        {
          label: "회사소개서 양식 팝니다.",
          thumb: "img_report",
          price: "₩ 200,000",
        },
        {
          label: "산세리프 폰트 팝니다.",
          thumb: "img_font",
          price: "₩ 200,000",
        },
        {
          label: "카카오톡 등 메신저 프로",
          thumb: "img_program",
          price: "₩ 200,000",
        },
        {
          label: "사람 일러스트 팔아요!",
          thumb: "img_design",
          price: "₩ 200,000",
        },
        {
          label: "회사소개서 양식 팝니다.",
          thumb: "img_report",
          price: "₩ 200,000",
        },
      ],
    };
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
.my-partner-body-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.my-partner-body-header h2 {
  margin-bottom: 0;
}
.my-partner-body-header .custom-select {
  min-width: 143px;
  height: 30px;
  margin-left: 10px;
  padding: 0 18px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.my-partner-body-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 10px;
}
.my-partner-footer .vue-slick-info h2 {
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
}

/* 상품별 수익 */
.revenue-card-list {
  margin-bottom: 10px;
}
.revenue-card {
  display: block;
  position: relative;
  height: 130px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  color: #333333;
}
.revenue-card:hover {
  color: inherit;
}
.revenue-card h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
}
.revenue-card h3 .revenue-icon-img {
  width: 31px;
  height: 31px;
  margin-right: 5px;
}
.revenue-card p {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 15px;
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
}

.my-partner-warp .list-body.add-more-btn {
  margin-bottom: 7px;
}
</style>
