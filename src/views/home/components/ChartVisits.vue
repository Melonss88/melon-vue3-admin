<template>
    <div ref="chartRef" class="chart-container"></div>
  </template>
  
  <script setup lang='ts'>
  import { onMounted, ref } from "vue";
  import * as echarts from "echarts";
  
  const chartRef = ref(null);
  
  onMounted(() => {
    const chart = echarts.init(chartRef.value);
    chart.setOption({
      title: { text: "用户本周访问量" },
      tooltip: {},
      legend: { },
      xAxis: { data: ["周一", "周二", "周三", "周四", "周五"] },
      yAxis: {},
      series: [
        { 
          type: "bar", 
          data: [5, 20,30, 30, 50],
          barWidth: 22,
          itemStyle:{
            color: "#5095eb"
          }
        }
      ],
    });
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 300px;
  }
  </style>
  