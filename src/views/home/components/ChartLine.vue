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
            title: {
            text: '追踪区域来源'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
            }
        },
        legend: {
            data: ['邮件营销', '广告新闻', '视频广告', '直接访问', '搜索殷勤']
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
            type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
        });
    });
  </script>
  
  <style scoped>
 .chart-container {
    width: 100%;
    height: 300px;
 }
  </style>
  