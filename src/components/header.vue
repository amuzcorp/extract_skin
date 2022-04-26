<template>
  <div class="ex-header">
    <!-- Floating Button -->
    <div class="container fake-col" :class="{ show: scY > 300 }">
      <div class="floating-btn">
        <a @click="toTop">
          <icon-slot
            :iconName="'floatTop'"
            :svgHeight="27"
            :svgWidth="14"
            :iconColor="'#707070'"
          />
        </a>
      </div>
    </div>

    <b-container>
      <b-row class="align-items-center">
        <b-col cols="6">
          <div class="header-col-left">
            <div class="logo-wrap">
              <b-navbar
                toggleable
                type="white"
                variant="white"
                class="ex-main-nav"
              >
                <b-navbar-toggle target="navbar-toggle-collapse">
                  <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="x"></b-icon>
                    <b-icon v-else icon="list"></b-icon>
                  </template>
                </b-navbar-toggle>

                <b-collapse id="navbar-toggle-collapse" is-nav>
                  <b-navbar-nav class="ml-auto">
                    <subNavItem />
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'report'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      보고서
                    </b-nav-item>
                    <b-nav-item href="#" active>
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'start'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      스타트업
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'drawing'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      설계/도면
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'phrases'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      디지털문구
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'workbook'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      문제집/족보
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'pictorial'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      화보
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'font'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      폰트
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'program'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      프로그램
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'design'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      디자인
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'music'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      브금
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'videoClip'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      영상클립
                    </b-nav-item>
                    <b-nav-item href="#">
                      <icon-slot
                        :iconClass="'main-nav-item'"
                        :iconName="'model'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      모델/초상권
                    </b-nav-item>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
              <router-link :to="{ name: 'homeSkin' }">
                <img :src="logo" class="logo" />
              </router-link>
            </div>
            <div class="header-search">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2 search-input"
                  placeholder="검색어를 입력해주세요."
                ></b-form-input>
                <b-button
                  size="sm"
                  class="my-2 my-sm-0 search-btn"
                  type="submit"
                >
                  <icon-slot
                    :iconName="'search'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#6A707E'"
                  />
                </b-button>
              </b-nav-form>
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="header-col-right">
            <router-link :to="{ name: 'purchaseList' }" class="header-ad">
              내가 원하는 상품이 없을땐, 공고를 올려보세요!
            </router-link>
            <div class="header-col">
              <div class="header-btn-area">
                <router-link
                  :to="{ name: 'productCreate' }"
                  class="product pr-0"
                  >상품 등록</router-link
                >
                <!-- 알림 메뉴 -->
                <a
                  @mouseover="alertOnOver"
                  @mouseleave="alertOnLeave"
                  class="alert-nav on"
                >
                  알림
                  <icon-slot
                    :iconName="'chvronDown'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#6A707E'"
                  />
                  <b-dropdown ref="alert_dropdown">
                    <b-dropdown-item href="#" class="sub-item">
                      <h2>오늘</h2>
                      <div class="alert-inner">
                        <div
                          class="alert-info-img"
                          :style="
                            'background: center / cover no-repeat url(' +
                            icon_alert_01 +
                            ')'
                          "
                        ></div>
                        <div class="txt">
                          <p>
                            <b>‘홍길동 모델사진 전집 팝니다’</b>가
                            판매되었습니다.
                          </p>
                          <p>판매목록을 확인해주세요.</p>
                        </div>
                      </div>
                      <p>30분전</p>
                    </b-dropdown-item>
                    <b-dropdown-item href="#" class="sub-item">
                      <h2>12.08 (월)</h2>
                      <div class="alert-inner">
                        <div
                          class="alert-info-img"
                          :style="
                            'background: center / cover no-repeat url(' +
                            icon_alert_02 +
                            ')'
                          "
                        ></div>
                        <div class="txt">
                          <p>
                            <b>‘사람 일러스트 모음파일 팝니다’</b>가
                            판매되었습니다.
                          </p>
                          <p>판매목록을 확인해주세요.</p>
                        </div>
                      </div>
                      <p>30분전</p>
                    </b-dropdown-item>
                    <b-dropdown-item href="#" class="sub-item">
                      <h2>12.09 (화)</h2>
                      <div class="alert-inner">
                        <div
                          class="alert-info-img"
                          :style="
                            'background: center / cover no-repeat url(' +
                            icon_alert_03 +
                            ')'
                          "
                        ></div>
                        <div class="txt">
                          <p>
                            <b>‘에곤쉴레 초상화 모음집 삽니다’</b> 게시물에
                            새로운 댓글이 달렸습니다.
                          </p>
                          <p>가 판매되었습니다.</p>
                        </div>
                      </div>
                      <p>30분전</p>
                    </b-dropdown-item>
                  </b-dropdown>
                </a>

                <!-- 로그인 -->
                <router-link
                  :to="{ name: 'loginPage' }"
                  class="login-btn d-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                  로그인
                </router-link>

                <!-- 유저 메뉴 -->
                <a @mouseover="onOver" @mouseleave="onLeave" class="user-nav">
                  <img :src="icon_user" />
                  <icon-slot
                    :iconName="'chvronDown'"
                    :svgHeight="16"
                    :svgWidth="16"
                    :iconColor="'#6A707E'"
                  />
                  <b-dropdown ref="dropdown">
                    <li class="sub-item">
                      <router-link :to="{ name: 'MyPageFrame' }">
                        <icon-slot
                          :iconName="'buy'"
                          :svgHeight="20"
                          :svgWidth="20"
                          :iconColor="'#424a5d'"
                        />
                        나의 구매정보
                      </router-link>
                    </li>
                    <b-dropdown-item href="#" class="sub-item">
                      <icon-slot
                        :iconName="'sell'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      나의 판매정보</b-dropdown-item
                    >
                    <li class="sub-item">
                      <router-link :to="{ name: 'profileList' }">
                        <icon-slot
                          :iconName="'profile'"
                          :svgHeight="20"
                          :svgWidth="20"
                          :iconColor="'#424a5d'"
                        />
                        나의 프로필
                      </router-link>
                    </li>
                    <li class="sub-item">
                      <router-link :to="{ name: 'partnerHome' }">
                        <icon-slot
                          :iconName="'partner'"
                          :svgHeight="20"
                          :svgWidth="20"
                          :iconColor="'#424a5d'"
                        />
                        파트너스 가입
                      </router-link>
                    </li>
                    <b-dropdown-item href="#" class="sub-item">
                      <icon-slot
                        :iconName="'client'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      고객센터</b-dropdown-item
                    >
                    <b-dropdown-item
                      href="#"
                      class="sub-item"
                      v-b-modal.logout-modal
                    >
                      <icon-slot
                        :iconName="'logout'"
                        :svgHeight="20"
                        :svgWidth="20"
                        :iconColor="'#424a5d'"
                      />
                      로그아웃</b-dropdown-item
                    >
                  </b-dropdown>
                </a>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="logout-modal" ref="logout-modal" hide-footer hide-header>
      <h2>엑기스에서 로그아웃 하려고 합니다.<br />로그아웃하시겠습니까?</h2>
      <div class="logout-modal-footer">
        <a href="#" @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a href="#" class="def-btn-on def-btn">로그아웃</a>
      </div>
    </b-modal>
  </div>
