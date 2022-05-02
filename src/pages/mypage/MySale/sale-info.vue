<template>
  <div class="my-sale-info-warp mb-100">
    <SalesHeader />

    <div class="my-sale-info-header mb-50">
      <h2>누적판매금액</h2>
      <LineChart :sale="'true'" />
    </div>

    <div class="my-sale-info-body mb-50">
      <div class="my-sale-info-body-header">
        <h2>가장많이팔린 상품</h2>
      </div>
      <!-- 상품 없을 경우 -->
      <div class="my-sale-info-body-body box-shadow">
        판매된 상품이 없습니다.
      </div>
      <!-- 상품 있을 경우 -->
      <div class="mypartner-body-body">
        <div class="revenue-card-list">
          <VueSlickCarousel v-bind="revenueSettings">
            <div v-for="(item, i) in revenueList" :key="i">
              <router-link
                :to="{ name: 'productList' }"
                class="revenue-card box-shadow"
              >
                <h3>
                  <img
                    class="revenue-icon-img"
                    :src="require(`@/assets/images/${item.thumb}.png`)"
                  />
                  {{ item.label }}
                </h3>
                <div class="revenue-card-footer">
                  <p>{{ item.count }}<span>건</span></p>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                        fill="#999999"
                      />
                    </svg>
                  </a>
                </div>
              </router-link>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <div class="my-sale-info-footer">
      <h2>상품 누적판매금액</h2>
      <!-- 상품 없을 경우 -->
      <div class="my-sale-info-body-body box-shadow">
        판매된 상품이 없습니다.
      </div>

      <!-- 상품 있을 경우 -->
      <div class="my-sale-prograss box-shadow">
        <div class="prograss-item">
          <div class="prograss-info">
            <h2>회사소개서 양식 팝니다.</h2>
            <p>₩ {{ comma(prod1) }}</p>
          </div>
          <div class="progress">
            <div
              role="progressbar"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="prod1"
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="'width:' + getValue(prod1) + '%;' + 'opacity: 1'"
            ></div>
          </div>
        </div>
        <div class="prograss-item">
          <div class="prograss-info">
            <h2>산세리프 폰트 팝니다.</h2>
            <p>₩ {{ comma(prod2) }}</p>
          </div>
          <div class="progress">
            <div
              role="progressbar"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="prod2"
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="'width:' + getValue(prod2) + '%;' + 'opacity: 0.8'"
            ></div>
          </div>
        </div>
        <div class="prograss-item">
          <div class="prograss-info">
            <h2>모둠 프로그램 판매합니다.</h2>
            <p>₩ {{ comma(prod3) }}</p>
          </div>
          <div class="progress">
            <div
              role="progressbar"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="prod3"
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="'width:' + getValue(prod3) + '%;' + 'opacity: 0.6'"
            ></div>
          </div>
        </div>
        <div class="prograss-item">
          <div class="prograss-info">
            <h2>사람 일러스트 팔아요!</h2>
            <p>₩ {{ comma(prod4) }}</p>
          </div>
          <div class="progress">
            <div
              role="progressbar"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="prod4"
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="'width:' + getValue(prod4) + '%;' + 'opacity: 0.4'"
            ></div>
          </div>
        </div>
        <div class="prograss-item">
          <div class="prograss-info">
            <h2>회사소개서 양식 팝니다.</h2>
            <p>₩ {{ comma(prod5) }}</p>
          </div>
          <div class="progress">
            <div
              role="progressbar"
              :aria-valuemin="min"
              :aria-valuemax="max"
              :aria-valuenow="prod5"
              class="progress-bar progress-bar-striped progress-bar-animated"
              :style="'width:' + getValue(prod5) + '%;' + 'opacity: 0.2'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import SalesHeader from "@/components/MyPage/SalesHeader/index.vue";
import LineChart from "@/components/chartjs/partnerLineChart.vue";

export default {
  name: "my-sale-info-skin",
  components: {
    SalesHeader,
    LineChart,
    VueSlickCarousel,
  },
  data() {
    return {
      revenueList: [
        {
          label: "회사소개서 양식 팝니다.",
          thumb: "img_report",
          price: "₩ 200,000",
          count: "320",
        },
        {
          label: "산세리프 폰트 팝니다.",
          thumb: "img_font",
          price: "₩ 200,000",
          count: "300",
        },
        {
          label: "카카오톡 등 메신저 프로",
          thumb: "img_program",
          price: "₩ 200,000",
          count: "250",
        },
        {
          label: "사람 일러스트 팔아요!",
          thumb: "img_design",
          price: "₩ 200,000",
          count: "180",
        },
        {
          label: "회사소개서 양식 팝니다.",
          thumb: "img_report",
          price: "₩ 200,000",
          count: "320",
        },
      ],
      revenueSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
      },
      prod1: 5200000,
      prod2: 4200000,
      prod3: 4000000,
      prod4: 3500000,
      prod5: 3000000,
      max: 50000000,
      min: 0,
    };
  },
  methods: {
    comma(str) {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    },
    getValue(value) {
      return (value / this.max) * 100;
    },
  },
};
</script>
<style scope>
/* Prograss Bar */
.my-sale-prograss {
  padding: 27px 19px;
  border-radius: 10px;
}
.my-sale-prograss .prograss-item {
  margin-bottom: 21px;
}
.prograss-item .prograss-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333333;
  margin-bottom: 10px;
}
.prograss-item .prograss-info h2 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
}
.prograss-item .prograss-info p {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}
.prograss-item .progress {
  height: 9px;
}
.prograss-item .progress-bar {
  background-color: #6e3cbc;
  border-radius: 4px;
}

.revenue-card-list .slick-slide {
  padding: 0 10px;
}
.revenue-card-list .slick-slide .revenue-card-footer p span {
  padding-left: 5px;
  color: #999999;
  font-size: 0.9rem;
  font-weight: 400;
}
.revenue-card-list .slick-slide .revenue-card-footer {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 37px;
}
.revenue-card-list .slick-next {
  right: 15px;
}
.revenue-card-list .slick-prev {
  left: 15px;
}
.revenue-card-list .slick-next {
  right: 10px;
  background: center / 70% no-repeat url("@/assets/images/chervon_next.png");
}
.revenue-card-list .slick-prev {
  right: 43px;
  left: auto;
  background: center / 70% no-repeat url("@/assets/images/chervon_prev.png");
}
.revenue-card-list .slick-next::before,
.revenue-card-list .slick-prev::before {
  display: none;
}
.revenue-card-list .slick-arrow {
  top: auto;
  bottom: 100%;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  border: 1px solid #ededed;
}

.my-sale-info-warp {
  width: 100%;
  padding: 5px;
}
.my-sale-info-warp h2 {
  margin-bottom: 15px;
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
}
.my-sale-info-body-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.my-sale-info-body-header h2 {
  margin-bottom: 0;
}
.my-sale-info-body-header .custom-select {
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
.my-sale-info-body-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: 10px;
}
.my-sale-info-footer .vue-slick-info h2 {
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
}

/* 상품별 수익 */
.revenue-card {
  display: block;
  position: relative;
  height: 130px;
  margin-bottom: 10px;
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
  justify-content: start;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
}
.revenue-card h3 .revenue-icon-img {
  width: 17px;
  height: 17px;
  margin-right: 5px;
}
.revenue-card p {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
}
.my-sale-info-warp .list-body.add-more-btn {
  margin-bottom: 7px;
}
</style>
