<template>
  <div class="pay-list-wrap">
    <b-container>
      <h2>결제 상품 정보</h2>
      <table>
        <thead>
          <tr>
            <th colspan="2">주문상품</th>
            <th>카테고리</th>
            <th>상품가격</th>
            <th>상품형태</th>
            <th>상품구분</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="thumb-td">
              <img :src="prodView_01" class="thumb" />
            </td>
            <td>
              <span class="tit"
                >사람,동물,건물 등 직접그린 일러스트 모음집 팝니다.</span
              >
              <span class="zip">일러스트 모음집.ai</span>
            </td>
            <td class="text-center">디자인 / 일러스트</td>
            <td class="text-center">25,000원</td>
            <td class="text-center">AI</td>
            <td class="text-center">양식+데이터</td>
          </tr>
        </tbody>
      </table>

      <div class="count-wrap">
        <ul>
          <li>주문상품금액 <span class="price">25,000원</span></li>
          <li><span class="divider"></span></li>
          <li>할인금액 <span class="price">0원</span></li>
          <li>
            <div class="divider-sum">
              <span class="divider"></span><span class="divider"></span>
            </div>
          </li>
          <li>
            총 주문금액 <span class="price"><b>25,000</b>원</span>
          </li>
        </ul>
      </div>

      <div class="payment-wrap">
        <b-row>
          <b-col cols="7">
            <div class="discount-wrap">
              <div class="discount-header">
                <h2>할인적용</h2>
                <div class="input-group">
                  <h3>보유 쿠폰</h3>
                  <b-form-input
                    type="text"
                    v-model="isCouponNum"
                    class="coupon-input"
                    :placeholder="isCouponText"
                  ></b-form-input>
                  <b-button class="coupon-btn">쿠폰 적용</b-button>
                </div>
                <div class="input-group">
                  <h3>적용 금액</h3>
                  <div class="text-price">
                    <b-form-input
                      type="text"
                      v-model="isCouponPrice"
                      class="coupon-price"
                      :placeholder="isCouponTotalPice"
                    ></b-form-input>
                    <span>원</span>
                  </div>
                </div>
              </div>

              <div class="discount-body">
                <h3>결제 수단 선택</h3>
                <b-tabs class="pay-select" content-class="mt-3">
                  <!-- 카드 -->
                  <b-tab title="신용카드" active>
                    <b-tabs content-class="mt-3">
                      <b-tab title="등록된 결제 카드" active>
                        <VueSlickCarousel v-bind="cardSettings">
                          <a
                            v-for="(card, idx) in cardList"
                            :key="idx"
                            class="card-slick-item"
                            @click="cardSelected(idx)"
                          >
                            <template v-if="card.thumb">
                              <img
                                :src="
                                  require(`@/assets/images/${card.thumb}.png`)
                                "
                              />
                            </template>
                            <template v-else
                              ><div class="img-non"></div
                            ></template>
                            <h2>{{ card.label }}</h2>
                          </a>
                        </VueSlickCarousel>
                      </b-tab>
                      <b-tab title="기타 카드"><p>기타 카드</p></b-tab>
                    </b-tabs>
                  </b-tab>
                  <!-- 실시간 계좌이체 -->
                  <b-tab title="실시간 계좌이체">
                    <div class="way-trans">실시간 계좌이체</div>
                  </b-tab>
                  <!-- 무통장입금 -->
                  <b-tab title="무통장입금">
                    <div class="way-non">무통장입금</div>
                  </b-tab>
                  <!-- 휴대폰결제 -->
                  <b-tab title="휴대폰결제">
                    <div class="way-phone">휴대폰결제</div>
                  </b-tab>
                </b-tabs>
              </div>
              <div class="discount-footer">
                <h2>세금계산서 발행</h2>
                <b-form-group label="Radios using options" v-slot="{ tax }">
                  <b-form-radio-group
                    id="radio-group-2"
                    v-model="taxSelected"
                    :options="taxList"
                    :aria-describedby="tax"
                    name="radio-options"
                  ></b-form-radio-group>
                </b-form-group>
              </div>
            </div>
          </b-col>
          <b-col cols="5">
            <div class="payment-info">
              <div class="payment-info-header">
                <h2>결제정보</h2>
                <ul>
                  <li>
                    <span class="tit">주문상품금액</span
                    ><span class="price">25,000원</span>
                  </li>
                  <li>
                    <span class="tit">쿠폰적용금액</span
                    ><span class="price">-원</span>
                  </li>
                  <span class="divider"></span>
                  <li>
                    <span class="tit">총 결제금액</span
                    ><span class="price"><b>25,000</b>원</span>
                  </li>
                </ul>
              </div>
              <div class="payment-info-footer">
                <div class="order-agree">
                  <h2>주문 동의</h2>
                  <ul class="order-list">
                    <li>구매 후 바이러스 검사를 꼭 하시길 권장합니다.</li>
                    <li>한번 결제정보가 저장되면 이후 결제요청은 없습니다.</li>
                    <li>
                      파일서비스는 자료제공형태의 서비스이므로, 수령하신
                      이후에는 환불이 불가합니다.
                    </li>
                  </ul>
                  <b-form-checkbox
                    id="order-check"
                    v-model="isOrderCheck"
                    name="order-check"
                    value="agree"
                    unchecked-value="not_agree"
                  >
                    내용을 확인하였으며, 결제에 동의합니다.
                  </b-form-checkbox>
                </div>
                <b-button class="pay-btn">결제하기</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>

  <!-- <div>
    <a @click="$router.go(-1)" ref="back_link">
      <h2>뒤로가기</h2>
    </a>
    <h2>Product View</h2>
  </div> -->
  <!-- <b-row class="align-items-center">
            <b-col cols="6"></b-col>
          </b-row>  -->
