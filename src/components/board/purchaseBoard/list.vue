<template>
  <div class="def-board">
    <div class="board-header" :class="{ cateSub: boardCateSubSelect }">
      <h2>{{ boardTit }}</h2>
      <div class="table-select">
        <b-form-select
          class="cate-sub-select"
          v-model="cateSubSelected"
          :options="cateSubOptions"
        ></b-form-select>
        <b-form-select
          v-model="tableSelected"
          :options="tableOptions"
        ></b-form-select>
        <router-link :to="{ name: 'purchaseCreate' }" class="creat-btn">
          공고 올리기
        </router-link>
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
        <tr v-for="(item, i) in this.boardList" :key="i">
          <td>
            <span class="td-shadow"></span>
            <div class="td-inner">{{ item.cate }}</div>
          </td>
          <td class="tit">
            <div class="td-inner">
              <router-link :to="{ name: 'purchaseShow' }">
                {{ item.title }}
                <svg
                  v-if="item.img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path
                    d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
                  />
                </svg>
              </router-link>
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
  name: "purchase-list-skin",
  props: {
    boardList: { require: false },
    boardCateSubSelect: { require: false, default: false },
    boardTit: { require: false, default: "" },
  },
  data() {
    return {
      sampleList: [],
      tableSelected: null,
      tableOptions: [
        { value: null, text: "최신순" },
        { value: "data-form", text: "데이터 + 양식" },
        { value: "form", text: "양식" },
      ],
      cateSubSelected: null,
      cateSubOptions: [
        { value: null, text: "소분류를 선택해주세요." },
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.board-header h2 {
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
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
.def-board tbody tr:hover td {
  color: #6e3cbc;
}
.def-board tbody tr td .td-inner {
  padding: 10px 0;
}
.def-board tbody tr td .td-inner svg {
  margin: 0 0 3px 3px;
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
.board-header .custom-select.cate-sub-select {
  display: none;
}
.board-header.cateSub .custom-select.cate-sub-select {
  display: inline-block;
  width: 250px;
}
</style>
