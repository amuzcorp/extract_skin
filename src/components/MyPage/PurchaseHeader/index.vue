<template>
  <div class="my-purchase-header">
    <b-row>
      <b-col cols="4">
        <div class="my-purchase-card box-shadow">
          <div class="my-purchase-card-header">
            <div class="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M20 2a3 3 0 0 1 3 3v2h-2v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-2h16v2a1 1 0 0 0 .883.993L18 20a1 1 0 0 0 .993-.883L19 19V4H6a1 1 0 0 0-.993.883L5 5v10H3V5a3 3 0 0 1 3-3h14z"
                />
              </svg>
            </div>
            <router-link :to="{ name: 'MyPurchase' }">
              공고올리기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </router-link>
          </div>
          <div class="my-purchase-card-footer">
            <h2>17</h2>
            <p>내 공고</p>
          </div>
        </div>
      </b-col>

      <b-col cols="4">
        <div class="my-purchase-card box-shadow">
          <div class="my-purchase-card-header">
            <div class="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M2 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 1 0 0-5zM14 5H4v2.968a4.5 4.5 0 0 1 0 8.064V19h10V5zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5h-4z"
                />
              </svg>
            </div>
            <router-link :to="{ name: 'MyPurchase' }">
              등록하기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </router-link>
          </div>
          <div class="my-purchase-card-footer">
            <h2>22</h2>
            <p>보유쿠폰</p>
          </div>
        </div>
      </b-col>

      <b-col cols="4">
        <div class="my-purchase-card box-shadow">
          <div class="my-purchase-card-header">
            <div class="img love">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path
                  d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"
                />
              </svg>
            </div>
          </div>
          <div class="my-purchase-card-footer">
            <h2>5</h2>
            <p>찜 목록</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "purchase-header-skin",
};
</script>
<style>
.my-purchase-header {
  margin-bottom: 70px;
}
.my-purchase-card {
  position: relative;
  height: 200px;
  padding: 23px 25px;
  border-radius: 10px;
  background-color: #fff;
}
.my-purchase-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    110deg,
    rgba(163, 67, 154, 1),
    rgba(94, 73, 172, 1)
  );
  border-radius: 10px;
  opacity: 0;
  transition: all ease 0.35s;
}
.my-purchase-card:hover {
  cursor: pointer;
  box-shadow: 1px 2px 10px rgb(116, 53, 195, 0.1);
}
.my-purchase-card:hover:before {
  opacity: 1;
}
.my-purchase-card:hover .my-purchase-card-header .img {
  background-color: rgba(241, 238, 253, 0.8);
}
.my-purchase-card:hover .my-purchase-card-header .img svg {
  fill: #fff;
}
.my-purchase-card:hover .my-purchase-card-footer h2,
.my-purchase-card:hover .my-purchase-card-footer p,
.my-purchase-card:hover .my-purchase-card-header a {
  color: #fff;
}
.my-purchase-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.my-purchase-card-header .img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: #f1eefd;
  border-radius: 100%;
  z-index: 1;
  transition: all ease 0.35s;
}
.my-purchase-card-header .img.love {
  background-color: rgba(201, 121, 199, 0.06);
}
.my-purchase-card-header .img svg {
  fill: #6e3cbc;
  transition: all ease 0.35s;
}
.my-purchase-card-header .img.love svg {
  fill: #c979c7;
}
.my-purchase-card-header a {
  position: relative;
  display: flex;
  align-items: center;
  color: #45458d;
  font-size: 0.9rem;
  font-weight: 400;
  z-index: 2;
  transition: all ease 0.35s;
}
.my-purchase-card-header a svg {
  margin-left: 5px;
  width: 11px;
  transition: all ease 0.35s;
}
.my-purchase-card-footer {
  position: absolute;
  bottom: 23px;
  left: 25px;
}
.my-purchase-card-footer h2 {
  margin-bottom: 8px;
  color: #333333;
  font-size: 1.8rem;
  font-weight: 400;
  transition: all ease 0.35s;
}
.my-purchase-card-footer p {
  color: #333333;
  font-size: 1rem;
  font-weight: 400;
  transition: all ease 0.35s;
}
</style>
