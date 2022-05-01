<template>
  <div class="prod-create-wrap">
    <b-container>
      <b-row class="prod-create-body">
        <b-col cols="5">
          <div class="img-col">
            <VueSlickCarousel
              ref="c1"
              :asNavFor="c2"
              :focusOnSelect="true"
              class="main-slider-con"
            >
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg01 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>
            <VueSlickCarousel
              ref="c2"
              :asNavFor="c1"
              :slidesToShow="5"
              :focusOnSelect="true"
              :arrows="false"
            >
              <!-- 이미지 있을 경우 -->
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + slideImg03 + ')'"
                >
                  <a class="delete-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <!-- 없을 경우 -->
              <div class="nav-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg02 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg02 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg02 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img not_img"
                  :style="'background-image: url(' + slideImg02 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>

            <div class="img-upload">
              <h2>파일업로드</h2>
              <b-button>파일 선택</b-button>
            </div>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="create-form-group">
            <div class="form-group">
              <span class="label">상품명</span>
              <b-form-input
                type="text"
                placeholder="상품명을 입력해주세요."
                v-model="prodName"
              ></b-form-input>
            </div>
            <div class="form-group">
              <span class="label">상품가격</span>
              <b-form-input
                type="text"
                placeholder="물품가격을 입력해주세요."
                v-model="prodPrice"
              ></b-form-input>
            </div>
            <div class="form-group">
              <span class="label">카테고리</span>
              <b-form-select
                v-model="cateSelected"
                :options="cateOptions"
              ></b-form-select>
            </div>

            <!-- 모델/초상권 클릭 시 나타남 -->
            <div class="form-group portrait">
              <div class="check-box">
                <b-form-checkbox
                  id="model-checkbox"
                  v-model="modelCheck"
                  name="model-checkbox"
                  value="agree"
                  unchecked-value="not_agree"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                    />
                  </svg>
                  본인은 본인의 초상권을 구매자가 사용하는 것에 대해 동의합니다.
                </b-form-checkbox>
              </div>
              <div class="portrait-rights">
                초상권 동의 기간
                <b-form-select
                  v-model="portraitSelected"
                  :options="portraitOptions"
                ></b-form-select>
              </div>
            </div>
            <div class="form-group">
              <span class="label">주제분류</span>
              <b-form-select
                v-model="subjectSelected"
                :options="subjectOptions"
              ></b-form-select>
            </div>
            <div class="form-group">
              <span class="label">상품형태</span>
              <b-form-select
                v-model="prodTypeSelected"
                :options="prodTypeOptions"
              ></b-form-select>
            </div>
            <div class="form-group">
              <span class="label">상품구분</span>
              <b-form-select
                v-model="prodDivisionSelected"
                :options="prodDivisionOptions"
              ></b-form-select>
            </div>
            <div class="form-group">
              <span class="label">공개설정</span>
              <b-form-group v-slot="{ openSettings }">
                <b-form-radio
                  v-model="openSelected"
                  :aria-describedby="openSettings"
                  name="normal-radios"
                  value="normal"
                  >일반상품</b-form-radio
                >
                <b-form-radio
                  v-model="openSelected"
                  :aria-describedby="openSettings"
                  name="secret-radios"
                  value="secret"
                  >비밀상품
                  <a
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                      /></svg></a
                ></b-form-radio>
              </b-form-group>
            </div>

            <div class="form-group">
              <span class="label">구매권한</span>
              <b-form-group v-slot="{ ageSettings }">
                <b-form-radio
                  v-model="ageSelected"
                  :aria-describedby="ageSettings"
                  name="all-radios"
                  value="all"
                  >전 연령</b-form-radio
                >
                <b-form-radio
                  v-model="ageSelected"
                  :aria-describedby="ageSettings"
                  name="19-radios"
                  value="19"
                  >19세 이상만 구매 가능</b-form-radio
                >
              </b-form-group>
            </div>

            <div class="btn-area">
              <a @click="$router.go(-1)" ref="back_link" class="btn cancel"
                >취소</a
              >
              <router-link :to="{ name: 'productShow' }" class="btn"
                >상품 등록하기</router-link
              >
            </div>

            <div class="info">
              <p>
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
                  /></svg
                >바이러스 검사 후 업로드하시길 권합니다. 바이러스가 걸린 파일을
                업로드시 법적 책임을 질 수 있습니다.
              </p>
              <p>
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
                  /></svg
                ><a href="">환불 규정 안내</a>
              </p>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="prod-intro">
        <h2>상품 소개</h2>
        <b-form-textarea
          id="prod-intro-textarea"
          v-model="prodIntroText"
          placeholder="상품을 소개해주세요."
          rows="15"
          max-rows="15"
        ></b-form-textarea>
      </div>
    </b-container>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import slideImg01 from "@/assets/images/prod_create_01.png";
