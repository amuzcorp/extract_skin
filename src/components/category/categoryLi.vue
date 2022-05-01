<template>
  <span
    :class="{
      'has-children': cate.children.length > 0,
      show: isShow
    }"
    @click="isClickNav()"
  >
    <router-link
      :to="{
        name: 'productList',
        params: { categoryId: cate.id },
      }"
      class="nav-item"
      :class="{ 'has-children': cate.children.length > 0 }"
    >
      <icon-slot
        :iconClass="'main-nav-item'"
        :iconName="cate.thumbnail"
        :svgHeight="20"
        :svgWidth="20"
        :iconColor="'#424a5d'"
      />
      {{ cate.title }}
      <div class="i-arrow-down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </router-link>
    <template v-if="cate.children.length > 0">
      <ul class="cate-sub-nav">
        <li v-for="(child, idx) in cate.children" :key="idx">
          <router-link
            :to="{
              name: 'productList',
              params: { categoryId: cate.id },
            }"
            class="sub-nav-item"
          >
            {{ child.title }}
          </router-link>
        </li>
      </ul>
    </template>
  </span>
</template>
<script>
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "category-li",
  props: {
    cate: { require: true },
  },
  components: {
    iconSlot,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    isClickNav() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style></style>
