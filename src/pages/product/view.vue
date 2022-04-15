<template>
  <div class="prod-view">
    <b-container>
      <b-row>
        <b-col cols="5">
          <div class="img-col">
            <VueSlickCarousel
              ref="c1"
              :asNavFor="c2"
              :focusOnSelect="true"
              class="main-slider-con"
            >
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_02 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_03 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_04 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_05 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_06 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>
            <VueSlickCarousel
              ref="c2"
              :asNavFor="c1"
              :slidesToShow="5"
              :focusOnSelect="true"
              :arrows="false"
            >
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_01 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_02 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_03 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_04 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_05 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_06 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="info-col">
            <div class="info-header mb-10">
              <h1>디자인</h1>
              <ul>
                <li>
                  <button type="button" class="war-btn box-shadow def-btn">
                    <img :src="warning" />
                  </button>
                </li>
                <li>
                  <button type="button" class="like-btn box-shadow def-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#6E3CBC"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                    235
                  </button>
                </li>
              </ul>
            </div>
            <div class="info-body">
              <h2>
                사람, 동물, 건물 등 직접 그린 일러스트<br />모음집 괜찮은 가격에
                팝니다.
              </h2>
              <div class="star-con"></div>
              <h3>₩ 25,000</h3>
              <ul class="tag-con">
                <li><a href="" class="box-shadow">일러스트</a></li>
                <li><a href="" class="box-shadow">JPG</a></li>
                <li><a href="" class="box-shadow">양식</a></li>
                <li><a href="" class="box-shadow">공개</a></li>
              </ul>
            </div>
            <div class="info-bottom">
              <ul class="care-txt">
                <li>구매전 바이러스 검사를 꼭 하시길 권장합니다.</li>
                <li>
                  파일 서비스는 자료 제공 형태의 서비스이므로, 수령하신 이후에는
                  환불이 불가합니다.
                </li>
                <li>재다운로드는 30일로 제한합니다.</li>
              </ul>
              <div class="btn-area">
                <b-button class="buy-btn">구매하기</b-button>
                <b-button class="mk-link-btn">판매 링크 생성하기</b-button>
                <b-button class="like-btn"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="#121212"
                    class="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                    /></svg
                ></b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <!-- <div>
    <a @click="$router.go(-1)" ref="back_link">
      <h2>뒤로가기</h2>
    </a>
    <h2>Product View</h2>
  </div> -->
  <!-- <b-row class="align-items-center">
            <b-col cols="6"></b-col>
          </b-row>  -->
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import prodView_01 from "@/assets/images/prod_view_01.png";
import prodView_02 from "@/assets/images/prod_view_02.png";
import prodView_03 from "@/assets/images/prod_view_03.png";
import prodView_04 from "@/assets/images/prod_view_04.png";
import prodView_05 from "@/assets/images/prod_view_05.png";
import prodView_06 from "@/assets/images/prod_view_06.png";
import warning from "@/assets/images/icon_warning.png";
import check from "@/assets/images/icon_check.png";

export default {
  name: "productView",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      prodView_01: prodView_01,
      prodView_02: prodView_02,
      prodView_03: prodView_03,
      prodView_04: prodView_04,
      prodView_05: prodView_05,
      prodView_06: prodView_06,
      warning: warning,
      check: check,
    };
  },
  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
  },
};
</script>
<style>
.info-col {
  position: relative;
  height: 100%;
}
.info-header {
  justify-content: space-between;
  align-items: center;
}
.info-header h1 {
  color: #6a707e;
  font-size: 1.1rem;
  font-weight: 500;
}
.info-header ul .war-btn,
.info-header ul .like-btn {
  min-width: 43px;
  height: 36px;
}
.info-header ul .war-btn img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  margin: auto;
}
.info-header ul .like-btn {
  margin-left: 10px;
}
.info-header ul,
.info-header,
.prod-view-inner {
  display: flex;
}
.info-body h2 {
  margin-bottom: 20px;
  color: #333333;
  font-size: 1.9rem;
  font-weight: bold;
}
.info-body .tag-con {
  display: flex;
}
.info-body .tag-con li a {
  display: block;
  min-width: 65px;
  margin-right: 10px;
  padding: 4px 19px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  text-align: center;
  transition: all ease 0.35s;
}
.info-body .tag-con li a:hover {
  border-color: #6e3cbc;
}
.info-body h3 {
  margin-bottom: 22px;
  color: #333;
  font-size: 1.8rem;
  font-weight: bold;
}
.info-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.info-bottom .care-txt {
  margin-bottom: 90px;
}
.info-bottom .care-txt li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 31px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.info-bottom .care-txt li::before {
  content: "";
  position: absolute;
  left: 0;
  width: 21px;
  height: 100%;
  background: center / contain no-repeat url("@/assets/images/icon_check.png");
}
.info-bottom .buy-btn,
.info-bottom .mk-link-btn {
  width: 220px;
  margin-right: 10px;
  padding: 14px 0;
  background-color: #300474;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid #300474;
  border-radius: 6px;
}
.info-bottom .mk-link-btn {
  background-color: #fff;
  color: #333333;
  border: 1px solid #d5d5d5;
}
.info-bottom .like-btn {
  width: 56px;
  height: 56px;
  padding: 14px 0;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #d5d5d5;
}
/*  */
.main-slider-con .slick-arrow {
  z-index: 10;
}
.main-slider-con .slick-next {
  right: 30px;
}
.main-slider-con .slick-prev {
  left: 20px;
}
.slick-prev:before,
.slick-next:before {
  font-size: 36px;
}
.prod-view .main-slider-item {
  height: 510px;
}
.prod-view .nav-slider-item {
  height: 94px;
}
.prod-view .slick-slider:last-child {
  margin-top: 5px;
  margin-left: -5px;
  margin-right: -5px;
}
.prod-view .nav-slider-item {
  padding-left: 5px;
  padding-right: 5px;
}
.prod-view .nav-slider-item .img,
.prod-view .main-slider-item .img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
}
</style>
