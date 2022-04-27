<template>
  <!-- Purchase Porduct List -->
  <div class="prod-list week-best-wrap">
    <div class="list-body">
      <b-row class="prod-list-row">
        <b-col
          cols="3"
          v-for="(item, i) in productList"
          :key="i"
          class="prod-list-col"
        >
          <div class="vue-slick-track">
            <a href="#" class="vue-slick-item">
              <div class="vue-slick-img">
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
  </div>
</template>
<script>
import iconSlot from "@/components/icon-slot.vue";

export default {
  name: "product-list",
  props: {
    productList: { require: false, type: Array },
  },
  components: { iconSlot },
};
</script>
<style>
/* Product List */
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
.list-body.add-more-btn {
  margin-bottom: 53px;
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
</style>
