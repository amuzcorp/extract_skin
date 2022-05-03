<template>
  <a class="bill-info" @click="setCompInfo">
    정보보기
    <div class="bill-wrap" :class="{ on: isCompInfo }">
      <div class="bill-inner">
        <h5>계산서 발행 정보</h5>
        <div class="bill-list">
          <div class="bill-item">
            <h6>상호명</h6>
            <div class="bill-item-txt">
              <p>{{ modalList.name }}</p>
            </div>
          </div>
          <div class="bill-item">
            <h6>사업자 등록번호</h6>
            <div class="bill-item-txt">
              <p>{{ modalList.compNum }}</p>
            </div>
          </div>
          <div class="bill-item">
            <h6>사업자 등록증</h6>
            <div class="bill-item-txt">
              <a class="down">
                <p>
                  {{ modalList.compCert }}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="bill-item">
            <h6>이메일</h6>
            <div class="bill-item-txt">
              <p>{{ modalList.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "comp-modal-skin",
  props: {
    modalList: {
      require: false,
    },
  },
  data() {
    return {
      isCompInfo: false,
    };
  },
  methods: {
    setCompInfo() {
      this.isCompInfo = !this.isCompInfo;
    },
  },
};
</script>
<style>
.bill-wrap {
  display: none;
  position: absolute;
  top: 0;
  right: 110%;
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 10px;
  z-index: 10;
}
.bill-wrap.on {
  display: block;
}
.bill-inner {
  min-width: 509px;
  padding: 25px 30px;
}
.bill-wrap h5 {
  padding-bottom: 8px;
  color: #000000;
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 1px solid #f0f0f0;
  text-align: left;
}
.bill-item {
  display: flex;
  align-items: center;
  padding-top: 30px;
}
.bill-item h6 {
  width: 120px;
  min-width: 120px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}
.bill-item .bill-item-txt {
  width: 100%;
  border-bottom: 1px solid #ededed;
  text-align: left;
}
.bill-item .bill-item-txt p {
  margin-bottom: 5px;
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.bill-item .bill-item-txt .down {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
