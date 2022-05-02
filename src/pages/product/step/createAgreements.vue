<template>
  <div class="prod-create-agree">
    <div class="prod-create-agree-inner">
      <b-container>
        <h5>엑기스 약관 동의</h5>
        <p>
          엑기스 상품등록 서비스 이용을 위하여 필수 약관 동의 및 실명확인이
          필요합니다.
        </p>
        <div class="create-agree-group">
          <b-form-checkbox
            id="all-check"
            v-model="all"
            name="checkbox-all"
            value="all"
            unchecked-value="not_all"
            ><b>아래의 이용 약관에 모두 동의합니다.</b>
          </b-form-checkbox>
          <b-form-checkbox
            id="eft"
            v-model="eft"
            name="eft"
            value="eft"
            unchecked-value="not_eft"
            >전자금융거래 이용약관<span>(필수)</span>
            <a v-b-modal.eft-modal
              >전문 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  fill="#424A5D"
                /></svg
            ></a>
          </b-form-checkbox>
          <b-form-checkbox
            id="privacy"
            v-model="privacy"
            name="privacy"
            value="privacy"
            unchecked-value="not_privacy"
            >개인정보 수집 및 이용에 대한 안내<span>(필수)</span>
            <a v-b-modal.privacy-modal
              >전문 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  fill="#424A5D"
                /></svg
            ></a>
          </b-form-checkbox>
          <b-form-checkbox
            id="note-to-sellers"
            v-model="NoteToSellers"
            name="note-to-sellers"
            value="note-to-sellers"
            unchecked-value="not_note-to-sellers"
            >엑기스 판매자 유의사항<span>(필수)</span>
            <a v-b-modal.note-to-sellers-modal
              >전문 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  fill="#424A5D"
                /></svg
            ></a>
          </b-form-checkbox>
          <b-form-checkbox
            id="service"
            v-model="service"
            name="service"
            value="service"
            unchecked-value="not_service"
            >서비스 판매시 ‘세금’관련 유의사항<span>(필수)</span>
            <a v-b-modal.service-modal
              >전문 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  fill="#424A5D"
                /></svg
            ></a>
          </b-form-checkbox>
        </div>
        <div class="btn-area">
          <b-form-checkbox
            id="all-active"
            v-model="allActive"
            name="all-active"
            value="all-active"
            unchecked-value="not_all-active"
            >본인은 위 약관의 내용을 모두 확인하였으며, 판매자로서 약관에 따라
            활동할 것을 동의합니다.
          </b-form-checkbox>
          <div class="btn-area-footer">
            <a @click="$router.go(-1)" ref="back_link" class="btn-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                  fill="#121212"
                /></svg
              >이전
            </a>
            <router-link :to="{ name: 'createCertification' }" class="btn-next">
              다음<svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  fill="#fff"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </b-container>
    </div>

    <b-modal id="eft-modal" ref="eft-modal" hide-footer hide-header>
      <div class="eft-modal-body">
        <p>
          eft 회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스
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
      <div class="eft-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>

    <b-modal id="privacy-modal" ref="privacy-modal" hide-footer hide-header>
      <div class="privacy-modal-body">
        <p>
          privacy 회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
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

    <b-modal
      id="note-to-sellers-modal"
      ref="note-to-sellers-modal"
      hide-footer
      hide-header
    >
      <div class="note-to-sellers-modal-body">
        <p>
          note-to-sellers 회원님의 엑기스 본인인증을 통해 확인된
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
          내용입니다.회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
          엑기스 본인인증을 통해 확인된 내용입니다.회원님의 엑기스 본인인증을
          통해 확인된 내용입니다.
        </p>
      </div>
      <div class="note-to-sellers-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>

    <b-modal id="service-modal" ref="service-modal" hide-footer hide-header>
      <div class="service-modal-body">
        <p>
          service 회원님의 엑기스 본인인증을 통해 확인된 내용입니다.회원님의
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
  </div>
