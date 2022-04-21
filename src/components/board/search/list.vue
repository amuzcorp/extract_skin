<template>
  <div class="def-board">
    <div class="board-header">
      <div class="table-select">
        <b-form-select
          v-model="tableSelected"
          :options="tableOptions"
        ></b-form-select>
        <a href="" class="creat-btn"> 공고 올리기 </a>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>카테고리</th>
          <th>제목</th>
          <th>희망구매금액</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>받은제안</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in this.sampleList" :key="i">
          <td>
            <span class="td-shadow"></span>
            <div class="td-inner">{{ item.cate }}</div>
          </td>
          <td class="tit">
            <div class="td-inner">
              <router-link :to="{ nmae: 'purchaseNoticeView' }">{{
                item.title
              }}</router-link>
            </div>
          </td>
          <td>
            <div class="td-inner">{{ item.price }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.writer }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.date }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.offer }}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagenation">
      <ul>
        <li class="first-btn">
          <a href="#"><img :src="pagePrev" /></a>
        </li>
        <li><a href="#" class="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a>···</a></li>
        <li><a href="#">12</a></li>
        <li class="last-btn">
          <a href="#"><img :src="pageNext" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";

export default {
  name: "search-list-skin",
  data() {
    return {
      sampleList: [
        {
          cate: "화보",
          title: "에곤쉴레 초화상 삽니다.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "5",
        },
        {
          cate: "디자인",
          title: "산세리프 폰트 모음집 삽니다.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "7",
        },
        {
          cate: "PDF 책",
          title: "회사소개서 양식 삽니다.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "2",
        },
        {
          cate: "보고서",
          title: "회계양식 모음집 사요 활용가능한걸로요!",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "12",
        },
        {
          cate: "프로그램",
          title: "플루터 코드모음집 삽니다. 연락주세요.",
          img: true,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "17",
        },
        {
          cate: "폰트",
          title: "세리프 폰트 삽니다.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "4",
        },
        {
          cate: "문제집/족보",
          title: "2022 산업기능사 문제집 사봐요.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "2",
        },
        {
          cate: "화보",
          title: "홍길동 화보 전집 사봅니다.",
          img: false,
          price: "25,000",
          writer: "cwalwall",
          date: "2021-01-01",
          offer: "9",
        },
      ],
      tableSelected: null,
      tableOptions: [
        { value: null, text: "최신순" },
        { value: "data-form", text: "데이터 + 양식" },
        { value: "form", text: "양식" },
      ],
      pageNext: pageNext,
      pagePrev: pagePrev,
    };
  },
};
</script>
<style>
.board-header {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 15px;
}
.board-header .custom-select {
  width: 140px;
  margin-right: 10px;
  padding: 4px 18px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
  border-radius: 7px;
  box-shadow: 1px 2px 10px rgb(119 119 119 / 10%);
}
.board-header .creat-btn {
  padding: 4px 34px;
  background-color: #6e3cbc;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 7px;
}
.def-board table {
  width: 100%;
  margin-bottom: 105px;
  color: #424a5d;
  text-align: center;
}
.def-board thead tr th {
  padding: 10px 0;
  background-color: #fafafa;
  color: #202427;
  font-size: 0.9rem;
  font-weight: 500;
}
.def-board tbody tr td,
.def-board tbody tr td a {
  padding: 7px 0;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 400;
}
.def-board tbody tr td a {
  padding: 0;
}
.def-board tbody tr td.tit {
  text-align: left;
}
.def-board tbody tr {
  position: relative;
}
.def-board tbody tr .td-shadow {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: calc(100% - 14px);
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 10px #f1eefd;
  z-index: -1;
  transition: all ease 0.35s;
}
.def-board tbody tr:hover,
.def-board tbody tr:hover .td-shadow {
  border-color: #6e3cbc;
}
.def-board tbody tr td .td-inner {
  padding: 10px 0;
}
.def-board tbody tr td:first-child .td-inner,
.def-board thead tr th:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.def-board tbody tr td:last-child .td-inner,
.def-board thead tr th:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
/* 페이지네이션 */
.def-board .pagenation ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.def-board .pagenation ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  margin: 0 5px;
  padding: 0 10px;
  background-color: #fff;
  color: #6a707e;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 30px;
}
.def-board .pagenation ul li a.active {
  color: #7f63f4;
  background-color: #f1eefd;
}
</style>
