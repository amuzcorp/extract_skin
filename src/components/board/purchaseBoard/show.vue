<template>
  <div class="def-board-view">
    <div class="board-view-header">
      <BoardAd />
    </div>

    <div class="board-view-body">
      <div class="body-top">
        <b-row class="align-items-center">
          <b-col cols="6">
            <h2>플루터 코드모음집 삽니다. 연락주세요.</h2>
          </b-col>
          <b-col cols="6">
            <a @click="$router.go(-1)" ref="back_link">
              공고게시판 돌아가기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </a>
          </b-col>
        </b-row>
      </div>

      <div class="body-middle">
        <div class="board-info">
          <h3>작성자: cwalwall</h3>
          <ul class="ex">
            <li>카테고리 : 프로그램</li>
            <li>등록일 : 2022-01-01</li>
          </ul>
        </div>

        <p class="txt">
          플루터 코드 모음집 삽니다. 연락주세요. <br />
          아래 첨부된 사진 참고해주시면 감사하겠습니다.
        </p>
      </div>

      <div class="body-bottom">
        <div class="btn-area">
          <span class="btn">희망가격 : 30,000원</span>
          <b-button v-b-modal.prod-num-modal>내가 팔게요!</b-button>
        </div>

        <a class="douwn btn">
          <p class="tit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-folder"
              viewBox="0 0 16 16"
            >
              <path
                d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
              />
            </svg>
            플루터 코드 예시 이미지.jpg
          </p>
          <p class="size">
            45KB
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
          </p>
        </a>
      </div>
    </div>
    <div class="board-view-footer">
      <ul>
        <!-- 내 댓글 -->
        <li>
          <span class="user-info">
            <ul>
              <li><img src="@/assets/images/icon_user.png" /></li>
              <li>22-9876-1234</li>
              <li class="time">5분전</li>
            </ul>
          </span>
          <a href="" class="delete-btn"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              /></svg
          ></a>
        </li>

        <!-- 공개 -->
        <li>
          <span class="user-info">
            <ul>
              <li><img src="@/assets/images/icon_user.png" /></li>
              <li>22-9876-1234</li>
              <li class="time">5분전</li>
            </ul>
          </span>
          <a href="" class="user-shop-btn delete-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box2"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z"
              />
            </svg>
            상품확인하기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </li>

        <!-- 비공개 -->
        <li>
          <span class="user-info lock">
            <ul>
              <li><img src="@/assets/images/icon_lock.png" /></li>
              <li>댓글은 작성자만 볼 수 있습니다.</li>
            </ul>
          </span>
        </li>
        <li>
          <span class="user-info lock">
            <ul>
              <li><img src="@/assets/images/icon_lock.png" /></li>
              <li>댓글은 작성자만 볼 수 있습니다.</li>
            </ul>
          </span>
        </li>
      </ul>

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

    <b-modal id="prod-num-modal" ref="prod-num-modal" hide-footer hide-header>
      <h2>상품고유번호를 입력해주세요.</h2>
      <b-form-input
        type="text"
        placeholder="예) 2021-1212-09164"
        v-model="prodNum"
      ></b-form-input>
      <div class="prod-num-modal-footer">
        <div class="btn-area">
          <a @click="hideModal" class="def-btn-off def-btn">취소</a>
          <a class="def-btn-on def-btn">입력완료</a>
        </div>
        <div class="info">
          <p>아직 상품이 등록되지 않았나요?</p>
          <router-link :to="{ name: 'purchaseCreate' }"
            >상품 등록하러가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import BoardAd from "@/components/ad/board-ad.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";

