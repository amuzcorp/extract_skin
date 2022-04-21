<template>
  <div class="pay-com-wrap">
    <b-container class="text-center">
      <div class="com-visual">
        <div class="com-inner">
          <h2>구매가 완료되었습니다.</h2>
          <p>
            총 1건의 구매가 완료되었습니다.<br />구매한 상품은 자동으로
            구매목록에 등록됩니다.
          </p>
          <div class="btn-area">
            <a href=""><span>구매목록</span></a>
            <a href=""><span>계속 구매</span></a>
          </div>
        </div>
      </div>

      <div class="pay-com-list-wrap">
        <h2>결제 내역</h2>
        <table class="pay-history-table">
          <thead>
            <tr>
              <th>주문상품</th>
              <th>할인적용</th>
              <th>결제금액</th>
              <th>결제수단</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25,000d원</td>
              <td>- 0원</td>
              <td>25,000d원</td>
              <td>신용카드 (하나은행 4892)</td>
            </tr>
          </tbody>
        </table>

        <h2>구매완료 상품</h2>
        <table class="prod-com-table">
          <tbody>
            <tr>
              <td class="thumb-td">
                <img src="@/assets/images/prod_view_01.png" class="thumb" />
              </td>
              <td class="vertical-top">
                <a href="" class="tit">
                  사람,동물,건물 등 직접그린 일러스트 모음집 팝니다.
                  <div class="zip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-folder"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
                      />
                    </svg>
                    일러스트 모음집.ai
                  </div>
                </a>
                <div class="download">
                  다운로드기간 : 2022 - 01 -01 ~ 2022 - 01 - 01
                </div>
              </td>
              <td class="text-center">25,000원</td>
              <td class="text-center">
                <a href="" class="download-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                    />
                    <path
                      d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                    />
                  </svg>
                  다운로드</a
                >
              </td>
            </tr>
          </tbody>
        </table>

        <div class="prod-com-info">
          <ul>
            <li>
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
              파일 서비스는 자료 제공 형태의 서비스이므로, 수령하신 이후에는
              환불이 불가합니다.
            </li>
            <li>
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
              다운로드 후 바이러스 검사를 꼭 하시길 권장합니다.
            </li>
            <li>
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
              재다운로드는 30일로 제한됩니다.
            </li>
          </ul>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "pay-show-skin",
};
</script>
<style>
.com-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 39px;
  padding: 57px 0 52px 0;
  background-color: #fafafc;
  border-radius: 13px;
}
.com-inner {
  position: relative;
  color: #333333;
  z-index: 2;
}
.com-inner:before {
  content: "";
  position: absolute;
  right: 110%;
  bottom: -5px;
  width: 192px;
  height: 155px;
  background: center / cover no-repeat url("@/assets/images/pay_02.png");
  z-index: 1;
}
.com-inner:after {
  content: "";
  position: absolute;
  left: 110%;
  top: -5px;
  width: 227px;
  height: 172px;
  background: center / cover no-repeat url("@/assets/images/pay_01.png");
  z-index: 1;
}
.com-inner h2 {
  margin-bottom: 7px;
  padding: 0 40px;
  font-size: 2rem;
  font-weight: bold;
}
.com-inner p {
  margin-bottom: 37px;
  font-size: 1rem;
  font-weight: 400;
}
.com-inner .btn-area {
  display: flex;
}
.com-inner .btn-area a {
  width: 100%;
  flex-grow: 1;
  display: inline-block;
  padding: 10px 0;
  margin-right: 10px;
  background-color: #fff;
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  transition: all ease 0.35s;
}
.com-inner .btn-area a span {
  position: relative;
  padding-left: 41px;
}
.com-inner .btn-area a span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 31px;
  height: 31px;
  background: center / contain no-repeat url("@/assets/images/pay_03.png");
}
.com-inner .btn-area a:last-child span::before {
  background: center / contain no-repeat url("@/assets/images/pay_04.png");
}
.com-inner .btn-area a:last-child {
  margin-right: 0;
}
.com-inner .btn-area a:hover {
  border-color: #300474;
}
.pay-com-list-wrap {
  margin-bottom: 186px;
}
.pay-com-list-wrap h2 {
  margin-bottom: 2px;
  padding-bottom: 16px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 500;
  border-bottom: 1px solid #ededed;
  text-align: left;
}
.pay-history-table {
  width: 100%;
  margin-bottom: 57px;
  border-bottom: 1px solid #ededed;
}
.pay-history-table th {
  padding: 14px 0;
  color: #848484;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px solid #ededed;
}
.pay-history-table td {
  padding: 22px 0;
  color: #333;
  font-size: 1rem;
  font-weight: 400;
}
.prod-com-table {
  width: 100%;
  margin-bottom: 11px;
}
.prod-com-table td {
  position: relative;
  padding: 25px 0;
  color: #333;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
}
.prod-com-table td.thumb-td {
  width: 110px;
  height: 110px;
}
.prod-com-table td.thumb-td img {
  border-radius: 12px;
}
.prod-com-table td a.tit {
  display: block;
  padding-top: 5px;
  padding-left: 38px;
  color: inherit;
  line-height: 1.6;
}
.prod-com-table td a:hover {
  text-decoration: underline;
}
.prod-com-table td .download {
  position: absolute;
  left: 38px;
  bottom: 25px;
  color: #707070;
  font-size: 0.85rem;
}
.prod-com-table td .download-btn {
  padding: 16px 53px;
  background-color: #300474;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
}
.prod-com-table td .download-btn svg {
  margin-right: 5px;
}
.prod-com-table td .download-btn:hover {
  text-decoration: unset;
}
.prod-com-info {
  padding: 44px 35px 34px 35px;
  background-color: #fafafa;
  text-align: left;
  border-radius: 10px;
}
.prod-com-info ul li {
  margin-bottom: 10px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.prod-com-info ul li svg {
  margin-right: 5px;
  color: #6e3cbc;
}
</style>
