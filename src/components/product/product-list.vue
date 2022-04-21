<template>
  <!-- Porduct List -->
  <div class="prod-list week-best-wrap">
    <div class="list-header mb-15">
      <ul v-if="breadcrumbs" class="prod-nav">
        <li><a href="">홈</a></li>
        <li><a href="">PDF</a></li>
        <li><a href="">자소서</a></li>
      </ul>
      <ul v-else class="prod-nav"></ul>

      <div class="select-area">
        <div class="ann-select">
          <b-form-select
            v-model="dataSelected"
            :options="dataOptions"
          ></b-form-select>
        </div>
        <div class="ann-select">
          <b-form-select
            v-model="orderSelected"
            :options="orderOptions"
          ></b-form-select>
        </div>
      </div>
    </div>

    <div class="list-body" :class="{ 'ex-col-5': this.cols5 }">
      <b-row class="prod-list-row">
        <b-col
          :cols="cols"
          v-for="(item, i) in prodList"
          :key="i"
          class="prod-list-col"
        >
          <div class="vue-slick-track">
            <a href="#" class="vue-slick-item">
              <div class="vue-slick-img">
                <div class="hover-box">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                    찜하기
                  </a>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-link-45deg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                      />
                      <path
                        d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                      />
                    </svg>
                    링크복사
                  </a>
                </div>
                <div
                  class="img"
                  v-bind:style="{
                    backgroundImage:
                      'url(' +
                      require(`@/assets/images/${item.thumb}.png`) +
                      ')',
                  }"
                ></div>
              </div>
              <div class="vue-slick-info">
                <h2>
                  {{ item.title }}
                </h2>
                <div class="info-detail">
                  <h3>₩ {{ item.price }}</h3>
                  <ul>
                    <icon-slot
                      :iconName="'star'"
                      :svgHeight="16"
                      :svgWidth="16"
                      :iconColor="'#894DE6'"
                    />
                    <li>{{ item.star }}</li>
                    <li>{{ item.review }}개 후기</li>
                  </ul>
                </div>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="pagenation">
      <ul>
        <li class="first-btn">
          <a href="#"><img :src="pagePrev" /></a>
        </li>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a>···</a></li>
        <li><a href="#">12</a></li>
        <li class="last-btn">
          <a href="#"><img :src="pageNext" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import prodList from "@/api/product.json";
import iconSlot from "@/components/icon-slot.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";

export default {
  name: "product-list",
  props: {
    breadcrumbs: { require: false, type: Boolean, default: true },
    cols: { require: false, type: Number, default: 3 },
    productList: { require: false, type: Number, default: 3 },
    cols5: { require: false, type: Boolean, default: false },
  },
  components: { iconSlot },
  data() {
    return {
      prodList,
      pageNext: pageNext,
      pagePrev: pagePrev,
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
};
</script>
<style>
/* Product List */
.prod-wrap .week-best-wrap {
  margin-bottom: 200px;
}
.list-header,
.list-header .prod-nav,
.list-header .select-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-header .prod-nav a {
  position: relative;
  color: #6a707e;
  padding-right: 20px;
  font-size: 0.9rem;
  font-weight: 400;
}
.list-header .prod-nav a:after {
  content: ">";
  position: absolute;
  top: -3px;
  right: 6px;
}
.list-header .prod-nav li:last-child a:after {
  display: none;
}
.list-header .select-area .custom-select {
  margin-left: 10px;
}
.list-body {
  margin-bottom: 100px;
}
.list-body .vue-slick-item {
  height: auto;
}
.list-body .vue-slick-img {
  height: 240px;
}
.prod-list .prod-list-row {
  margin-left: -10px;
  margin-right: -10px;
}
.prod-list .prod-list-col {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 43px;
}
.ann-select .custom-select {
  width: 140px;
  padding: 4px 18px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
  border-radius: 7px;
  box-shadow: 1px 2px 10px rgba(119, 119, 119, 0.1);
}
/* 페이지네이션 */
.prod-list .pagenation ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prod-list .pagenation ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  margin: 0 5px;
  padding: 0 10px;
  background-color: #fff;
  color: #6a707e;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 30px;
}
.prod-list .pagenation ul li a.active {
  color: #7f63f4;
  background-color: #f1eefd;
}

/* Col 5 */
.list-body.ex-col-5 .prod-list-row .prod-list-col {
  width: 20%;
  flex: unset;
}
</style>
