<template>
  <div class="withdraw-app-wrap mb-100">
    <div class="withdraw-app-header box-shadow">
      <b-row>
        <b-col cols="4">
          <Doughnut
            :tit="'출금 가능 금액'"
            :value="4500000"
            :partnerValue="500000"
          />
        </b-col>
        <b-col cols="4">
          <Doughnut :tit="'엑기스 활동'" :value="4500000" />
        </b-col>
        <b-col cols="4">
          <Doughnut :tit="'파트너스 활동'" :partnerValue="500000" />
        </b-col>
      </b-row>
    </div>
    <div class="doughnut-leg">
      <ul>
        <li><span class="active"></span>엑기스 활동 (90%)</li>
        <li><span class="partner"></span>파트너스 활동 (10%)</li>
      </ul>
    </div>

    <div class="account-wrap">
      <div class="cert">
        <h4>계좌인증</h4>

        <div class="cert-group-list mb-50">
          <!-- 계좌 인증 -->
          <div class="cert-group">
            <h3>은행</h3>
            <b-form-select v-model="bacnkSelected" :options="bankOptions">
            </b-form-select>
          </div>
          <div class="cert-group">
            <h3>계좌번호</h3>
            <b-form-input
              type="text"
              placeholder="‘ - ’ 제외하고 입력해주세요."
              v-model="bankAccount"
            ></b-form-input>
          </div>
          <div class="cert-group name">
            <h3>예금주</h3>
            <b-form-input
              type="text"
              placeholder="예금주명을 입력해주세요."
              v-model="name"
            ></b-form-input>
            <b-button>계좌인증</b-button>
          </div>
        </div>

        <!-- 출금 계좌 정보 -->
        <h4>출금 계좌 정보</h4>
        <div class="withdraw-group-info mb-50">
          <ul>
            <li>부산은행</li>
            <li>신응수</li>
            <li>110 1111 1111 11</li>
          </ul>
        </div>

        <!-- 출금 정보 -->
        <div class="withdraw-wrap mb-50">
          <h4>출금 정보</h4>
          <div class="withdraw-group-list">
            <div class="withdraw-group">
              <h2>엑기스 활동</h2>
              <div class="withdraw-group-price">
                <h3><b>4,500,000</b> 원</h3>
              </div>
            </div>
            <div class="withdraw-group">
              <h2>파트너스 활동</h2>
              <div class="withdraw-group-price">
                <h3><b>500,000</b> 원</h3>
              </div>
            </div>
            <div class="withdraw-group">
              <h2>출금 가능 금액</h2>
              <div class="withdraw-group-price">
                <h3><b>5,000,000</b> 원</h3>
              </div>
            </div>
            <div class="withdraw-group">
              <h2>출금 신청 금액</h2>
              <div class="withdraw-group-price">
                <h3>
                  <b-form-input
                    type="text"
                    placeholder="‘ - ’ 제외하고 입력해주세요."
                    v-model="withdraw"
                  ></b-form-input>
                  원
                </h3>
              </div>
            </div>
            <div class="withdraw-group">
              <h2>출금 후 잔액</h2>
              <div class="withdraw-group-price">
                <h3><b>0</b> 원</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- 약관 동의 -->
        <div class="agree-wrap">
          <h4>이용 약관</h4>

          <div class="agree-group">
            <b-form-checkbox
              id="eft-sellers"
              v-model="eft"
              name="eft-sellers"
              value="eft-sellers"
              unchecked-value="not-eft-sellers"
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
          </div>

          <div class="agree-group mb-20">
            <b-form-checkbox
              id="service-sellers"
              v-model="service"
              name="service-sellers"
              value="service-sellers"
              unchecked-value="not_service-sellers"
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

          <div class="btn-area text-right">
            <a @click="$router.go(-1)" ref="back_link" class="btn-prev">이전</a>
            <a class="next" v-b-modal.com-modal>출금 신청</a>
          </div>
        </div>
      </div>
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

    <b-modal id="service-modal" ref="service-modal" hide-footer hide-header>
      <div class="service-modal-body">
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
      <div class="service-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>

    <b-modal id="com-modal" ref="com-modal" hide-footer hide-header>
      <div class="com-modal-body">
        <h2>출금 신청이 완료되었습니다.</h2>
        <p>“출금은 매주 수요일에 진행됩니다.”</p>
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import Doughnut from "@/components/chartjs/doughnut.vue";

