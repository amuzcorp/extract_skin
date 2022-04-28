<template>
  <div class="chart-wrap">
    <div class="chart-visual-board box-shadow">
      <canvas ref="lineChart" height="300" />
    </div>

    <div class="chart-info-board box-shadow">
      <b-row>
        <b-col cols="6">
          <b-row>
            <b-col cols="6">
              <div class="chart-card">
                <h2>0</h2>
                <p>판매액</p>
              </div>
            </b-col>
            <b-col cols="6">
              <div class="chart-card">
                <h2>0</h2>
                <p>내 수익</p>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-row>
            <b-col cols="4">
              <div class="chart-card">
                <h2>0</h2>
                <p>클릭</p>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="chart-card">
                <h2>0</h2>
                <p>구매 건수</p>
              </div>
            </b-col>
            <b-col cols="4">
              <div class="chart-card">
                <h2>0</h2>
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

Chart.register(...registerables);

export default {
  name: "partner-line-chart",
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
              backgroundColor: "rgba(54,73,93,.5)",
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
  padding: 33px;
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
</style>
