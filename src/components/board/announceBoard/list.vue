<template>
  <div class="def-board announce-board">
    <div class="board-header announce-header">
      <b-row class="align-items-center">
        <b-col cols="4">
          <h2>{{ boardTit }}</h2>
        </b-col>
        <b-col cols="8">
          <div class="date-btn-area">
            <div class="date-btn-area-inner">
              <b-button class="box-shadow date-btn active">오늘</b-button>
              <b-button class="box-shadow date-btn">7일</b-button>
              <b-button class="box-shadow date-btn">1개월</b-button>
            </div>
            <Calendar />
          </div>
        </b-col>
      </b-row>
    </div>
    <table>
      <thead>
        <tr>
          <th class="check-th">
            <b-form-checkbox
              id="all-check"
              v-model="all"
              name="checkbox-all"
              value="all"
              unchecked-value="not_all"
            >
            </b-form-checkbox>
          </th>
          <th>카테고리</th>
          <th>제목</th>
          <th>희망가격</th>
          <th>작성일</th>
          <th>받은제안</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in this.boardList" :key="i">
          <td>
            <b-form-checkbox
              :id="'all-check-' + i"
              :name="'checkbox-' + i"
              :value="'accepted' + i"
              :unchecked-value="'not_accepted' + i"
            >
            </b-form-checkbox>
          </td>
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
            <div class="td-inner">{{ item.date }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.offer }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="announce-footer">
      <b-button class="delete-btn box-shadow">선택삭제</b-button>
    </div>

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

    <div class="search-box">
      <div class="search-group">
        <b-form-select v-model="filterSelected" :options="filterOptions">
        </b-form-select>
        <b-form-input
          class="search-input"
          type="search"
          v-model="filterCriteria"
          placeholder="검색어를 입력해주세요."
        >
        </b-form-input>
        <svg
          class="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import Calendar from "@/components/datePicker/index.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";

export default {
  name: "purchase-list-skin",
  props: {
    boardList: { require: false },
    boardTit: { require: false, default: "" },
  },
  components: {
    Calendar,
  },
  data() {
    return {
      pageNext: pageNext,
      pagePrev: pagePrev,
      all: "",
      filterSelected: null,
      filterOptions: [
        { value: null, text: "전체" },
        { value: "title", text: "제목" },
      ],
      filterCriteria: "",
    };
  },
  methods: {},
};
</script>
<style>
/* announce */
.announce-board .announce-header {
  width: 100%;
  margin-bottom: 12px;
  display: block;
}
.announce-header .date-btn-area {
  display: flex;
  align-items: center;
  justify-content: end;
}
.announce-board .announce-footer {
  margin-bottom: 37px;
}
.announce-footer .delete-btn,
.announce-header .date-btn-area .date-btn {
  width: auto;
  min-width: 69px;
  max-width: unset;
  height: 30px;
  margin-right: 10px;
  padding: 0 24px;
  background: unset;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #fff;
  border-radius: 30px;
  transition: all ease 0.35s;
}
.announce-footer .delete-btn {
  padding: 0 10px;
  margin-right: 0;
}
.announce-footer .delete-btn:hover,
.announce-header .date-btn-area .date-btn.active,
.announce-header .date-btn-area .date-btn:hover {
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.announce-board .check-th {
  width: 60px;
}
.announce-board .check-th .custom-control {
  display: flex;
  align-items: center;
  justify-content: center;
}
.announce-board table .custom-control input[type="checkbox"] {
  display: none;
}
.announce-board table .custom-control label {
  position: relative;
  width: 14px;
  height: 14px;
}
.announce-board table .custom-control label:hover {
  cursor: pointer;
}
.announce-board table .custom-control label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border: 1px solid #424a5d;
  border-radius: 100%;
}
.announce-board table .custom-control label:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #6e3cbc;
  border-radius: 100%;
  opacity: 0;
}
.announce-board
  table
  .custom-control
  input[type="checkbox"]:checked
  + label:after,
.announce-board
  table
  .custom-control
  input[type="checkbox"]:checked
  + label:after {
  opacity: 1;
  border-color: #6e3cbc;
}
.announce-board .pagenation {
  margin-bottom: 50px;
}

/* 검색 */
.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-box .search-group {
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  padding: 10px 20px;
  border: 1px solid #d5d5d5;
  border-radius: 14px;
}
.search-group .custom-select {
  min-width: 80px;
  margin-right: 20px;
}
.search-group .search-input {
  flex-grow: 1;
  padding: 0 10px;
}
.search-group .search-input::placeholder {
  color: #aaaaaa;
  font-size: 0.9rem;
}
.search-group .custom-select,
.search-group .search-input {
  height: 30px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
}
.search-group .search-input:focus,
.search-group .custom-select:focus-visible,
.search-group .custom-select:focus {
  border-color: #6e3cbc;
  box-shadow: 0 0 0 0.25rem rgb(110 60 188 / 25%);
}
.search-icon {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  fill: #6a707e;
}

/* 기존 */
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
.announce-board.def-board table {
  width: 100%;
  margin-bottom: 20px;
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