</template>
<script>
import prodView_01 from "@/assets/images/prod_view_01.png";
import card from "@/assets/images/card_01.png";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "payList-skin",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      prodView_01: prodView_01,
      card: card,
      isOrderCheck: "",
      isCouponText: "사용가능한쿠폰없음",
      isCouponNum: "",
      taxSelected: "",
      isCouponPrice: "",
      isCouponTotalPice: "25,000",
      taxList: [
        { text: "신청안함", value: "taxNon" },
        { text: "세금계산서 발행", value: "taxPublish" },
      ],
      cardSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      cardList: [
        { label: "Any Plus 하나은행 l 신용 (4892)", thumb: "card_01" },
        {
          label: "Any Plus 하나은행 l 신용 (4892)",
          thumb: "",
        },
        {
          label: "Any Plus 하나은행 l 신용 (4892)",
          thumb: "",
        },
      ],
      isCardSelected: "",
    };
  },
  methods: {
    cardSelected(idx) {
      this.isCardSelected = idx;
    },
  },
};
</script>
<style>
.pay-select .nav-tabs {
  border: 0;
}
.pay-select .nav-tabs li a::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #d5d5d5;
  border-radius: 100%;
  cursor: pointer;
}
.pay-select .nav-tabs li a.active:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2.5px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #300474;
  border-radius: 100%;
}
.pay-select .nav-tabs li a.active:before {
  border-color: #300474;
}
.pay-select .nav-tabs li a {
  position: relative;
  padding-left: 20px;
  color: #333333;
  border: 0;
}
.pay-select .nav-tabs li a:hover {
  color: #333333;
}
.pay-select .tab-content .nav-tabs li a {
  padding: 0 30px 0 0;
  color: #aaaaaa;
}
.pay-select .tab-content .nav-tabs li a.active {
  font-weight: 500;
  color: #333;
}
.pay-select .tab-content .nav-tabs li a:before {
  top: 50%;
  left: auto;
  right: 15px;
  transform: translateY(-50%);
  width: 1.5px;
  height: 50%;
  background-color: #333;
  border: 0;
  border-radius: 0;
}
.pay-select .slick-slider {
  margin-top: 30px;
}
.pay-select .tab-content .nav-tabs li:last-child a:before,
.pay-select .tab-content .nav-tabs li a:after {
  display: none;
}
.discount-body .card-slick-item img {
  margin-bottom: 10px;
  width: 210px;
}
.discount-body .card-slick-item h2 {
  margin: 0;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
}
/*
==================================================================================
==================================================================================
==================================================================================
 */
