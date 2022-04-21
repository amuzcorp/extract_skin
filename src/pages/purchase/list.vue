<template>
  <div class="purchase-list">
    <b-container>
      <div class="list-header"><BoardAd /></div>

      <div class="list-body">
        <a
          href=""
          v-for="(item, i) in this.cateList"
          :key="i"
          :class="{ active: i == 0 }"
        >
          <CateNavItem :item="item" :index="i" />
        </a>
      </div>

      <div class="list-footer"></div>
    </b-container>
  </div>
</template>
<script>
import BoardAd from "@/components/ad/board-ad.vue";
import CateNavItem from "@/components/cate-nav.vue";

export default {
  name: "purchaseList",
  components: {
    BoardAd,
    CateNavItem,
  },
  data() {
    return {
      cateList: [
        "전체",
        "PDF 책",
        "보고서",
        "스타트업",
        "설계/도면",
        "디지털문구",
        "브금",
        "문제집/족보",
        "화보",
        "폰트",
        "프로그램",
        "디자인",
        "영상클립",
        "모델/초상권",
      ],
    };
  },
  methods: {},
};
</script>
<style>
.list-header {
  margin-bottom: 45px;
}
.list-body {
  padding: 0 24%;
}
.list-body a {
  display: inline-block;
  width: calc(100% / 7);
  margin-bottom: 26px;
  color: #707070;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  transition: all ease 0.35s;
}
.list-body a .img {
  position: relative;
  width: 54px;
  height: 54px;
  margin: auto;
}
.list-body a img {
  position: absolute;
  top: 0;
  left: 0;
  transition: all ease 0.35s;
}
.list-body a.active {
  color: #362189;
  font-weight: bold;
}
.list-body a:hover {
  color: #362189;
  font-weight: bold;
}
.list-body a.active span .leave,
.list-body a span.on .leave,
.list-body a span .over {
  opacity: 0;
}
.list-body a.active .over,
.list-body a span.on .over {
  opacity: 1;
}
.list-body {
  margin-bottom: 102px;
}
</style>
