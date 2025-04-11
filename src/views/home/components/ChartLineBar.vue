<template>
    <div ref="echartsRef" :style="{ width: width, height: height,minWidth:minWidth }"></div>
  </template>
  
  <script setup lang="ts">
  import * as echarts from "echarts";
  import { shallowRef, onMounted, onBeforeUnmount, watch } from "vue";
  
  interface LineBarData {
    category: string;
    lineData: number;
    barData: number;
    lineName: string;
    barName: string;
  }
  
  interface ChartBarProps {
    data?: LineBarData[];
    width?: string;
    height?: string;
    minWidth?: string;
  }
  
  const props = withDefaults(defineProps<ChartBarProps>(), {
    width: "800px",
    height: "300px",
    minWidth:'500px',
    data: () => [
      { category: "2024-12-01", lineData: 200, barData: 150, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-02", lineData: 385, barData: 341, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-03", lineData: 276, barData: 230, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-04", lineData: 520, barData: 500, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-05", lineData: 498, barData: 197, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-06", lineData: 579, barData: 546, lineName: "访问量", barName: "用户量" },
      { category: "2024-12-07", lineData: 361, barData: 160, lineName: "访问量", barName: "用户量" }
    ]
  });
  
  const echartsRef = shallowRef<HTMLElement>();
  let chart: echarts.ECharts | null = null;
  
  const initChart = () => {
    if (!echartsRef.value) return;
    
    // 销毁之前的图表实例
    chart?.dispose();
  
    // 初始化图表
    chart = echarts.init(echartsRef.value);
  
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        data: [props.data[0].lineName, props.data[0].barName],
        textStyle: {
          color: "#333"
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: props.data.map(item => item.category),
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        axisLabel: {
          color: "#666"
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#ddd"
          }
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#666"
        }
      },
      series: [
        {
          name: props.data[0].lineName,
          type: "line",
          smooth: true,
          symbol: "emptyCircle",
          symbolSize: 8,
          itemStyle: {
            color: "#147ad4"
          },
          lineStyle: {
            width: 2
          },
          data: props.data.map(item => item.lineData)
        },
        {
          name: props.data[0].barName,
          type: "bar",
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgb(224,234,233,0.2)" },
              { offset: 0.5, color: "#2db5a5" },
              { offset: 1, color: "#2dd1bf" }
            ]),
            borderRadius: [4, 4, 0, 0]
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgb(224,234,233,0.2)" },
                { offset: 0.7, color: "#2db5a5" },
                { offset: 1, color: "#2dd1bf" }
              ])
            }
          },
          data: props.data.map(item => item.barData)
        }
      ]
    };
  
    chart.setOption(option);
  };
  
  const resizeChart = () => {
    chart?.resize();
  };
  
  onMounted(() => {
    initChart();
    window.addEventListener("resize", resizeChart);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeChart);
    chart?.dispose();
  });
  
  // 监听数据变化
  watch(() => props.data, () => {
    initChart();
  }, { deep: true });
  </script>