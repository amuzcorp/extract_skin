<template>
  <div class="def-board payment-board">
    <table>
      <thead>
        <tr>
          <th>대표카드</th>
          <th class="width-120">상태</th>
          <th>신용카드</th>
          <th>이름</th>
          <th>만료일</th>
          <th>등록일</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <!-- 있을 경우 -->
        <tr v-for="(item, i) in this.boardList" :key="i">
          <td>
            <b-form-radio
              v-model="firstCardSelected"
              aria-describedby="firstCard"
              name="some-radios"
              :value="i"
            ></b-form-radio>
          </td>
          <td>
            <span class="td-shadow"></span>
            <div class="td-inner">
              <span v-if="item.state">정상</span>
              <span v-else>불가</span>
            </div>
          </td>
          <td class="tit">
            <div class="td-inner">
              {{ item.label }}
            </div>
          </td>
          <td>
            <div class="td-inner">{{ item.name }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.expiration }}</div>
          </td>
          <td>
            <div class="td-inner">{{ item.date }}</div>
          </td>
          <td>
            <div class="td-inner">
              <b-button class="delete-btn" v-b-modal.delete-card-modal>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z"
                  />
                </svg>
              </b-button>
            </div>
          </td>
        </tr>

        <!-- 없을 경우 -->
        <!-- <tr>
          <td colspan="7" class="not-txt">등록된 카드가 없습니다.</td>
        </tr> -->
      </tbody>

      <b-modal
        id="delete-card-modal"
        ref="delete-card-modal"
        hide-footer
        hide-header
      >
        <h2>등록된 카드를 삭제하시겠습니까?</h2>
        <div class="card-modal-footer">
          <a @click="hideModal" class="def-btn-off def-btn">아니요</a>
          <a class="def-btn-on def-btn">확인</a>
        </div>
      </b-modal>
    </table>
  </div>
</template>
<script>
export default {
  name: "purchase-list-skin",
  props: {
    boardList: { require: false },
  },
  data() {
    return {
      firstCardSelected: 0,
    };
  },
  methods: {
    hideModal() {
      this.$refs["delete-card-modal"].hide();
    },
  },
};
</script>
<style>
.def-board tbody tr td.not-txt {
  padding: 60px 0;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
}

/* Modal */
#delete-card-modal .modal-md {
  max-width: 400px;
  margin-top: 15%;
}
#delete-card-modal .modal-body {
  padding: 44px 43px;
}
#delete-card-modal .modal-body h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}
#delete-card-modal .card-modal-footer {
  display: flex;
}
#delete-card-modal .card-modal-footer .def-btn {
  flex-grow: 1;
  width: 100%;
  margin-right: 10px;
}
#delete-card-modal .card-modal-footer .def-btn:last-child {
  margin-right: 0;
}

.width-120 {
  width: 120px;
}
.payment-board .delete-btn {
  padding: 0;
  background-color: unset;
  border: 0;
}
.payment-board .delete-btn svg {
  fill: #424a5d;
  margin: 0 0 3px 0;
}
.payment-board .check-th {
  width: 60px;
}
.payment-board .check-th .custom-control {
  display: flex;
  align-items: center;
  justify-content: center;
}
.payment-board table .custom-control input[type="radio"] {
  display: none;
}
.payment-board table .custom-control label {
  position: relative;
  width: 14px;
  height: 14px;
}
.payment-board table .custom-control label:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border: 1px solid #424a5d;
  border-radius: 100%;
}
.payment-board table .custom-control label:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #6e3cbc;
  border-radius: 100%;
  opacity: 0;
}
.payment-board table .custom-control input[type="radio"]:checked + label:after,
.payment-board table .custom-control input[type="radio"]:checked + label:after {
  opacity: 1;
  border-color: #6e3cbc;
}

/* 기존 */
.payment-board.def-board table {
  width: 100%;
  margin-bottom: 20px;
  color: #424a5d;
  text-align: center;
}
.def-board thead tr th {
  padding: 10px 0;
  background-color: #fafafa;
  color: #202427;
  font-size: 0.9rem;
  font-weight: 500;
}
.def-board tbody tr td,
.def-board tbody tr td a {
  padding: 7px 0;
  color: inherit;
  font-size: 0.9rem;
  font-weight: 400;
}
.def-board tbody tr td a {
  padding: 0;
}
.def-board tbody tr td.tit {
  text-align: left;
}
.def-board tbody tr {
  position: relative;
}
.def-board tbody tr .td-shadow {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: calc(100% - 14px);
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 10px #f1eefd;
  z-index: -1;
  transition: all ease 0.35s;
}
.def-board tbody tr:hover,
.def-board tbody tr:hover .td-shadow {
  border-color: #6e3cbc;
}
.def-board tbody tr:hover td svg,
.def-board tbody tr:hover td {
  color: #6e3cbc;
  fill: #6e3cbc;
}
.def-board tbody tr td .td-inner {
  padding: 10px 0;
}
.def-board tbody tr td:first-child .td-inner,
.def-board thead tr th:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.def-board tbody tr td:last-child .td-inner,
.def-board thead tr th:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
</style>