export default {
  name: "withdraw-app-skin",
  components: {
    Doughnut,
  },
  data() {
    return {
      bacnkSelected: null,
      bankOptions: [
        { value: null, text: "은행선택" },
        { value: null, text: "우리" },
        { value: null, text: "국민" },
      ],
      bankAccount: "",
      name: "",
      bankName: "",
      withdraw: "",
      eft: "",
      service: "",
    };
  },
  methods: {
    hideModal() {
      this.$refs["eft-modal"].hide();
      this.$refs["service-modal"].hide();
      this.$refs["com-modal"].hide();
    },
  },
};
</script>
<style scope>
/* Modal */
#com-modal .modal-dialog,
#service-modal .modal-dialog,
#eft-modal .modal-dialog {
  margin-top: 15%;
}
#com-modal .modal-dialog {
  max-width: 400px;
}
#com-modal .modal-content,
#service-modal .modal-content,
#eft-modal .modal-content {
  border-radius: 13px;
}
#service-modal .modal-body,
#eft-modal .modal-body {
  padding: 30px;
}
#com-modal .modal-body {
  padding: 35px 0;
  text-align: center;
}
#com-modal .modal-body h2 {
  margin-bottom: 5px;
  color: #333333;
  font-size: 1rem;
  font-weight: 500;
}
#com-modal .modal-body p {
  margin-bottom: 27px;
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 500;
}
#com-modal .modal-body .btn {
  padding: 10px 80px;
  background-color: #300474;
  color: #fff;
  border: 0;
  border-radius: 4px;
}
#service-modal .service-modal-body,
#eft-modal .eft-modal-body {
  height: 450px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
#service-modal .service-modal-footer .btn,
#eft-modal .eft-modal-footer .btn {
  width: 100%;
}

.withdraw-app-wrap .btn-area a {
  display: inline-block;
  margin-right: 10px;
  padding: 15px 91px;
  color: #121212;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  text-align: center;
}
.withdraw-app-wrap .btn-area a.next {
  background-color: #300474;
  border-color: #300474;
  color: #fff;
}
.withdraw-app-wrap h4 {
  padding: 0 0 10px 0;
  color: #333333;
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 1px solid #ededed;
}
.withdraw-group-list .withdraw-group,
.cert-group-list .cert-group {
  display: flex;
  align-items: center;
  padding: 20px;
  color: #202427;
  border-bottom: 1px solid #ededed;
}
.withdraw-group-list .withdraw-group h2,
.cert-group-list .cert-group h3 {
  width: 100px;
  min-width: 100px;
  font-size: 1rem;
  font-weight: 500;
}
.withdraw-group-list .withdraw-group h3 {
  display: flex;
  align-items: center;
  justify-content: end;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.agree-wrap .agree-group {
  padding: 0 20px;
}
.agree-wrap .agree-group input[type="checkbox"] {
  display: none;
}
.agree-wrap .agree-group .custom-control-label {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 30px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #ededed;
}
.create-agree-group label a svg {
  fill: #424a5d;
}
.agree-wrap .agree-group .custom-control-label:hover {
  cursor: pointer;
}
.agree-wrap .agree-group .custom-control-label:before {
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
.agree-wrap .agree-group .custom-control-label:after {
  display: none;
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
.agree-wrap .agree-group input[type="checkbox"]:checked + label:after {
  display: block;
}
.agree-wrap .agree-group .custom-control-label a {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 2;
  color: #424a5d;
}
.agree-wrap .agree-group .custom-control-label span {
  margin-left: 5px;
  color: #894de6;
  font-size: 1rem;
  font-weight: 500;
}

.cert-group-list .cert-group .form-control,
.cert-group-list .cert-group .custom-select {
  padding: 0 20px;
  width: 168px;
  height: 40px;
  background-color: #fafafa;
  border: 0;
  border-radius: 6px;
}
.withdraw-group-list .withdraw-group h3 b {
  margin-right: 5px;
}
.withdraw-group-list .withdraw-group .form-control {
  margin-right: 5px;
  height: 40px;
  background-color: #fafafa;
  border: 0;
  border-radius: 6px;
}
.cert-group-list .cert-group .form-control {
  width: 270px;
  margin-right: 10px;
}
.cert-group-list .cert-group .btn {
  height: 40px;
  padding: 0 25px;
  background-color: #bebebe;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #bebebe;
  border-radius: 6px;
}
.withdraw-group-list .withdraw-group .form-control::placeholder,
.cert-group-list .cert-group .form-control::placeholder,
.cert-group-list .cert-group .custom-select {
  color: #999999;
  font-size: 0.9rem;
  font-weight: 400;
}
.withdraw-group-info {
  padding: 20px;
  border-bottom: 1px solid #ededed;
}
.withdraw-group-info ul {
  display: flex;
  align-items: center;
  margin-left: -20px;
}
.withdraw-group-info ul li {
  position: relative;
  padding: 0 26px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
}
.withdraw-group-info ul li:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background-color: #aaaaaa;
}
.withdraw-group-info ul li:last-child:after {
  display: none;
}
.withdraw-group-list .withdraw-group-price {
  width: 400px;
  text-align: right;
}

.withdraw-app-header {
  padding: 44px 0;
}
.doughnut-leg ul {
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 15px 0 25px 0;
}
.doughnut-leg ul li {
  margin-left: 30px;
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
}
.doughnut-leg ul li span {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-bottom: 1px;
  margin-right: 10px;
  border-radius: 100%;
  background-color: #6e3cbc;
}
.doughnut-leg ul li span.partner {
  background-color: #fe9074;
}
</style>
