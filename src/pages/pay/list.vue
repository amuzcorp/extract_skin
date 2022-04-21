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
              <a href="" class="tit">
                사람,동물,건물 등 직접그린 일러스트 모음집 팝니다.
                <span class="zip"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-folder"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
                    /></svg
                  >일러스트 모음집.ai</span
                >
              </a>
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
                        <div class="slider-wrap">
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
                                <h2>{{ card.label }}</h2>
                              </template>
                              <div v-else v-b-modal.add-card-modal>
                                <img
                                  class="img-non"
                                  src="@/assets/images/card_02.png"
                                />
                                <h2 class="img-non">등록된 카드가 없습니다.</h2>
                              </div>
                            </a>
                          </VueSlickCarousel>
                        </div>
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
                <h3>세금계산서 발행</h3>
                <b-tabs class="pay-select tax-select" content-class="mt-4">
                  <b-tab title="신청안함"></b-tab>
                  <b-tab title="세금계산서 발행" active>
                    <div class="tax-inner">
                      <b-input-group>
                        <p class="label">상호명</p>
                        <b-form-input
                          type="text"
                          placeholder="상호명을 입력해주세요."
                          v-model="taxName"
                        ></b-form-input>
                      </b-input-group>
                      <b-input-group>
                        <p class="label">사업자 등록번호</p>
                        <b-form-input
                          type="text"
                          placeholder="‘-‘없이 10자리를 입력해주세요."
                          v-model="taxNum"
                        ></b-form-input>
                      </b-input-group>
                      <b-input-group>
                        <p class="label">사업자 등록증</p>
                        <b-form-input
                          type="text"
                          placeholder="파일을 선택해주세요."
                          v-model="taxRegistration"
                        ></b-form-input>
                        <b-button class="coupon-btn">파일 선택</b-button>
                      </b-input-group>
                      <b-input-group>
                        <p class="label">이메일</p>
                        <b-form-input
                          type="text"
                          placeholder="이메일주소를 입력해주세요."
                          v-model="taxMail"
                        ></b-form-input>
                      </b-input-group>
                    </div>
                  </b-tab>
                </b-tabs>
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

                <router-link class="pay-btn" :to="{ name: 'payCom' }">
                  결제하기
                </router-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <b-modal id="add-card-modal" ref="add-card-modal" hide-footer hide-header>
      <h2>결제카드 추가 등록</h2>
      <div class="card-modal-body">
        <b-form-group v-slot="{ cardOver }">
          <p class="label">카드선택</p>
          <b-form-radio-group
            id="btn-radios-1"
            v-model="cardOverSelected"
            :options="cardOverOptions"
            :aria-describedby="cardOver"
            name="radios-btn-default"
            buttons
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group v-slot="{ ariaDescribedby }">
          <p class="label">카드구분</p>
          <b-form-radio
            v-model="cardCorpSelected"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="personal"
            >개인카드</b-form-radio
          >
          <b-form-radio
            v-model="cardCorpSelected"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="corporation"
            >법인카드</b-form-radio
          >
        </b-form-group>

        <b-input-group>
          <p class="label">카드번호</p>
          <b-form-input
            type="text"
            placeholder="14 - 16 자리"
            v-model="cardNum"
          ></b-form-input>
        </b-input-group>
        <b-input-group>
          <p class="label">유효기간</p>
          <b-form-input
            type="text"
            placeholder="MM/YY"
            v-model="cardPeriod"
          ></b-form-input>
        </b-input-group>
        <b-input-group>
          <p class="label">생년월일</p>
          <b-form-input
            type="text"
            placeholder="YYMMDD"
            v-model="cardBirth"
          ></b-form-input>
        </b-input-group>
        <b-input-group>
          <p class="label">카드 비밀번호</p>
          <b-form-input
            type="text"
            placeholder="숫자 4자리"
            v-model="cardPas"
          ></b-form-input>
        </b-input-group>
      </div>
      <div class="card-modal-footer">
        <a @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a class="def-btn-on def-btn">등록하기</a>
      </div>
    </b-modal>
  </div>
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
      taxName: "",
      taxNum: "",
      taxRegistration: "",
      taxMail: "",
      isCouponTotalPice: "25,000",
      taxList: [
        { text: "신청안함", value: "taxNon" },
        { text: "세금계산서 발행", value: "taxPublish" },
      ],
      cardSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        variableWidth: true,
        centerMode: true,
      },
      cardList: [
        { label: "Any Plus 하나은행 l 신용 (4892)", thumb: "card_01" },
        {
          label: "",
          thumb: "",
        },
      ],
      isCardSelected: "",
      cardCorpSelected: "personal",
      cardOverSelected: "domestic",
      cardOverOptions: [
        {
          text: "국내카드",
          value: "domestic",
        },
        {
          text: "해외카드",
          value: "overseas",
        },
      ],
      cardNum: "",
      cardPeriod: "",
      cardBirth: "",
      cardPas: "",
    };
  },
  methods: {
    cardSelected(idx) {
      this.isCardSelected = idx;
    },
    hideModal() {
      this.$refs["add-card-modal"].hide();
    },
  },
};
</script>
<style>
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
.pay-list-wrap table td .zip svg {
  margin-right: 8px;
}
.pay-list-wrap table td a {
  color: inherit;
  transition: all ease 0.35s;
}
.pay-list-wrap table td a:hover {
  text-decoration: underline;
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
  display: inline-block;
  width: 100%;
  padding: 15px 0;
  background-color: #300474;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 6px;
  text-align: center;
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
#add-card-modal .input-group input::placeholder,
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
.payment-wrap {
  margin-bottom: 200px;
}
.discount-footer h3,
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
.pay-select .slick-list {
  padding-left: 0 !important;
}
.pay-select .slick-slider {
  width: 400px;
  margin-top: 30px;
  padding: 0 41px 0 0;
}
.pay-select .slick-slider {
}
.pay-select .slick-arrow {
  background: red;
}
.pay-select .slider-wrap {
  width: 100%;
  overflow: hidden;
}
.pay-select .tab-content .nav-tabs li:last-child a:before,
.pay-select .tab-content .nav-tabs li a:after {
  display: none;
}
.discount-body .card-slick-item {
  padding-right: 40px;
}
.discount-body .card-slick-item img {
  margin-bottom: 10px;
  width: 210px;
  min-width: 210px;
  transition: all ease 0.3s;
  border-radius: 10px;
}
.discount-body .card-slick-item .img-non {
  border-radius: 16px;
  color: #aaaaaa;
  font-size: 0.8rem;
  font-weight: 500;
}
.discount-body .card-slick-item img:hover {
  box-shadow: 2px 3px 10px rgb(119 119 119 / 20%);
  cursor: pointer;
}
.discount-body .card-slick-item h2 {
  margin: 0;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
}
.discount-body .slick-next {
  width: 35px;
  height: 35px;
  left: 100%;
  background: center / contain no-repeat
    url("@/assets/images/chervon_next_02.png");
}
.discount-body .slick-next:before {
  display: none;
}
.tax-inner .input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.tax-inner .label {
  width: 150px;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
}
.tax-inner input {
  width: 350px;
  max-width: 350px;
  height: 45px;
  margin-right: 10px;
  background: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 6px !important;
}
.tax-inner input::placeholder {
  color: #bebebe;
  font-size: 0.8rem;
  font-weight: 400;
}
.tax-inner button {
  min-width: 125px;
  border-radius: 6px !important;
}
#add-card-modal .modal-md {
  margin-top: 15%;
}
#add-card-modal .modal-body {
  padding: 44px 30px;
}
#add-card-modal .modal-body h2 {
  padding-bottom: 9px;
  margin-bottom: 20px;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #f0f0f0;
}
#add-card-modal .form-group > div {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
#add-card-modal .input-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
#add-card-modal .input-group .label,
#add-card-modal .form-group .label {
  width: 120px;
  min-width: 120px;
  margin-bottom: 0;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
