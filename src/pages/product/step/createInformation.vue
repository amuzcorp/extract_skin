<template>
  <div class="prod-create-wrap">
    <div class="create-hidden-file">
      <b-container>
        <b-row class="align-items-center">
          <b-col cols="6">
            <div class="info">
              <h1>숨어있던 나의 파일로<br />판매수익을 내보세요!</h1>
              <p>
                누구나 무형의 자산, 파일을 가지고 있습니다.<br />
                이젠 엑기스로 가치있는 파일을 거래 해 보세요.
              </p>
              <router-link :to="{ name: 'createAgreement' }">
                내 파일 팔아보기
              </router-link>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="img"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="digital-wrap">
      <div class="digital-inner text-center">
        <h1>기존 디지털파일 마켓의 문제점</h1>
        <p>
          번거로운 구매환경, 까다로운 판매조건 등 기존의 디지털 파일 마켓은<br />
          다양한 문제점들을 가지고 있습니다.
        </p>

        <!-- left -->
        <div class="digital-ps absence">파일 판매처 부재</div>
        <div class="digital-ps quality">고퀄리티 문서 부족</div>
        <div class="digital-ps safety">안전하지 않은 판매환경</div>
        <!-- right -->
        <div class="digital-ps program">프로그램간 호환성</div>
        <div class="digital-ps contents">컨텐츠별 높은 진입장벽</div>
        <div class="digital-ps condition">까다로운 판매조건</div>
      </div>
    </div>

    <div class="but-wrap">
      <b-container>
        <b-row class="align-items-center">
          <b-col cols="6">
            <h1>하지만! 엑기스는 다릅니다.</h1>
            <p>
              누구나 간편하게 판매하고 수익을 낼 수 있습니다.<br />
              안전한 판매환경에서 당신의 가치있는 파일을 판매해보세요!
            </p>

            <div class="cnt">
              <p><b>01.</b> 간편한 판매조건</p>
              <p><b>02.</b> 낮은 진입장벽</p>
              <p><b>03.</b> 안전한 판매환경</p>
              <p><b>04.</b> 가치있는 파일공유</p>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="img"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="necessary-wrap text-center">
      <h1>이젠 선택이 아닌 필수입니다.</h1>
      <p>
        다양한 환경에서 엑기스를 이용해주시고 계시는 고객님들에게 물었습니다.
        <br />
        엑기스와 함께해야하는 이유가 무엇인가요?
      </p>

      <div class="necessary-card-list">
        <b-container>
          <b-row>
            <b-col cols="6">
              <div class="necessary-card box-shadow">
                <div class="necessary-card-body">
                  <div
                    class="img"
                    :style="'background-image: url(' + userImg1 + ')'"
                  ></div>
                  <h2>
                    오랜 시간 걸쳐 만든 작업물을 가치있게 만들어 주는 엑기스는
                    저와 이제 뗄 수 없는 사이가 된 것 같아요!! 작업물이 돈으로
                    들어오니.. 재미도 쏠쏠하구요^^
                  </h2>
                </div>
                <h3>디자인업 관련 고객님</h3>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="necessary-card box-shadow">
                <div class="necessary-card-body">
                  <div
                    class="img"
                    :style="'background-image: url(' + userImg2 + ')'"
                  ></div>
                  <h2>
                    국가고시 합격하신분 필기 및 기출문제 정리한 파일을
                    구매하였습니다. 세세한 부분까지 놓치지 않고 정리를
                    잘해놓으셔서 정말 많은 도움되었습니다!
                  </h2>
                </div>
                <h3>국가고시 준비 고객님</h3>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="necessary-card box-shadow">
                <div class="necessary-card-body">
                  <div
                    class="img"
                    :style="'background-image: url(' + userImg3 + ')'"
                  ></div>
                  <h2>
                    회사 프로세스가 잘 짜여있지 않아 양식 만드는 일이 고되었는데
                    엑기스에 올라온 여러가지 실무 양식들이 엄청 도움이 되었어요!
                    감사해요!
                  </h2>
                </div>
                <h3>사무직 관련 고객님</h3>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="necessary-card box-shadow">
                <div class="necessary-card-body">
                  <div
                    class="img"
                    :style="'background-image: url(' + userImg4 + ')'"
                  ></div>
                  <h2>
                    영상에 쓰일 BGM을 찾아보다 관련 직종에 계신 분이 만드신
                    작업물을 보고 한번 받아보았는데 퀄리티가 너무 좋았습니다.
                    자주 이용할 것 같아요!
                  </h2>
                </div>
                <h3>크리에이터 관련 고객님</h3>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>

    <div class="flow-wrap">
      <div class="flow-inner text-center">
        <b-container>
          <h1>판매자 플로우</h1>
          <p>
            번거롭지 않습니다. 누구나 가능합니다.<br />무형의 자산이었던 당신의
            파일에 새로운 가치를 새겨보세요.
          </p>
          <div class="flow-inner-footer">
            <ul>
              <li>
                <img src="@/assets/images/cre_07.png" />
                <p>판매자 등록</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_08.png" />
                <p>자료 업로드</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_09.png" />
                <p>상품 판매</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_10.png" />
                <p>출금 신청</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_11.png" />
                <p>출금 완료</p>
              </li>
            </ul>
          </div>
        </b-container>
      </div>

      <div class="flow-inner partner text-center">
        <b-container>
          <h1>파트너스 수익 플로우</h1>
          <p>
            파일이 없어도 파트너스 프로그램으로 돈을 벌어보세요!<br />
            엑기스 상품을 파트너스 링크로 홍보하면 정해진 비율대로 수익을 얻을
            수 있습니다.
          </p>
          <div class="flow-inner-footer">
            <ul>
              <li>
                <img src="@/assets/images/cre_12.png" />
                <p>파트너스 등록</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_13.png" />
                <p>링크 복사</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_14.png" />
                <p>상품 홍보</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_15.png" />
                <p>구매 진행</p>
              </li>
              <li class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                  />
                </svg>
              </li>
              <li>
                <img src="@/assets/images/cre_16.png" />
                <p>수익 지급</p>
              </li>
            </ul>
          </div>
        </b-container>
      </div>
    </div>

    <div class="need-wrap">
      <b-container>
        <b-row class="align-items-center">
          <b-col cols="6">
            <h1>뭐가 필요해?<br />말만해! 엑기스만 뽑아줄게!</h1>
            <a href="">판매자 등록하러 가기</a>
          </b-col>
          <b-col cols="6">
            <div class="img"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import userImg1 from "@/assets/images/cre_03.png";
