<template>
  <div class="prod-view">
    <b-container>
      <b-row class="prod-view-body">
        <b-col cols="5">
          <div class="img-col">
            <VueSlickCarousel
              ref="c1"
              :asNavFor="c2"
              :focusOnSelect="true"
              class="main-slider-con"
            >
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_01 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_02 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_03 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_04 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_05 + ')'"
                ></div>
              </div>
              <div class="main-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_06 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>
            <VueSlickCarousel
              ref="c2"
              :asNavFor="c1"
              :slidesToShow="5"
              :focusOnSelect="true"
              :arrows="false"
            >
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_01 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_02 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_03 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_04 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_05 + ')'"
                ></div>
              </div>
              <div class="nav-slider-item">
                <div
                  class="img"
                  :style="'background-image: url(' + prodView_06 + ')'"
                ></div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="info-col">
            <div class="info-header mb-10">
              <ul class="cate-prodNum">
                <li>디자인</li>
                <!-- 내 제품일 경우 -->
                <li>상품고유번호 : 92822434</li>
                <!-- // 내 제품일 경우 -->
              </ul>
              <ul>
                <!-- 내 제품이 아닐 경우 -->
                <li :class="{ none: isWar }">
                  <button
                    type="button"
                    class="war-btn box-shadow def-btn war-on"
                    v-b-modal.war-modal
                  >
                    <img :src="warning" />
                  </button>
                  <button
                    type="button"
                    class="war-btn box-shadow def-btn war-none"
                  >
                    <img :src="warning" />
                  </button>
                </li>
                <!-- // 내 제품이 아닐 경우 -->
                <li>
                  <button type="button" class="like-btn box-shadow def-btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#6E3CBC"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                    235
                  </button>
                </li>
              </ul>
            </div>
            <div class="info-body">
              <h2>
                사람, 동물, 건물 등 직접 그린 일러스트<br />모음집 괜찮은 가격에
                팝니다.
              </h2>
              <div class="star-con">
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
              <h3>₩ 25,000</h3>
              <ul class="tag-con">
                <!-- 모델/초상권 -->
                <li><a class="box-shadow">초상권 계약기간 2년</a></li>
                <!-- // 모델/초상권 -->
                <li><a class="box-shadow">일러스트</a></li>
                <li><a class="box-shadow">JPG</a></li>
                <li><a class="box-shadow">양식</a></li>
                <li><a class="box-shadow">공개</a></li>
              </ul>
            </div>
            <div class="info-bottom">
              <ul class="care-txt">
                <li>해당 상품은 19세 이상만 구매 가능합니다.</li>
                <li>구매전 바이러스 검사를 꼭 하시길 권장합니다.</li>
                <li>
                  파일 서비스는 자료 제공 형태의 서비스이므로, 수령하신 이후에는
                  환불이 불가합니다.
                </li>
                <li>재다운로드는 30일로 제한합니다.</li>
              </ul>
              <div class="btn-area">
                <!-- 모델/초상권 -->
                <div class="check-box box-shadow">
                  <b-form-checkbox
                    id="model-checkbox"
                    v-model="modelCheck"
                    name="model-checkbox"
                    value="agree"
                    unchecked-value="not_agree"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                      />
                    </svg>
                    본인은 본인의 초상권을 구매자가 사용하는 것에 대해
                    동의합니다.
                  </b-form-checkbox>

                  <b-button v-b-modal.model-modal>
                    전문 보기
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
                  </b-button>
                </div>
                <!-- // 모델/초상권 -->

                <!-- 내 글일 경우 -->
                <router-link
                  :to="{ name: 'productCreate' }"
                  class="buy-btn box-shadow"
                  >수정하기</router-link
                >
                <b-button class="mk-link-btn box-shadow"
                  >내 상품 목록가기</b-button
                >
                <b-button class="mk-link-btn box-shadow">삭제하기</b-button>
                <!-- // 내 글일 경우 -->
                <!-- <router-link
                  :to="{
                    name: 'cert',
                  }"
                  class="buy-btn box-shadow"
                >
                  구매하기
                </router-link>
                <b-button class="mk-link-btn box-shadow" v-b-modal.partner-modal
                  >판매 링크 생성하기</b-button
                >
                <span class="like-btns box-shadow" :class="{ like: isHeart }">
                  <b-button
                    v-b-modal.like-modal
                    v-on:click="clickHeart"
                    class="like-btn bi-heart"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#121212"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      />
                    </svg>
                  </b-button>
                  <b-button class="like-btn bi-heart-fill">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#300474"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  </b-button>
                </span> -->
              </div>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="5">
          <div class="sell-collapse">
            <div class="sell-collapse-header">
              <b-row class="align-items-center">
                <b-col cols="7">
                  <b-row class="align-items-center">
                    <b-col cols="4"><img :src="seller" /></b-col>
                    <b-col cols="8">
                      <h2>cwalwall</h2>
                      <star-rating
                        :increment="0.5"
                        inactive-color="#DDDDDD"
                        active-color="#6E3CBC"
                        v-bind:star-size="18"
                        :rounded-corners="false"
                        :read-only="true"
                        :rating="5"
                      ></star-rating>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col cols="5">
                  <a href="#" class="seller-shop">
                    판매자 샵 구경가기
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="11"
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
                </b-col>
              </b-row>
            </div>
            <div class="sell-collapse-view">
              <div class="view-col">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-archive"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
                <h1>10</h1>
                판매상품
              </div>
              <div class="view-col">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-chat-text"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                    />
                    <path
                      d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </span>
                <h1>1,124</h1>
                총 후기
              </div>
            </div>
            <div class="sell-collapse-body" :class="{ on: isCollapse }">
              <h2>판매자 소개</h2>
              <p class="txt_line">
                브랜드와 사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로 브랜드와
                사람의 소중한 가치를 가장 중요하게 생각합니다.창의적인
                일러스트들과 트랜드를 리드하는 통찰력있는 시각으로
              </p>
            </div>
            <div class="collapse-btn">
              <a @click="collapseBtn"
                >전체보기
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
              ></a>
            </div>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="prodTabs">
            <b-tabs content-class="mt-3">
              <b-tab title="상품 소개">
                <p class="prod-intro">
                  5년 경력의 일러스트레이터입니다.<br />아이패드로 직접 그린
                  일러스트들 모아서 판매합니다. 편하게 둘러보세요 !!
                </p>
              </b-tab>
              <b-tab :title="'후기(' + getReviewCtn + ')'">
                <div class="prod-review">
                  <div class="prod-review-header">
                    <h2>상품 후기</h2>
                    <star-rating
                      :increment="0.5"
                      inactive-color="#DDDDDD"
                      active-color="#6E3CBC"
                      v-bind:star-size="18"
                      :rounded-corners="false"
                      :read-only="true"
                      :rating="4"
                    >
                    </star-rating>
                    <h3>25개의 후기</h3>
                  </div>
                  <!-- 유저 후기 -->
                  <!-- 기본 2명 / 더보기 눌렀을 경우 20명씩 추가 -->
                  <div class="prod-review-body">
                    <div class="prod-review-item">
                      <div class="user-review">
                        <div class="review-img">
                          <img :src="reviewUser" />
                        </div>
                        <div class="review-txt">
                          <div class="user-info">
                            <ul>
                              <li>cwalwall ㅣ 2021-12-09</li>
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
                          <div class="user-txt">
                            <p>
                              생각했던 퀄리티보다 훨씬 좋아서 의외였습니다.
                              가격대비 상당히 좋은 가성비 가지고…
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- 답글 -->
                      <!-- 답글이 없을 경우 divider -->
                      <!-- <div class="divider"></div> -->
                      <div class="admin-review">
                        <div class="review-img"></div>
                        <div class="admin-review-icon">
                          <img :src="iconAdmin" />
                          <div class="admin-info">
                            <h1>filemanager ㅣ 2021-12-09</h1>
                            <p>
                              감사합니다 :) 항상 좋은 상품만 올리도록
                              하겠습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- 유저 후기 -->
                    <div class="prod-review-item">
                      <div class="user-review">
                        <div class="review-img">
                          <img :src="reviewUser" />
                        </div>
                        <div class="review-txt">
                          <div class="user-info">
                            <ul>
                              <li>cwalwall ㅣ 2021-12-09</li>
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
                          <div class="user-txt">
                            <p>
                              생각했던 퀄리티보다 훨씬 좋아서 의외였습니다.
                              가격대비 상당히 좋은 가성비 가지고…
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- 답글 -->
                      <!-- 답글이 없을 경우 divider -->
                      <!-- <div class="divider"></div> -->
                      <div class="admin-review">
                        <div class="review-img"></div>
                        <div class="admin-review-icon">
                          <img :src="iconAdmin" />
                          <div class="admin-info">
                            <h1>filemanager ㅣ 2021-12-09</h1>
                            <p>
                              감사합니다 :) 항상 좋은 상품만 올리도록
                              하겠습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="prod-review-footer">
                    <a>
                      더보기
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
                    ></a>
                  </div>
                </div>
              </b-tab>
              <b-tab :title="'문의하기(' + getContactCtn + ')'" active>
                <div class="contact-wrap" :class="{ write: isWrite }">
                  <div class="contact-header">
                    <h2>판매자에게 궁금한 것을 문의해보세요!</h2>
                    <ul class="write">
                      <li>
                        <a
                          @click="setWriteSecret"
                          :class="{ on: isWriteSecret }"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                            />
                          </svg>
                          비밀글 설정
                        </a>
                      </li>
                    </ul>
                    <ul class="read">
                      <li>
                        <a @click="removeSecret" :class="{ active: isSecret }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check-circle"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                            />
                          </svg>
                          비밀글 제외
                        </a>
                      </li>
                      <li>
                        <a class="def-btn" @click="contactWrite">작성하기</a>
                      </li>
                    </ul>
                  </div>
                  <div class="contact-body" :class="{ remove: isSecret }">
                    <!-- 글 작성 시 -->
                    <div class="write-list">
                      <b-form-textarea
                        id="contactTextarea"
                        v-model="contactText"
                        placeholder="상품명을 입력해주세요."
                        rows="8"
                        max-rows="8"
                        class="def-textarea"
                      ></b-form-textarea>
                      <div class="btn-area">
                        <b-button class="cancel" @click="contactWrite"
                          >취소</b-button
                        >
                        <b-button>작성완료</b-button>
                      </div>
                    </div>

                    <!-- 문의 -->
                    <div class="read-list">
                      <div class="prod-review-ite">
                        <div class="user-review">
                          <div class="review-img">
                            <img :src="reviewUser" />
                          </div>
                          <div class="review-txt">
                            <div class="user-info">
                              <ul>
                                <li>cwalwall ㅣ 2021-12-09</li>
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
                            <div class="user-txt">
                              <p>
                                생각했던 퀄리티보다 훨씬 좋아서 의외였습니다.
                                가격대비 상당히 좋은 가성비 가지고…
                              </p>
                            </div>
                          </div>
                        </div>

                        <!-- 문의 답변 -->
                        <!-- 답변이 없을 경우 divider -->
                        <!-- <div class="divider"></div> -->
                        <div class="admin-review">
                          <div class="review-img"></div>
                          <div class="admin-review-icon">
                            <img :src="iconAdmin" />
                            <div class="admin-info">
                              <h1>filemanager ㅣ 2021-12-09</h1>
                              <p>
                                감사합니다 :) 항상 좋은 상품만 올리도록
                                하겠습니다.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- 비밀글 문의 -->
                      <div class="prod-review-item secret-review-item">
                        <div class="user-review">
                          <div class="review-img">
                            <img :src="secretUser" />
                          </div>
                          <div class="review-txt">
                            <div class="user-info"></div>
                            <div class="user-txt">
                              <p>해당글은 비밀글입니다.</p>
                            </div>
                          </div>
                        </div>

                        <!-- 문의 답변 -->
                        <!-- 답변이 없을 경우 divider -->
                        <!-- <div class="divider"></div> -->
                        <div class="admin-review">
                          <div class="review-img"></div>
                          <div class="admin-review-icon">
                            <img :src="iconAdmin" />
                            <div class="admin-info">
                              <h1>filemanager ㅣ 2021-12-09</h1>
                              <p>답변완료</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="contact-footer mb-10">
                        <a>
                          더보기
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
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="like-modal" ref="like-modal" hide-footer hide-header>
      <h2>찜 목록에 추가되었습니다.<br />지금 찜 목록을 확인 하시겠습니까?</h2>
      <div class="like-modal-footer">
        <a href="#" @click="hideModal" class="def-btn-off def-btn">아니요</a>
        <a href="#" class="def-btn-on def-btn">확인</a>
      </div>
    </b-modal>

    <b-modal id="war-modal" ref="war-modal" hide-footer hide-header>
      <h2>해당 파일을 신고하시겠습니까?</h2>
      <p>허위 신고시 불이익을 받을 수 있습니다.</p>
      <b-form-textarea
        id="textarea"
        v-model="warText"
        placeholder="신고사유를 기입해주세요."
        rows="4"
        max-rows="4"
        class="def-textarea"
      ></b-form-textarea>
      <div class="war-modal-footer">
        <a href="#" @click="hideModal" class="def-btn-off def-btn">취소</a>
        <a
          href="#"
          class="def-btn-on def-btn"
          @click="hideModal"
          v-b-modal.war-modal-comp
          >신고하기</a
        >
      </div>
    </b-modal>
    <b-modal id="war-modal-comp" ref="war-modal-comp" hide-footer hide-header>
      <h2>신고가 완료되었습니다.</h2>
      <p>빠르게 확인 뒤 연락드리겠습니다.</p>
      <div class="war-modal-comp-footer">
        <a href="#" class="def-btn-on def-btn" @click="clickWar">확인</a>
      </div>
    </b-modal>

    <b-modal id="partner-modal" ref="partner-modal" hide-footer hide-header>
      <h2>파트너스 판매 링크가 복사되었습니다.</h2>
      <div class="partner-modal-footer">
        <a href="#" @click="hideModal" class="def-btn-on def-btn">확인</a>
      </div>
    </b-modal>

    <b-modal id="model-modal" ref="model-modal" hide-footer hide-header>
      <div class="model-modal-body">
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
      </div>
      <div class="model-modal-footer">
        <b-button @click="hideModal">확인</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import prodView_01 from "@/assets/images/prod_view_01.png";