import slideImg02 from "@/assets/images/prod_create_02.png";
import slideImg03 from "@/assets/images/prod_create_03.png";

export default {
  name: "product-create-skin",
  components: { VueSlickCarousel },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      slideImg01: slideImg01,
      slideImg02: slideImg02,
      slideImg03: slideImg03,
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
.prod-create-body .main-slider-item {
  height: 510px;
}
.prod-create-body .nav-slider-item .img,
.prod-create-body .main-slider-item .img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  border: 1px solid #bebebe;
}
.prod-create-body .nav-slider-item .img.not_img {
  background-size: 30%;
}
.prod-create-body .main-slider-item .img.not_img {
  background-size: 50%;
}
.prod-create-body .nav-slider-item {
  position: relative;
  height: 94px;
  margin-bottom: 27px;
  padding-left: 5px;
  padding-right: 5px;
}
.main-slider-con .slick-arrow {
  z-index: 10;
}
.slick-prev:before,
.slick-next:before {
  font-size: 36px;
}
.main-slider-con .slick-next {
  right: 30px;
}
.main-slider-con .slick-prev {
  left: 20px;
}
.prod-create-body .nav-slider-item .delete-btn {
  position: absolute;
  top: 0px;
  right: 15px;
  color: #6a707e;
}
.img-col .img-upload {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 18px 27px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.img-col .img-upload h2 {
  width: 100px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 500;
}
.img-col .img-upload .btn {
  flex-grow: 1;
  background-color: #f7f7f7;
  color: #202427;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #202427;
}
.create-form-group {
  margin-bottom: 60px;
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
.create-form-group .form-group.portrait {
  justify-content: space-between;
  background-color: #f7f7f7;
  border-color: #f7f7f7;
}
.create-form-group .form-group .label {
  width: 100px;
  min-width: 100px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.create-form-group .form-group .portrait-rights {
  width: 210px;
  justify-content: space-between;
}
.create-form-group .form-group .form-group > div,
.create-form-group .form-group .portrait-rights,
.create-form-group .form-group .check-box {
  display: flex;
  align-items: center;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.create-form-group .form-group .custom-checkbox input[type="checkbox"] {
  display: none;
}
.create-form-group .form-group .custom-checkbox label {
  display: flex;
  align-items: center;
}
.main-slider-con .not_img:hover,
.nav-slider-item .not_img:hover,
.create-form-group .form-group .custom-checkbox label:hover {
  cursor: pointer;
}
.create-form-group
  .form-group
  .custom-checkbox
  input[type="checkbox"]:checked
  + label
  svg {
  color: #6e3cbc;
}
.create-form-group .form-group .form-group {
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
}
.create-form-group .form-group .form-group .custom-control {
  display: flex;
  align-items: center;
}
.create-form-group .form-group .form-group .custom-control-label {
  position: relative;
  margin-right: 25px;
  padding-left: 18px;
}
.create-form-group .form-group .form-group input[type="radio"] {
  display: none;
}
.create-form-group .form-group .form-group .custom-control-label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 1px solid #707070;
}
.create-form-group
  .form-group
  .form-group
  input[type="radio"]:checked
  + label::after {
  opacity: 1;
}
.create-form-group
  .form-group
  .form-group
  input[type="radio"]:checked
  + label::before {
  border-color: #6e3cbc;
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
.create-form-group .form-group .check-box svg {
  margin-right: 8px;
}
.create-form-group .form-group .custom-select,
.create-form-group .form-group .form-control {
  width: 100%;
  height: 40px;
  background-color: #fafafa;
  border: 0;
}
.create-form-group .form-group .portrait-rights .custom-select {
  width: 100px;
  height: 36px;
  padding: 0 20px;
  background-color: #f7f7f7;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
}
.create-form-group .form-group .form-group .custom-control-label,
.create-form-group .form-group .custom-select {
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.create-form-group .form-group .form-control::placeholder {
  color: #bebebe;
  font-size: 0.9rem;
  font-weight: 400;
}
.create-form-group .btn-area {
  display: flex;
  margin-bottom: 10px;
}
.create-form-group .btn-area .btn {
  display: inline-block;
  width: 100%;
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
.create-form-group .info {
  padding: 19px 27px;
  background-color: #f7f7f7;
  border-radius: 10px;
}
.create-form-group .info p {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.create-form-group .info a {
  color: #6a707e;
  text-decoration: underline;
}
.create-form-group .info p svg {
  margin-right: 8px;
}
.prod-create-wrap .prod-intro h2 {
  margin-bottom: 15px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
