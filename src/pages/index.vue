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
        <b-row class="align-items-center">
          <b-col cols="6">
            <div class="visual-category-inner">
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="visual-category-inner">
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="visual-category-inner">
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
              <a href="#">d</a>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="visual-category-inner">
              <a href="#">d</a>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>

    <b-row class="align-items-center">
      <b-col cols="6"> </b-col>
    </b-row>
  </b-container>
</template>
<script>
import visualSlidBg from "@/assets/images/m_s_01.png";
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "homeSkin",
  components: { iconSlot },
  data() {
    return {
      visualSlidBg: visualSlidBg,
      isInterval: 0,
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
  },
};
</script>
<style>
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
</style>
