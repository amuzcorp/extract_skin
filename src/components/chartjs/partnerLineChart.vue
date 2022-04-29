<template>
  <div class="chart-wrap">
    <div class="chart-visual-board box-shadow">
      <div class="chart-visual-board-header">
        <h2>단위: 만원</h2>
        <div class="visual-header-info">
          <b-form-select
            v-if="sale == 'true'"
            v-model="yearSelected"
            :options="yearOptions"
          ></b-form-select>
          <b-form-select
            v-model="monthSelected"
            :options="monthOptions"
          ></b-form-select>
          <b-form-select
            v-model="salesSelected"
            :options="salesOptions"
          ></b-form-select>
        </div>
      </div>
      <canvas ref="lineChart" height="300" />
    </div>

    <div v-if="sale == 'false'" class="chart-info-board box-shadow">
      <b-row>
        <b-col cols="6">
          <b-row>
            <b-col cols="6">
              <div class="chart-card">
                <h2>₩ 500,000</h2>
                <p>판매액</p>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="chart-card">
                <h2>₩ 15,000</h2>
                <p>내 수익</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-row>
            <b-col cols="4">
              <div class="chart-card">
                <h2>255</h2>
                <p>클릭</p>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="chart-card">
                <h2>20</h2>
                <p>구매 건수</p>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="chart-card">
                <h2>3.0%</h2>
                <p>전환율</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { Chart, registerables } from "chart.js";
import "chartjs-plugin-style";

Chart.register(...registerables);

export default {
  name: "partner-line-chart",
  props: {
    sale: { require: false, default: "false" },
  },
  data() {
    return {
      getChartLabels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      getChartDatas: [],
      yearSelected: null,
      yearOptions: [
        { value: null, text: "2022년" },
        { value: "2021", text: "2021년" },
      ],
      monthSelected: null,
      monthOptions: [
        { value: null, text: "12월" },
        { value: "11", text: "11월" },
        { value: "10", text: "10월" },
        { value: "9", text: "9월" },
        { value: "8", text: "8월" },
      ],
      salesSelected: null,
      salesOptions: [
        { value: null, text: "일 매출" },
        { value: "month", text: "월 매출" },
      ],
    };
  },
  methods: {
    getDataNum() {
      for (var i = 0; i < 100; i++) {
        this.getChartDatas.push(Math.floor(Math.random() * 100));
      }
    },
    createChart() {
      new Chart(this.$refs.lineChart, {
        type: "line",
        data: {
          labels: this.getChartLabels,
          datasets: [
            {
              data: this.getChartDatas,
              lineTension: 0.4,
              borderColor: "#894DE6",
              borderWidth: 2,
            },
          ],
        },
        options: {
          animation: false,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              callbacks: {
                title: () => null,
                labelTextColor: function () {
                  return "#6E3CBC";
                },
              },
              displayColors: false,
              backgroundColor: "white",
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
          scales: {
            y: {
              ticks: {
                color: "#AAAAAA",
                font: {
                  size: 13,
                },
              },
            },
            x: {
              min: 0,
              max: 31,
              grid: {
                lineWidth: 0,
              },
              ticks: {
                color: "#AAAAAA",
                font: {
                  size: 13,
                },
              },
            },
          },
        },
      });
    },
  },
  async mounted() {
    this.getDataNum();
    this.createChart();
  },
};
</script>
<style>
.chart-visual-board {
  position: relative;
  margin-bottom: 20px;
  padding: 89px 33px 33px 33px;
  border-radius: 10px;
}
.chart-info-board {
  padding: 20px 40px;
  border-radius: 10px;
}
.chart-card h2 {
  margin-bottom: 5px;
  color: #333333;
  font-size: 1.5rem;
  font-weight: 400;
}
.chart-card p {
  color: #424a5d;
  font-size: 0.9rem;
  font-weight: 400;
}
.chart-visual-board-header {
  position: absolute;
  top: 22px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 33px;
}
.chart-wrap .chart-visual-board-header h2 {
  margin: 0;
  color: #aaaaaa;
  font-size: 0.9rem;
  font-weight: 400;
}
.chart-wrap .chart-visual-board-header .custom-select {
  min-width: 134px;
  height: 40px;
  margin-left: 10px;
  padding: 0 30px;
  color: #6a707e;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
}
</style>
