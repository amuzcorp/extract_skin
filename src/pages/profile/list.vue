<template>
  <div class="profile-list-wrap">
    <b-container>
      <div class="banner">
        <div class="banner-inner text-center">
          <img src="@/assets/images/profile_01.png" />
          <h2>프로필 배너를 등록해주세요.</h2>
        </div>
      </div>
      <!-- banner -->
      <div
        class="banner"
        :style="'background: center / cover no-repeat url(' + banner + ')'"
      ></div>
      <!-- // banner -->

      <div class="profile-card-list">
        <b-row>
          <b-col cols="4">
            <div class="profile-card-item box-shadow">
              <div class="profile-card-body">
                <div class="user-info">
                  <div class="user-img"></div>
                  <div class="user-info-txt">
                    <h3>Cwalwall</h3>
                    <star-rating
                      :increment="0.5"
                      inactive-color="#DDDDDD"
                      active-color="#6E3CBC"
                      v-bind:star-size="18"
                      :rounded-corners="false"
                      :read-only="true"
                      :rating="4"
                    ></star-rating>
                  </div>
                </div>
                <div class="partner-mark">
                  <img src="@/assets/images/profile_02.png" />
                </div>
              </div>
              <div class="profile-card-footer">
                <ul>
                  <li>
                    <a v-b-modal.edit-modal>
                      프로필 수정
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
                    </a>
                  </li>
                  <li>
                    <a href="">
                      파트너스 활동
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
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="profile-card-item box-shadow">
              <div class="card-prod-img img"></div>
              <div class="profile-card-footer-txt">
                <h2>0</h2>
                <p>판매중인 상품이 없습니다.</p>
              </div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="profile-card-item box-shadow">
              <div class="card-review-img img"></div>
              <div class="profile-card-footer-txt">
                <h2>0</h2>
                <p>작성된 후기가 없습니다.</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="profile-intro">
        <h2>프로필 소개</h2>
        <div class="profile-intro-inner">
          <div class="img"></div>
          <h3 class="tit">자신을 소개해주세요.</h3>
        </div>
      </div>
      <!-- intro -->
      <div class="profile-intro in">
        <p>
          안녕하세요. 올해 로 9년차 한의사 유창석이라고 합니다. 아플 때만 찾는
          건강이 아닌, 삶을 풍요롭게 하는 건강을<br />
          많은 분들과 도란도란 나누고 싶습니다. 늘 궁금했지만 물어볼 수 없었던
          내 몸, 내 건강에 대한 이야기를 저와 함께 차분히 돌아보시는 건
          어떨까요?
          <br /><br />
          현) 봄동한의원 강남도곡점 대표원장<br />
          현) 힐링카페 ‘약다방 봄동’ 디렉터<br />
          전) 문화일보 “약차 동의보감” 칼럼니스트<br />
          전) 파주신문협동조합 「파주에서」 건강칼럼 “시행과 착오의 학교”
          칼럼니스트
        </p>
      </div>
      <!-- // intro -->

      <div class="profile-sell-prod">
        <h2>판매중인 상품</h2>
        <div class="profile-sell-inner">
          <div class="img"></div>
          <h3 class="tit">판매중인 상품이 없습니다.</h3>
        </div>
      </div>
      <!-- sell -->
      <div class="profile-sell-prod">
        <!-- Porduct List -->
        <div class="list-body">
          <b-row class="prod-list-row">
            <b-col
              cols=""
              v-for="(item, i) in getProdList"
              :key="i"
              class="prod-list-col"
            >
              <div class="vue-slick-track">
                <a href="#" class="vue-slick-item">
                  <div class="vue-slick-img">
                    <div class="hover-box">
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                          />
                        </svg>
                        찜하기
                      </a>
                      <a href="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-link-45deg"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                          />
                          <path
                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
                          />
                        </svg>
                        링크복사
                      </a>
                    </div>
                    <div
                      class="img"
                      v-bind:style="{
                        backgroundImage:
                          'url(' +
                          require(`@/assets/images/${item.thumb}.png`) +
                          ')',
                      }"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      {{ item.title }}
                    </h2>
                    <div class="info-detail">
                      <h3>₩ {{ item.price }}</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>{{ item.star }}</li>
                        <li>{{ item.review }}개 후기</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </b-col>
          </b-row>
        </div>
        <div class="more-btn">
          <b-button>
            더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              /></svg
          ></b-button>
        </div>
      </div>
      <!-- // sell -->

      <div class="profile-review">
        <h2>후기</h2>
        <div class="total-review">
          <h3>총 후기</h3>
          <star-rating
            :increment="0.5"
            inactive-color="#DDDDDD"
            active-color="#6E3CBC"
            v-bind:star-size="18"
            :rounded-corners="false"
            :read-only="true"
            :rating="0"
          ></star-rating>
          <p>0개의 후기</p>
        </div>
        <div class="profile-review-inner">
          <div class="img"></div>
          <h3 class="tit">작성된 후기가 없습니다.</h3>
        </div>
      </div>
      <!-- review -->
      <div class="profile-review">
        <h2>후기 1,124</h2>
        <div class="total-review">
          <h3>총 후기</h3>
          <star-rating
            :increment="0.5"
            inactive-color="#DDDDDD"
            active-color="#6E3CBC"
            v-bind:star-size="18"
            :rounded-corners="false"
            :read-only="true"
            :rating="4"
          ></star-rating>
          <p>25개의 후기</p>
        </div>

        <div class="profile-after-wrap">
          <div class="prod-after-list">
            <!-- item 1 -->
            <div class="after-item">
              <div class="item-header">
                <h4>홍길동 모델화보 전집 팝니다.</h4>
                <ul>
                  <li>cwalwall</li>
                  <li>2021-12-09</li>
                  <li>
                    <star-rating
                      :increment="0.5"
                      inactive-color="#DDDDDD"
                      active-color="#6E3CBC"
                      v-bind:star-size="14"
                      :show-rating="false"
                      :rounded-corners="false"
                      :read-only="true"
                      :rating="4"
                    ></star-rating>
                  </li>
                </ul>
              </div>
              <div class="item-body">
                <div
                  class="img"
                  :style="'background-image: url(' + afterUser + ')'"
                ></div>
                <p>
                  생각했던 퀄리티보다 훨씬 좋아서 의외였습니다. 가격대비 상당히
                  좋은 가성비 가지고있으며 양 또한 어마어마합니다. 홍길동 모델
                  좋아하시는 분이라면 꼭 구매하시길 바랄께요! 별점 5점만점에
                  10점 드릴게요!! 수고하세요 :)
                </p>
              </div>
            </div>

            <!-- item 2 -->
            <div class="after-item">
              <div class="item-header">
                <h4>홍길동 모델화보 전집 팝니다.</h4>
                <ul>
                  <li>cwalwall</li>
                  <li>2021-12-09</li>
                  <li>
                    <star-rating
                      :increment="0.5"
                      inactive-color="#DDDDDD"
                      active-color="#6E3CBC"
                      v-bind:star-size="14"
                      :show-rating="false"
                      :rounded-corners="false"
                      :read-only="true"
                      :rating="4"
                    ></star-rating>
                  </li>
                </ul>
              </div>
              <div class="item-body">
                <div
                  class="img"
                  :style="'background-image: url(' + afterUser + ')'"
                ></div>
                <p>
                  생각했던 퀄리티보다 훨씬 좋아서 의외였습니다. 가격대비 상당히
                  좋은 가성비 가지고있으며 양 또한 어마어마합니다. 홍길동 모델
                  좋아하시는 분이라면 꼭 구매하시길 바랄께요! 별점 5점만점에
                  10점 드릴게요!! 수고하세요 :)
                </p>
              </div>
            </div>

            <!-- item 3 -->
            <div class="after-item">
              <div class="item-header">
                <h4>홍길동 모델화보 전집 팝니다.</h4>
                <ul>
                  <li>cwalwall</li>
                  <li>2021-12-09</li>
                  <li>
                    <star-rating
                      :increment="0.5"
                      inactive-color="#DDDDDD"
                      active-color="#6E3CBC"
                      v-bind:star-size="14"
                      :show-rating="false"
                      :rounded-corners="false"
                      :read-only="true"
                      :rating="4"
                    ></star-rating>
                  </li>
                </ul>
              </div>
              <div class="item-body">
                <div
                  class="img"
                  :style="'background-image: url(' + afterUser + ')'"
                ></div>
                <p>
                  생각했던 퀄리티보다 훨씬 좋아서 의외였습니다. 가격대비 상당히
                  좋은 가성비 가지고있으며 양 또한 어마어마합니다. 홍길동 모델
                  좋아하시는 분이라면 꼭 구매하시길 바랄께요! 별점 5점만점에
                  10점 드릴게요!! 수고하세요 :)
                </p>
              </div>
            </div>
          </div>

          <div class="more-btn">
            <b-button>
              더 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                /></svg
            ></b-button>
          </div>
        </div>
      </div>
      <!-- // review -->
    </b-container>

    <b-modal id="edit-modal" ref="edit-modal" hide-footer hide-header>
      <div class="edit-modal-body">
        <div class="edit-form-group">
          <span class="label">프로필배너</span>
          <div class="edit-form-group-inner">
            <a
              href=""
              class="not-img"
              :style="'background-image: url(' + notImg + ')'"
            ></a>
            <p>권장사이즈 1280 x 215px / 지원파일 jpg,jpeg, png (최대10mb)</p>
          </div>
        </div>

        <div class="edit-form-group">
          <span class="label">활동명</span>
          <b-form-input
            class="max-w-500"
            type="text"
            placeholder="활동명을 입력해주세요."
            v-model="profileName"
          ></b-form-input>
        </div>
        <div class="edit-form-group">
          <span class="label">프로필사진</span>
          <div class="edit-form-group-inner">
            <div class="edit-img">
              <b-form-input
                type="text"
                placeholder="프로필사진을 등록해주세요."
                v-model="profileImg"
              ></b-form-input>
              <b-button>파일 선택</b-button>
              <b-button class="delete-btn">삭제</b-button>
            </div>
            <p>권장사이즈 64 x 64px / 지원파일 jpg,jpeg, png (최대10mb)</p>
          </div>
        </div>
        <div class="edit-form-group">
          <span class="label">소개글</span>
          <b-form-textarea
            id="contactTextarea"
            v-model="profileIntroTxt"
            placeholder="소개글을 입력해주세요."
            rows="8"
            max-rows="8"
            class="def-textarea"
          ></b-form-textarea>
        </div>
        <div class="edit-form-group footer">
          <span class="label"></span>
          <div class="btn-area">
            <b-button @click="hideModal" class="def-btn-off def-btn cancel"
              >취소</b-button
            >
            <b-button @click="hideModal" class="def-btn-on def-btn"
              >수정완료</b-button
            >
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import banner from "@/assets/images/profile_08.png";
import prodList from "@/api/product.json";
import iconSlot from "@/components/icon-slot.vue";
import afterUser from "@/assets/images/icon_user.png";
import notImg from "@/assets/images/profile_01.png";

