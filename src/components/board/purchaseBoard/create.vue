<template>
  <div class="purchase-create">
    <div class="purchase-create-header"><BoardAd /></div>
    <div class="purchase-create-body">
      <h2>상품 구매 공고 올리기</h2>
      <div class="create-form-group">
        <div class="form-group-inner">
          <h3 class="label">카테고리</h3>
          <b-form-select
            v-model="cateSelected"
            :options="cateOptions"
          ></b-form-select>
        </div>
        <div class="form-group-inner">
          <h3 class="label">소분류</h3>
          <b-form-select
            v-model="cateSubSelected"
            :options="cateSubOptions"
          ></b-form-select>
        </div>
        <div class="form-group-inner">
          <h3 class="label">공고제목</h3>
          <b-form-input
            type="text"
            placeholder="공고제목을 입력해주세요."
            v-model="title"
          ></b-form-input>
        </div>
        <div class="form-group-inner">
          <h3 class="label">희망 가격</h3>
          <b-form-input
            type="text"
            placeholder="희망구매금액을 입력해주세요."
            v-model="price"
          ></b-form-input>
        </div>
        <div class="form-group-inner">
          <h3 class="label">내용</h3>
          <b-form-textarea
            id="contactTextarea"
            v-model="contents"
            placeholder="내용을 입력해주세요."
            rows="8"
            max-rows="8"
            class="def-textarea"
          ></b-form-textarea>
        </div>
        <div class="form-group-inner">
          <h3 class="label">첨부파일</h3>
          <b-form-input
            type="text"
            id="upload"
            placeholder="첨부파일의 크기는 jpg, png 형태의 5mb 이하 사진 파일만 업로드 가능합니다."
            v-model="file"
          ></b-form-input>
          <b-button><span class="icon-plus">+</span> 추가</b-button>
          <p>* 최대 10mb까지 첨부하실 수 있습니다.</p>
        </div>
      </div>
    </div>
    <div class="purchase-create-footer">
      <b-button @click="$router.go(-1)" class="def-btn-off cancel"
        >취소</b-button
      >
      <b-button class="def-btn-on">등록하기</b-button>
    </div>
  </div>
</template>
<script>
import BoardAd from "@/components/ad/board-ad.vue";

export default {
  name: "purchase-create-skin",
  components: {
    BoardAd,
  },
  data() {
    return {
      cateSelected: null,
      cateOptions: [
        { value: null, text: "카테고리를 선택해주세요" },
        { value: "program", text: "프로그램" },
        { value: "design", text: "디자인" },
        { value: "font", text: "폰트" },
      ],
      cateSubSelected: null,
      cateSubOptions: [
        { value: null, text: "카테고리의 소분류를 선택해주세요" },
        { value: "subProgram", text: "프로그램" },
        { value: "subDesign", text: "디자인" },
        { value: "subFont", text: "폰트" },
      ],
      title: "",
      price: "",
      contents: "",
      file: "",
    };
  },
};
</script>
<style>
.purchase-create {
  margin-bottom: 156px;
}
.purchase-create-header {
  margin-bottom: 55px;
}
.purchase-create-body h2 {
  margin-bottom: 15px;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
}
.form-group-inner {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 18px 40px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.form-group-inner .label {
  min-width: 100px;
  color: #333333;
  font-size: 0.9rem;
  font-weight: 500;
}
.form-group-inner .custom-select,
.form-group-inner .form-control {
  width: 100%;
  height: 40px;
  padding: 0 18px;
  background-color: #fafafa;
  border: 0;
  border-radius: 8px;
}
.form-group-inner .form-control::placeholder,
.form-group-inner .custom-select {
  color: #aaaaaa;
  font-size: 0.8rem;
  font-weight: 400;
}
.form-group-inner #contactTextarea {
  height: auto;
  padding: 18px;
}
.form-group-inner #upload {
  max-width: 461px;
  margin-right: 10px;
}
.form-group-inner .btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 40px;
  background-color: #fff;
  color: #333333;
  font-size: 0.8rem;
  font-weight: 400;
  border: 1px solid #bebebe;
  border-radius: 8px;
}
.form-group-inner .btn .icon-plus {
  width: 17px;
  height: 17px;
  line-height: 13px;
  margin-right: 6px;
  border: 1px solid #333333;
  border-radius: 100%;
}
.form-group-inner p {
  margin-left: 20px;
  color: #6a707e;
  font-size: 0.8rem;
  font-weight: 400;
}
.purchase-create-body {
  margin-bottom: 30px;
}
.purchase-create-footer .btn {
  width: 208px;
  margin-right: 10px;
  padding: 15px;
  background-color: #300474;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid #300474;
  border-radius: 6px;
}
.purchase-create-footer .btn.cancel {
  background-color: #fff;
  color: #121212;
  border: 1px solid #6a707e;
}
</style>
