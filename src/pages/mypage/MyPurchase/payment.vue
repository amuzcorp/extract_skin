<template>
  <div class="my-payment-wrap mb-100">
    <MyPurchaseHeader />

    <div class="my-payment-header">
      <h2 class="pay-tit">등록된 결제카드</h2>
    </div>

    <div class="my-payment-body">
      <b-row class="align-items-center">
        <b-col cols="7">
          <div class="card-slider-wrap">
            <VueSlickCarousel v-bind="cardSettings">
              <a
                v-for="(card, idx) in cardList"
                :key="idx"
                class="card-slick-item"
                @click="cardSelected(idx)"
                v-b-modal.add-card-modal
              >
                <template v-if="card.thumb">
                  <img
                    :src="require(`@/assets/images/${card.thumb}.png`)"
                    class="box-shadow"
                  />
                  <h2>{{ card.label }}</h2>
                </template>
              </a>
            </VueSlickCarousel>
          </div>
        </b-col>
        <b-col cols="5" class="text-center">
          <b-button class="card-regist-btn" v-b-modal.add-card-modal>
            + 카드정보 등록/변경
          </b-button>
        </b-col>
      </b-row>
    </div>

    <MyBoard :boardList="cardList" />

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
import MyPurchaseHeader from "@/components/MyPage/PurchaseHeader/index.vue";
import MyBoard from "@/components/board/paymentBoard/list.vue";
import cardList from "@/api/card.json";
import card from "@/assets/images/my_card.png";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  name: "my-payment-skin",
  components: {
    MyPurchaseHeader,
    MyBoard,
    VueSlickCarousel,
  },
  data() {
    return {
      cardList,
      card: card,
      cardSettings: {
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
      },
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
/* Body */
.my-payment-body {
  margin-bottom: 45px;
}
/* modal */
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
#add-card-modal .card-modal-footer {
  display: flex;
}
#add-card-modal .card-modal-footer .def-btn {
  width: 100%;
  height: 50px;
  flex-grow: 1;
  margin-right: 10px;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 50px;
}
#add-card-modal .card-modal-footer .def-btn:last-child {
  margin-right: 0;
}
#add-card-modal .card-modal-body {
  margin-bottom: 40px;
}
#add-card-modal .input-group input::placeholder {
  color: #bebebe;
  font-size: 0.8rem;
}
.card-regist-btn:focus,
.card-regist-btn:hover,
.card-regist-btn {
  padding: 11px 40px;
  background-color: #9272ac;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
}
/* Slider */
.card-slider-wrap .slick-slider {
  width: 500px;
  padding: 0;
}
.my-payment-wrap .card-slider-wrap .slick-list {
  padding: 0 !important;
}
.my-payment-wrap .card-slider-wrap .slick-track {
  margin-left: -50px;
}
.my-payment-wrap .card-slider-wrap .slick-slide {
  height: 231px;
  display: flex;
  align-items: center;
}
.card-slider-wrap .card-slick-item {
  padding-right: 40px;
}
.card-slider-wrap .card-slick-item img {
  margin-bottom: 10px;
  width: 210px;
  min-width: 210px;
  border-radius: 10px;
  transition: all ease 0.35s;
}
.card-slider-wrap .card-slick-item h2 {
  color: #333333;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  opacity: 0;
  transition: all ease 0.35s;
}
.card-slider-wrap .slick-current .card-slick-item h2 {
  opacity: 1;
}
.card-slider-wrap .slick-current .card-slick-item img {
  margin-bottom: 20px;
  transform: scale(1.1);
}
.card-slider-wrap .slick-dots {
  bottom: auto;
  top: -15px;
}
.card-slider-wrap .slick-dots li button:before {
  display: none;
}
.card-slider-wrap .slick-dots li button,
.card-slider-wrap .slick-dots li {
  width: 9px;
  height: 9px;
  line-height: 1;
}
.card-slider-wrap .slick-dots li button {
  padding: 0;
  border: 1px solid #362189;
  border-radius: 100%;
}
.card-slider-wrap .slick-dots li.slick-active button {
  background-color: #362189;
}
.card-slider-wrap .slick-arrow {
  width: 28px;
  height: 28px;
}
.card-slider-wrap .slick-next:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center / 80% no-repeat
    url("@/assets/images/card_slider_arrow_next.png");
  border-radius: 100%;
  opacity: 1;
  box-shadow: 1px 2px 10px rgb(119, 119, 119, 0.2);
}
.card-slider-wrap .slick-prev:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center / 80% no-repeat
    url("@/assets/images/card_slider_arrow_prev.png");
  border-radius: 100%;
  opacity: 1;
  box-shadow: 1px 2px 10px rgb(119, 119, 119, 0.2);
}

/* Header */
.my-payment-header {
  padding-bottom: 16px;
  margin-bottom: 28px;
  border-bottom: 1px solid #f2f2f2;
}
.my-payment-header .pay-tit {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
