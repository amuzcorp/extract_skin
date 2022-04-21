<template>
  <div class="vertical-category" :class="{ fixed: scY > 139 }">
    <h2>카테고리</h2>
    <div class="category-nav-wrap">
      <ul class="cate-nav">
        <li v-for="(cate, i) in this.cateList" :key="i">
          <CateLi :cate="cate" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CateLi from "@/components/category/categoryLi.vue";
import cateList from "@/api/productCategory.json";

export default {
  name: "vertical_header",
  components: {
    CateLi,
  },
  data() {
    return {
      scY: 0,
      cateList,
    };
  },
  methods: {
    onScroll(e) {
      this.scY = e.target.documentElement.scrollTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
<style>
.vertical-category {
  width: 220px;
  padding: 30px 0 20px 0;
  color: #6a707e;
  border-radius: 12px;
  box-shadow: 2px 3px 10px rgba(119, 119, 119, 0.1);
}
.vertical-category.fixed {
  position: fixed;
  top: 0;
}
.vertical-category h2 {
  margin-bottom: 14px;
  padding-left: 33px;
  color: #333333;
  font-size: 1rem;
  font-weight: bold;
}
.cate-nav li a {
  color: inherit;
  font-size: 0.9rem;
  font-weight: 400;
}
.cate-nav > li > span > .nav-item {
  display: block;
  position: relative;
  padding: 16px 33px;
  border-left: 3px solid #fff;
  transition: all ease 0.35s;
}
.cate-nav > li > span > .nav-item .i-arrow-down {
  display: none;
  align-items: center;
  position: absolute;
  top: 0;
  right: 26px;
  height: 100%;
}
.cate-nav > li > span > .nav-item .i-arrow-down svg {
  transition: transform ease 0.35s;
}
.cate-nav > li > span > .nav-item.has-children .i-arrow-down {
  display: flex;
}
.ex-container .cate-sub-nav {
  padding-left: 78px;
}
.cate-sub-nav {
  height: 0;
  overflow: hidden;
  transition: all ease 0.35s;
}
.cate-nav > li.show .cate-sub-nav {
  height: auto;
}
.cate-sub-nav li a {
  display: block;
  padding: 13px 0;
  transition: all ease 0.35s;
}
.cate-nav > li > span > .nav-item:hover {
  background-color: #f7f7ff;
  color: #362189;
  border-color: #362189;
}
.cate-sub-nav li a:hover,
.cate-sub-nav li a.router-link-active {
  color: #362189;
  font-weight: 600;
}
.cate-nav > li > span > .nav-item:hover svg path,
.cate-nav > li > span > .nav-item:hover .i-arrow-down svg {
  color: #362189;
  fill: #362189;
}
.cate-nav > li > span > .nav-item.router-link-active {
  background-color: #f7f7ff;
  color: #362189;
  font-weight: 600;
  border-color: #362189;
}
.cate-nav > li > span > .nav-item.router-link-active svg path,
.cate-nav > li > span > .nav-item.router-link-active .i-arrow-down svg {
  color: #362189;
  fill: #362189;
}
.cate-nav > li > span.show > .nav-item.router-link-active .i-arrow-down svg {
  transform: rotate(-180deg);
}
.cate-nav > li > span.show .cate-sub-nav {
  height: auto;
}
</style>
