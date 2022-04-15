<template>
  <div class="ex-container">
    <Header />
    <div class="mb-25"></div>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
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
.ex-container a:hover {
  color: inherit;
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
.ml-5 {
  margin-left: 5px;
}
.mb-10 {
  margin-bottom: 10px !important;
}
.mb-15 {
  margin-bottom: 15px !important;
}
.mb-25 {
  margin-bottom: 25px;
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
</style>
