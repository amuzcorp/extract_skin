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
import CateLi from "@/components/categoryLi.vue";

export default {
  name: "vertical_header",
  components: {
    CateLi,
  },
  data() {
    return {
      scY: 0,
      cateList: [
        {
          id: "pdfBook",
          title: "PDF 책",
          isHot: false,
          thumbnail: "pdfBook",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [
            {
              id: "tips",
              title: "노하우",
              isHot: false,
              thumbnail: "",
              miniId: "mini-pdf-book",
              listId: "li-all",
            },
            {
              id: "finance",
              title: "재테크",
              isHot: false,
              thumbnail: "",
              miniId: "mini-pdf-book",
              listId: "li-all",
            },
            {
              id: "divan",
              title: "시집",
              isHot: false,
              thumbnail: "",
              miniId: "mini-pdf-book",
              listId: "li-all",
            },
            {
              id: "history",
              title: "자소서",
              isHot: false,
              thumbnail: "",
              miniId: "mini-pdf-book",
              listId: "li-all",
            },
            {
              id: "template",
              title: "템플릿",
              isHot: false,
              thumbnail: "",
              miniId: "mini-pdf-book",
              listId: "li-all",
            },
          ],
        },
        {
          id: "report",
          title: "보고서",
          isHot: false,
          thumbnail: "report",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "start-up",
          title: "스타트업",
          isHot: false,
          thumbnail: "start",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "drawing",
          title: "설계/도면",
          isHot: false,
          thumbnail: "drawing",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "phrases",
          title: "디지털문구",
          isHot: false,
          thumbnail: "phrases",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "music",
          title: "브금",
          isHot: false,
          thumbnail: "music",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "model",
          title: "모델/초상권",
          isHot: false,
          thumbnail: "model",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "workbook",
          title: "문제집/족보",
          isHot: false,
          thumbnail: "workbook",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "pictorial",
          title: "화보",
          isHot: false,
          thumbnail: "pictorial",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "font",
          title: "폰트",
          isHot: false,
          thumbnail: "font",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "program",
          title: "프로그램",
          isHot: false,
          thumbnail: "program",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "design",
          title: "디자인",
          isHot: false,
          thumbnail: "design",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
        {
          id: "video-clip",
          title: "영상클립",
          isHot: false,
          thumbnail: "videoClip",
          miniId: "mini-pdf-book",
          listId: "li-all",
          children: [],
        },
      ],
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
