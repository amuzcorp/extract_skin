<template>
  <div class="prod-wrap">
    <b-container>
      <div class="prod-inner">
        <div class="prod-cate-nav">
          <VerticalCategory />
        </div>

        <div class="prod-cate-items">
          <!-- ad -->
          <div class="prod-ad">
            <h2>원하는 상품이 없을땐, <b>삽니다 공고</b>를 올려보세요!</h2>
          </div>

          <!-- announcement -->
          <div class="ann-wrap">
            <b-row class="align-items-center mb-10">
              <b-col cols="6">
                <h2 class="icon-tit mb-10">
                  <icon-slot
                    :iconName="'announcement'"
                    :svgHeight="20"
                    :svgWidth="20"
                    :iconColor="'#6E3CBC'"
                  />
                  자소서에 등록된 공고
                </h2>
              </b-col>
              <b-col cols="6" class="text-right">
                <div class="ann-select">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <router-link :to="{ name: 'productShow' }">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </router-link>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
            </b-row>
          </div>

          <!-- 주간 베스트 상품 -->
          <div class="week-best-wrap">
            <h2 class="icon-tit mb-10">
              <icon-slot
                :iconName="'handBest'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#6E3CBC'"
              />
              이번주 <b>Best</b> 상품
            </h2>
            <ProdWeekBest
              :itemList="this.bestProdList"
              :getSlideSettings="'best'"
              :slidesToShow="4"
            />
          </div>

          <!-- Porduct List -->
          <ProductList :breadcrumbs="true" :cols="3" />
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import VerticalCategory from "@/components/category/vertical-category.vue";
import ProdWeekBest from "@/components/product/product-week-best.vue";
import iconSlot from "@/components/icon-slot.vue";
import prodList from "@/api/product.json";
import ProductList from "@/components/product/product-list.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "productList",
  components: {
    VerticalCategory,
    ProdWeekBest,
    iconSlot,
    ProductList,
  },
  data() {
    return {
      prodList,
      bestProdList: [],
      selected: null,
      options: [
        { value: null, text: "4개 보기" },
        { value: 10, text: "10개보기" },
      ],
      dataSelected: null,
      dataOptions: [
        { value: null, text: "데이터" },
        { value: "data-form", text: "데이터 + 양식" },
        { value: "form", text: "양식" },
      ],
      orderSelected: null,
      orderOptions: [
        { value: null, text: "최신순" },
        { value: "review", text: "평점순" },
        { value: "price-high", text: "높은가격순" },
        { value: "price-low", text: "낮은가격순" },
      ],
    };
  },
  methods: {
    bestProd() {
      for (var i = 0; i < this.prodList.length; i++) {
        if (this.prodList[i]["best"] == true) {
          this.bestProdList.push(this.prodList[i]);
        }
      }
    },
  },
  mounted() {
    this.bestProd();
  },
};
</script>
<style>
.prod-inner {
  display: flex;
  align-items: start;
}
.prod-cate-nav {
  width: 220px;
  min-width: 220px;
}
.prod-cate-items {
  flex-grow: 1;
  padding-left: 70px;
  overflow: hidden;
}
.prod-ad {
  position: relative;
  display: flex;
  align-items: center;
  height: 82px;
  margin-bottom: 33px;
  padding: 0 40px;
  background: linear-gradient(100deg, #dfa9dd, #8282c8);
  border-radius: 12px;
}
.prod-ad::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center / cover repeat url("@/assets/images/prod_01.png");
}
.prod-ad h2 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
}
.prod-ad h2 b {
  font-size: 1.4rem;
  font-weight: 600;
}
.ann-wrap {
  margin-bottom: 40px;
}
.icon-tit {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #121212;
  font-size: 1rem;
  font-weight: 400;
}
.icon-tit svg {
  width: 34px;
  height: 34px;
  margin-right: 9px;
  padding: 6px;
  background: #f9f8fe;
  border-radius: 30px;
}
.icon-tit b {
  padding: 0 3px;
}
.ann-inner-box a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 15px 25px;
  color: #333;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  transition: all ease 0.35s;
}
.ann-inner-box h2 {
  font-size: 1rem;
  font-weight: 400;
}
.ann-inner-box h3 {
  min-width: 80px;
  color: #202427;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: right;
}
.ann-inner-box a:hover {
  border-color: #6e3cbc;
}
.prod-list {
  margin-bottom: 857px;
}
</style>
