<template>
  <div class="cert-wrap">
    <div class="cert-inner">
      <b-container>
        <div class="img">
          <img :src="cert" />
        </div>
        <div class="txt">
          <h2>
            상품 구매 또는 결제수단 이용 시<br />제 3자 무단 사용을 방지하기
            위해 <b>본인인증</b>이 필요합니다.
          </h2>
          <p>
            * 타인의 개인정보를 도용할 경우 관계법에 의해 처벌될 수 있습니다.
          </p>
        </div>
        <div class="phone-cert box-shadow" v-b-modal.cert-modal>
          <span><img :src="phone" /></span>
          <div class="phone-txt">
            <h2>휴대폰 인증</h2>
            <p>본인명의 휴대폰으로 인증하기</p>
          </div>
        </div>
      </b-container>
    </div>

    <b-modal id="cert-modal" ref="cert-modal" hide-footer hide-header>
      <div class="cert-modal-header">
        <h2>휴대전화 본인인증</h2>
      </div>
      <div class="cert-modal-body">
        <h3>
          본인인증 안내
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-exclamation-circle"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
            />
          </svg>
        </h3>
        <b-input-group>
          <b-form-input
            type="text"
            placeholder="이름입력"
            v-model="name"
          ></b-form-input>
        </b-input-group>
        <b-input-group class="register-group">
          <b-form-input
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="6"
            v-model="firstRRN"
            class="tf_register"
            placeholder="주민등록번호 앞6자리"
          ></b-form-input>
          <span>-</span>
          <b-form-input
            type="text"
            pattern="[0-9]*"
            inputmode="numeric"
            maxlength="1"
            v-model="secondRRN"
            class="fr_register"
            placeholder=""
          ></b-form-input>
          <span class="dot">••••••</span>
        </b-input-group>

        <b-form-group class="phone-radio-group" v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            id="phone-btns"
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="phone-radios-btn"
            buttons
          ></b-form-radio-group>
        </b-form-group>
      </div>
      <div class="cert-modal-footer">
        <a href="#" @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a href="#" class="def-btn-on def-btn">확인</a>
      </div>
    </b-modal>

    <div class="txt-box">
      <ul>
        <li class="all-btn">휴대전화 인증 전체 동의</li>
      </ul>
    </div>
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
import cert from "@/assets/images/cert_01.png";
import phone from "@/assets/images/icon_phone_cert.png";

export default {
  name: "cert-skin",
  data() {
    return {
      cert: cert,
      phone: phone,
      name: "",
      firstRRN: "",
      secondRRN: "",
      selected: "skt",
      options: [
        { text: "SKT", value: "skt" },
        { text: "KT", value: "kt" },
        { text: "LGU+", value: "lgu" },
        { text: "알뜰폰", value: "ex" },
      ],
    };
  },
  methods: {
    hideModal() {
      this.$refs["cert-modal"].hide();
    },
  },
};
</script>
<style>
.cert-wrap {
  position: relative;
  height: calc(100vh - 331px);
}
.cert-inner {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  transform: translateY(-50%);
}
.cert-wrap .img {
  margin-bottom: 21px;
}
.cert-wrap .txt {
  margin-bottom: 51px;
  text-align: center;
}
.cert-wrap .txt h2 {
  margin-bottom: 14px;
  color: #333333;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
}
.cert-wrap .txt h2 b {
  color: #6e3cbc;
  font-weight: 500;
}
.cert-wrap .txt p {
  color: #989898;
  font-size: 0.9rem;
  font-weight: 400;
}
.phone-cert {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 389px;
  margin: auto;
  padding: 13px 29px;
  border-radius: 6px;
}
.phone-cert:hover {
  cursor: pointer;
}
.phone-cert span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  margin-right: 24px;
  background-color: #fafafc;
  border-radius: 100%;
}
.phone-cert span img {
  width: 30px;
}
.phone-txt h2 {
  margin-bottom: 4px;
  color: #333333;
  font-size: 1.3rem;
  font-weight: 500;
}
.phone-txt p {
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
}
#cert-modal .modal-body {
  padding: 31px 25px;
  text-align: center;
}
#cert-modal .cert-modal-body {
  padding: 0 15px;
}
#cert-modal h2 {
  margin-bottom: 10px;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}
#cert-modal h3 {
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 30px;
  color: #000000;
  font-size: 0.8rem;
  font-weight: 500;
}
#cert-modal h3 svg {
  margin-left: 5px;
  color: #fe9074;
}
#cert-modal p {
  margin-bottom: 10px;
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 500;
}
.cert-modal-footer {
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
}
.cert-modal-footer a {
  width: 100%;
  flex-grow: 1;
  min-width: unset;
  margin-left: 5px;
  margin-right: 5px;
}
#cert-modal .modal-content {
  text-align: left;
  border-radius: 12px;
}
#cert-modal .modal-dialog {
  width: 466px;
  margin-top: 20%;
}
.cert-modal-body input {
  margin-bottom: 10px;
  background-color: #fafafa;
  border: 0;
  border-radius: 4px !important;
}
.cert-modal-body input::placeholder {
  color: #bebebe;
  font-size: 0.8rem;
  font-weight: 400;
}
.cert-modal-body .register-group {
  align-items: center;
  margin-bottom: 20px;
}
.cert-modal-body .register-group input {
  margin-bottom: 0;
}
.cert-modal-body .register-group span {
  padding: 0 9px;
}
.cert-modal-body .tf_register {
  width: 50%;
  flex: unset;
}
.cert-modal-body .fr_register {
  width: 29px;
  flex: unset;
}
.cert-modal-body .dot {
  font-size: 2rem;
  flex-grow: 1;
  font-weight: bold;
}
.phone-radio-group #phone-btns {
  width: 100%;
  margin-bottom: 37px;
}
.phone-radio-group #phone-btns label {
  background-color: #fff;
  padding: 9px 0;
  color: #707070;
  font-size: 0.8rem;
  font-weight: 400;
  border: 1px solid #707070;
}
.phone-radio-group #phone-btns label.active {
  background-color: #300474;
  color: #fff;
  border-color: #300474;
}
.phone-radio-group #phone-btns label input {
  display: none;
}
/*
==================================================================================
==================================================================================
==================================================================================
 */
</style>
