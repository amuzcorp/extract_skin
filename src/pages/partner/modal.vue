<template>
  <div v-if="item">
    <a v-if="item.view" class="view-btn">
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

    <div class="custom-modal service-modal">
      <span class="background-bg"></span>
      <div class="custom-modal-body">
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

        <b-button>확인</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal-skin",
  props: {
    item: { require: false },
    idx: { require: false },
  },
  data() {
    return {
      modalName: "partner-modal",
    };
  },
  methods: {
    hideModal() {
      this.$refs["partner-modal"].hide();
    },
  },
  mounted() {
    this.modalName += this.idx;
    console.log(this.modalName);
  },
};
</script>
<style>
.custom-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.custom-modal .background-bg {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.custom-modal .custom-modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
}
.custom-modal .custom-modal-body p {
  height: 300px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow-y: scroll;
}
.custom-modal .btn {
  display: inline-block;
  width: 100%;
}
</style>
