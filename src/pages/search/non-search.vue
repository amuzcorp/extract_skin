<template>
  <div class="search-none-wrap">
    <div class="search-none-inner">
      <b-container>
        <div class="none-visual"></div>
        <div class="info">
          <h2>
            <b>‘에곤쉴레 초상화 전집’</b>검색결과가 없어요. <br />필요한 파일을
            삽니다 공고에 올려보세요!
          </h2>
          <p>
            * 키워드를 정확하게 입력했는지 확인해보세요.<br />* 일반적인
            키워드로 검색해보세요. (예 빨간 가방 > 가방)
          </p>
          <a href="">공고 올리기</a>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "none-search-skin",
  data() {
    return {};
  },
};
</script>
<style>
.search-none-wrap {
  position: relative;
  height: calc(100vh - 331px);
}
.search-none-inner {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  transform: translateY(-50%);
}
.none-visual {
  height: 300px;
  margin-bottom: 51px;
  background: center / cover no-repeat url("@/assets/images/not_page_01.png");
}
.search-none-wrap .info {
  text-align: center;
  margin-bottom: 167px;
}
.search-none-wrap .info h2 {
  margin-bottom: 10px;
  color: #121212;
  font-size: 1.5rem;
  font-weight: 400;
}
.search-none-wrap .info h2 b {
  color: #6e3cbc;
  font-weight: bold;
}
.search-none-wrap .info p {
  margin-bottom: 30px;
  color: #989898;
  font-size: 1rem;
  font-weight: 400;
}
.search-none-wrap .info a {
  padding: 15px 88px;
  background-color: #300474;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 6px;
}
</style>
