/* eslint-disable vue/no-unused-components */
<template>
  <svg
    :class="iconName + ' ' + iconClass"
    xmlns="http://www.w3.org/2000/svg"
    :width="svgWidth"
    :height="svgHeight"
    :viewBox="getViewBoxSize"
  >
    <component :is="witchStep" :iconColor="iconColor"></component>
  </svg>
</template>
<script>
import chvronRight from "@/components/icons/chvron-right.vue";
import BchvronRight from "@/components/icons/b-chvron-right.vue";
import ButtonchvronRight from "@/components/icons/button-chvron-right.vue";
import search from "@/components/icons/search.vue";
import chvronDown from "@/components/icons/chvron-down.vue";
import buy from "@/components/icons/mypage-buy.vue";
import sell from "@/components/icons/mypage-sell.vue";
import profile from "@/components/icons/mypage-profile.vue";
import partner from "@/components/icons/mypage-partner.vue";
import client from "@/components/icons/mypage-client.vue";
import logout from "@/components/icons/mypage-logout.vue";
import pdfBook from "@/components/icons/nav-pdf-book.vue";
import report from "@/components/icons/nav-report.vue";
import start from "@/components/icons/nav-start.vue";
import drawing from "@/components/icons/nav-drawing.vue";
import phrases from "@/components/icons/nav-phrases.vue";
import workbook from "@/components/icons/nav-workbook.vue";
import pictorial from "@/components/icons/nav-pictorial.vue";
import font from "@/components/icons/nav-font.vue";
import program from "@/components/icons/nav-program.vue";
import design from "@/components/icons/nav-design.vue";
import music from "@/components/icons/nav-music.vue";
import videoClip from "@/components/icons/nav-video.vue";
import model from "@/components/icons/nav-model.vue";
import telephone from "@/components/icons/telephone.vue";
import envelope from "@/components/icons/envelope.vue";
import playFill from "@/components/icons/play-fill.vue";
import stopFill from "@/components/icons/stop-fill.vue";
import floatTop from "@/components/icons/float-top.vue";
import announcement from "@/components/icons/prod-announcement.vue";
import handBest from "@/components/icons/hand-best.vue";
import star from "@/components/icons/star.vue";
// mypage menu icon
import myIconBuy1 from "@/components/icons/myPageMenu/my-icon-buy-1.vue";
import myIconBuy2 from "@/components/icons/myPageMenu/my-icon-buy-2.vue";
import myIconBuy3 from "@/components/icons/myPageMenu/my-icon-buy-3.vue";
import myIconBuy4 from "@/components/icons/myPageMenu/my-icon-buy-4.vue";
import myIconBuy5 from "@/components/icons/myPageMenu/my-icon-buy-5.vue";
import myIconBuy6 from "@/components/icons/myPageMenu/my-icon-buy-6.vue";
import myIconBuy7 from "@/components/icons/myPageMenu/my-icon-buy-7.vue";
import myIconPartner1 from "@/components/icons/myPageMenu/my-icon-partner-1.vue";
import myIconSell1 from "@/components/icons/myPageMenu/my-icon-sell-1.vue";
import myIconSell2 from "@/components/icons/myPageMenu/my-icon-sell-2.vue";
import myIconSell3 from "@/components/icons/myPageMenu/my-icon-sell-3.vue";
import myIconSell4 from "@/components/icons/myPageMenu/my-icon-sell-4.vue";
import myIconSell5 from "@/components/icons/myPageMenu/my-icon-sell-5.vue";
import myIconInfo1 from "@/components/icons/myPageMenu/my-icon-info-1.vue";
import myIconInfo2 from "@/components/icons/myPageMenu/my-icon-info-2.vue";
import myIconInfo3 from "@/components/icons/myPageMenu/my-icon-info-3.vue";
import myIconInfo4 from "@/components/icons/myPageMenu/my-icon-info-4.vue";
import myIconLogout1 from "@/components/icons/myPageMenu/my-icon-logout-1.vue";