import prodView_02 from "@/assets/images/prod_view_02.png";
import prodView_03 from "@/assets/images/prod_view_03.png";
import prodView_04 from "@/assets/images/prod_view_04.png";
import prodView_05 from "@/assets/images/prod_view_05.png";
import prodView_06 from "@/assets/images/prod_view_06.png";
import warning from "@/assets/images/icon_warning.png";
import seller from "@/assets/images/seller_img.png";
import reviewUser from "@/assets/images/icon_user_review.png";
import secretUser from "@/assets/images/icon_secret.png";
import iconAdmin from "@/assets/images/icon_admin_review.png";
import check from "@/assets/images/icon_check.png";
import StarRating from "vue-star-rating";

export default {
  name: "productShow",
  components: {
    VueSlickCarousel,
    StarRating,
  },
  data() {
    return {
      c1: undefined,
      c2: undefined,
      prodView_01: prodView_01,
      prodView_02: prodView_02,
      prodView_03: prodView_03,
      prodView_04: prodView_04,
      prodView_05: prodView_05,
      prodView_06: prodView_06,
      seller: seller,
      reviewUser: reviewUser,
      secretUser: secretUser,
      iconAdmin: iconAdmin,
      warning: warning,
      check: check,
      isHeart: false,
      isWar: false,
      isCollapse: false,
      isWrite: false,
      isSecret: false,
      isWriteSecret: false,
      warText: "",
      contactText: "",
      getReviewCtn: 25,
      getContactCtn: 37,
      modelCheck: "not_agree",
    };
  },
  methods: {
    clickHeart() {
      this.isHeart = true;
    },
    clickWar() {
      this.isWar = true;
      this.$refs["war-modal-comp"].hide();
    },
    hideModal() {
      this.$refs["like-modal"].hide();
      this.$refs["war-modal"].hide();
      this.$refs["partner-modal"].hide();
      this.$refs["model-modal"].hide();
    },
    collapseBtn() {
      this.isCollapse = !this.isCollapse;
    },
    contactWrite() {
      this.isWrite = !this.isWrite;
    },
    removeSecret() {
      this.isSecret = !this.isSecret;
    },
    setWriteSecret() {
      this.isWriteSecret = !this.isWriteSecret;
    },
  },
  mounted() {
    this.c1 = this.$refs.c1;
    this.c2 = this.$refs.c2;
  },
};
</script>
<style>
.prod-view {
  margin-bottom: 139px;
}
.info-col {
  position: relative;
  height: 100%;
}
.prod-view-body {
  margin-bottom: 91px;
}
.info-header {
  justify-content: space-between;
  align-items: center;
}
.info-header .cate-prodNum li {
  position: relative;
  padding-right: 20px;
  color: #6a707e;
  font-size: 1.1rem;
  font-weight: 500;
}
.info-header .cate-prodNum li:last-child:after {
  display: none;
}
.info-header .cate-prodNum li:last-child {
  padding-right: 0;
}
.info-header .cate-prodNum li:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background-color: #6a707e;
}
.info-header ul .war-btn,
.info-header ul .like-btn {
  min-width: 43px;
  height: 36px;
}
.info-header ul .war-btn img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  margin: auto;
}
.info-header ul .war-none,
.info-header ul li.none .war-on {
  display: none;
}
.info-header ul li.none .war-none {
  display: inline-block;
}
#war-modal .modal-body {
  padding: 45px 40px;
  text-align: center;
}
#war-modal-comp .modal-body {
  padding: 32px 0;
  text-align: center;
}
#war-modal h2,
#war-modal-comp h2 {
  margin-bottom: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
}
#war-modal p,
#war-modal-comp p {
  margin-bottom: 26px;
  color: #a3a3a3;
  font-size: 0.9rem;
  font-weight: 500;
}
.def-textarea {
  margin-bottom: 20px;
  background-color: #fafafa;
  color: #bebebe;
  font-size: 0.8rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.def-textarea::placeholder {
  color: #bebebe;
  font-size: 0.8rem;
  font-weight: 400;
}
.def-textarea:focus {
  border-color: #6e3cbc;
  box-shadow: 0 0 0 0.25rem rgb(110, 60, 188, 0.25);
}
.war-modal-footer {
  display: flex;
  margin-left: -5px;
  margin-right: -5px;
}
.war-modal-footer a {
  flex-grow: 1;
  margin-left: 5px;
  margin-right: 5px;
}
.war-modal-comp-footer a {
  min-width: 184px;
}
.info-header ul .like-btn {
  margin-left: 10px;
}
.info-header ul,
.info-header,
.prod-view-inner {
  display: flex;
}
.info-body h2 {
  margin-bottom: 20px;
  color: #333333;
  font-size: 1.9rem;
  font-weight: bold;
}
.info-body .tag-con {
  display: flex;
}
.info-body .tag-con li a {
  display: block;
  min-width: 65px;
  margin-right: 10px;
  padding: 4px 19px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #f7f7f7;
  border-radius: 30px;
  text-align: center;
  transition: all ease 0.35s;
}
.info-body .tag-con li a:hover {
  cursor: pointer;
  border-color: #6e3cbc;
}
.info-body h3 {
  margin-bottom: 22px;
  color: #333;
  font-size: 1.8rem;
  font-weight: bold;
}
.info-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.info-bottom .care-txt {
  margin-bottom: 29px;
}
.info-bottom .care-txt li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 31px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.info-bottom .care-txt li::before {
  content: "";
  position: absolute;
  left: 0;
  width: 21px;
  height: 100%;
  background: center / contain no-repeat url("@/assets/images/icon_check.png");
}
.info-bottom .buy-btn,
.info-bottom .mk-link-btn {
  display: inline-block;
  width: 220px;
  margin-right: 10px;
  padding: 14px 0;
  background-color: #300474;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border: 1px solid #300474;
  border-radius: 6px;
  text-align: center;
}
.info-bottom .btn-area {
  position: relative;
  display: flex;
  align-items: end;
  height: 116px;
}
.info-bottom .btn-area .check-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 550px;
  height: 40px;
  padding: 9px 20px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
}
.info-bottom .btn-area .check-box .btn {
  padding: 0;
  background-color: #fff;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
}
.info-bottom .btn-area .check-box .btn svg {
  width: 12px;
  margin-right: 0;
  margin-bottom: 3px;
}
#model-modal .modal-body {
  padding: 30px;
  border-radius: 13px;
}
#model-modal .model-modal-footer .btn {
  width: 100%;
}
#model-modal .modal-dialog {
  margin-top: 15%;
}
#model-modal .model-modal-body {
  height: 450px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
