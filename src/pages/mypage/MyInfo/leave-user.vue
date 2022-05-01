<template>
  <div class="py-5">
    <h5 class="my-3">회원탈퇴</h5>
    <div class="info p-5 mb-5 border rounded-3">
      <h4 class="mb-4">
        <IconSlot
            :iconName="'myIconInfo1'"
            :iconColor="'#6E3CBC'"
            :svgHeight="24"
            :svgWidth="24"
            :style="{'width':'30px', 'height':'30px'}"
        />
        유의사항
      </h4>
      <div class="paragraph-list">
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        사용하신 계정 정보는 회원 탈퇴 후 복구가 불가능합니다.
      </p>
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        진행 중인 거래 건이 있거나 페널티 조치 중인 경우 탈퇴 신청이 불가능합니다.
      </p>
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        현재 보유중인 수익금이 있을 경우, 수익금 출금을 통해 정산이 완료된 이후 탈퇴를 신청하셔야 합니다.
      </p>
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        현재보유중인 쿠폰은 자동 삭제되며, 탈퇴 후 재가입 하더라도 양도 되지 않습니다.
      </p>
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        구매 후기 및 답글은 탈퇴 시 자동 삭제되지 않습니다. 탈퇴 후에는 계정 정보가 삭제되어 본인 확인이 불가능하므로, 탈퇴 신청 전에 게시글 삭제를 요청 해 주시기 바랍니다.
      </p>
      <p class="my-3 text-secondary">
        <b-icon-exclamation-circle-fill style="color:#6e3cbc" />
        탈퇴 후 회원님의 정보는 전자상거래 소비자보호법에 의거하여 거래 내역이 1년 후 폐기됩니다.
      </p>
      </div>
    </div>
    <h5 class="my-3">탈퇴 사유</h5>
    <b-select class="d-block border p-3 mb-5" :value="1" style="width:100%; border-radius:10px;">
      <b-select-option value="1">아이디 변경하거나 재가입을 위해서 입니다.</b-select-option>
      <b-select-option value="2">필요 이상으로 너무 많은 시간을 낭비합니다.</b-select-option>
      <b-select-option value="3">개인정보 보안이 우려됩니다.</b-select-option>
      <b-select-option value="4">너무 많은 광고성 메일을 수신하고 있습니다.</b-select-option>
      <b-select-option value="5">유용하지 않은 서비스 시스템입니다.</b-select-option>
      <b-select-option value="6">기타</b-select-option>
    </b-select>
    <div class="btn-area">
      <b-form-checkbox
          id="model-checkbox"
          name="model-checkbox"
          value="agree"
          unchecked-value="not_agree"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-check-circle"
            viewBox="0 0 16 16"
        >
          <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
              d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
          />
        </svg>
        해당 내용을 모두 확인하였으며, 회원탈퇴에 동의합니다.
      </b-form-checkbox>
      <a href="#" class="btn">
        탈퇴하기
      </a>
    </div>
  </div>
</template>
<script>
import IconSlot from "@/components/icon-slot";
export default {
  components: {IconSlot}
}
</script>
<style>
.paragraph-list p{
  position:relative;
  padding-left:25px;
}
.paragraph-list p svg{
  position:absolute;
  left:0;
  top:4px;
}
.btn-area{
  display:flex;
  justify-content: space-between;
}
.btn-area input{
  display:none;
}
.btn-area .btn {
  min-width:250px;
  display: inline-block;
  margin-right: 10px;
  padding: 15px;
  background-color: #300474;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  border-color: #300474;
}
</style>