export default {
  name: "profile-list-skin",
  components: {
    StarRating,
    iconSlot,
  },
  data() {
    return {
      prodList,
      getProdList: [],
      banner: banner,
      afterUser: afterUser,
      notImg: notImg,
      profileName: "",
      profileImg: "",
      profileIntroTxt: "",
    };
  },
  methods: {
    setProdList() {
      for (var i = 0; i < this.prodList.length; i++) {
        if (
          this.prodList[i]["best"] == true ||
          this.prodList[i]["popFree"] == true
        ) {
          this.getProdList.push(this.prodList[i]);
        }
      }
      this.getProdList.length = 10;
    },
    hideModal() {
      this.$refs["edit-modal"].hide();
    },
  },
  mounted() {
    this.setProdList();
  },
};
</script>
<style>
.max-w-500 {
  max-width: 500px;
}
/* modal */
#edit-modal .modal-dialog {
  min-width: 840px;
  margin-top: 15%;
}
#edit-modal .modal-content {
  border-radius: 10px;
}
#edit-modal .modal-body {
  padding: 47px 48px;
}
#edit-modal .edit-form-group {
  display: flex;
  align-items: top;
  margin-bottom: 40px;
  color: #333333;
}
#edit-modal .edit-form-group.footer {
  margin-top: -20px;
  margin-bottom: 0;
}
#edit-modal .edit-form-group .label {
  width: 100px;
  min-width: 100px;
  padding-top: 5px;
  font-size: 0.9rem;
  font-weight: 500;
}
#edit-modal .edit-form-group-inner {
  flex-grow: 1;
}
#edit-modal .edit-form-group-inner a {
  display: inline-block;
  width: 100%;
  height: 106px;
  background-position: center;
  background-size: 10%;
  background-repeat: no-repeat;
  border-radius: 4px;
}
#edit-modal .edit-form-group-inner input {
  height: 38px;
}
#edit-modal .edit-form-group-inner a.not-img {
  border: 1px solid #bebebe;
}
#edit-modal .edit-form-group #contactTextarea {
  font-size: 0.8rem;
}
#edit-modal .edit-form-group input::placeholder {
  color: #6a707e;
  font-size: 0.8rem;
  font-weight: 400;
}
#edit-modal .edit-img {
  display: flex;
  align-items: center;
}
#edit-modal .edit-img input {
  flex-grow: 1;
}
#edit-modal .edit-img button {
  width: 100px;
  height: 38px;
  margin-left: 10px;
  background-color: #6a707e;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  border: 1px solid #6a707e;
}
#edit-modal .edit-img .delete-btn {
  background-color: #fff;
  color: #6a707e;
  border: 1px solid #6a707e;
}
#edit-modal .btn-area {
  display: flex;
  align-items: center;
  width: 100%;
}
#edit-modal .btn-area button {
  flex-grow: 1;
  width: 100%;
  margin-left: 10px;
  padding: 7px 0px;
  background-color: #300474;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #300474;
}
#edit-modal .btn-area button.cancel {
  margin-left: 0;
  background-color: #fff;
  color: #333;
  border-color: #d5d5d5;
}
#edit-modal .edit-form-group-inner p {
  margin: 0;
  padding-top: 5px;
  color: #aaaaaa;
  font-size: 0.8rem;
  font-weight: 400;
}
/* after */
.prod-after-list {
  margin-bottom: 30px;
}
.prod-after-list .after-item:last-child {
  border-bottom: 0;
}
.prod-after-list .after-item {
  padding: 20px 0 30px 0;
  color: #000000;
  border-bottom: 1px solid #d8d8d8;
}
.after-item .item-header {
  margin-bottom: 21px;
}
.after-item .item-header h4 {
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 500;
}
.after-item .item-body,
.after-item .item-header ul {
  display: flex;
  align-items: center;
}
.after-item .item-header ul li {
  position: relative;
  padding-right: 20px;
  color: #333;
}
.after-item .item-header ul li:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 1px;
  height: 50%;
  background-color: #333;
}
.after-item .item-header ul li:last-child {
  padding: 0;
}
.after-item .item-header ul li:nth-child(2):after,
.after-item .item-header ul li:last-child:after {
  display: none;
}
.after-item .item-body .img {
  width: 54px;
  height: 54px;
  margin-right: 20px;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.after-item .item-body p {
  flex-grow: 1;
  margin: 0;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
/* Product List */
.more-btn {
  width: 100%;
  text-align: center;
}
.more-btn .btn {
  padding: 17px 68px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.more-btn .btn svg {
  margin-left: 6px;
  margin-bottom: 3px;
}
.profile-intro.in {
  padding: 30px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.profile-sell-prod .prod-list-col {
  width: 20%;
  flex: unset;
}
.profile-sell-prod .vue-slick-info h2 {
  font-size: 1rem;
}
.prod-wrap .week-best-wrap {
  margin-bottom: 200px;
}
.list-body {
  margin-bottom: 53px;
}
.list-body .vue-slick-item {
  height: auto;
}
.list-body .vue-slick-img {
  position: relative;
  height: 233px;
}
.profile-sell-prod .prod-list-row {
  margin-left: -10px;
  margin-right: -10px;
}
.profile-sell-prod .prod-list-col {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 43px;
}
.profile-sell-prod .hover-box {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: 11px 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  text-align: center;
  z-index: 10;
  opacity: 0;
  transition: all ease 0.35s;
}
.profile-sell-prod .hover-box a {
  margin-right: 10px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
}
/*  */
.profile-list-wrap .banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 215px;
  margin-bottom: 20px;
  background-color: #fafafa;
  border-radius: 10px;
}
.profile-list-wrap .banner img {
  width: 58px;
  margin-bottom: 10px;
}
.profile-list-wrap .banner h2 {
  color: #000000;
  font-size: 1rem;
  font-weight: 400;
}
.profile-list-wrap .profile-card-list {
  margin-bottom: 63px;
}
.profile-list-wrap .profile-card-item {
  position: relative;
  min-height: 189px;
  padding: 30px 30px 25px 30px;
}
.profile-list-wrap .profile-card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.profile-card-body .user-info {
  display: flex;
  align-items: center;
}
.profile-card-body .user-img {
  width: 60px;
  height: 60px;
  background: center / contain no-repeat url("@/assets/images/icon_user.png");
  border-radius: 100%;
}
.profile-card-body .user-info-txt {
  padding-left: 20px;
}
.profile-card-body .user-info-txt h3 {
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
}
.profile-card-body .user-info-txt .vue-star-rating-rating-text:before {
  content: "평점: ";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
}
.profile-card-body .user-info-txt .vue-star-rating-rating-text {
  position: relative;
  margin-top: 5px;
  padding-left: 40px;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.profile-card-body .partner-mark {
  width: 33px;
  height: 33px;
}
.profile-card-item .profile-card-footer {
  position: absolute;
  bottom: 25px;
  right: 30px;
}
.profile-card-footer ul {
  display: flex;
  align-items: center;
}
.profile-card-footer ul li a {
  margin-right: 20px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.profile-card-footer ul li a svg {
  width: 13px;
  margin-bottom: 2px;
}
.profile-card-footer ul li:last-child a {
  margin-right: 0;
}
.profile-card-item .img {
  width: 42px;
  height: 42px;
  background-color: #f1eefd;
  border-radius: 100%;
  background-image: url("@/assets/images/profile_03.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
}
.profile-card-item .img.card-review-img {
  background-image: url("@/assets/images/profile_04.png");
}
.profile-card-item .profile-card-footer-txt {
  position: absolute;
  bottom: 25px;
  left: 30px;
}
.profile-card-footer-txt h2 {
  margin-bottom: 10px;
  color: #424a5d;
  font-size: 1.8rem;
  font-weight: 500;
}
.profile-card-footer-txt p {
  margin: 0;
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.profile-sell-prod,
.profile-intro {
  margin-bottom: 67px;
}
.profile-review {
  margin-bottom: 163px;
}
.profile-review h2,
.profile-sell-prod h2,
.profile-intro h2 {
  margin-bottom: 15px;
  color: #333333;
  font-size: 1.3rem;
  font-weight: 500;
}
.profile-review h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #d8d8d8;
}
.profile-review .total-review {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.profile-review .total-review h3 {
  margin-right: 15px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 500;
}
.profile-review .vue-star-rating-star {
  margin-bottom: 3px;
}
.total-review p {
  margin-left: 10px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.profile-review-inner,
.profile-sell-inner,
.profile-intro-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 311px;
  background-color: #fafafa;
  border-radius: 10px;
}
.profile-review-inner .img,
.profile-sell-prod .profile-sell-inner > .img,
.profile-intro .img {
  width: 58px;
  height: 58px;
  margin-right: 15px;
  background: center / contain no-repeat url("@/assets/images/profile_05.png");
}
.profile-sell-prod .img {
  background: center / contain no-repeat url("@/assets/images/profile_06.png");
}
.profile-review-inner .img {
  background: center / contain no-repeat url("@/assets/images/profile_07.png");
}
.profile-review-inner .tit,
.profile-sell-prod .tit,
.profile-intro .tit {
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
}
</style>
