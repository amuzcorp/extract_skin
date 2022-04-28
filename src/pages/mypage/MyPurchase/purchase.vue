<template>
  <div class="my-purchase-wrap mb-100">
    <MyPurchaseHeader />

    <div class="recent-buy">
      <div class="recent-buy-header">
        <h2>최근 구매파일</h2>
        <a href="">
          전체보기
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
      </div>
      <div class="recent-buy-body">
        <PurchaseRecentBoard :boardList="this.recentTableList" />
      </div>

      <div class="my-purchase-like">
        <div class="my-purchase-like-header">
          <h2>찜 목록</h2>
          <a href="">
            전체보기
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
        </div>
        <div class="my-purchase-like-body">
          <PurchaseProductList :productList="this.likeProductList" />
        </div>
      </div>
    </div>

    <b-modal id="review-modal" ref="review-modal" hide-footer hide-header>
      <div class="review-modal-header">
        <h2>상품은 어떠셨나요?</h2>
        <b-button @click="hideModal" class="close"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"
            /></svg
        ></b-button>
      </div>
      <div class="review-modal-body">
        <h3>상품명</h3>
        <div class="prod-info">
          <div
            class="img"
            :style="'background-image: url(' + modalImg + ')'"
          ></div>
          <div class="txt">
            <h4>20년 경력의 경리가 만든 회사 행정양식 모음집</h4>
            <p>₩ 25,000</p>
            <ul>
              <li>리뷰 <b>42</b></li>
              <li>평점 <b>5</b></li>
            </ul>
          </div>
        </div>

        <div class="star-point">
          <h2>만족도<span>(별점을 눌러 평가 해주세요)</span></h2>
          <div class="star-point-inner">
            <star-rating
              :increment="0.5"
              inactive-color="#DDDDDD"
              active-color="#6E3CBC"
              v-bind:star-size="30"
              :show-rating="false"
              :rounded-corners="true"
              :read-only="false"
              :rating="0"
            ></star-rating>
          </div>
        </div>
      </div>

      <div class="review-modal-footer">
        <h2>구매후기</h2>
        <b-form-textarea
          id="review-modal-extarea"
          v-model="reviewModalContents"
          placeholder="파일에 대한 솔직한 리뷰를 작성해주세요."
          rows="8"
          max-rows="8"
          class="def-textarea"
        ></b-form-textarea>
        <b-button class="def-btn-off def-btn">작성완료</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import PurchaseRecentBoard from "@/components/board/purchaseBoard/MyRecentList.vue";
import PurchaseProductList from "@/components/product/PurchaseProductList.vue";
import tableList from "@/api/board.json";
import productList from "@/api/product.json";
import StarRating from "vue-star-rating";
import modalImg from "@/assets/images/my_purchase_modal.png";

export default {
  name: "purchaseInfo",
  components: {
    MyPurchaseHeader,
    PurchaseRecentBoard,
    PurchaseProductList,
    StarRating,
  },
  data() {
    return {
      tableList,
      productList,
      recentTableList: [],
      likeProductList: [],
      reviewModalContents: "",
      modalImg: modalImg,
    };
  },
  methods: {
    getDataList() {
      this.recentTableList = this.tableList.slice(1, 3);
      for (var i = 0; i < this.productList.length; i++) {
        if (this.productList[i].myPurchase == true) {
          this.likeProductList.push(this.productList[i]);
        }
      }
    },
    hideModal() {
      this.$refs["review-modal"].hide();
    },
  },
  mounted() {
    this.getDataList();
    this.$refs["review-modal"].show();
  },
};
</script>
<style>
.my-purchase-like-header,
.recent-buy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #333333;
}
.my-purchase-like-header h2,
.recent-buy-header h2 {
  font-size: 1.2rem;
  font-weight: 500;
}
.my-purchase-like-header a,
.recent-buy-header a {
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 400;
}
.recent-buy-header a svg {
  width: 12px;
  margin-left: 5px;
}
.recent-buy-body table td a.down {
  color: #6e3cbc;
}
.recent-buy-body table td button svg,
.recent-buy-body table td a.down svg {
  margin-right: 5px;
}
.recent-buy-body table td button:hover,
.recent-buy-body table td button {
  padding: 0;
  background: unset;
  color: #6a707e;
  fill: #6a707e;
  font-size: 0.9rem;
  font-weight: 500;
  border: 0;
}
.recent-buy-body table td button.review-write {
  color: #c772c4;
  fill: #c772c4;
}

/* modal */
#review-modal .modal-dialog {
  margin-top: 15%;
}
#review-modal .modal-content {
  border-radius: 10px;
}
#review-modal .modal-body {
  padding: 33px 30px;
  color: #000000;
}
#review-modal .review-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 9px;
  border-bottom: 2px solid #f0f0f0;
}
#review-modal .review-modal-header h2 {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}
#review-modal .review-modal-header button.close {
  margin-top: -3px;
  background: unset;
  padding: 0;
  border: 0;
}
#review-modal .review-modal-header button.close svg {
  fill: #6a707e;
}
#review-modal .review-modal-body {
  margin-bottom: 18px;
}
#review-modal .review-modal-footer h2,
#review-modal .review-modal-body .star-point h2,
#review-modal .review-modal-body h3 {
  font-size: 0.9rem;
  font-weight: 500;
}
#review-modal .review-modal-body .prod-info {
  display: flex;
  margin-bottom: 26px;
}
#review-modal .review-modal-body .prod-info .img {
  width: 97px;
  height: 75px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#review-modal .review-modal-body .prod-info .txt {
  position: relative;
  padding: 0 0 0 10px;
}
#review-modal .review-modal-body .prod-info .txt h4 {
  margin: 0 0 4px 0;
  font-size: 0.9rem;
  font-weight: 400;
}
#review-modal .review-modal-body .prod-info .txt P {
  margin: 0;
  color: #e35353;
  font-size: 0.9rem;
  font-weight: 400;
}
#review-modal .review-modal-body .prod-info .txt ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  bottom: 0;
  left: 10px;
}
#review-modal .review-modal-body .prod-info .txt ul li {
  padding-right: 16px;
  color: #707070;
  font-size: 0.8rem;
  font-weight: 500;
}
#review-modal .review-modal-body .prod-info .txt ul li:last-child {
  padding-right: 0;
}
#review-modal .review-modal-body .prod-info .txt ul li b {
  color: #202020;
}
#review-modal .review-modal-body .star-point h2 span {
  margin-bottom: 10px;
  color: #8b8b8b;
  font-size: 0.8rem;
  font-weight: 300;
}
#review-modal .review-modal-body .star-point-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 4px;
  padding: 17px 0;
}
#review-modal .review-modal-footer textarea {
  margin-bottom: 22px;
}
#review-modal .review-modal-footer textarea::placeholder {
  color: #bebebe;
  font-size: 0.9rem;
  font-weight: 400;
}
#review-modal .review-modal-footer .btn {
  width: 100%;
  padding: 12px 0;
  background-color: #424a5d;
  font-size: 1rem;
  font-weight: 500;
}
</style>