</template>
<script>
export default {
  name: "product-create-agree-skin",
  data() {
    return {
      all: "",
      eft: "",
      privacy: "",
      NoteToSellers: "",
      service: "",
      allActive: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs["eft-modal"].hide();
      this.$refs["privacy-modal"].hide();
      this.$refs["note-to-sellers-modal"].hide();
      this.$refs["service-modal"].hide();
    },
  },
};
</script>
<style scope>
.prod-create-agree {
  position: relative;
  height: calc(100vh - 331px);
}
.prod-create-agree-inner {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
}
.prod-create-agree-inner h5 {
  margin-bottom: 3px;
  color: #333333;
  font-size: 1.3rem;
  font-weight: 500;
}
.prod-create-agree-inner p {
  margin-bottom: 20px;
  color: #202427;
  font-size: 0.9rem;
  font-weight: 400;
}
.create-agree-group .custom-checkbox {
  margin-bottom: 30px;
  padding: 0 40px;
  border: 1px solid #d9d5e8;
  border-radius: 6px;
}
.prod-create-agree-inner .btn-area .custom-checkbox input[type="checkbox"],
.create-agree-group .custom-checkbox input[type="checkbox"] {
  display: none;
}
.prod-create-agree-inner .btn-area label,
.create-agree-group label {
  position: relative;
  display: flex;
  align-items: center;
  height: 76px;
  padding: 0 0 0 30px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.prod-create-agree-inner .btn-area label {
  height: auto;
}
.create-agree-group label b {
  color: #333;
}
.create-agree-group label span {
  margin-left: 5px;
  color: #894de6;
  font-size: 1rem;
  font-weight: 500;
}
.create-agree-group label a {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 2;
  color: #424a5d;
}
.create-agree-group label a svg {
  fill: #424a5d;
}
.prod-create-agree-inner .btn-area label:before,
.create-agree-group label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: inline-block;
  width: 20px;
  height: 20px;
  background: center / contain no-repeat
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAxJJREFUSEudV4152jAQjVig7QSlE5RMEH4GiDNB6QR1JwidIM0ENRM0GQAwE5RMUDJB3QWg76knfydZNrL9fQYjn/Tu3j2dDnOVcO12u7cwuz2dTpkxhs8T3PyucB/O53M1Go2e8LyfzWbHhCWvTJcRAMcAuwfYMmUxsSlh/xUOHLrmtAJvNpsVFrjvAeiZgoUCLNABstK4GsCkFZN+wnIaWD9j/AmLlZpOScMU7zLecPaNmnfA77sY/R6wgO4kh27+GpNXKbnjfKQmD5iq8BvTfeo94O12WwLthojw/i++8sViUfSlGw5kcKBQ0TNygte018BhTmF4fUkgF4Q5ATiFZqlnmhDEnZtjgalevPjtBvH8eUikoSOMXPRiX0nUZPX/dgLFpPOTTFzP5/NlX3qdPcAmAHsQUVVg8juev8j7EmvPLLAI6k9NgTEfUoQUc0xAKU4WF5tX2oHyo6PcpdDAoyV+/JCFnuFRNiTaANSKE1tvSp1oRjH+DWlcGQyy1N0SbGhuu0BFQ6T/lwR0QHDXBGay7RZC5A2ayQjftYntEqhjDzhn9wxgQ6q5wa3kOaBp1mmIsZEKyjVDHEbseaKB8Y6F/qMb0+B9QDk/ZLYzYlE8U+GBQzQ8Cp16PSG1CVMHYakOPHkXniYxcCzO0sctkwQqEfs51qqWTU+Ve1cLeDKopMWp+gURT8J93Fq1QnC9T9vodeP6HMC8R+yQnJVL12kqnFsqeng7cEweu+JwCVQUzcr1ns915QoV5zxqW1AO/nHqyYVoeT4/iB5eEe3YOsCPIAfeKZISUYeTrFi1+rWG6oIRnFDRrqGPE5FuZg9RTd0aNXBEuYPBhUEePGyDnfqZnmYHIpSzneVxVjds7Lfw7rFNcCELklN2p3afa0Fp21iXybwUMKqrFZ4raVfXMVExQtjcwCbHtxWPitQejaGD0b5aaCe4PS4j1xFjvN2/ipjNHmxlyX21XgEOsF9eMZoWBxrDsH/FHs8B2KiAnVTHAEil/G9id6JT4MxfAFgCsEjd353/nbqiZMUb2ptx3X+rfUCaHTb4ZgAAAABJRU5ErkJggg==);
  border-radius: 100%;
  cursor: pointer;
}
.prod-create-agree-inner
  .btn-area
  input[type="checkbox"]:checked
  + label::after,
