<template>
  <div class="def-board review-board">
    <div class="board-header review-header">
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

    <!-- 있을 경우 -->
    <div class="review-list-wrap">
      <div
        v-for="(item, i) in this.boardList"
        :key="i"
        class="review-item"
        :class="{ active: i == 1 }"
      >
        <div class="review-inner">
          <div class="inner-col">
            <div class="checkbox">
              <b-form-checkbox
                :id="'all-check-' + i"
                :name="'checkbox-' + i"
                :value="'accepted' + i"
                :unchecked-value="'not_accepted' + i"
              >
              </b-form-checkbox>
            </div>
            <div
              class="img"
              v-bind:style="{
                backgroundImage:
                  'url(' + require(`@/assets/images/${item.thumb}.png`) + ')',
              }"
            ></div>
            <div class="review-info">
              <router-link :to="{ name: 'purchaseShow' }" class="tit">
                {{ item.label }}
              </router-link>
              <ul class="info">
                <li>{{ item.price }}</li>
                <li>
                  <span v-if="item.date">{{ item.date }}</span
                  ><span v-else>0000-00-00</span>
                </li>
                <li>
                  <star-rating
                    :increment="0.5"
                    inactive-color="#DDDDDD"
                    active-color="#6E3CBC"
                    v-bind:star-size="13"
                    :rounded-corners="false"
                    :read-only="true"
                    :rating="item.star"
                  ></star-rating>
                </li>
              </ul>
              <p v-if="item.dscript" class="dscript">{{ item.dscript }}</p>
              <p v-else class="dscript">구매하신 상품의 리뷰를 작성해주세요.</p>
            </div>
          </div>

          <div class="review-write-box">
            <b-button
              v-if="item.review == false"
              class="review-write box-shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z"
                />
              </svg>
              리뷰작성
            </b-button>
            <b-button v-else class="review-edit box-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"
                />
              </svg>
              리뷰수정
            </b-button>
          </div>
        </div>

        <div class="review-write-edit-box">
          <b-form-textarea
            id="review-edit"
            :v-model="reviewEdit + i"
            placeholder="리뷰를 작성해주세요."
            rows="8"
            max-rows="8"
            class="def-textarea"
          ></b-form-textarea>
          <div class="review-write-edit-btn-area">
            <b-button class="cancel">취소</b-button>
            <b-button>작성완료</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="review-footer">
      <b-button class="delete-btn box-shadow">선택삭제</b-button>
      <b-button class="delete-btn box-shadow">전체삭제</b-button>
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
    <!-- <div class="not-txt">구매한 상품이 없습니다.</div> -->
  </div>
</template>
<script>
import Calendar from "@/components/datePicker/index.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";
import StarRating from "vue-star-rating";

export default {
  name: "purchase-list-skin",
  props: {
    boardList: { require: false },
    boardTit: { require: false, default: "" },
  },
  components: {
    Calendar,
    StarRating,
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
      reviewEdit: "",
    };
  },
  methods: {},
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

.review-list-wrap .review-write-edit-box {
  height: 0;
  padding: 0;
  overflow: hidden;
  transition: all ease 0.35s;
}
.review-list-wrap .review-item.active .review-write-edit-box {
  height: auto;
  padding-top: 25px;
}
.review-write-edit-box .def-textarea {
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 14px;
}
.review-write-edit-box .def-textarea::placeholder {
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 400;
}
.review-write-edit-box .review-write-edit-btn-area {
  text-align: right;
}
.review-write-edit-box .review-write-edit-btn-area .btn {
  width: 152px;
  padding: 9px 0;
  margin-left: 10px;
  background-color: #300474;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  border: 1px solid #300474;
}
.review-write-edit-box .review-write-edit-btn-area .btn.cancel {
  background-color: #ffffff;
  color: #121212;
  border-color: #707070;
}
/*  */
.review-list-wrap .review-item {
  margin-bottom: 20px;
}
.review-list-wrap .review-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 10px #f1eefd;
  transition: all ease 0.35s;
}
.review-list-wrap .review-inner:hover {
  border-color: #6e3cbc;
}
.review-inner svg {
  margin-bottom: 3px;
}
.review-board .review-header {
  width: 100%;
  margin-bottom: 12px;
  display: block;
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
.review-list-wrap {
  width: 100%;
  margin-bottom: 20px;
}
.inner-col {
  display: flex;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
}
.review-inner .checkbox {
  margin-right: 20px;
}
.review-inner .img {
  width: 85px;
  height: 85px;
  margin-right: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
}
.review-inner .review-info .tit {
  margin-bottom: 3px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 500;
}
.review-inner .review-info .info {
  display: flex;
  align-items: center;
  margin-bottom: 7px;
}
.review-inner .review-info .info li {
  position: relative;
  margin-right: 10px;
  padding-right: 10px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.review-inner .review-info .info li:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 50%;
  background-color: #6a707e;
}
.review-inner .review-info .info li:last-child:after {
  display: none;
}
.review-inner .review-info .dscript {
  color: #bebebe;
  font-size: 0.9rem;
  font-weight: 400;
}
.review-inner .review-info .vue-star-rating-rating-text {
  display: none;
}
.review-inner .review-write-box {
  width: 110px;
}
.review-inner .review-write-box .btn {
  width: 100%;
  padding: 5px;
  background-color: #9272ac;
  color: #fff;
  fill: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #9272ac;
  border-radius: 30px;
}
.review-inner .review-write-box .btn svg {
  margin-right: 3px;
  width: 16px;
  height: 16px;
}
.review-inner .review-write-box .btn.review-edit {
  background-color: #fff;
  color: #424a5d;
  fill: #424a5d;
  border-color: #ededed;
}
.review-header .date-btn-area {
  display: flex;
  align-items: center;
  justify-content: end;
}
.review-board .review-footer {
  margin-bottom: 37px;
}
.review-footer .delete-btn,
.review-header .date-btn-area .date-btn {
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
.review-footer .delete-btn {
  padding: 0 10px;
}
.review-footer .delete-btn:hover,
.review-header .date-btn-area .date-btn.active,
.reivreviewew-header .date-btn-area .date-btn:hover {
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.review-board .review-inner .custom-control input[type="checkbox"] {
  display: none;
}
.review-board .review-inner .custom-control label {
  position: relative;
  width: 14px;
  height: 14px;
}
.review-board .review-inner .custom-control label:hover {
  cursor: pointer;
}
.review-board .review-inner .custom-control label:before {
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
.review-board .review-inner .custom-control label:after {
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
.review-board
  .review-inner
  .custom-control
  input[type="checkbox"]:checked
  + label:after,
.review-board
  .review-inner
  .custom-control
  input[type="checkbox"]:checked
  + label:after {
  opacity: 1;
  border-color: #6e3cbc;
}
.review-board .pagenation {
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