.info-bottom .btn-area .check-box svg {
  margin-right: 5px;
  margin-bottom: 2px;
}
.info-bottom .btn-area .check-box label:hover {
  cursor: pointer;
}
.info-bottom .btn-area input[type="checkbox"] {
  display: none;
}
.info-bottom .btn-area input[type="checkbox"]:checked + label svg {
  color: #9e7dd2;
}
.info-bottom .like-btns .bi-heart-fill,
.info-bottom .like-btns.like .bi-heart {
  display: none;
}
.info-bottom .like-btns.like .bi-heart-fill {
  display: inline-block;
}
.info-bottom .mk-link-btn {
  background-color: #fff;
  color: #333333;
  border: 1px solid #d5d5d5;
}
.info-bottom .like-btn {
  width: 56px;
  height: 56px;
  padding: 14px 0;
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #d5d5d5;
}
#war-modal .modal-dialog,
#war-modal-comp .modal-dialog {
  margin-top: 20%;
}
#war-modal-comp .modal-dialog {
  max-width: 330px;
}
.main-slider-con .slick-arrow {
  z-index: 10;
}
.main-slider-con .slick-next {
  right: 30px;
}
.main-slider-con .slick-prev {
  left: 20px;
}
.slick-prev:before,
.slick-next:before {
  font-size: 36px;
}
.prod-view .main-slider-item {
  height: 510px;
}
.prod-view .nav-slider-item {
  height: 94px;
}
.prod-view .nav-slider-item:hover {
  cursor: pointer;
}
.prod-view .slick-slider:last-child {
  margin-top: 5px;
  margin-left: -5px;
  margin-right: -5px;
}
.prod-view .nav-slider-item {
  padding-left: 5px;
  padding-right: 5px;
}
.prod-view .nav-slider-item .img,
.prod-view .main-slider-item .img {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
}
#like-modal .modal-dialog,
#partner-modal .modal-dialog {
  max-width: 410px;
  margin-top: 22%;
}
#like-modal .modal-content,
#war-modal .modal-content,
#war-modal-comp .modal-content,
#partner-modal .modal-content {
  border-radius: 12px;
}
#like-modal .modal-body,
#partner-modal .modal-body {
  padding: 34px 43px;
}
#like-modal h2,
#partner-modal h2 {
  margin-bottom: 20px;
  color: #333333;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.4;
  text-align: center;
}
#partner-modal h2 {
  margin-bottom: 35px;
}
.like-modal-footer,
.partner-modal-footer {
  text-align: center;
}
.like-modal-footer .def-btn-off {
  margin-right: 10px;
}
.star-con {
  margin-bottom: 40px;
}
.sell-collapse {
  position: relative;
  padding: 23px 31px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.sell-collapse-header {
  padding-bottom: 18px;
  margin-bottom: 25px;
  border-bottom: 1px solid #d5d5d5;
}
.sell-collapse-header img {
  width: 65px;
}
.sell-collapse-header h2 {
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
}
.vue-star-rating-rating-text {
  margin-top: 4px;
  color: #424a5d;
  font-size: 1.1rem;
  font-weight: 400;
}
.sell-collapse-header .seller-shop {
  display: flex;
  justify-content: end;
  align-items: center;
  color: #6e3cbc;
  font-size: 0.8rem;
  font-weight: 500;
}
.sell-collapse-header .seller-shop:hover {
  color: #6e3cbc;
}
.sell-collapse-header .seller-shop svg {
  margin-left: 10px;
}
.sell-collapse-view {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 46px;
}
.sell-collapse-view .view-col {
  color: #424a5d;
  font-size: 1rem;
  font-weight: 400;
  padding-right: 36px;
}
.sell-collapse-view .view-col:last-child {
  padding-right: 0;
}
.sell-collapse-view span {
  display: inline-block;
  width: 42px;
  height: 42px;
  margin-right: 8px;
  background-color: #f1eefd;
  border-radius: 30px;
  line-height: 42px;
  text-align: center;
}
.sell-collapse-view svg {
  width: 20px;
  height: 20px;
  color: #6e3cbc;
  stroke-width: 53px;
}
.sell-collapse-view .view-col:last-child svg {
  margin-top: -4px;
}
.sell-collapse-view h1 {
  display: inline-block;
  margin-right: 10px;
  color: #121212;
  font-size: 1.2rem;
  font-weight: 400;
}
.sell-collapse-body {
  padding-bottom: 54px;
}
.sell-collapse-body h2 {
  margin-bottom: 10px;
  color: #000000;
  font-size: 1rem;
  font-weight: 500;
}
.sell-collapse-body p {
  color: #6a707e;
  font-size: 1rem;
}
.sell-collapse-body .txt_line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.6em;
  height: 3.2em;
  transition: all ease 0.35s;
}
.collapse-btn a {
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  padding: 12px 0;
  color: #6a707e !important;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border-top: 1px solid #d5d5d5;
}
.collapse-btn a:hover {
  color: #6a707e;
  cursor: pointer;
}
.sell-collapse-body.on .txt_line {
  display: block;
  height: auto;
}
.prodTabs {
  position: relative;
}
.prodTabs .nav-tabs {
  position: absolute;
  bottom: calc(100% + 5px);
  left: 0;
  border: 0;
}
.prodTabs .nav-tabs .nav-item {
  border: 0;
}
.prodTabs .nav-tabs .nav-item a {
  color: #bebebe;
  font-size: 1.1rem;
  font-weight: 500;
  border: 0;
}
.prodTabs .nav-tabs .nav-link.active {
  color: #333333;
}
.prodTabs .tab-content {
  margin-top: 0 !important;
  padding: 23px 31px;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
.prodTabs .prod-intro {
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.8em;
}
.prod-review-header,
.user-info ul,
.admin-review-icon {
  display: flex;
  align-items: center;
}
.contact-header h2,
.prod-review-header h2 {
  margin-right: 10px;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 500;
}
.prod-review-header .vue-star-rating {
  margin-right: 10px;
  margin-bottom: 3px;
}
.prod-review-header h3 {
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
}
.user-review,
.admin-review {
  display: flex;
  align-items: center;
  padding: 40px 32px;
}
.admin-review {
  background-color: #fafafa;
  border-radius: 12px;
}
.user-review .review-img,
.admin-review .review-img {
  width: 54px;
  min-width: 54px;
}
.review-txt,
.admin-review-icon {
  padding-left: 20px;
}
.user-info ul li,
.admin-info h1 {
  padding-right: 11px;
  color: #333333;
  font-size: 0.9rem;
  font-weight: 400;
}
.user-info ul li .vue-star-rating {
  margin-bottom: 2px;
}
.user-txt p,
.admin-info p {
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
}
.admin-review-icon img {
  width: 16px;
  margin-right: 20px;
}
.admin-info p {
  margin-top: 5px;
}
.contact-body .divider,
.prod-review-body .divider {
  height: 1px;
  width: 100%;
  background-color: #fafafa;
}
.contact-body .prod-review-item:last-child .divider,
.prod-review-body .prod-review-item:last-child .divider {
  display: none;
}
.contact-footer,
.prod-review-footer {
  width: 214px;
  margin: auto;
  margin-top: 50px;
  padding: 17px;
  color: #6a707e;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #d5d5d5;
  border-radius: 6px;
  text-align: center;
}
.contact-footer a,
.prod-review-footer a {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-footer a svg,
.prod-review-footer a svg {
  margin-left: 10px;
}
.contact-footer:hover,
.prod-review-footer:hover {
  cursor: pointer;
}
.contact-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact-header ul {
  display: flex;
  align-items: center;
  justify-content: end;
}
.contact-header ul li a {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 23px;
  padding: 6px 23px;
  background: unset;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
}
.contact-header ul li a svg {
  margin-right: 6px;
}
.contact-header ul li a:before {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 40%;
  background-color: #6a707e;
}
.contact-header ul li a.active,
.contact-header ul li a:hover {
  background-color: unset;
  color: #300474;
  cursor: pointer;
}
.contact-header ul li:last-child a {
  margin-right: 0;
}
.contact-header ul li:last-child a:before {
  display: none;
}
.contact-header .def-btn {
  background-color: #300474;
  color: #fff;
  border-radius: 30px;
}
.contact-header .def-btn:hover {
  background-color: #300474;
  color: #fff;
}
.contact-wrap.write .read-list,
.contact-wrap .write-list,
.contact-body.remove .secret-review-item,
.contact-wrap.write .contact-header .read,
.contact-wrap .contact-header .write {
  display: none;
}
.contact-wrap.write .write-list,
.contact-wrap.write .contact-header .write {
  display: inline-block;
}
.contact-wrap.write .contact-header .write li a.on {
  color: #300474;
}
.write-list {
  width: 100%;
  padding: 45px 0 0 0;
}
.write-list .def-textarea {
  border: 0;
  border-radius: 6px;
}
.write-list .btn-area {
  display: flex;
  justify-content: end;
  align-items: center;
}
.write-list .btn-area button {
  width: 152px;
  margin-right: 10px;
  padding: 10px;
  background-color: #300474;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  border: 1px solid #300474;
  border-radius: 4px;
}
.write-list .btn-area button.cancel {
  background-color: #fff;
  color: #121212;
  border-color: #707070;
}
.write-list .btn-area button:last-child {
  margin-right: 0;
}
</style>