import userImg2 from "@/assets/images/cre_04.png";
import userImg3 from "@/assets/images/cre_05.png";
import userImg4 from "@/assets/images/cre_06.png";

export default {
  name: "product-create-skin",
  data() {
    return {
      userImg1: userImg1,
      userImg2: userImg2,
      userImg3: userImg3,
      userImg4: userImg4,
    };
  },
};
</script>
<style scoped>
/* Need */
.need-wrap {
  padding: 68px 0 53px 0;
  background-color: #f7f7f8;
}
.need-wrap h1 {
  margin-bottom: 61px;
  color: #121212;
  font-size: 2.5rem;
  font-weight: 400;
}
.need-wrap a {
  display: inline-block;
  padding: 13px 30px;
  background-color: #5652cc;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 30px;
}
.need-wrap .img {
  min-height: 436px;
  background: center / contain no-repeat url("@/assets/images/cre_17.png");
}

/* Hidden File */
.create-hidden-file {
  margin-top: 154px;
  margin-bottom: 195px;
}
.create-hidden-file h1 {
  margin-bottom: 31px;
  color: #202427;
  font-size: 2.5rem;
  font-weight: bold;
}
.create-hidden-file p {
  margin-bottom: 70px;
  color: #444444;
  font-size: 1.1rem;
  font-weight: 400;
}
.create-hidden-file a {
  display: inline-block;
  padding: 14px 37px;
  background-color: #45458d;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 30px;
}
.create-hidden-file .img {
  width: 100%;
  min-height: 321px;
  background: center / contain no-repeat url("@/assets/images/cre_01.png");
}

/* Digital */
.digital-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 224px 0 243px 0;
  background-color: #fafafb;
}
.digital-inner {
  position: relative;
}
.flow-inner h1,
.necessary-wrap h1,
.but-wrap h1,
.digital-inner h1 {
  margin-bottom: 16px;
  color: #121212;
  font-size: 1.9rem;
  font-weight: bold;
}
.flow-inner p,
.necessary-wrap p,
.but-wrap p,
.digital-inner p {
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
}
.but-wrap p {
  margin-bottom: 81px;
}
.digital-ps {
  position: absolute;
  padding: 17px 24px;
  border: 1px dashed #894de6;
  border-radius: 30px;
  white-space: nowrap;
}
.digital-inner .absence {
  right: 90%;
  bottom: 130%;
}
.digital-inner .quality {
  right: 110%;
  top: 50%;
  transform: translateY(-50%);
}
.digital-inner .safety {
  right: 95%;
  top: 130%;
}
.digital-inner .program {
  left: 110%;
  bottom: 110%;
}
.digital-inner .contents {
  left: 120%;
  top: 50%;
}
.digital-inner .condition {
  left: 95%;
  top: 150%;
}

/* But */
.but-wrap {
  padding: 202px 0 218px 0;
}
.but-wrap .img {
  width: 100%;
  min-height: 412px;
  background: center / contain no-repeat url("@/assets/images/cre_02.png");
}
.cnt p {
  margin-bottom: 20px;
  color: #121212;
  font-size: 1.1rem;
  font-weight: 400;
}
.cnt p b {
  margin-right: 5px;
  color: #6e3cbc;
  font-size: 1.2rem;
  font-weight: 500;
}

/* Necessary */
.necessary-wrap {
  padding: 133px 0 215px 0;
  background-color: #f7f7f8;
}
.necessary-card-list {
  margin-top: 109px;
}
.necessary-card {
  margin-bottom: 24px;
  padding: 29px 40px 35px 30px;
  background-color: #ffffff;
  border-radius: 24px;
}
.necessary-card-body {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.necessary-card .img {
  width: 100px;
  min-width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.necessary-card h2 {
  padding-left: 28px;
  color: #444444;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  line-height: 1.4;
}
.necessary-card h3 {
  color: #444444;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}

/* Flow */
.flow-wrap {
  padding: 202px 0 262px 0;
}
.flow-inner.partner {
  padding-top: 207px;
}
.flow-inner p {
  margin-bottom: 89px;
}
.flow-inner-footer ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flow-inner-footer ul li.arrow {
  padding: 0 63px;
  fill: #6a707e;
}
.flow-inner-footer ul li img {
  width: 63px;
  margin: 0 auto 10px auto;
}
.flow-inner-footer ul li p {
  margin: 0;
  color: #121212;
  font-size: 1.1rem;
  font-weight: 400;
}
</style>
