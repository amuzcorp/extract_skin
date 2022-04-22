<template>
  <div class="partner-wrap">
    <b-container>
      <div class="partner-visual">
        <div class="visual-info">
          <h2><b>엑기스 파트너스</b>와 함께 <br />수익에 수익을 더해보세요!</h2>
          <router-link :to="{ name: 'partnerList' }">
            파트너스 가입<svg
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
          </router-link>
        </div>
      </div>

      <div class="partner-regist">
        <b-row class="align-items-center">
          <b-col cols="6">
            <h3>엑기스의 영향력</h3>
            <h2>
              엑기스를 이용한다는 건,<br />곧 파트너스로 이어져야한다는 것
            </h2>
          </b-col>
          <b-col cols="6">
            <table>
              <tr>
                <th>엑기스 월간 판매등록량</th>
                <th>파트너스 이용자 비율</th>
              </tr>
              <tr>
                <td><b>1,340</b>건 +</td>
                <td><b>82</b>% +</td>
              </tr>
            </table>
          </b-col>
        </b-row>
      </div>

      <div class="partner-ecos">
        <b-row class="align-items-center">
          <b-col cols="6">
            <h3>파트너스의 생태계</h3>
            <h2>
              나만의 채널에서 상품을 홍보하고,<br />고객을 모아, 수익으로
              한번에!
            </h2>
          </b-col>
          <b-col cols="6">
            <div class="ecos-img"></div>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <div class="partner-why">
      <b-container>
        <h3>파트너스의 타당성</h3>
        <h2>왜 엑기스 파트너스여야 하나요?</h2>
        <b-row>
          <b-col cols="4">
            <div class="why-card shadow">
              <h2 style="color: #b831ff">기술성</h2>
              <h4>간편한 가입</h4>
              <p>
                엑기스 회원이라면 누구나 쉽게 가입이 가능합니다.
                <br />한눈에 알기 쉬운 리포트로 나의 파트너스 성과를<br />
                확인해보세요!
              </p>
              <div class="card-img">
                <img src="@/assets/images/partner/partner_03.png" />
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="why-card shadow">
              <h2 style="color: #f0b902">시장성</h2>
              <h4>다양한 상품</h4>
              <p>
                디지털마켓 No.1 엑기스의 상품은 상당한 양의 파일이<br />
                업로드 되고있습니다. 마음에 드는 상품을 골라<br />
                어디든지 홍보해보세요!
              </p>
              <div class="card-img">
                <img src="@/assets/images/partner/partner_04.png" />
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="why-card shadow">
              <h2 style="color: #4196d0">수익성</h2>
              <h4>높은수익</h4>
              <p>
                엑기스와 매출이 연동이 되어 보다 높은 수익으로 <br />이어질 수
                있습니다. 환하게 빛을 내고 있는 다양한 <br />상품들을 지금
                만나보세요!
              </p>
              <div class="card-img">
                <img src="@/assets/images/partner/partner_05.png" />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="partner-how">
      <b-container>
        <h2>어떻게 파트너스 활동을 하나요?</h2>
        <b-row>
          <b-col cols="4" class="how-col">
            <div class="how-img">
              <img src="@/assets/images/partner/partner_06.png" />
            </div>
            <h3>1</h3>
            <p>
              당신의 블로그 및 다양한 채널에서 엑기스의<br />
              상품을 홍보합니다.
            </p>
          </b-col>
          <b-col cols="4" class="how-col">
            <div class="how-img">
              <img src="@/assets/images/partner/partner_07.png" />
            </div>
            <h3>2</h3>
            <p>
              방문자가 상품의 링크를 클릭 후 엑기스에서<br />
              구매를 진행합니다.
            </p>
          </b-col>
          <b-col cols="4" class="how-col">
            <div class="how-img">
              <img src="@/assets/images/partner/partner_08.png" />
            </div>
            <h3>3</h3>
            <p>
              방문자가 구매한 금액의 N%를 수익으로<br />
              지급받습니다.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="partner-start">
      <h3>파트너스의 시작</h3>
      <h2>아직도 망설이고 있나요?<br />지금 바로 시작하세요.</h2>
      <router-link :to="{ name: 'partnerList' }">
        파트너스 시작하기
        <svg
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
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "partner-skin",
};
</script>
<style>
.partner-visual {
  display: flex;
  align-items: center;
  height: 480px;
  margin-bottom: 44px;
  padding: 0 0 0 60px;
  background: center / cover no-repeat
    url("@/assets/images/partner/partner_01.png");
  border-radius: 10px;
}
.partner-visual h2 {
  margin-bottom: 21px;
  color: #333333;
  font-size: 2.5rem;
  font-weight: 500;
}
.partner-visual h2 b {
  color: #3b8ef2;
  font-weight: bold;
}
.partner-visual a {
  display: inline-block;
  padding: 14px 42px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 400;
  border: 1px solid #333333;
  border-radius: 30px;
  transition: all ease 0.35s;
}
.partner-visual a svg {
  margin-left: 10px;
  margin-bottom: 2px;
}
.partner-visual a:hover {
  color: #fff;
  background-color: #3b8ef2;
  border-color: #3b8ef2;
}
.partner-regist {
  margin-bottom: 102px;
  padding: 89px 59px;
  background-color: #fbfbfb;
  border-radius: 10px;
}
.partner-regist table {
  width: 100%;
  color: #333333;
  text-align: center;
  border-top: 1px solid #d5d5d5;
  border-bottom: 1px solid #d5d5d5;
}
.partner-regist table th {
  padding: 16px 0;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
}
.partner-regist table td {
  padding: 26px 0;
  font-size: 1.9rem;
  font-weight: 500;
  border-right: 1px solid #d5d5d5;
}
.partner-regist table td b {
  font-size: 3.1rem;
  font-weight: 400;
}
.partner-regist table td:last-child,
.partner-regist table th:last-child {
  border-right: 0;
}
.partner-start h3,
.partner-why h3,
.partner-ecos h3,
.partner-regist h3 {
  margin-bottom: 11px;
  color: #a0a0a0;
  font-size: 1.4rem;
  font-weight: 500;
}
.partner-start h2,
.partner-how h2,
.partner-why h2,
.partner-ecos h2,
.partner-regist h2 {
  color: #333;
  font-size: 1.9rem;
  font-weight: bold;
}
.partner-ecos {
  margin-bottom: 123px;
  padding-left: 60px;
}
.partner-ecos .ecos-img {
  height: 655px;
  background: center / contain no-repeat
    url("@/assets/images/partner/partner_02.png");
}
.partner-why {
  margin-bottom: 138px;
  padding: 69px 0 88px 0;
  background-color: #fbfbfb;
  text-align: center;
}
.partner-why h2 {
  margin-bottom: 61px;
}
.partner-why .why-card {
  height: 100%;
  padding: 26px 24px;
  background-color: #fff;
  border-radius: 16px;
  text-align: left;
}
.partner-why .why-card h2 {
  margin-bottom: 12px;
  padding-bottom: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: 1px solid #d5d5d5;
}
.partner-why .why-card h4 {
  margin-bottom: 7px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: bold;
}
.partner-why .why-card p {
  margin-bottom: 40px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.partner-why .why-card .card-img {
  display: flex;
  align-items: center;
  width: 189px;
  height: 220px;
  margin: auto;
}
.partner-how {
  margin-bottom: 125px;
  text-align: center;
}
.partner-how h2 {
  margin-bottom: 50px;
}
.partner-how .row {
  margin-left: -80px;
  margin-right: -80px;
}
.partner-how .how-col {
  position: relative;
  padding-left: 80px;
  padding-right: 80px;
}
.partner-how .how-col:before {
  content: "";
  position: absolute;
  top: 0;
  right: -80px;
  width: 160px;
  min-height: 50px;
  background: center / cover no-repeat
    url("@/assets/images/partner/partner_09.png");
}
.partner-how .how-col:last-child:before {
  display: none;
}
.partner-how .how-col .how-img {
  display: flex;
  align-items: center;
  width: 205px;
  min-height: 300px;
  margin: 0 auto 100px auto;
}
.partner-how h3 {
  margin-bottom: 16px;
  color: #6e3cbc;
  font-size: 2rem;
  font-weight: 300;
}
.partner-how p {
  color: #424a5d;
  font-size: 1.1rem;
  font-weight: 400;
}
.partner-start {
  padding: 81px 0 90px 0;
  text-align: center;
  background-color: #fbfbfb;
  overflow: hidden;
}
.partner-start h2 {
  margin-bottom: 53px;
}
.partner-start a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 231px;
  margin: auto;
  padding: 14px 0;
  background-color: #3b8ef2;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 30px;
}
.partner-start a svg {
  margin-left: 5px;
}
.partner-start a:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 90%;
  width: 164px;
  height: 129px;
  background: center / cover no-repeat
    url("@/assets/images/partner/partner_10.png");
  transition: all ease 0.35s;
}
.partner-start a:hover:after {
  background: center / cover no-repeat
    url("@/assets/images/partner/partner_h_10.png");
}
</style>
