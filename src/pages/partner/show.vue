<template>
  <div class="partner-show-wrap">
    <div class="partner-show-inner">
      <b-container>
        <div class="img"></div>
        <h2>홍길동님, 가입이 완료되었습니다.</h2>
        <p>
          앞으로의 홍길동님의 많은 활약을 기대하겠습니다. <br />지금 바로 링크를
          만들어보세요!
        </p>
        <router-link :to="{ name: 'profileList' }" class="btn"
          >확인</router-link
        >
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "partnerShow-skin",
};
</script>
<style>
.partner-show-wrap {
  position: relative;
  height: calc(100vh - 331px);
  text-align: center;
}
.partner-show-inner {
  position: absolute;
  left: 0;
  top: 45%;
  width: 100%;
  transform: translateY(-50%);
}
.partner-show-inner .img {
  height: 300px;
  margin-bottom: 51px;
  background: center / contain no-repeat
    url("@/assets/images/partner/partner_11.png");
}
.partner-show-inner h2 {
  margin-bottom: 10px;
  color: #121212;
  font-size: 1.5rem;
  font-weight: 400;
}
.partner-show-inner p {
  margin-bottom: 30px;
  color: #989898;
  font-size: 1rem;
  font-weight: 400;
}
.partner-show-inner a {
  padding: 15px 88px;
  background-color: #300474;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 6px;
}
.partner-show-inner a:hover {
  color: #fff;
}
</style>
