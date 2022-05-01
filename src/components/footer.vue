<template>
  <div class="ex-footer">
    <b-container>
      <b-row class="align-items-center">
        <b-col cols="4">
          <div class="footer-logo-wrap">
            <a href="#"><img :src="logo" /></a>
            <p>가치있는 파일 거래의 시작.</p>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="co-info">
            <ul>
              <li>
                <a href="tel:02-543-6686">
                  <icon-slot
                    :iconName="'telephone'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#7C7C7C'"
                  />
                  02-543-6686
                </a>
              </li>
              <li>
                <a href="mailto:connor@berkeley.consulting" target="_blank">
                  <icon-slot
                    :iconName="'envelope'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#7C7C7C'"
                  />
                  connor@berkeley.consulting
                </a>
              </li>
              <li>
                <p>Copyright Reserved 2021 for Berkeley Consulting</p>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <div class="footer-divider"></div>

      <b-row class="align-items-center">
        <b-col cols="12">
          <div class="footer-info">
            <ul>
              <li>상호 : 버클리컨설팅</li>
              <li>대표 : 탁기영</li>
              <li>사업자등록번호 : 382-62-00633</li>
              <li>통신판매업신고 : 2021-서울강남-05674</li>
              <li>개인정보관리책임자 : 고은솔</li>
              <li>주소 : 서울시 강남구 학동로 33길27 1층 102호 버클리컨설팅</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import logo from "@/assets/images/header-logo.png";
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "footer-skin",
  data() {
    return {
      logo: logo,
    };
  },
  components: { iconSlot },
};
</script>
<style>
.ex-footer {
  padding: 50px 0;
  border-top: 2px solid #f4f4f4;
}
.footer-divider {
  width: 100%;
  height: 1px;
  margin: 15px 0 26px 0;
  background-color: #e0e0e0;
}
.footer-logo-wrap,
.co-info ul,
.footer-info ul {
  display: flex;
  align-items: center;
}
.co-info ul {
  justify-content: end;
}
.footer-logo-wrap a img {
  height: 20px;
}
.footer-logo-wrap p {
  margin-left: 15px;
  color: #7c7c7c;
  font-size: 0.9rem;
  font-weight: 400;
}
.co-info ul li a,
.co-info ul li p,
.footer-info ul li {
  position: relative;
  padding: 0 18px;
  color: #7c7c7c;
  font-size: 0.9rem;
  font-weight: 400;
}
.co-info ul li a::after,
.footer-info ul li::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 70%;
  background-color: #7c7c7c;
}
.footer-info ul,
.co-info ul li a {
  white-space: nowrap;
}
.co-info ul li a svg {
  width: 14px;
}
.footer-info ul li {
  padding: 0 12px;
}
.co-info ul li:first-child a,
.footer-info ul li:first-child {
  padding-left: 0;
}
.co-info ul li p,
.footer-info ul li:last-child {
  padding-right: 0;
}
.footer-info ul li:last-child:after {
  display: none;
}
</style>
