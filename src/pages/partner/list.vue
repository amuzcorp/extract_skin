<template>
  <div class="partner-list-wrap">
    <div class="partner-list-inner">
      <h1>엑기스 파트너스 가입</h1>
      <div class="list-inner-row">
        <h2>전화번호</h2>
        <div class="row-input-group">
          <b-form-input
            type="text"
            placeholder="‘_’를 생략하고 입력해주세요."
            v-model="phone"
          ></b-form-input>
          <b-button>인증요청</b-button>
        </div>
      </div>
      <div class="list-inner-row">
        <h2>인증번호</h2>
        <div class="row-input-group">
          <div class="row-input-group-inner">
            <b-form-input
              type="text"
              placeholder="인증번호를 입력해주세요."
              v-model="certNum"
            ></b-form-input>
            <span>4:59</span>
          </div>
          <b-button>확인</b-button>
        </div>
      </div>
      <div class="list-inner-row mb-10">
        <div class="row-input-group">
          <div class="group-col">
            <h2>이름</h2>
            <b-form-input
              type="text"
              placeholder="신응수"
              v-model="name"
            ></b-form-input>
          </div>
          <div class="group-col">
            <h2>생년월일</h2>
            <b-form-input
              type="text"
              placeholder="1993.05.23"
              v-model="birt"
            ></b-form-input>
          </div>
          <div class="group-col">
            <h2>이메일</h2>
            <b-form-input
              type="text"
              placeholder="cwal@amuz.co.kr"
              v-model="mail"
            ></b-form-input>
          </div>
        </div>
      </div>
      <p>회원님의 엑기스 본인인증을 통해 확인된 내용입니다.</p>

      <div class="agree-list">
        <div class="list-item check">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              /></svg
            >본인의 인증정보가 맞는지 확인합니다. 본인이 아닌 경우 추후 수익금
            지급이 제한될 수 있습니다.
          </a>
        </div>

        <div class="list-item">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              /></svg
            >서비스 이용약관
          </a>

          <a class="view-btn" v-b-modal.service-modal>
            전문 보기<svg
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

        <div class="list-item">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              /></svg
            >개인정보 수집 및 이용 동의
          </a>

          <a class="view-btn" v-b-modal.privacy-modal>
            전문 보기<svg
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
      </div>
      <router-link :to="{ name: 'partnerShow' }" class="regist-btn"
        >가입하기</router-link
      >
    </div>

    <b-modal id="service-modal" ref="service-modal" hide-footer hide-header>
      <div class="service-modal-body">
        <p>
          회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스
          본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해
          확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.
        </p>
      </div>
      <div class="service-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>

    <b-modal id="privacy-modal" ref="privacy-modal" hide-footer hide-header>
      <div class="privacy-modal-body">
        <p>
          회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스
          본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해
          확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.회원님의 엑기스 본인인증을 통해 확인된
          내용입니다.
        </p>
      </div>
      <div class="privacy-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "partnerList",
  data() {
    return {
      phone: "",
      certNum: "",
      name: "",
      birt: "",
      mail: "",
    };
  },
  methods: {
    updateList(item) {
      item.value = !item.value;
    },
    hideModal() {
      this.$refs["service-modal"].hide();
      this.$refs["privacy-modal"].hide();
    },
  },
};
</script>
<style>
#service-modal .modal-dialog,
#privacy-modal .modal-dialog {
  margin-top: 15%;
}
#service-modal .modal-body,
#privacy-modal .modal-body {
  padding: 30px;
  border-radius: 13px;
}
#service-modal .service-modal-body,
#privacy-modal .privacy-modal-body {
  height: 450px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
#service-modal .service-modal-footer .btn,
#privacy-modal .privacy-modal-footer .btn {
  width: 100%;
}
/*  */
.partner-list-wrap {
  position: relative;
  height: calc(100vh - 331px);
}
.partner-list-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 674px;
  transform: translate(-50%, -50%);
}
.partner-list-inner .list-inner-row:last-child {
  margin-bottom: 10px;
}
.partner-list-inner h1 {
  margin-bottom: 30px;
  padding-bottom: 11px;
  color: #333333;
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 1px solid #d5d5d5;
  text-align: center;
}
.list-inner-row {
  margin-bottom: 30px;
}
.list-inner-row h2 {
  margin-bottom: 10px;
  color: #333333;
  font-size: 1rem;
  font-weight: 500;
}
.list-inner-row .row-input-group {
  display: flex;
}
.row-input-group .form-control {
  width: 276px;
  height: 48px;
  margin-right: 15px;
}
.row-input-group .btn {
  padding: 0 23px;
  background-color: #6a707e;
  font-size: 1rem;
  border: 0;
}
.row-input-group .group-col .form-control {
  width: 100%;
}
.row-input-group .group-col:nth-child(1) {
  width: 100px;
  margin-right: 10px;
}
.row-input-group .group-col:nth-child(2) {
  width: 130px;
  margin-right: 10px;
}
.row-input-group .group-col:nth-child(3) {
  width: 280px;
}
.partner-list-inner p,
.row-input-group .form-control::placeholder {
  color: #aaaaaa;
  font-size: 1rem;
  font-weight: 400;
}
.agree-list {
  margin: 60px 0 5px 0;
}
.agree-list .list-item {
  position: relative;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  transition: all ease 0.35s;
}
.agree-list .list-item:hover {
  cursor: pointer;
}
.agree-list .list-item a {
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all ease 0.35s;
}
.agree-list .list-item a svg {
  margin-right: 10px;
  color: #bebebe;
  transition: all ease 0.35s;
}
.agree-list .list-item .view-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.agree-list .list-item .view-btn svg {
  width: 12px;
  margin-right: auto;
  margin-left: 5px;
}
.agree-list .list-item:hover a svg,
.agree-list .list-item:hover a,
.agree-list .list-item:hover,
.agree-list .list-item.check a svg,
.agree-list .list-item.check a,
.agree-list .list-item.check {
  border-color: #6e3cbc;
  color: #6e3cbc;
}
.partner-list-inner .regist-btn {
  display: inline-block;
  width: 100%;
  padding: 16px;
  background-color: #300474;
  color: #fff;
  border: 0;
  border-radius: 6px;
  text-align: center;
}
.row-input-group-inner {
  position: relative;
}
.row-input-group-inner span {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  color: #de2121;
  font-size: 0.9rem;
  font-weight: 400;
}
</style>
