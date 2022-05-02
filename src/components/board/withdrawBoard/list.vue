<template>
  <div class="def-board Withdraw-board purchase-list-board">
    <div class="board-header Withdraw-header">
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
          <th>출금일</th>
          <th>은행</th>
          <th>계좌번호</th>
          <th>금액</th>
          <th>누적출금금액</th>
          <th>출금가능금액</th>
          <th>상태</th>
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
            <div class="td-inner">{{ item.bank }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.bankNum }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.price }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.amount }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.withdraw }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.state }}</div>
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

    <!-- 없을 경우 -->
    <!--      <tr>-->
    <!--        <td colspan="7" class="not-txt">-->
    <!--          구매목록 및 재 다운로드 파일이 없습니다.-->
    <!--        </td>-->
    <!--      </tr>-->
    <!--    </table>-->
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
    };
  },
  methods: {},
  mounted() {},
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

/* Withdraw */
.Withdraw-header {
  width: 100%;
  margin-bottom: 12px;
  display: block;
}
.Withdraw-header .date-btn-area {
  display: flex;
  align-items: center;
  justify-content: end;
}
.Withdraw-header .date-btn-area .date-btn {
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
.Withdraw-header .date-btn-area .date-btn.active,
.Withdraw-header .date-btn-area .date-btn:hover {
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.Withdraw-board .pagenation {
  margin-bottom: 50px;
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
