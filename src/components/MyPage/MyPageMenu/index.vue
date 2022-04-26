<template>
  <div class="mypage-nav">
    <div class="my-id">
      <div class="img" :style="'background-image: url(' + userImg + ')'"></div>
      <h2>Filemanager</h2>
    </div>
    <a href="" class="my-profile box-shadow">나의 프로필보기</a>
    <div class="nav-wrap box-shadow">
      <div
        v-for="(navItem, navIdx) in this.myNavList"
        :key="navIdx"
        class="nav-list"
      >
        <h2 v-if="navItem.id !== 'logout'">{{ navItem.label }}</h2>
        <ul>
          <li v-for="(childItem, childIdx) in navItem.children" :key="childIdx">
            <router-link :to="{ name: childItem.link }">
              <Icon-slot
                :iconName="childItem.icon"
                :svgHeight="24"
                :svgWidth="24"
                :iconColor="'#AAAAAA'"
              />
              {{ childItem.label }}
            </router-link>
          </li>
        </ul>
        <span v-if="myNavList.length - 1 !== navIdx" class="divider"></span>
      </div>
    </div>
  </div>
</template>
<script>
import myNavList from "@/api/myPageMenu.json";
import IconSlot from "@/components/icon-slot.vue";
import userImg from "@/assets/images/icon_user.png";

export default {
  name: "myPageNavSkin",
  components: {
    IconSlot,
  },
  data() {
    return {
      userImg: userImg,
      myNavList: [],
    };
  },
  mounted() {
    this.myNavList = myNavList;
  },
};
</script>
<style>
.nav-list h2 {
  padding: 12px 0 12px 37px;
  color: #202427;
  font-size: 1rem;
  font-weight: bold;
}
.nav-list ul li a {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 11px 0 11px 27px;
  background-color: #fff;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  border-left: 3px solid #fff;
  transition: all ease 0.35s;
}
.nav-list ul li a svg {
  margin-right: 10px;
}
.nav-list ul li a svg path {
  transition: all ease 0.35s;
}
.nav-list ul li a.router-link-active,
.nav-list ul li a:hover {
  background-color: #f7f7ff;
  color: #6e3cbc;
  border-color: #6e3cbc;
}
.nav-list ul li a.router-link-active svg path,
.nav-list ul li a:hover svg path {
  fill: #6e3cbc;
}
.nav-list .divider {
  display: block;
  margin: 20px 20px;
  width: auto;
  height: 1px;
  background-color: #abafb3;
}
.mypage-nav {
  width: 220px;
}
.my-id {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
}
.my-id .img {
  width: 40px;
  height: 40px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100%;
}
.my-id h2 {
  margin-left: 15px;
  color: #333333;
  font-size: 1rem;
  font-weight: 600;
}
.my-profile {
  display: block;
  margin-bottom: 20px;
  padding: 10px 0;
  text-align: center;
  border-radius: 6px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.nav-wrap {
  padding: 10px 0;
  border-radius: 6px;
}
</style>
