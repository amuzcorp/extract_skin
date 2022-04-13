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
</style>
