<template>
  <div class="prod-create-wrap">
    <div class="create-form-group">
      <h5 class="py-3">알림 수신동의</h5>
      <div class="form-group">
        <span class="label">상품 문의 및 판매알림<br />이메일 수신동의</span>
        <b-form-group class="checkbox-group">
          <b-checkbox-group><b-checkbox>전체동의</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>상품 문의</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>마케팅 정보</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>판매 알림</b-checkbox></b-checkbox-group>
        </b-form-group>
      </div>

      <div class="form-group">
        <span class="label">"카카오톡 및 문자" 상품 문의 및<br />판매 알림 수신동의</span>
        <b-form-group class="checkbox-group">
          <b-checkbox-group><b-checkbox>전체동의</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>상품 문의</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>마케팅 정보</b-checkbox></b-checkbox-group>
          <b-checkbox-group><b-checkbox>판매 알림</b-checkbox></b-checkbox-group>
        </b-form-group>
      </div>

      <div class="btn-area">
        <router-link :to="{ name: 'agreeAlert' }" class="btn"
        >수정완료</router-link
        >
        <a @click="$router.go(-1)" ref="back_link" class="btn cancel"
        >취소</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-create-skin",
  data() {
    return {
      c1: undefined,
      c2: undefined,
      prodName: "",
      prodPrice: "",
      cateSelected: null,
      cateOptions: [
        { value: null, text: "모델/초상권" },
        { value: "design", text: "디자인" },
        { value: "program", text: "프로그램" },
        { value: "font", text: "폰트" },
      ],
      portraitSelected: null,
      portraitOptions: [
        { value: null, text: "2년" },
        { value: "four", text: "4년" },
        { value: "six", text: "6년" },
      ],
      subjectSelected: null,
      subjectOptions: [
        { value: null, text: "일반 모델" },
        { value: "model2", text: "일반 모델2" },
        { value: "model3", text: "일반 모델3" },
      ],
      prodTypeSelected: null,
      prodTypeOptions: [
        { value: null, text: "Jpg" },
        { value: "png", text: "Png" },
      ],
      prodDivisionSelected: null,
      prodDivisionOptions: [
        { value: null, text: "데이터" },
        { value: "data2", text: "데이터2" },
      ],
      ageSelected: "all",
      openSelected: "normal",
      modelCheck: "not_agree",
      prodIntroText: "",
    };
  },
  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
  },
};
</script>
<style>
.prod-create-wrap {
  margin-bottom: 77px;
}
.create-form-group .form-group {
  display: flex;
  align-items: center;
  height: 76px;
  margin-bottom: 14px;
  padding: 0 27px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
}
.create-form-group .form-group .label {
  width: 250px;
  min-width: 250px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.create-form-group .form-group .custom-checkbox input[type="checkbox"] {
  display: none;
}
.create-form-group .form-group .custom-checkbox label {
  display: flex;
  align-items: center;
}
.create-form-group .form-group .form-group .custom-control-label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #6e3cbc;
  opacity: 0;
}
.create-form-group .form-group .form-group .custom-control-label svg {
  color: #6e3cbc;
  margin-bottom: 3px;
}
.create-form-group .btn-area {
  display: flex;
  margin-bottom: 10px;
  max-width:520px;
}
.create-form-group .btn-area .btn {
  display: inline-block;
  width: 150px;
  flex-grow: 1;
  margin-right: 10px;
  padding: 15px;
  background-color: #300474;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border-color: #300474;
}
.create-form-group .btn-area .btn.cancel {
  background-color: #fff;
  color: #121212;
  border-color: #bebebe;
}
.create-form-group .btn-area .btn:last-child {
  margin-right: 0;
}

.checkbox-group{
  width:100%;
}
.checkbox-group > div{
  background:#fafafa;
  border-radius:10px;
  padding:15px 20px;
  width:100%;
}
</style>
