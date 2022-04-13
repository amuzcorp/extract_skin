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
        default:
          return "chvronRight";
      }
    },
  },
};
</script>
<style></style>