.pay-list-wrap h2 {
  margin-bottom: 16px;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
}
.pay-list-wrap table {
  width: 100%;
  margin-bottom: 20px;
  color: #333;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
}
.pay-list-wrap table th {
  padding: 15px 0;
  color: #848484;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #ededed;
  text-align: center;
}
.pay-list-wrap table .thumb-td {
  width: 135px;
}
.pay-list-wrap table td .thumb {
  width: 110px;
  border-radius: 12px;
}
.pay-list-wrap table td {
  padding: 30px 0;
  font-size: 0.9rem;
  font-weight: 400;
}
.pay-list-wrap table td .zip {
  display: block;
}
.count-wrap {
  margin-bottom: 20px;
}
.count-wrap ul {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 47px 0;
  background-color: #fafafa;
  border-radius: 6px;
}
.count-wrap ul li {
  margin-left: 30px;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
}
.count-wrap ul li:first-child {
  margin-left: 0;
}
.count-wrap ul li .price {
  margin-left: 20px;
}
.count-wrap ul li .price b {
  color: #e35353;
  font-weight: 500;
}
.count-wrap ul li .divider {
  display: block;
  width: 16px;
  height: 2px;
  background-color: #333;
}
.count-wrap ul li .divider-sum .divider:first-child {
  margin-bottom: 3px;
}
.payment-info {
  border: 1px solid #d5d5d5;
  border-radius: 14px;
}
.payment-info-header {
  padding: 39px 37px;
}
.payment-info-header h2 {
  margin-bottom: 21px;
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
}
.payment-info-header ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
  font-size: 1rem;
  font-weight: 400;
}
.payment-info-header ul .divider {
  display: block;
  width: 100%;
  height: 1px;
  margin: 20px 0 84px 0;
  background-color: #ededed;
}
.payment-info-header ul li:last-child .price {
  font-size: 1.3rem;
}
.payment-info-header ul li:last-child .price b {
  color: #e35353;
  font-size: 1.9rem;
  font-weight: 400;
}
.payment-info-footer {
  padding: 39px 37px 50px 37px;
  background-color: #fafafa;
  border-radius: 14px;
}
.payment-info-footer h2 {
  margin-bottom: 23px;
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
}
.payment-info-footer .order-list {
  margin-bottom: 74px;
}
.payment-info-footer .order-list li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 25px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.payment-info-footer .order-list li::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background: center / contain no-repeat url("@/assets/images/icon_check.png");
}
.payment-info-footer input {
  margin-right: 10px;
}
.payment-info-footer .custom-checkbox {
  position: relative;
  margin-bottom: 25px;
  color: #202427;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
}
.payment-info-footer .custom-checkbox::after {
  content: "(필수)";
  padding-left: 5px;
  color: #e35353;
}
.payment-info-footer .pay-btn {
  width: 100%;
  padding: 15px 0;
  background-color: #300474;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 6px;
}
.discount-body,
.discount-header {
  margin-bottom: 110px;
}
.discount-header h2 {
  margin-bottom: 25px;
  padding: 39px 0 16px 0;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;
}
.discount-header .input-group {
  position: relative;
  align-items: center;
  margin-bottom: 10px;
  color: #333333;
}
.discount-header .input-group h3 {
  margin-right: 35px;
  font-size: 1rem;
  font-weight: 400;
}
.discount-header .input-group input {
  width: 290px;
  max-width: 290px;
  height: 45px;
  margin-right: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 6px !important;
}
.discount-header .text-price {
  position: relative;
}
.discount-header .text-price span {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  color: #bebebe;
  font-size: 0.8rem;
}
.discount-header .input-group input::placeholder {
  color: #bebebe;
  font-size: 0.8rem;
}
.discount-header .input-group .form-control:focus {
  border-color: #300474;
  box-shadow: 0 0 0 0.25rem rgb(48 4 116 / 25%);
}
.discount-header .input-group .btn {
  width: 125px;
  height: 45px;
  padding: 0;
  background-color: #6a707e;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 45px;
  border-radius: 6px !important;
  text-align: center;
}
.discount-body h3 {
  padding-bottom: 16px;
  margin-bottom: 30px;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #ededed;
}
.order-agree .custom-checkbox label {
  position: relative;
  padding-left: 30px;
}
.order-agree .custom-checkbox label:hover {
  cursor: pointer;
}
.order-agree .custom-checkbox label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #6a707e;
  cursor: pointer;
}
.order-agree .custom-checkbox input[type="checkbox"] {
  display: none;
}
.order-agree .custom-checkbox input[type="checkbox"]:checked + label::before {
  content: "✓";
  color: #300474;
  line-height: 16px;
  border-color: #300474;
}
</style>
