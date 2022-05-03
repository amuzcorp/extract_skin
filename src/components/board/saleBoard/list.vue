<template>
  <div class="def-board sale-board purchase-list-board">
    <div class="board-header sale-header">
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
          <th>판매일</th>
          <th>상품고유번호</th>
          <th>상품명</th>
          <th>판매금액</th>
          <th>총 누적판매금액</th>
          <th>계산서 발행요청</th>
        </tr>
      </thead>
      <!-- 있을 경우 -->
      <tbody>
        <tr v-for="(item, i) in this.boardList" :key="i">
          <td>
            <span class="td-shadow"></span>
            <div class="td-inner">{{ item.date }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.productNum }}</div>
          </td>
          <td>
            <div class="td-inner">
              <a>{{ item.label }}</a>
            </div>
          </td>
          <td>
            <div class="td-inner">{{ item.price }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.amount }}</div>
          </td>
          <td>
            <div v-if="item.bill.name" class="td-inner">
              <ModalItem :modalList="item.bill" />
            </div>
            <div v-else class="td-inner">-</div>
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
    <!--          판매내역이 없습니다.-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--    </table>-->
  </div>
</template>
<script>
import Calendar from "@/components/datePicker/index.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";
import ModalItem from "@/components/comp-modal.vue";

export default {
  name: "sale-board-skin",
  props: {
    boardList: { require: false },
    boardTit: { require: false, default: "" },
  },
  components: {
    Calendar,
    ModalItem,
  },
  data() {
    return {
      pageNext: pageNext,
      pagePrev: pagePrev,
      filterCriteria: "",
      filterSelected: null,
      filterOptions: [
        { value: null, text: "전체" },
        { value: "title", text: "제목" },
      ],
    };
  },
};
</script>
<style scope>
.not-txt {
  padding: 60px 0;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
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

/* sale */
.sale-header {
  width: 100%;
  margin-bottom: 12px;
  display: block;
}
.sale-board.def-board table {
  margin-bottom: 85px;
}
.sale-header .date-btn-area {
  display: flex;
  align-items: center;
  justify-content: end;
}
.sale-header .date-btn-area .date-btn {
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
.sale-header .date-btn-area .date-btn.active,
.sale-header .date-btn-area .date-btn:hover {
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.sale-board .pagenation {
  margin-bottom: 50px;
}
.sale-board td .bill-info {
  position: relative;
  text-decoration: underline;
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
.def-board tbody tr:hover td > .td-inner > a,
.def-board tbody tr:hover td > .td-inner {
  color: #6e3cbc;
}
.def-board tbody tr:hover td .td-inner a .bill-wrap .down {
  color: #424a5d;
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
