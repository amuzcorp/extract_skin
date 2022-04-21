<template>
  <div class="search-list-wrap">
    <b-container>
      <div class="search-result">
        <b-row>
          <b-col cols="6">
            <router-link :to="{ name: 'searchList' }">
              <div class="search-result-inner">
                <div class="img"></div>
                <a href="" class="txt-box">
                  <div class="text-box-inner text-center">
                    <span>상품검색</span> 결과로 볼게요!<br />
                    <b>127</b>건
                  </div>
                </a>
              </div>
            </router-link>
          </b-col>
          <b-col cols="6">
            <router-link :to="{ name: 'searchNoticeList' }">
              <div class="search-result-inner search-result-inner-buy active">
                <div class="img"></div>
                <a href="" class="txt-box">
                  <div class="text-box-inner text-center">
                    <span>삽니다공고</span> 결과로 볼게요!<br />
                    <b>54</b>건
                  </div>
                </a>
              </div>
            </router-link>
          </b-col>
        </b-row>
      </div>

      <div class="result-category">
        <h2>
          <b>‘디자인’</b>에 대한 검색결과 <b style="margin-left: 15px">127</b>건
        </h2>

        <div class="main-cate">
          <h3>카테고리</h3>
          <ul class="main-table">
            <li><a href="" class="active">디자인(52)</a></li>
            <li><a href="">영상클립(18)</a></li>
            <li><a href="">브금(17)</a></li>
            <li><a href="">스타트업(16)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <!--  -->
            <li><a href="">디자인(52)</a></li>
            <li><a href="">영상클립(18)</a></li>
            <li><a href="">브금(17)</a></li>
            <li><a href="">스타트업(16)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
          </ul>
        </div>

        <div class="sub-cate">
          <h3>소분류</h3>
          <ul class="main-table">
            <li><a href="" class="active">디자인(52)</a></li>
            <li><a href="">영상클립(18)</a></li>
            <li><a href="" class="active">브금(17)</a></li>
            <li><a href="">스타트업(16)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <li><a href="">스타트업(16)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
            <li><a href="">문제집/족보(12)</a></li>
            <li><a href="">화보(10)</a></li>
          </ul>
        </div>
      </div>

      <PurchaseBoard :boardList="this.purchaseList" />
    </b-container>
  </div>
</template>
<script>
import prodList from "@/api/product.json";
import boardList from "@/api/board.json";
import PurchaseBoard from "@/components/board/purchaseBoard/list.vue";

export default {
  name: "list-notice-skin",
  data() {
    return {
      prodList,
      boardList,
      purchaseList: [],
    };
  },
  components: { PurchaseBoard },
  methods: {
    getBoardList() {
      for (var i = 0; i < this.boardList.length; i++) {
        if (this.boardList[i]["type"] == "purchase") {
          this.purchaseList.push(this.boardList[i]);
        }
      }
    },
  },
  mounted() {
    this.getBoardList();
  },
};
</script>
<style>
.search-result {
  margin-bottom: 40px;
}
.search-result-inner {
  display: flex;
  height: 190px;
  padding: 30px 30px 0 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
}
.search-result-inner .img {
  width: 228px;
  background: left top / cover no-repeat url("@/assets/images/search_01.png");
}
.search-result-inner-buy .img {
  background: left top / cover no-repeat url("@/assets/images/search_02.png");
}
.search-result-inner .txt-box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-grow: 1;
  color: #aaa;
  margin-bottom: 30px;
  font-size: 1.3rem;
  font-weight: 500;
  border: 1px solid #d5d5d5;
  border-radius: 30px;
  transition: all ease 0.35s;
}
.search-result-inner .txt-box:before {
  content: "";
  position: absolute;
  border-top: 5px solid transparent;
  border-right: 10px solid #d5d5d5;
  border-bottom: 5px solid transparent;
  top: 25px;
  right: 100%;
  transition: all ease 0.35s;
}
.search-result-inner .txt-box:after {
  content: "";
  position: absolute;
  border-top: 5px solid transparent;
  border-right: 10px solid #f7f7f7;
  border-bottom: 5px solid transparent;
  top: 25px;
  right: calc(100% - 3px);
}
.search-result-inner .txt-box b {
  font-size: 1.4rem;
  font-weight: bold;
}
.search-result-inner .txt-box span {
  display: inline-table;
  position: relative;
  overflow: hidden;
  z-index: 3;
}
.search-result-inner .txt-box span:before {
  content: "";
  position: absolute;
  bottom: 4px;
  right: 100%;
  width: 100%;
  height: 7px;
  background-color: #e35353;
  opacity: 0.7;
  z-index: -1;
  transition: all ease 0.35s;
}
.search-result-inner:hover {
  cursor: pointer;
}
.search-result-inner.active span:before,
.search-result-inner:hover span:before {
  right: 0;
}
.search-result-inner.active .txt-box:before,
.search-result-inner:hover .txt-box:before {
  border-right-color: #e35353;
}
.search-result-inner.active .txt-box,
.search-result-inner:hover .txt-box {
  border-color: #e35353;
  color: #333;
}

.search-list-wrap {
  margin-bottom: 177px;
}
.result-category {
  margin-bottom: 40px;
}
.result-category h2 {
  margin-bottom: 16px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 400;
}
.sub-cate,
.main-cate {
  display: flex;
  align-items: center;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.sub-cate {
  border-top: 0;
}
.sub-cate h3:before,
.main-cate h3:before {
  content: "";
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: calc(100% + 8px);
  background-color: #fafafa;
  z-index: -1;
}
.sub-cate h3,
.main-cate h3 {
  position: relative;
  min-width: 138px;
  padding: 21px 0;
  background-color: #fafafa;
  color: #333333;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}
.sub-cate ul,
.main-cate ul {
  display: flex;
  align-items: center;
  padding: 20px 0;
  overflow-x: scroll;
  white-space: nowrap;
}
.main-cate ul::-webkit-scrollbar,
.sub-cate ul::-webkit-scrollbar {
  height: 8px;
  background: #fafafa;
}
.main-cate ul::-webkit-scrollbar:hover,
.sub-cate ul::-webkit-scrollbar:hover {
  cursor: pointer;
}
.main-cate ul::-webkit-scrollbar-thumb,
.sub-cate ul::-webkit-scrollbar-thumb {
  background: #ededed;
  border-radius: 30px;
}
.sub-cate ul li a,
.main-cate ul li a {
  padding: 5px 17px;
  margin-left: 25px;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  transition: all ease 0.35s;
  border-radius: 30px;
}
.sub-cate ul li a {
  background-color: #f7f7f7;
}
.sub-cate ul li a.active,
.sub-cate ul li a:hover {
  background-color: #6a707e;
  color: #fff;
}
.main-cate ul li a:hover {
  background-color: #f7f7f7;
}
.main-cate ul li a.active {
  font-weight: bold;
}
</style>