.create-agree-group input[type="checkbox"]:checked + label::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #300474;
  width: 20px;
  height: 20px;
  background: center / contain no-repeat
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAA0hJREFUSEudV9t1EzEQHXnFN6ECTAVsKohTAUkFmAow2HzHfJOQpALsCnAqiFMBSgWYCgj/uxZ3JO1D2ke03nNysl6P9s7cufOwoIgrpdkRJck7mJ6REEekder+P+G/wucnfLehPH9QdLOLeCWJPiMAjgF4gZdPY17mbLaUiU+Kvqm+M53AqVwscfBiAKBvqvUKDMCBG2ajcTWADa1S/oTlxLPWdEe0B537bZ1Olwa2PSMSSAW9rJ1TlGXnbfR7wA70HgfT8rDWa3i+jMmdOz/zmOL856PTkHofWC62OHRiQDX9Q4QzlX9fDaU7TeYc/aoWPUcO8Ir2EriR00wcPyeQfmF+SSnR2xJc643Kr86LMwbYqFfK3xW9+w+HRBo6YiIXgvVSXKcqu2RWbTnBALSI95ZivYZn06H0FvYpIVKpr52onlI5vwHMR/f9FsCnBtgJ4m8JlGVvYoTU5pgBTfb3prkQmbwau0TuSspdCkWafJ6SGP2w0dKdyi8hjOFXAGrFmYsJ68RjlOgrol4CeLGBN9wOYXxYbvtATSot/b9cOArAxwJq5mTbEmqh2TDCvHWU1XOgZe7lQhf3ABYcMRq97Tb8oE6yn4YmG7GgJuoAhyP2PPGA5RyNXrwtn9VSMQTUAAfM9kds+naCVPjglCeqpl5PSF2yRFmVQViqfU9ehdPEllsIjv5rSyYK1EXcyHFN1foczWMTet0KPgTUU7V+VNlVGtRxd9dqgNfqtIvemqKXuHezXd8CeMadq+rTZoTl3Llah3cJrsW4aA7PgVpFz9G5xGtjW3SuhuLIetQpEs45vRjHTq50tJjRiK6tHvQfpHLMt246eZ2Fn5dTJCaibie93s3ApYaqeexPqNatYYgTLdvMA8poUryjAg7LpmNliQF3vZkHj12hjBAzpKdlAzG5NuusVMHCtkQPv+0SXOiIyanQvBLbOq8Jqm7bsmVyvvcrv1uZhrGCItdtojIRjvYncBigwoinitSOxtDB1r3arqySlzU7LsNLay6PHR5zVNVG6ts9gKmz6L26fhbtdILPS/zZsRlzoWRghu202QF7qW57txMLNhPNa2s1rSpOH3GLny6jVWx99/526guQhXjobsbv/Q+FdNjufv5D5wAAAABJRU5ErkJggg==);
  border-radius: 100%;
}
.prod-create-agree-inner .btn-area label:hover,
.create-agree-group label:hover {
  cursor: pointer;
}

/* Modal */
#service-modal .modal-dialog,
#note-to-sellers-modal .modal-dialog,
#privacy-modal .modal-dialog,
#eft-modal .modal-dialog {
  margin-top: 15%;
}
#service-modal .modal-body,
#note-to-sellers-modal .modal-body,
#privacy-modal .modal-body,
#eft-modal .modal-body {
  padding: 30px;
  border-radius: 13px;
}
#service-modal .service-modal-body,
#note-to-sellers-modal .note-to-sellers-modal-body,
#privacy-modal .privacy-modal-body,
#eft-modal .eft-modal-body {
  height: 450px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
#service-modal .service-modal-footer .btn,
#note-to-sellers-modal .note-to-sellers-modal-footer .btn,
#privacy-modal .privacy-modal-footer .btn,
#eft-modal .eft-modal-footer .btn {
  width: 100%;
}

/* Btn Area */
.prod-create-agree-inner .btn-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.prod-create-agree-inner .btn-area a {
  display: inline-block;
  margin-right: 10px;
  padding: 15px 91px;
  color: #121212;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #6a707e;
  border-radius: 6px;
  text-align: center;
}
.prod-create-agree-inner .btn-area a svg {
  margin-bottom: 2px;
}
.prod-create-agree-inner .btn-area a.btn-next {
  background-color: #300474;
  color: #fff;
  border-color: #300474;
}
.prod-create-agree-inner .btn-area a:last-child {
  margin-right: 0;
}
</style>
