<template>
  <div class="my-coupon-wrap mb-100">
    <MyPurchaseHeader />

    <div class="coupon-inner">
      <div class="coupon-header">
        <h2>보유쿠폰</h2>
        <div class="coupon-btn-area">
          <b-button class="list-order-btn active">발급순</b-button>
          <b-button class="list-order-btn">유효기간순</b-button>
          <b-button class="coupon-add-btn" v-b-modal.coupon-modal
            >쿠폰등록하기</b-button
          >
        </div>
      </div>
      <!-- 있을 경우 -->
      <div class="coupon-list">
        <a class="list-item" v-for="(item, i) in couponList" :key="i">
          <img
            class="img"
            :src="require(`@/assets/images/${item.thumb}.png`)"
          />
        </a>
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

      <!-- 없을 경우 -->
      <!-- <div class="coupon-list">
        <div class="not-txt">보유 쿠폰이 없습니다.</div>
      </div>

      <div class="info">
        <h2>쿠폰안내</h2>
        <ul>
          <li>결제시 쿠폰을 선택 적용해야 할인을 받을 수 있습니다.</li>
          <li>
            쿠폰마다 사용가능한 조건과 할인혜택이 다르므로 확인 부탁드립니다.
          </li>
          <li>쿠폰에 명시된 유효기간 내에서만 사용이 가능합니다.</li>
          <li>
            사용된 쿠폰은 해당 주문 취소 시 재사용이 가능합니다.<br />단
            유효기간이 지난 쿠폰은 주문 취소 시에 재사용 할 수 없습니다.
          </li>
        </ul>
      </div> -->
    </div>

    <b-modal id="coupon-modal" ref="coupon-modal" hide-footer hide-header>
      <h2>쿠폰번호를 입력해주세요.</h2>
      <b-form-input
        type="text"
        placeholder="예) 2021-1212-09164"
        v-model="couponNum"
      ></b-form-input>
      <div class="coupon-modal-footer">
        <a @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a class="def-btn-on def-btn">등록하기</a>
      </div>
    </b-modal>
  </div>
</template>
<script>
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";

export default {
  name: "my-coupon-skin",
  components: {
    MyPurchaseHeader,
  },
  data() {
    return {
      pageNext: pageNext,
      pagePrev: pagePrev,
      couponList: [
        { thumb: "my_coupon" },
        { thumb: "my_coupon" },
        { thumb: "my_coupon" },
      ],
      couponNum: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs["coupon-modal"].hide();
    },
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
/* Modal */
#coupon-modal {
  margin-top: 15%;
}
#coupon-modal .modal-content {
  border-radius: 10px;
}
#coupon-modal .modal-body {
  padding: 44px 56px;
}
#coupon-modal h2 {
  margin-bottom: 11px;
  color: #333333;
  font-size: 1rem;
  font-weight: 500;
}
#coupon-modal input {
  margin-bottom: 15px;
}
#coupon-modal input::placeholder {
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 400;
}
#coupon-modal .coupon-modal-footer {
  display: flex;
}
#coupon-modal .coupon-modal-footer .def-btn {
  width: 100%;
  flex-grow: 1;
  margin-right: 10px;
}
#coupon-modal .coupon-modal-footer .def-btn:last-child {
  margin-right: 0;
}
#coupon-modal .form-control:focus {
  border-color: #6e3cbc;
  box-shadow: 0 0 0 0.25rem rgb(110, 60, 188, 0.25);
}

.coupon-list {
  margin-bottom: 50px;
}
.coupon-inner .coupon-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
}
.coupon-header h2 {
  color: #333333;
  font-size: 1.2rem;
  font-weight: 500;
}
.coupon-header .coupon-btn-area .list-order-btn {
  position: relative;
  margin: 0 10px 0 0;
  padding: 0 10px 0 0;
  background: unset;
  color: #bebebe;
  font-size: 0.9rem;
  font-weight: 500;
  border: 0;
}
.coupon-header .coupon-btn-area .list-order-btn.active {
  color: #6a707e;
}
.coupon-header .coupon-btn-area .list-order-btn:focus,
.coupon-header .coupon-btn-area .list-order-btn.active:focus {
  box-shadow: unset;
}
.coupon-header .coupon-btn-area .list-order-btn:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 50%;
  background-color: #6a707e;
}
.coupon-header .coupon-btn-area .list-order-btn:nth-child(2):after {
  display: none;
}
.coupon-header .coupon-btn-area .coupon-add-btn {
  margin-left: 5px;
  padding: 8px 17px;
  background-color: #9272ac;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border-color: #9272ac;
  border-radius: 30px;
}

/* 페이지네이션 */
.coupon-inner .pagenation ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.coupon-inner .pagenation ul li a {
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
.coupon-inner .pagenation ul li a.active {
  color: #7f63f4;
  background-color: #f1eefd;
}

/* 안내 */
.coupon-inner .info {
  padding: 38px 40px;
  background-color: #fafafa;
  border-radius: 10px;
}
.coupon-inner .info h2 {
  margin-bottom: 22px;
  color: #646464;
  font-size: 1rem;
  font-weight: bold;
}
.coupon-inner .info ul {
  list-style: dot;
}
.coupon-inner .info ul li {
  position: relative;
  margin-bottom: 5px;
  padding-left: 10px;
  color: #818181;
  font-size: 0.9rem;
  font-weight: 300;
}
.coupon-inner .info ul li:after {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  width: 4px;
  height: 4px;
  background-color: #bebebe;
  border-radius: 100%;
}
</style>
