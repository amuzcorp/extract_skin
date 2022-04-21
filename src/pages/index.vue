<template>
  <b-container>
    <div class="home-wrap">
      <!-- 슬라이드 -->
      <div class="main-visual">
        <b-carousel
          id="visual-carousel"
          slide
          controls
          indicators
          :interval="isInterval"
        >
          <b-carousel-slide class="slide-item" :img-src="visualSlidBg">
            <div class="slide-info">
              <h2>신규 상품등록 쿠폰 <b>이벤트</b></h2>
              <h3>엑기스에서<br />드리는 수수료 쿠폰!</h3>
              <a href="#"
                >지금 상품 등록하기
                <icon-slot
                  :iconName="'BchvronRight'"
                  :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                  :svgHeight="16"
                  :svgWidth="16"
                  :iconColor="'#fff'"
                />
              </a>
            </div>
          </b-carousel-slide>
          <b-carousel-slide class="slide-item" :img-src="visualSlidBg">
            <div class="slide-info">
              <h2>신규 상품등록 쿠폰 <b>이벤트</b></h2>
              <h3>엑기스에서<br />드리는 수수료 쿠폰!</h3>
              <a href="#"
                >지금 상품 등록하기
                <icon-slot
                  :iconName="'BchvronRight'"
                  :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                  :svgHeight="16"
                  :svgWidth="16"
                  :iconColor="'#fff'"
                />
              </a>
            </div>
          </b-carousel-slide>
          <b-carousel-slide class="slide-item" :img-src="visualSlidBg">
            <div class="slide-info">
              <h2>신규 상품등록 쿠폰 <b>이벤트</b></h2>
              <h3>엑기스에서<br />드리는 수수료 쿠폰!</h3>
              <a href="#"
                >지금 상품 등록하기
                <icon-slot
                  :iconName="'BchvronRight'"
                  :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                  :svgHeight="16"
                  :svgWidth="16"
                  :iconColor="'#fff'"
                />
              </a>
            </div>
          </b-carousel-slide>
          <b-carousel-slide class="slide-item" :img-src="visualSlidBg">
            <div class="slide-info">
              <h2>신규 상품등록 쿠폰 <b>이벤트</b></h2>
              <h3>엑기스에서<br />드리는 수수료 쿠폰!</h3>
              <a href="#"
                >지금 상품 등록하기
                <icon-slot
                  :iconName="'BchvronRight'"
                  :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                  :svgHeight="16"
                  :svgWidth="16"
                  :iconColor="'#fff'"
                />
              </a>
            </div>
          </b-carousel-slide>
        </b-carousel>

        <a
          class="controls"
          @click="setInterval()"
          :class="{ stop: this.isInterval == 0 }"
        >
          <div class="controls-inner">
            <icon-slot
              :iconName="'playFill'"
              :svgHeight="20"
              :svgWidth="20"
              :iconColor="'#fff'"
            />
            <icon-slot
              :iconName="'stopFill'"
              :svgHeight="20"
              :svgWidth="20"
              :iconColor="'#fff'"
            />
          </div>
        </a>
      </div>

      <!-- 카테고리 -->
      <div class="visual-category">
        <div class="visual-category-inner">
          <b-row>
            <b-col cols="6" class="p-0">
              <div class="visual-category-inner">
                <router-link
                  :to="{
                    name: 'productList',
                    params: { categoryId: 'pdfBook' },
                  }"
                  :bestProdList="this.bestProdList"
                >
                  <img :src="pdfBook" />
                  <span>PDF 책</span>
                </router-link>
                <a href="#">
                  <img :src="report" />
                  <span>보고서</span>
                </a>
                <a href="#">
                  <img :src="start" />
                  <span>스타트업</span>
                </a>
                <a href="#">
                  <img :src="drawing" />
                  <span>설계/도면</span>
                </a>
              </div>
            </b-col>
            <b-col cols="6" class="p-0">
              <div class="visual-category-inner">
                <a href="#">
                  <img :src="diary" />
                  <span>디지털문구</span>
                </a>
                <a href="#">
                  <img :src="music" />
                  <span>브금</span>
                </a>
                <a href="#">
                  <img :src="model" />
                  <span>모델/초상화</span>
                </a>
                <a href="#">
                  <img :src="workbook" />
                  <span>문제집/족보</span>
                </a>
              </div> </b-col
            ><b-col cols="6" class="p-0">
              <div class="visual-category-inner">
                <a href="#">
                  <img :src="pictorial" />
                  <span>화보</span>
                </a>
                <a href="#">
                  <img :src="font" />
                  <span>폰트</span>
                </a>
                <a href="#">
                  <img :src="program" />
                  <span>프로그램</span>
                </a>
                <a href="#">
                  <img :src="design" />
                  <span>디자인</span>
                </a>
              </div> </b-col
            ><b-col cols="6" class="p-0">
              <div class="visual-category-inner">
                <a href="#">
                  <img :src="video" />
                  <span>영상클립</span>
                </a>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>

      <!-- 실시간 구매공고 -->
      <div class="latest-post-wrap">
        <h2 class="contents-tit mb-15">실시간 구매공고</h2>
        <b-row>
          <b-col cols="6">
            <div class="purchase-notice-inner">
              <ul>
                <li>
                  <a href="#">
                    <img :src="start" />
                    기획 발표 PPT 템플릿 사봅니닷!!
                  </a>
                  <span class="price">₩ 25,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="report" />
                    근태,급여계산 가능한 엑셀파일 구해요.
                  </a>
                  <span class="price">₩ 22,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="pdfBook" />
                    분기 매출 보고서 양식 사봐요 연락부탁드립니다.
                  </a>
                  <span class="price">₩ 20,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="drawing" />
                    졸업작품할때 쓸 괜찮은 PPT 양식 있으신분 !?
                  </a>
                  <span class="price">₩ 15,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="design" />
                    분기 매출 보고서 양식 사봐요 연락부탁드립니다.
                  </a>
                  <span class="price">₩ 13,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="design" />
                    분기 매출 보고서 양식 사봐요 연락부탁드립니다.
                  </a>
                  <span class="price">₩ 11,000</span>
                </li>
                <li>
                  <a href="#">
                    <img :src="design" />
                    분기 매출 보고서 양식 사봐요 연락부탁드립니다.
                  </a>
                  <span class="price">₩ 11,000</span>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="purchase-notice-total-inner">
              <div class="purchase-notice-total-info">
                <h2>총 구매공고건수</h2>
                <h3><span>1,124</span>건</h3>
                <div class="purchase-notice-total-area">
                  <a href="#">
                    구매 공고 올리기
                    <icon-slot
                      :iconName="'ButtonchvronRight'"
                      :svgHeight="16"
                      :svgWidth="16"
                      :iconColor="'#fff'"
                    />
                  </a>
                  <a href="#">
                    공고 게시판 바로가기
                    <icon-slot
                      :iconName="'ButtonchvronRight'"
                      :svgHeight="16"
                      :svgWidth="16"
                      :iconColor="'#fff'"
                    />
                  </a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <!-- 주간 베스트 상품 -->
      <ProdWeekBest
        :title="'엑기스 주간'"
        :titleBold="' BEST 10'"
        :itemList="this.bestProdList"
        :getSlideSettings="'best'"
      />

      <!-- 엠디 탑 상품 -->
      <ProdWeekBest
        :title="'MD PICK Top 10'"
        :itemList="this.mdProdList"
        :getSlideSettings="'best'"
      />

      <!-- 인기 무료 상품 -->
      <ProdWeekBest
        :title="'인기 무료 상품'"
        :itemList="this.freeProdList"
        :getSlideSettings="'free'"
      />

      <!-- 광고 배너 -->
      <div class="main-ad-wrap">
        <div class="ad-slick-track">
          <VueSlickCarousel v-bind="adSettings">
            <div class="vue-slick-item">
              <div
                class="vue-slick-img"
                :style="'background-image: url(' + adSlideBg + ')'"
              ></div>
              <div class="vue-slick-info ad-slick-info">
                <h2>
                  새로 업데이트 된 파일이 있어요!<br />
                  우리..둘러볼까요?
                </h2>
                <a href=""
                  >PPT 바로가기
                  <icon-slot
                    :iconName="'BchvronRight'"
                    :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#fff'"
                  />
                </a>
              </div>
            </div>
            <div class="vue-slick-item">
              <div
                class="vue-slick-img"
                :style="'background-image: url(' + adSlideBg + ')'"
              ></div>
              <div class="vue-slick-info ad-slick-info">
                <h2>
                  새로 업데이트 된 파일이 있어요!<br />
                  우리..둘러볼까요?
                </h2>
                <a href=""
                  >PPT 바로가기
                  <icon-slot
                    :iconName="'BchvronRight'"
                    :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#fff'"
                  />
                </a>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <!-- 핫 카테고리 상품 -->
      <div class="week-best-wrap hot-category-wrap">
        <h2 class="contents-tit mb-15">핫한 카테고리</h2>
        <div class="vue-slick-track">
          <VueSlickCarousel v-bind="bestSettings" v-if="hotProdList.length > 0">
            <a
              href="#"
              class="vue-slick-item"
              v-for="(item, i) in this.hotProdList"
              :key="i"
            >
              <div
                class="vue-slick-img"
                v-bind:style="{
                  backgroundImage:
                    'url(' + require(`@/assets/images/${item.thumb}.png`) + ')',
                }"
              ></div>
              <div class="vue-slick-info">
                <h2>{{ item.title }}</h2>
              </div>
            </a>
          </VueSlickCarousel>
        </div>
      </div>

      <!-- 안내 배너 -->
      <div class="main-info-wrap">
        <b-row>
          <b-col cols="6">
            <div
              class="main-info-col"
              :style="'background-image: url(' + adInfoBg01 + ')'"
            >
              <div class="main-info-txt">
                <h2>숨어있던 <b>나의 파일</b>들을<br />팔아보세요!</h2>
                <a href="#">
                  바로가기
                  <icon-slot
                    :iconName="'BchvronRight'"
                    :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                    :svgHeight="18"
                    :svgWidth="16"
                    :iconColor="'#fff'"
                  />
                </a>
              </div>
            </div>
          </b-col>
          <b-col cols="6">
            <div
              class="main-info-col file-info"
              :style="'background-image: url(' + adInfoBg02 + ')'"
            >
              <div class="main-info-txt">
                <h2>
                  원하시는 <b>파일이 없나요?</b><br />삽니다 공고를 내보세요!
                </h2>
                <a href="#">
                  바로가기
                  <icon-slot
                    :iconName="'BchvronRight'"
                    :iconClass="'bi' + ' ' + 'bi-chevron-right'"
                    :svgHeight="18"
                    :svgWidth="16"
                    :iconColor="'#333'"
                  />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>
