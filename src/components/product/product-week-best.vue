<template>
  <div class="week-best-wrap">
    <h2 class="contents-tit mb-15">
      {{ title }}<b>{{ titleBold }}</b>
    </h2>
    <div class="vue-slick-track">
      <VueSlickCarousel
        v-bind="slideSettings[0]"
        v-if="this.itemList.length > 0"
      >
        <template
            v-for="(item, idx) in itemList"
        >
          <router-link
              :key="idx"
              :to="{ name: 'productShow', params : {'productId' : item.id }}"
              class="vue-slick-item"
          >
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
                  'url(' + require(`@/assets/images/${item.thumb}.png`) + ')',
              }"
              ></div>
            </div>
            <div class="vue-slick-info">
              <h2>{{ item.title }}</h2>
              <div class="info-detail">
                <h3>₩{{ item.price }}</h3>
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
          </router-link>
        </template>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "product-week-best",
  props: {
    title: {
      require: false,
      type: String,
      default: "",
    },
    titleBold: {
      require: false,
      type: String,
      default: "",
    },
    getSlideSettings: {
      require: false,
    },
    slidesToShow: {
      require: false,
      default: 5,
    },
    itemList: {
      require: true,
    },
  },
  components: {
    iconSlot,
    VueSlickCarousel,
  },
  data() {
    return {
      slideSettings: [],
      bestSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: this.slidesToShow,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      freeSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
    };
  },
  methods: {
    getSettings() {
      switch (this.getSlideSettings) {
        case "best":
          return this.slideSettings.push(this.bestSettings);
        case "free":
          return this.slideSettings.push(this.freeSettings);
      }
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>
<style>
.week-best-wrap .vue-slick-img {
  position: relative;
}
.week-best-wrap .hover-box {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: 11px 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  text-align: center;
  z-index: 10;
  opacity: 0;
  transition: all ease 0.35s;
}
.week-best-wrap .hover-box a {
  margin-right: 10px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
}
.week-best-wrap .hover-box a:last-child {
  margin-right: 0;
}
.week-best-wrap .hover-box a svg {
  margin-right: 2px;
  transition: all ease 0.35s;
}
.week-best-wrap .hover-box a:hover svg {
  transform: scale(1.1);
}
.hot-category-wrap {
  margin-bottom: 50px;
}
.vue-slick-item {
  display: block;
  height: 240px;
  border-radius: 12px;
}
.pop-free-wrap .vue-slick-item {
  height: 290px;
}
.vue-slick-info .info-detail,
.vue-slick-info .info-detail ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vue-slick-info h3 {
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
}
.vue-slick-info .info-detail ul li {
  position: relative;
  padding: 0 5px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.vue-slick-info .info-detail ul li::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background-color: #6a707e;
}
.vue-slick-info .info-detail ul li:last-child {
  padding-right: 0;
}
.vue-slick-info .info-detail ul li:last-child::after {
  display: none;
}
.vue-slick-item:hover .img {
  transform: scale(1.1);
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
.week-best-wrap,
.main-ad-wrap {
  margin-bottom: 81px;
}
</style>
