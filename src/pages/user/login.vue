<template>
  <div class="login-wrap">
    <div class="login-inner">
      <h2>로그인</h2>
      <p>이제 복잡한 절차없이 사용하던 계정으로<br />엑기스를 시작해보세요!</p>
      <b-button class="kakao-btn"><span>카카오톡으로 로그인</span></b-button>
      <b-button class="apple-btn"><span>애플아이디로 로그인</span></b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login-skin",
};
</script>
<style>
.login-wrap {
  position: relative;
  height: calc(100vh - 331px);
}
.login-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #121212;
  text-align: center;
}
.login-inner h2 {
  margin-bottom: 13px;
  font-size: 2.6rem;
  font-weight: bold;
}
.login-inner p {
  margin-bottom: 49px;
  font-size: 1.3rem;
  font-weight: 400;
}
.login-inner .btn {
  position: relative;
  display: block;
  width: 482px;
  height: 64px;
  border: 0;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 400;
}
.login-inner .btn span {
  position: relative;
  display: inline-block;
  padding-left: 50px;
}
.login-inner .kakao-btn {
  margin-bottom: 20px;
  background-color: #f8df2b;
  color: #000000;
}
.login-inner .apple-btn {
  background-color: #121212;
  color: #fff;
}
.login-inner .btn span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  background: center / contain no-repeat url("@/assets/images/logo_kakao.png");
}
.login-inner .apple-btn span:before {
  background: center / contain no-repeat url("@/assets/images/logo_apple.png");
}
</style>