<script>
import cateList from "@/api/productCategory.json";
import prodList from "@/api/product.json";
import visualSlidBg from "@/assets/images/m_s_01.png";
import adSlideBg from "@/assets/images/ad_01.png";
import adInfoBg01 from "@/assets/images/ad_02.png";
import adInfoBg02 from "@/assets/images/ad_03.png";
// 카테고리
import pdfBook from "@/assets/images/img_pdf_book.png";
import report from "@/assets/images/img_report.png";
import start from "@/assets/images/img_start.png";
import drawing from "@/assets/images/img_drawing.png";
import diary from "@/assets/images/img_diary.png";
import music from "@/assets/images/img_music.png";
import model from "@/assets/images/img_model.png";
import workbook from "@/assets/images/img_workbook.png";
import pictorial from "@/assets/images/img_pictorial.png";
import font from "@/assets/images/img_font.png";
import program from "@/assets/images/img_program.png";
import design from "@/assets/images/img_design.png";
import video from "@/assets/images/img_video.png";

import iconSlot from "@/components/icon-slot.vue";

import VueSlickCarousel from "vue-slick-carousel";
import ProdWeekBest from "@/components/product/product-week-best.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "homeSkin",
  props: {},
  components: {
    iconSlot,
    VueSlickCarousel,
    ProdWeekBest,
  },
  data() {
    return {
      cateList,
      prodList,
      visualSlidBg: visualSlidBg,
      adSlideBg: adSlideBg,
      adInfoBg01: adInfoBg01,
      adInfoBg02: adInfoBg02,
      pdfBook: pdfBook,
      report: report,
      start: start,
      drawing: drawing,
      diary: diary,
      music: music,
      model: model,
      workbook: workbook,
      pictorial: pictorial,
      font: font,
      program: program,
      design: design,
      video: video,
      isInterval: 0,
      bestSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      adSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },

      bestProdList: [],
      mdProdList: [],
      freeProdList: [],
      hotProdList: [],
    };
  },
  methods: {
    setInterval() {
      if (this.isInterval == 0) {
        this.isInterval = 4000;
      } else {
        this.isInterval = 0;
      }
    },
    bestProd() {
      for (var i = 0; i < this.prodList.length; i++) {
        if (this.prodList[i]["best"] == true) {
          this.bestProdList.push(this.prodList[i]);
        }
        if (this.prodList[i]["mdFick"] == true) {
          this.mdProdList.push(this.prodList[i]);
        }
        if (this.prodList[i]["popFree"] == true) {
          this.freeProdList.push(this.prodList[i]);
        }
        if (this.prodList[i]["hot"] == true) {
          this.hotProdList.push(this.prodList[i]);
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
.vue-slick-item:hover .hover-box {
  opacity: 1;
}
.main-visual {
  position: relative;
  margin-bottom: 66px;
}
.slide-item {
  height: 360px;
  border-radius: 12px;
}
.main-visual .carousel-indicators {
  position: absolute;
  bottom: 36px;
  left: 0;
  padding-left: 116px;
  justify-content: start;
}
.main-visual .carousel-indicators li {
  width: 10px;
  height: 10px;
  margin-right: 7px;
  border: 1px solid #fff;
  border-radius: 30px;
}
.main-visual .carousel-indicators li.active {
  background-color: #fff;
}
.main-visual .controls {
  position: absolute;
  bottom: 43px;
  left: 90px;
  width: 10px;
  z-index: 10;
}
.main-visual .controls:hover {
  cursor: pointer;
}
.main-visual .controls .controls-inner {
  position: relative;
}
.main-visual .controls .controls-inner svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all ease 0.35s;
}
.main-visual .controls .controls-inner .stopFill {
  opacity: 1;
}
.main-visual .controls.stop .controls-inner .stopFill {
  opacity: 0;
}
.main-visual .controls.stop .controls-inner .playFill {
  opacity: 1;
}
.main-visual .sr-only {
  display: none;
}
.main-visual .carousel-control-next,
.main-visual .carousel-control-prev {
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
}
.main-visual .carousel-control-next {
  right: 20px;
}
.main-visual .carousel-control-prev {
  left: 20px;
}
.main-visual .slide-info {
  position: absolute;
  left: 84px;
  top: 50%;
  transform: translateY(-50%);
  text-align: left;
}
.main-visual .carousel-caption {
  position: static;
}
.main-visual .carousel-caption h2 {
  margin-bottom: 5px;
  font-size: 1.4rem;
  font-weight: 400;
}
.main-visual .carousel-caption h3 {
  margin-bottom: 25px;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.1;
}
.main-visual .carousel-caption a {
  display: inline-block;
  padding: 11px 22px;
  background-color: #45458d;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
}
.main-visual .carousel-caption a .BchvronRight {
  margin-left: 10px;
}
.visual-category {
  margin-bottom: 70px;
}
.visual-category-inner a {
  display: inline-block;
  width: calc(100% / 4);
  padding: 0 15px 37px 15px;
  text-align: center;
}
.visual-category-inner img {
  width: 63px;
  margin-bottom: 5px;
}
.visual-category-inner span {
  display: block;
  width: 100%;
  padding: 6px 0;
  color: #202427;
  font-size: 1rem;
  border-radius: 30px;
  border: 1px solid #ededed;
  transition: all ease 0.35s;
  box-shadow: 2px 3px 10px rgba(119, 119, 119, 0.1);
}
.visual-category-inner a:hover span {
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.latest-post-wrap {
  margin-bottom: 78px;
}
.purchase-notice-inner {
  padding: 36px 24px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
}
.purchase-notice-inner ul {
  height: 258px;
  padding-right: 15px;
  overflow-y: scroll;
}
.purchase-notice-inner ul::-webkit-scrollbar {
  width: 5px;
}
.purchase-notice-inner ul::-webkit-scrollbar-thumb {
  background: #d5d5d5;
  border-radius: 30px;
}
.purchase-notice-inner ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.35s;
}
.purchase-notice-inner ul li:hover {
  background-color: #e9ecef;
}
.purchase-notice-inner ul li .price,
.purchase-notice-inner ul li a {
  color: #202427;
  font-size: 1rem;
  font-weight: 400;
}
.purchase-notice-inner ul li .price {
  min-width: 80px;
  margin-left: 10px;
  text-align: right;
}
.purchase-notice-inner ul li img {
  width: 31px;
  margin-right: 12px;
}
.purchase-notice-inner ul li a {
  display: flex;
  align-items: center;
  padding: 6px 0;
}
.purchase-notice-total-inner {
  position: relative;
  height: 100%;
  padding: 42px 36px;
  background: 100% 100% / 56% no-repeat url("@/assets/images/m_02.png");
  background-color: #f9f9f9;
  border-radius: 12px;
  text-align: center;
}
.purchase-notice-total-info {
  position: absolute;
  top: 50%;
  left: 36px;
  transform: translateY(-50%);
  color: #fff;
}
.purchase-notice-total-info h2 {
  color: #121212;
  font-size: 1rem;
  font-weight: 500;
}
.purchase-notice-total-info h3 {
  margin-bottom: 18px;
  color: #121212;
  font-size: 1.9rem;
  font-weight: 500;
}
.purchase-notice-total-info h3 span {
  font-size: 3rem;
  font-weight: 600;
}
.purchase-notice-total-area a {
  display: block;
  width: 100%;
  padding: 12px 37px;
  background-color: #8282c8;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 6px;
}
.purchase-notice-total-area a svg {
  margin-left: 10px;
}
.purchase-notice-total-area a:first-child {
  margin-bottom: 10px;
}
.week-best-wrap,
.main-ad-wrap {
  margin-bottom: 81px;
}

.main-ad-wrap .vue-slick-item {
  position: relative;
  height: 285px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
}
.hot-category-wrap .vue-slick-item {
  position: relative;
  margin: 0;
  overflow: hidden;
}
.hot-category-wrap .vue-slick-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #fff, rgba(0, 0, 0, 0.6));
  opacity: 0.4;
  transition: all ease 0.35s;
}
.hot-category-wrap .vue-slick-item:hover::after {
  background: linear-gradient(180deg, #fff, rgba(0, 0, 0, 1));
}
.hot-category-wrap .vue-slick-item:hover .vue-slick-img {
  transform: scale(1.1);
}
.hot-category-wrap .vue-slick-img {
  margin: 0;
  transition: all ease 0.35s;
}
.week-best-wrap .slick-slide {
  padding: 0 10px;
}
.vue-slick-track .slick-arrow {
  top: auto;
  bottom: 100%;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  border: 1px solid #ededed;
}
.ad-slick-track .slick-arrow {
  width: 32px;
  height: 32px;
  z-index: 10;
}
.ad-slick-track .slick-prev:before,
.ad-slick-track .slick-next:before {
  font-size: 32px;
  color: #dedede;
}
.ad-slick-track .slick-next {
  right: 15px;
}
.ad-slick-track .slick-prev {
  left: 15px;
}
.vue-slick-track .slick-next {
  right: 10px;
  background: center / 70% no-repeat url("@/assets/images/chervon_next.png");
}
.vue-slick-track .slick-prev {
  right: 43px;
  left: auto;
  background: center / 70% no-repeat url("@/assets/images/chervon_prev.png");
}
.vue-slick-track .slick-next::before,
.vue-slick-track .slick-prev::before {
  display: none;
}
.ad-slick-info {
  position: absolute;
  top: 50%;
  left: 85px;
  transform: translateY(-50%);
}
.vue-slick-img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;
}
.vue-slick-img .img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all ease 0.35s;
}
.main-ad-wrap .vue-slick-img {
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.vue-slick-info h2 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}
.ad-slick-info h2 {
  margin-bottom: 13px;
  color: #121212;
  font-size: 1.9rem;
  font-weight: 400;
  line-height: 1.4;
}
.ad-slick-info a {
  display: inline-block;
  padding: 10px 30px;
  background-color: #45458d;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
}
.ad-slick-info a:hover {
  color: #fff;
}
.ad-slick-info svg {
  margin-left: 10px;
}
.hot-category-wrap .vue-slick-info {
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 100%;
  z-index: 2;
}
.hot-category-wrap .vue-slick-info h2 {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}
.main-info-wrap {
  margin-bottom: 95px;
}
.main-info-col {
  position: relative;
  height: 165px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
}
.main-info-txt {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  color: #fff;
}
.main-info-txt h2 {
  margin-bottom: 27px;
  font-size: 1.3rem;
  font-weight: 400;
}
.file-info .main-info-txt {
  color: #333;
}
.file-info .main-info-txt a {
  color: #333;
}
.main-info-txt a {
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
}
.main-info-txt a svg {
  margin-left: 2px;
}
</style>
