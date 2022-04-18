<template>
  <div class="prod-wrap">
    <b-container>
      <div class="prod-inner">
        <div class="prod-cate-nav">
          <VerticalCategory />
        </div>

        <div class="prod-cate-items">
          <!-- <h2>Product List</h2>
          <router-link :to="{ name: 'productView' }"> View </router-link> -->
          <!-- ad -->
          <div class="prod-ad">
            <h2>원하는 상품이 없을땐, <b>삽니다 공고</b>를 올려보세요!</h2>
          </div>

          <!-- announcement -->
          <div class="ann-wrap">
            <b-row class="align-items-center mb-10">
              <b-col cols="6">
                <h2 class="icon-tit mb-10">
                  <icon-slot
                    :iconName="'announcement'"
                    :svgHeight="20"
                    :svgWidth="20"
                    :iconColor="'#6E3CBC'"
                  />
                  자소서에 등록된 공고
                </h2>
              </b-col>
              <b-col cols="6" class="text-right">
                <div class="ann-select">
                  <b-form-select
                    v-model="selected"
                    :options="options"
                  ></b-form-select>
                </div>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
              <b-col cols="6">
                <div class="ann-inner-box">
                  <a href="#">
                    <h2>두산 합격 사소서 삽니다~!!! 합격하신분 부탁드려요.</h2>
                    <h3>₩ 25,000</h3>
                  </a>
                </div>
              </b-col>
            </b-row>
          </div>

          <!-- 주간 베스트 상품 -->
          <div class="week-best-wrap">
            <h2 class="icon-tit mb-10">
              <icon-slot
                :iconName="'handBest'"
                :svgHeight="20"
                :svgWidth="20"
                :iconColor="'#6E3CBC'"
              />
              이번주 <b>Best</b> 상품
            </h2>

            <div class="vue-slick-track">
              <VueSlickCarousel v-bind="bestSettings">
                <router-link
                  :to="{ name: 'productView' }"
                  class="vue-slick-item"
                >
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
                      :style="'background-image: url(' + pd_01 + ')'"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      19년~20년 정보처리산업기사 (해답포함) 총 문제집
                      판매합니다.
                    </h2>
                    <div class="info-detail">
                      <h3>₩ 25,000</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>5.0</li>
                        <li>24개 후기</li>
                      </ul>
                    </div>
                  </div>
                </router-link>
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
                      :style="'background-image: url(' + pd_02 + ')'"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      19년~20년 정보처리산업기사 (해답포함) 총 문제집
                      판매합니다.
                    </h2>
                    <div class="info-detail">
                      <h3>₩ 25,000</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>5.0</li>
                        <li>24개 후기</li>
                      </ul>
                    </div>
                  </div>
                </a>
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
                      :style="'background-image: url(' + pd_03 + ')'"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      19년~20년 정보처리산업기사 (해답포함) 총 문제집
                      판매합니다.
                    </h2>
                    <div class="info-detail">
                      <h3>₩ 25,000</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>5.0</li>
                        <li>24개 후기</li>
                      </ul>
                    </div>
                  </div>
                </a>
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
                      :style="'background-image: url(' + pd_04 + ')'"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      19년~20년 정보처리산업기사 (해답포함) 총 문제집
                      판매합니다.
                    </h2>
                    <div class="info-detail">
                      <h3>₩ 25,000</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>5.0</li>
                        <li>24개 후기</li>
                      </ul>
                    </div>
                  </div>
                </a>
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
                      :style="'background-image: url(' + pd_05 + ')'"
                    ></div>
                  </div>
                  <div class="vue-slick-info">
                    <h2>
                      19년~20년 정보처리산업기사 (해답포함) 총 문제집
                      판매합니다.
                    </h2>
                    <div class="info-detail">
                      <h3>₩ 25,000</h3>
                      <ul>
                        <icon-slot
                          :iconName="'star'"
                          :svgHeight="16"
                          :svgWidth="16"
                          :iconColor="'#894DE6'"
                        />
                        <li>5.0</li>
                        <li>24개 후기</li>
                      </ul>
                    </div>
                  </div>
                </a>
              </VueSlickCarousel>
            </div>
          </div>

          <!-- Porduct List -->
          <div class="prod-list week-best-wrap">
            <div class="list-header mb-15">
              <ul class="prod-nav">
                <li><a href="">홈</a></li>
                <li><a href="">PDF</a></li>
                <li><a href="">자소서</a></li>
              </ul>

              <div class="select-area">
                <div class="ann-select">
                  <b-form-select
                    v-model="dataSelected"
                    :options="dataOptions"
                  ></b-form-select>
                </div>
                <div class="ann-select">
                  <b-form-select
                    v-model="orderSelected"
                    :options="orderOptions"
                  ></b-form-select>
                </div>
              </div>
            </div>

            <div class="list-body">
              <b-row class="prod-list-row">
                <b-col
                  cols="3"
                  v-for="(item, i) in prodList"
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
                          :style="'background-image: url(' + item.thumb + ')'"
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
                            <li>{{ item.review }}</li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                </b-col>
              </b-row>
            </div>

            <div class="pagenation">
              <ul>
                <li class="first-btn">
                  <a href="#"><img :src="pagePrev" /></a>
                </li>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a>···</a></li>
                <li><a href="#">12</a></li>
                <li class="last-btn">
                  <a href="#"><img :src="pageNext" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import VerticalCategory from "@/components/vertical_category.vue";