export default {
  name: "iconSlot",
  props: {
    iconName: { require: false, type: String, default: "chvronRight" },
    iconClass: { require: false, type: String, default: "sub-item-icon" },
    svgWidth: { require: false, type: Number, default: 20 },
    svgHeight: { require: false, type: Number, default: 20 },
    iconColor: { require: false, type: String, default: "rgb(74,99,138)" },
  },
  components: {
    chvronRight,
    BchvronRight,
    ButtonchvronRight,
    search,
    chvronDown,
    buy,
    sell,
    profile,
    partner,
    client,
    logout,
    pdfBook,
    report,
    start,
    drawing,
    phrases,
    workbook,
    pictorial,
    font,
    program,
    design,
    music,
    videoClip,
    model,
    telephone,
    envelope,
    playFill,
    stopFill,
    floatTop,
    announcement,
    handBest,
    star,
    // My Page Menu
    myIconBuy1,
    myIconBuy2,
    myIconBuy3,
    myIconBuy4,
    myIconBuy5,
    myIconBuy6,
    myIconBuy7,
    myIconPartner1,
    myIconSell1,
    myIconSell2,
    myIconSell3,
    myIconSell4,
    myIconSell5,
    myIconInfo1,
    myIconInfo2,
    myIconInfo3,
    myIconInfo4,
    myIconLogout1,
  },
  computed: {
    getViewBoxSize() {
      let leftPosition = (this.svgWidth / 2) * -1;
      let topPosition = (this.svgHeight / 2) * -1;
      let leftSize = this.svgWidth * 1.25;
      let topSize = this.svgHeight * 1.25;

      if (this.iconName == "chvronRight") {
        return (
          leftPosition + " " + topPosition + " " + leftSize + " " + topSize
        );
      } else {
        return 0 + " " + 0 + " " + this.svgWidth + " " + this.svgHeight;
      }
    },
    witchStep() {
      switch (this.iconName) {
        case "chvronRight":
          return "chvronRight";
        case "BchvronRight":
          return "BchvronRight";
        case "ButtonchvronRight":
          return "ButtonchvronRight";
        case "search":
          return "search";
        case "chvronDown":
          return "chvronDown";
        case "buy":
          return "buy";
        case "sell":
          return "sell";
        case "profile":
          return "profile";
        case "partner":
          return "partner";
        case "client":
          return "client";
        case "logout":
          return "logout";
        case "pdfBook":
          return "pdfBook";
        case "report":
          return "report";
        case "start":
          return "start";
        case "drawing":
          return "drawing";
        case "phrases":
          return "phrases";
        case "workbook":
          return "workbook";
        case "pictorial":
          return "pictorial";
        case "font":
          return "font";
        case "program":
          return "program";
        case "design":
          return "design";
        case "music":
          return "music";
        case "videoClip":
          return "videoClip";
        case "model":
          return "model";
        case "telephone":
          return "telephone";
        case "envelope":
          return "envelope";
        case "playFill":
          return "playFill";
        case "stopFill":
          return "stopFill";
        case "floatTop":
          return "floatTop";
        case "announcement":
          return "announcement";
        case "handBest":
          return "handBest";
        case "star":
          return "star";
        case "myIconBuy1":
          return "myIconBuy1";
        case "myIconBuy2":
          return "myIconBuy2";
        case "myIconBuy3":
          return "myIconBuy3";
        case "myIconBuy4":
          return "myIconBuy4";
        case "myIconBuy5":
          return "myIconBuy5";
        case "myIconBuy6":
          return "myIconBuy6";
        case "myIconBuy7":
          return "myIconBuy7";
        case "myIconPartner1":
          return "myIconPartner1";
        case "myIconSell1":
          return "myIconSell1";
        case "myIconSell2":
          return "myIconSell2";
        case "myIconSell3":
          return "myIconSell3";
        case "myIconSell4":
          return "myIconSell4";
        case "myIconSell5":
          return "myIconSell5";
        case "myIconInfo1":
          return "myIconInfo1";
        case "myIconInfo2":
          return "myIconInfo2";
        case "myIconInfo3":
          return "myIconInfo3";
        case "myIconInfo4":
          return "myIconInfo4";
        case "myIconLogout1":
          return "myIconLogout1";
        default:
          return "chvronRight";
      }
    },
  },
  mounted() {},
};
</script>
<style></style>
