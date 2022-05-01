<template>
  <div class="def-board announce-board purchase-list-board">
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
          <th>구매날짜</th>
          <th>카테고리</th>
          <th>상품명</th>
          <th>구매금액</th>
          <th>다운로드만료기간</th>
          <th>양식</th>
          <th>신고</th>
          <th>다운로드</th>
        </tr>
      </thead>
      <!-- 있을 경우 -->
      <tbody>
        <tr v-for="(item, i) in this.boardList" :key="i">
          <td>
            <div class="td-inner">{{ item.date }}</div>
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
            <div class="td-inner">{{ item.expiration }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.form }}</div>
          </td>
          <td>
            <div class="td-inner">
              <a class="warning-btn" v-b-modal.war-modal>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2h1zm2 0h12v-6a6 6 0 1 0-12 0v6zm5-18h2v3h-2V2zm8.778 2.808l1.414 1.414-2.12 2.121-1.415-1.414 2.121-2.121zM2.808 6.222l1.414-1.414 2.121 2.12L4.93 8.344 2.808 6.222zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3H7z"
                  />
                </svg>
              </a>
            </div>
          </td>
          <td>
            <div class="td-inner" v-if="today > item.expiration">
              <span class="end-txt">기간만료</span>
            </div>
            <div class="td-inner" v-else>
              <a href="" class="down">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
                다운로드
              </a>
            </div>
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

      <!-- 없을 경우 -->
<!--      <tr>-->
<!--        <td colspan="7" class="not-txt">-->
<!--          구매목록 및 재 다운로드 파일이 없습니다.-->
<!--        </td>-->
<!--      </tr>-->
<!--    </table>-->

    <b-modal id="war-modal" ref="war-modal" hide-footer hide-header>
      <h2>해당 파일을 신고하시겠습니까?</h2>
      <p>허위 신고시 불이익을 받을 수 있습니다.</p>
      <b-form-textarea
        id="textarea"
        v-model="warText"
        placeholder="신고사유를 기입해주세요."
        rows="4"
        max-rows="4"
        class="def-textarea"
      ></b-form-textarea>
      <div class="war-modal-footer">
        <a @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a
          class="def-btn-on def-btn"
          @click="hideModal"
          v-b-modal.war-modal-comp
          >신고하기</a
        >
      </div>
    </b-modal>
    <b-modal id="war-modal-comp" ref="war-modal-comp" hide-footer hide-header>
      <h2>신고가 완료되었습니다.</h2>
      <p>빠르게 확인 뒤 연락드리겠습니다.</p>
      <div class="war-modal-comp-footer">
        <a class="def-btn-on def-btn" @click="hideModal">확인</a>
      </div>
    </b-modal>
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
      filterSelected: null,
      filterOptions: [
        { value: null, text: "전체" },
        { value: "title", text: "제목" },
      ],
      filterCriteria: "",
      today: new Date().toISOString().substr(0, 10),
      warText: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs["war-modal"].hide();
      this.$refs["war-modal-comp"].hide();
    },
  },
  mounted() {
    console.log(this.today > "2021-2-54");
  },
};
</script>
<style>
.not-txt {
  padding: 60px 0;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
}

/* Add Purchase List */
.purchase-list-board tbody tr td .td-inner .warning-btn svg {
  width: 18px;
  margin: 0 0 1px 0;
  transition: all ease 0.35s;
}
.purchase-list-board tbody tr td .td-inner .down svg {
  margin: 0 3px 0 0;
}
.purchase-list-board tbody tr:hover .warning-btn svg {
  fill: #6e3cbc;
}
.purchase-list-board tbody tr td .end-txt {
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 500;
}

/* War Modal */
#war-modal .modal-dialog,
#war-modal-comp .modal-dialog {
  margin-top: 20%;
}
#war-modal-comp .modal-dialog {
  max-width: 330px;
}
#war-modal .modal-content,
#war-modal-comp .modal-content {
  border-radius: 12px;
}
#war-modal .modal-body {
  padding: 45px 40px;
  text-align: center;
}
#war-modal-comp .modal-body {
  padding: 32px 0;
  text-align: center;
}
#war-modal h2,
#war-modal-comp h2 {
  margin-bottom: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
}
#war-modal p,
#war-modal-comp p {
  margin-bottom: 26px;
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 500;
}
.def-textarea {
  margin-bottom: 20px;
  background-color: #fafafa;
  color: #bebebe;
  font-size: 0.8rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.war-modal-footer {
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
}
.war-modal-footer a {
  flex-grow: 1;
  margin-left: 5px;
  margin-right: 5px;
}

/* Add Announce */
.announce-header {
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
.def-board table {
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