#add-card-modal .form-group .btn-group {
  width: 100%;
}
#add-card-modal .form-group span {
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-right: 10px;
  padding: 11px 0;
  background-color: #fff;
  border: 1px solid #bebebe;
  border-radius: 4px !important;
}
#add-card-modal .form-group .btn {
  flex-grow: 1;
  margin-right: 10px;
  padding: 0;
  background: unset;
  color: #000000;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
  border-radius: 4px !important;
}
#add-card-modal .custom-radio {
  margin-right: 20px;
}
#add-card-modal .custom-radio label {
  position: relative;
  padding-left: 15px;
}
#add-card-modal .input-group input {
  height: 42px;
  border: 1px solid #bebebe;
  border-radius: 4px;
}
#add-card-modal .input-group input:focus {
  box-shadow: unset;
  border-color: #362189;
}
#add-card-modal .form-group .btn:last-child,
#add-card-modal .custom-radio:last-child,
#add-card-modal .form-group .btn:last-child span {
  margin-right: 0;
}
#add-card-modal .form-group .btn input,
#add-card-modal .custom-radio input {
  display: none;
}
#add-card-modal input[type="radio"]:checked + span {
  border-color: #6e3cbc;
  color: #6e3cbc;
}
#add-card-modal .custom-radio label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border: 1px solid #707070;
  border-radius: 100%;
}
#add-card-modal .custom-radio label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 100%;
}
#add-card-modal .custom-radio input[type="radio"]:checked + label::before {
  border-color: #6e3cbc;
}
#add-card-modal .custom-radio input[type="radio"]:checked + label::after {
  background-color: #6e3cbc;
}
#add-card-modal .custom-radio label:hover {
  cursor: pointer;
}
.card-modal-footer {
  display: flex;
}
.card-modal-footer .def-btn {
  height: 50px;
  flex-grow: 1;
  margin-right: 10px;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 50px;
}
.card-modal-footer .def-btn:last-child {
  margin-right: 0;
}
.card-modal-body {
  margin-bottom: 40px;
}
</style>