export default {
  name: "purchase-show-skin",
  components: {
    BoardAd,
  },
  data() {
    return {
      pageNext: pageNext,
      pagePrev: pagePrev,
      prodNum: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs["prod-num-modal"].hide();
    },
  },
};
</script>
<style>
.board-view-header {
  margin-bottom: 59px;
}
.def-board-view {
  margin-bottom: 165px;
}
.board-view-body {
  margin-bottom: 50px;
}
.body-top {
  margin-bottom: 11px;
}
.body-top h2 {
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
}
.body-top a {
  display: flex;
  align-items: center;
  justify-content: end;
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
}
.body-top a svg {
  margin-left: 5px;
  width: 11px;
  height: auto;
}
.board-info {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #fafafa;
  border-radius: 10px;
}
.body-bottom .douwn,
.body-bottom,
.board-info ul,
.board-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.body-bottom .douwn p,
.body-middle .txt,
.board-info ul li,
.board-info h3 {
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.board-info ul li {
  padding-left: 40px;
}
.body-middle .txt {
  display: inline-block;
  width: 100%;
  min-height: 338px;
  margin-bottom: 20px;
  padding: 20px 25px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.board-view-body .btn-area button,
.board-view-body .btn-area span {
  padding: 15px 50px;
  background-color: #6e3cbc;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
}
.board-view-body .btn-area button {
  margin-left: 10px;
  background-color: #300474;
}
.board-view-body .btn-area .btn:hover {
  color: #fff;
}
.board-view-body .btn-area button:hover {
  background-color: #300474;
}
.body-bottom .douwn {
  min-width: 421px;
  padding: 15px 25px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.body-bottom .douwn .tit svg {
  margin-right: 5px;
}
.body-bottom .douwn .size svg {
  margin-left: 15px;
}
.board-view-footer .user-info ul {
  display: flex;
  align-items: center;
}
.board-view-footer > ul {
  margin-bottom: 80px;
}
.board-view-footer > ul > li {
  position: relative;
  padding: 15px 26px;
  background-color: #f7f7f7;
  border-radius: 10px;
  margin-bottom: 26px;
}
.board-view-footer ul li .delete-btn {
  position: absolute;
  top: 50%;
  right: 26px;
  transform: translateY(-50%);
  color: #424a5d;
}
.board-view-footer ul li .user-shop-btn {
  display: flex;
  align-items: center;
  color: #6e3cbc;
}
.board-view-footer ul li .user-shop-btn svg {
  margin: 0 10px;
}
/*  */
.board-view-footer .user-info ul li {
  margin-right: 15px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.board-view-footer .user-info ul li.time {
  position: relative;
  padding-left: 10px;
}
.board-view-footer .user-info ul li.time:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  background: #424a5d;
  border-radius: 30px;
}
.board-view-footer .user-info ul li:last-child {
  margin-right: 0;
}
.board-view-footer .user-info ul li img {
  width: 25px;
}
.board-view-footer .user-info.lock ul li img {
  width: 17px;
  margin-bottom: 3px;
}

/* 페이지네이션 */
.def-board-view .pagenation ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.def-board-view .pagenation ul li a {
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
.def-board-view .pagenation ul li a.active {
  color: #7f63f4;
  background-color: #f1eefd;
}

/* modal */
#prod-num-modal .modal-dialog {
  margin-top: 14%;
}
#prod-num-modal .modal-content {
  border-radius: 10px;
}
#prod-num-modal h2 {
  margin-bottom: 11px;
  font-size: 1rem;
  font-weight: 500;
}
#prod-num-modal .modal-body {
  padding: 39px 56px;
}
#prod-num-modal .form-control {
  height: 48px;
  margin-bottom: 15px;
  border: 1px solid #707070;
  border-radius: 4px;
}
#prod-num-modal .form-control::placeholder {
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 400;
}
#prod-num-modal .btn-area {
  display: flex;
  margin-bottom: 17px;
}
#prod-num-modal .btn-area .def-btn {
  width: 100%;
}
#prod-num-modal .btn-area .def-btn-off {
  margin-right: 10px;
}
#prod-num-modal .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#prod-num-modal .info p {
  margin: 0;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
#prod-num-modal .info a {
  display: flex;
  align-items: center;
  color: #6e3cbc;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: unset;
}
#prod-num-modal .info a svg {
  width: 12px;
  margin-left: 5px;
}
</style>
