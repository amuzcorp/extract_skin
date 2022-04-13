<template>
  <a
    @mouseover="
      {
        onOver(), navAddStyle();
      }
    "
    @mouseleave="
      {
        onLeave(), navRemoveStyle();
      }
    "
    class=""
  >
    <b-nav-item-dropdown ref="dropdown">
      <template #button-content>
        <icon-slot
          :iconClass="'main-nav-item'"
          :iconName="'pdfBook'"
          :svgHeight="20"
          :svgWidth="20"
          :iconColor="'#424a5d'"
        />
        PDF책
        <icon-slot :iconName="'chvronRight'" />
      </template>
      <b-nav-item href="#" active>노하우</b-nav-item>
      <b-nav-item href="#">재테크</b-nav-item>
      <b-nav-item href="#">시집</b-nav-item>
      <b-nav-item href="#">자소서</b-nav-item>
      <b-nav-item href="#">템플릿</b-nav-item>
    </b-nav-item-dropdown>
  </a>
</template>
<script>
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "sub-nav-item",
  props: {
    navItemList: { require: false, type: Array },
  },
  components: {
    iconSlot,
  },
  methods: {
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
    navAddStyle() {
      document.getElementById(
        "navbar-toggle-collapse"
      ).style.borderTopRightRadius = "0";
      document.getElementById(
        "navbar-toggle-collapse"
      ).style.borderBottomRightRadius = "0";
    },
    navRemoveStyle() {
      document.getElementById(
        "navbar-toggle-collapse"
      ).style.borderTopRightRadius = "12px";
      document.getElementById(
        "navbar-toggle-collapse"
      ).style.borderBottomRightRadius = "12px";
    },
  },
};
</script>
<style></style>