import iconSlot from "@/components/icon-slot.vue";
import VueSlickCarousel from "vue-slick-carousel";
import pd_01 from "@/assets/images/p_01.png";
import pd_02 from "@/assets/images/p_02.png";
import pd_03 from "@/assets/images/p_03.png";
import pd_04 from "@/assets/images/p_04.png";
import pd_05 from "@/assets/images/p_05.png";
import pageNext from "@/assets/images/chervon_next.png";
import pagePrev from "@/assets/images/chervon_prev.png";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "productList",
  components: {
    VerticalCategory,
    iconSlot,
    VueSlickCarousel,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "4개 보기" },
        { value: 10, text: "10개보기" },
      ],
      dataSelected: null,
      dataOptions: [
        { value: null, text: "데이터" },
        { value: "data-form", text: "데이터 + 양식" },
        { value: "form", text: "양식" },
      ],
      orderSelected: null,
      orderOptions: [
        { value: null, text: "최신순" },
        { value: "review", text: "평점순" },
        { value: "price-high", text: "높은가격순" },
        { value: "price-low", text: "낮은가격순" },
      ],
      pd_01: pd_01,
      pd_02: pd_02,
      pd_03: pd_03,
      pd_04: pd_04,
      pd_05: pd_05,
      pageNext: pageNext,
      pagePrev: pagePrev,
      bestSettings: {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
      },
      prodList: [
        {
          id: "1",
          title: "19년~20년 정보처리산업기사 (해답포함) 총 문제집 판매합니다.",
          price: "25,000",
          star: "5",
          review: "24",
          thumb: "p_01",
        },
        {
          id: "2",
          title: "19년~20년 정보처리산업기사 (해답포함) 총 문제집 판매합니다.",
          price: "25,000",
          star: "5",
          review: "24",
          thumb: "p_02",
        },
        {
          id: "3",
          title: "19년~20년 정보처리산업기사 (해답포함) 총 문제집 판매합니다.",
          price: "25,000",
          star: "5",
          review: "24",
          thumb: "p_03",
        },
        {
          id: "4",
          title: "19년~20년 정보처리산업기사 (해답포함) 총 문제집 판매합니다.",
          price: "25,000",
          star: "5",
          review: "24",
          thumb: "p_04",
        },
        {
          id: "5",
          title: "19년~20년 정보처리산업기사 (해답포함) 총 문제집 판매합니다.",
          price: "25,000",
          star: "5",
          review: "24",
          thumb: "p_05",
        },
      ],
    };
  },
};
</script>
<style>
.prod-list .pagenation ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.prod-list .pagenation ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  margin: 0 5px;
  padding: 0 10px;
  background-color: #fff;
  color: #6a707e;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 30px;
}
.prod-list .pagenation ul li a.active {
  color: #7f63f4;
  background-color: #f1eefd;
}
/*  */
.prod-inner {
  display: flex;
  align-items: start;
}
.prod-cate-nav {
  width: 220px;
  min-width: 220px;
}
.prod-cate-items {
  flex-grow: 1;
  padding-left: 70px;
  overflow: hidden;
}
.prod-ad {
  position: relative;
  display: flex;
  align-items: center;
  height: 82px;
  margin-bottom: 33px;
  padding: 0 40px;
  background: linear-gradient(100deg, #dfa9dd, #8282c8);
  border-radius: 12px;
}
.prod-ad::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center / cover repeat url("@/assets/images/prod_01.png");
}
.prod-ad h2 {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
}
.prod-ad h2 b {
  font-size: 1.4rem;
  font-weight: 600;
}
.ann-wrap {
  margin-bottom: 40px;
}
.icon-tit {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #121212;
  font-size: 1rem;
  font-weight: 400;
}
.icon-tit svg {
  width: 34px;
  height: 34px;
  margin-right: 9px;
  padding: 6px;
  background: #f9f8fe;
  border-radius: 30px;
}
.icon-tit b {
  padding: 0 3px;
}
.ann-select .custom-select {
  width: 140px;
  padding: 4px 18px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border: 0;
  border-radius: 7px;
  box-shadow: 1px 2px 10px rgba(119, 119, 119, 0.1);
}
.ann-inner-box a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 15px 25px;
  color: #333;
  border: 1px solid #d5d5d5;
  border-radius: 12px;
  transition: all ease 0.35s;
}
.ann-inner-box h2 {
  font-size: 1rem;
  font-weight: 400;
}
.ann-inner-box h3 {
  min-width: 80px;
  color: #202427;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: right;
}
.ann-inner-box a:hover {
  border-color: #6e3cbc;
}
.week-best-wrap .vue-slick-img {
  position: relative;
}
.week-best-wrap .hover-box {
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
.week-best-wrap .hover-box a {
  margin-right: 10px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
}
.week-best-wrap .hover-box a:last-child {
  margin-right: 0;
}
.week-best-wrap .hover-box a svg {
  margin-right: 2px;
  transition: all ease 0.35s;
}
.week-best-wrap .hover-box a:hover svg {
  transform: scale(1.1);
}
.vue-slick-item:hover .hover-box {
  opacity: 1;
}
.prod-list {
  margin-bottom: 857px;
}
.prod-wrap .week-best-wrap {
  margin-bottom: 200px;
}
.list-header,
.list-header .prod-nav,
.list-header .select-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-header .prod-nav a {
  position: relative;
  color: #6a707e;
  padding-right: 20px;
  font-size: 0.9rem;
  font-weight: 400;
}
.list-header .prod-nav a:after {
  content: ">";
  position: absolute;
  top: -3px;
  right: 6px;
}
.list-header .prod-nav li:last-child a:after {
  display: none;
}
.list-header .select-area .custom-select {
  margin-left: 10px;
}
.list-body {
  margin-bottom: 100px;
}
.list-body .vue-slick-item {
  height: auto;
}
.list-body .vue-slick-img {
  height: 240px;
}
.prod-list .prod-list-row {
  margin-left: -10px;
  margin-right: -10px;
}
.prod-list .prod-list-col {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 43px;
}
</style>
