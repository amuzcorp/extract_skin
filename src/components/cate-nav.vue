<template>
  <span
    :class="{ on: this.on }"
    @mouseover="
      {
        onOver();
      }
    "
    @mouseleave="
      {
        onLeave();
      }
    "
  >
    <div class="img">
      <img
        class="leave"
        :src="require(`@/assets/images/purchase/cate_${index}.png`)"
      />
      <img
        class="over"
        :src="require(`@/assets/images/purchase/cate_c_${index}.png`)"
      />
    </div>
    {{ item }}
  </span>
</template>
<script>
export default {
  name: "cate-nav",
  props: {
    item: {
      require: false,
    },
    index: {
      require: false,
    },
  },
  data() {
    return {
      on: false,
    };
  },
  methods: {
    onOver() {
      this.on = true;
    },
    onLeave() {
      this.on = false;
    },
  },
};
</script>
<style></style>
