<template>
  <div class="sales-header-warp">
    <b-row>
      <b-col cols="3">
        <div class="sales-card box-shadow">
          <div class="sales-card-header">
            <div class="img">
              <IconSlot
                :iconName="'myIconSell4'"
                :iconColor="'#6E3CBC'"
                :svgHeight="24"
                :svgWidth="24"
              />
            </div>
            <router-link :to="{ name: 'MyPurchase' }">
              상품등록하기
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
          <div class="sales-card-footer">
            <h2>5</h2>
            <p>내 상품</p>
          </div>
        </div>
      </b-col>

      <b-col cols="3">
        <div class="sales-card box-shadow">
          <div class="sales-card-header">
            <div class="img">
              <IconSlot
                :iconName="'myIconSell2'"
                :iconColor="'#6E3CBC'"
                :svgHeight="24"
                :svgWidth="24"
              />
            </div>
            <router-link :to="{ name: 'MyPurchase' }">
              출금하기
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
          <div class="sales-card-footer">
            <h2>₩ 2,500,000</h2>
            <p>출금 가능 금액</p>
          </div>
        </div>
      </b-col>

      <b-col cols="3">
        <div class="sales-card box-shadow">
          <div class="sales-card-header">
            <div class="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.06"
                viewBox="0 0 22.5 22.06"
              >
                <g transform="translate(-34.879 -32.85)">
                  <path
                    d="M17.664,28.508A.508.508,0,0,0,17.156,28H14.108a.508.508,0,0,0,0,1.016h3.048A.508.508,0,0,0,17.664,28.508Z"
                    transform="translate(29.926 23.713)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                  <path
                    d="M19.1,24H16.048a.508.508,0,1,0,0,1.016H19.1A.508.508,0,1,0,19.1,24Z"
                    transform="translate(29.414 24.213)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                  <path
                    d="M18.556,32H15.508a.508.508,0,1,0,0,1.016h3.048a.508.508,0,0,0,0-1.016Z"
                    transform="translate(29.559 21.744)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                  <path
                    d="M28.764,32H25.208a.508.508,0,0,0,0,1.016h3.556a.508.508,0,1,0,0-1.016Z"
                    transform="translate(27.449 21.744)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                  <path
                    d="M29.764,28H26.208a.508.508,0,0,0,0,1.016h3.556a.508.508,0,1,0,0-1.016Z"
                    transform="translate(26.957 23.713)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                  <path
                    d="M23.766,18.6a19.516,19.516,0,0,0-1.932-7A13.961,13.961,0,0,0,17.5,6.642l1.645-3.66a.7.7,0,0,0-.048-.692A.683.683,0,0,0,18.551,2H7.362a.684.684,0,0,0-.579.319.7.7,0,0,0-.045.664L8.417,6.656a14.024,14.024,0,0,0-4.3,4.947,21.147,21.147,0,0,0-2.056,8.5,2.5,2.5,0,0,0,.685,1.875,2.584,2.584,0,0,0,1.878.74H8.869V21.372h-4.3a1.146,1.146,0,0,1-.829-.36,1.127,1.127,0,0,1-.308-.851A20.375,20.375,0,0,1,5.32,12.239a12.409,12.409,0,0,1,4.29-4.7h.685a21.343,21.343,0,0,0-1.281,2.02,15.838,15.838,0,0,0-1.007,2.311l.939.637a16.69,16.69,0,0,1,1.021-2.4,20.151,20.151,0,0,1,1.679-2.567h.685a14.951,14.951,0,0,1,.966,3.459,15.741,15.741,0,0,1,.219,2.671L14.6,12.9a16.864,16.864,0,0,0-.219-2.076A17.3,17.3,0,0,0,13.5,7.535h.534l.624-1.384H9.7L8.431,3.384h9.052L15.769,7.168a6.8,6.8,0,0,1,.843.54,12.849,12.849,0,0,1,4.015,4.545A18.533,18.533,0,0,1,22.389,18.6Z"
                    transform="translate(32.977 31)"
                    fill="#6E3CBC"
                    stroke="#6E3CBC"
                    stroke-width="0.3"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="sales-card-footer">
            <h2>₩ 5,000,000</h2>
            <p>총 누적 판매 금액</p>
          </div>
        </div>
      </b-col>

      <b-col cols="3">
        <div class="sales-card box-shadow">
          <div class="sales-card-header">
            <div class="img">
              <IconSlot
                :iconName="'myIconPartner1'"
                :iconColor="'#6E3CBC'"
                :svgHeight="24"
                :svgWidth="24"
              />
            </div>
          </div>
          <div class="sales-card-footer">
            <h2>₩ 5,000,000</h2>
            <p>총 누적 출금 수익</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import IconSlot from "@/components/icon-slot.vue";

export default {
  name: "sales-header-skin",
  components: {
    IconSlot,
  },
};
</script>
<style>
.sales-header-warp {
  margin-bottom: 55px;
}
.sales-header-warp .sales-card {
  position: relative;
  height: 200px;
  padding: 25px 30px;
  border-radius: 10px;
  background-color: #fff;
}
.sales-header-warp .sales-card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, rgb(231, 146, 196), rgb(130, 73, 197));
  border-radius: 10px;
  opacity: 0;
  transition: all ease 0.35s;
}
.sales-card:hover .sales-card-header .img svg {
  transform: all ease 0.35s;
}
.sales-card:hover .sales-card-header .img svg path {
  fill: #fff;
}
.sales-card:hover .sales-card-footer p,
.sales-card:hover .sales-card-footer h2,
.sales-card:hover .sales-card-header a {
  color: #fff;
}
.sales-card:hover .sales-card-header .img {
  background-color: rgba(241, 238, 253, 0.6);
}
.sales-header-warp .sales-card:hover:before,
.sales-header-warp .sales-card:hover {
  cursor: pointer;
  opacity: 1;
  box-shadow: 1px 2px 10px rgb(116, 53, 195, 0.1);
}
.sales-card .sales-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-card .sales-card-header .img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: #f1eefd;
  border-radius: 100%;
  z-index: 1;
  transition: all ease 0.35s;
}
.sales-card .sales-card-header a {
  position: relative;
  display: flex;
  align-items: center;
  color: #45458d;
  font-size: 0.9rem;
  font-weight: 400;
  z-index: 2;
  transition: all ease 0.35s;
}
.sales-card .sales-card-header a svg {
  margin-left: 5px;
  width: 11px;
}
.sales-card-footer {
  position: absolute;
  bottom: 25px;
  left: 30px;
}
.sales-card-footer h2 {
  margin-bottom: 8px;
  color: #333333;
  font-size: 1.6rem;
  font-weight: 400;
  transition: all ease 0.35s;
}
.sales-card-footer p {
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  transition: all ease 0.35s;
}
</style>
