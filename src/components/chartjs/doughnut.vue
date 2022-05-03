<template>
  <div class="doughnut-wrap">
    <canvas ref="doughnutChart" width="200" height="200"></canvas>
    <div class="doughuntText">
      <p>{{ tit }}</p>
      <h2>₩ {{ totalPrice }}</h2>
    </div>
  </div>
</template>
<script>
import { Chart, registerables } from "chart.js";
import "chartjs-plugin-style";

Chart.register(...registerables);

export default {
  name: "doughnut-chart",
  props: {
    tit: { require: false },
    value: { require: false },
    partnerValue: { require: false },
  },
  data() {
    return {
      totalPrice: 0,
      data: [],
      dataBackground: [],
    };
  },
  methods: {
    setData() {
      if (!this.partnerValue) {
        this.totalPrice = this.value;
        this.data = [100];
        this.dataBackground = ["#6E3CBC"];
      } else if (!this.value) {
        this.totalPrice = this.partnerValue;
        this.data = [100];
        this.dataBackground = ["#FE9074"];
      } else {
        this.totalPrice = this.value + this.partnerValue;
        this.data = [80, 20];
        this.dataBackground = ["#6E3CBC", "#FE9074"];
      }
    },
    createChart() {
      new Chart(this.$refs.doughnutChart, {
        type: "doughnut",
        data: {
          datasets: [
            {
              // data: [this.value, this.partnerValue],
              data: this.data,
              backgroundColor: this.dataBackground,
              borderWidth: 0,
              scaleBeginAtZero: true,
              cutout: "80%",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
        },
      });
    },
  },
  async mounted() {
    this.setData();
    this.createChart();
  },
};
</script>
<style>
.doughnut-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.doughuntText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #202427;
  text-align: center;
}
.doughuntText p {
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 400;
}
.doughuntText h2 {
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