</template>
<script>
import logo from "@/assets/images/header-logo.png";
import icon_user from "@/assets/images/icon_user.png";
import icon_alert_01 from "@/assets/images/icon_alert_01.png";
import icon_alert_02 from "@/assets/images/icon_alert_02.png";
import icon_alert_03 from "@/assets/images/icon_alert_03.png";
import iconSlot from "@/components/icon-slot.vue";
import subNavItem from "@/components/sub-nav.vue";

export default {
  name: "header-skin",
  data() {
    return {
      logo: logo,
      icon_user: icon_user,
      icon_alert_01: icon_alert_01,
      icon_alert_02: icon_alert_02,
      icon_alert_03: icon_alert_03,
      scTimer: 0,
      scY: 0,
      isHover: false,
    };
  },
  components: {
    iconSlot,
    subNavItem,
  },
  methods: {
    onOver() {
      this.$refs.dropdown.visible = true;
    },
    onLeave() {
      this.$refs.dropdown.visible = false;
    },
    alertOnOver() {
      this.$refs.alert_dropdown.visible = true;
    },
    alertOnLeave() {
      this.$refs.alert_dropdown.visible = false;
    },
    hideModal() {
      this.$refs["logout-modal"].hide();
    },
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style>
.fake-col {
  position: fixed;
  left: 50%;
  bottom: 210px;
  transform: translateX(-50%);
  height: 52px;
  opacity: 0;
  visibility: hidden;
}
.floating-btn a {
  position: relative;
  left: calc(100% + 10px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 99;
  opacity: 0;
  transition: all ease 0.35s;
  visibility: initial;
}
.floating-btn a:hover {
  cursor: pointer;
}
.fake-col.show,
.fake-col.show .floating-btn a {
  opacity: 1;
}
.floating-btn.show a:hover {
  transform: scale(1.1);
}
.ex-header {
  padding: 40px 0 30px 0;
  border-bottom: 1px solid #d9d9d9;
}
.header-col-left,
.logo-wrap {
  display: flex;
  align-items: center;
}
.logo-wrap {
  width: 133px;
  justify-content: space-between;
  margin-right: 30px;
}
.header-search {
  flex-grow: 1;
  max-width: 415px;
}
.header-col-right {
  display: flex;
  justify-content: end;
  color: #6e3cbc;
}
.ex-header .navbar {
  position: relative;
}
.ex-header .navbar-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgb(110 60 188);
}
.ex-header .navbar .not-collapsed svg {
  color: #6e3cbc;
}
.ex-header .navbar .navbar-collapse {
  position: absolute;
  top: 100%;
  background: #fff;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 16%);
  border-radius: 12px;
  z-index: 99;
}
.ex-header .navbar .navbar-collapse li {
  position: static;
}
.ex-header .navbar .navbar-collapse li a {
  position: relative;
  min-width: 172px;
  padding: 14px 25px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
}
.ex-header .navbar .navbar-collapse li.dropdown a::after {
  display: none;
}
.ex-header .navbar .navbar-collapse li.dropdown a .chvronRight {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.ex-header .navbar .navbar-collapse li.dropdown.show {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.ex-header .navbar .navbar-collapse li.dropdown ul {
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  background-color: #fff;
  border: 0;
  border-left: 1px solid #d5d5d5;
  box-shadow: 6px 3px 10px rgb(0 0 0 / 16%);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
.ex-header .navbar .navbar-collapse li a:hover {
  background-color: #f7f7ff;
  color: #6e3cbc;
}
.ex-header .navbar .navbar-collapse li a:hover .chvronRight {
  color: #6e3cbc;
}
.ex-header .navbar .navbar-collapse li:hover .main-nav-item path {
  fill: #6e3cbc;
}
.ex-header .navbar .navbar-collapse li a.active {
  background-color: #f7f7ff;
  color: #6e3cbc;
  font-weight: bold;
}
.ex-header .navbar .navbar-collapse li a.active .main-nav-item path {
  fill: #6e3cbc;
}
.logo-wrap .logo {
  width: auto;
  height: 21px;
}
.header-search {
  position: relative;
}
.header-search .form-inline::marker {
  display: none;
}
.header-search .search-input {
  padding: 0.25rem 1.5rem;
  height: 44px;
  color: #aaaaaa;
  font-size: 0.9rem;
  border-radius: 30px;
}
.header-search .search-btn {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
}
.header-search .search-btn:hover {
  background: transparent;
}
.header-search .search-btn svg {
  color: #6a707e;
}
.header-col {
  display: flex;
  justify-content: end;
  align-items: center;
}
.header-ad {
  max-width: 316px;
  padding: 5px 21px;
  color: #6e3cbc;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid #fff;
  border-radius: 30px;
  box-shadow: 1.5px 2.5px 10px rgba(119, 119, 119, 0.1);
  text-align: center;
  transition: all ease 0.35s;
}
.header-ad:hover {
  color: #6e3cbc;
  border: 1px solid #6e3cbc;
}
.header-btn-area {
  display: flex;
  margin-left: 33px;
  align-items: center;
  justify-content: end;
}
.header-btn-area > a {
  position: relative;
  margin-left: 20px;
  padding: 0 0 0 22px;
  color: #333333;
  font-size: 1rem;
  font-weight: 500;
  transition: all ease 0.35s;
}
.header-btn-area .login-btn {
  display: flex;
  align-items: center;
  padding: 0;
}
.header-btn-area .login-btn svg {
  margin-right: 5px;
}
.header-btn-area > a .btn {
  padding: 0;
}
.header-btn-area a .chvronDown {
  width: 10px;
  color: #6a707e;
  transition: all ease 0.35s;
}
.header-btn-area .sub-item a svg {
  margin-right: 10px;
}
.header-btn-area .sub-item a:hover .sub-item-icon path {
  fill: #6e3cbc;
}
.header-btn-area a:hover .chvronDown {
  transform: rotate(-180deg);
}
.header-btn-area a:first-child {
  margin-left: 0;
}
.dropdown-item.active,
.dropdown-item:active {
  background: unset;
}
.header-btn-area a.alert-nav {
  width: 65px;
}
.header-btn-area a.product {
  width: 85px;
  padding-right: 0;
}
.header-btn-area a.user-nav {
  width: 50px;
  padding-left: 0;
}
.header-btn-area a:hover {
  color: #333333;
}
.header-btn-area a.user-nav .chvronDown {
  margin-left: 5px;
}
.header-btn-area a.user-nav img {
  width: 32px;
  height: 32px;
  border-radius: 30px;
}
.header-btn-area a.user-nav .dropdown {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 30px;
}
.header-btn-area a.alert-nav .dropdown {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.header-btn-area a.user-nav .dropdown.show,
.header-btn-area a.alert-nav .dropdown.show {
  height: 47px;
}
.header-btn-area a.user-nav .btn-secondary,
.header-btn-area a.alert-nav .btn-secondary,
.header-btn-area a.user-nav .btn-secondary:hover,
.header-btn-area a.alert-nav .btn-secondary:hover {
  background: transparent;
  color: transparent;
  border: 0;
}
.header-btn-area a.user-nav .dropdown-toggle::after {
  display: none;
}
.header-btn-area a.product::before,
.header-btn-area a.alert-nav::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 18px;
  height: 16px;
}
.header-btn-area a.product::before {
  background: center / contain no-repeat url("@/assets/images/icon_product.png");
}
.header-btn-area a.alert-nav::before {
  background: center / contain no-repeat
    url("@/assets/images/icon_bell_off.png");
}
.header-btn-area a.alert-nav.on::before {
  background: center / contain no-repeat url("@/assets/images/icon_bell_on.png");
}
.header-btn-area a.user-nav .dropdown-menu {
  right: -15px;
  left: auto !important;
  padding: 15px;
  border-radius: 6px;
  border: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);
  transform: translate3d(0, 47px, 0) !important;
}
.header-btn-area a.alert-nav .dropdown-menu {
  right: -4rem;
  left: auto !important;
  width: 31rem;
  padding: 15px 0;
  border-radius: 6px;
  border: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);
  transform: translate3d(0, 47px, 0) !important;
}
.header-btn-area a.alert-nav .dropdown-menu li {
  padding: 0 28px;
}
.header-btn-area a.alert-nav .dropdown-menu li:hover {
  background-color: #e9ecef;
}
.dropdown-item:hover,
.dropdown-item:focus {
  background-color: transparent;
}
.header-btn-area a.alert-nav .dropdown-menu li a {
  padding: 10px 0;
  border-bottom: 1px solid #ebebeb;
}
.header-btn-area a.alert-nav .dropdown-menu li:last-child a {
  border-bottom: 0;
}
.header-btn-area a.alert-nav .dropdown-menu li .alert-inner {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.header-btn-area a.alert-nav .dropdown-menu li h2 {
  margin-bottom: 15px;
  color: #121212;
  font-size: 1rem;
  font-weight: 500;
}
.header-btn-area a.alert-nav .dropdown-menu li .alert-info-img {
  width: 60px;
  height: 60px;
  margin-right: 25px;
  border-radius: 4px;
}
.header-btn-area a.alert-nav .dropdown-menu li .txt {
  white-space: break-spaces;
}
.header-btn-area a.alert-nav .dropdown-menu li .txt p {
  color: #121212;
  font-size: 1rem;
  text-align: left;
}
.header-btn-area a.alert-nav .dropdown-menu li p {
  color: #6a707e;
  font-size: 0.9rem;
  text-align: right;
}

.header-btn-area a.alert-nav .dropdown-menu li a img {
  width: 60px;
  height: 60px;
  padding-right: 25px;
  border-radius: 4px;
}
.header-btn-area a.user-nav .dropdown-menu li a {
  display: flex;
  align-items: center;
  padding: 15px 5px;
  color: #121212;
  font-size: 0.9rem;
  font-weight: 400;
  border-bottom: 1px solid #ebebeb;
  transition: all ease 0.35s;
}
.header-btn-area a.user-nav .dropdown-menu li a img {
  width: 24px;
  height: 24px;
  padding-right: 5px;
}
.header-btn-area a.user-nav .dropdown-menu li:last-child a {
  border-bottom: 0;
}
.header-btn-area a.user-nav .dropdown-menu li a.active,
.header-btn-area a.user-nav .dropdown-menu li a:hover {
  color: #6e3cbc;
  background-color: #fff;
}
.header-btn-area a.user-nav .dropdown-menu li a.active .sub-item-icon path {
  fill: #6e3cbc;
}

#logout-modal .modal-body {
  padding: 34px 43px;
  text-align: center;
}
#logout-modal h2 {
  margin-bottom: 23px;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
}
#logout-modal p {
  margin-bottom: 26px;
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 500;
}
.logout-modal-footer {
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
}
.logout-modal-footer a {
  width: 100%;
  flex-grow: 1;
  min-width: unset;
  margin-left: 5px;
  margin-right: 5px;
}
#logout-modal .modal-content {
  border-radius: 12px;
}
#logout-modal .modal-dialog {
  width: 400px;
  margin-top: 20%;
}
</style>
