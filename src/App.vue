<template>
  <div class="ex-container">
    <Header />
    <div class="mb-25"></div>
    <router-view></router-view>
    <Footer />
  </div>
  <!-- <div>
    <a @click="$router.go(-1)" ref="back_link">
      <h2>뒤로가기</h2>
    </a>
    <h2>Product View</h2>
  </div> -->
  <!-- <b-row class="align-items-center">
            <b-col cols="6"></b-col>
          </b-row>  -->
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.ex-container ul,
.ex-container li,
.ex-container ol {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.ex-container h6,
.ex-container h5,
.ex-container h4,
.ex-container h3,
.ex-container h2,
.ex-container h1,
.ex-container p {
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
.ex-container a {
  text-decoration: unset;
}
a:hover {
  color: inherit;
  cursor: pointer;
}
.ex-container img {
  width: 100%;
}
.align-items-center {
  align-items: center;
}
.text-right {
  text-align: right;
}
.prl-5 {
  padding: 0 5px !important;
}
.ml-5 {
  margin-left: 5px;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-10 {
  margin-bottom: 10px !important;
}
.mb-15 {
  margin-bottom: 15px !important;
}
.mb-20 {
  margin-bottom: 20px;
}
.mb-25 {
  margin-bottom: 25px;
}
.mb-50 {
  margin-bottom: 50px;
}
.mb-100 {
  margin-bottom: 100px;
}
@media (min-width: 1400px) {
  .ex-container .container-xxl,
  .ex-container .container-xl,
  .ex-container .container-lg,
  .ex-container .container-md,
  .ex-container .container-sm,
  .ex-container .container {
    max-width: 1280px;
  }
}
.ex-container .form-control:focus,
.ex-container .btn-check:focus + .ex-container .btn-secondary,
.ex-container .btn-secondary:focus,
.ex-container .form-control:focus {
  border-color: #6e3cbc;
  box-shadow: 0 0 0 0.25rem rgb(110, 60, 188, 0.25);
}
.ex-container .contents-tit {
  color: #333;
  font-size: 1.3rem;
  font-weight: 500;
}
.def-btn {
  background-color: #fff;
  color: #202427;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 8px;
  border: 1px solid #fff;
  transition: all ease 0.35s;
}
.def-btn:hover {
  border-color: #6e3cbc;
}
.box-shadow {
  box-shadow: 1px 2px 10px rgba(119, 119, 119, 0.1);
}
.def-btn-off {
  display: inline-block;
  min-width: 152px;
  padding: 9px 30px;
  background-color: #fff;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: unset;
  border: 1px solid #bebebe;
  border-radius: 5px;
  text-align: center;
}
.def-btn-off:hover {
  color: #333;
}
.def-btn-on {
  display: inline-block;
  min-width: 152px;
  padding: 9px 30px;
  background-color: #300474;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: unset;
  border: 1px solid #300474;
  border-radius: 5px;
  text-align: center;
}
.def-btn-on:hover {
  color: #fff;
}
.vertical-top {
  vertical-align: top;
}
</style>
