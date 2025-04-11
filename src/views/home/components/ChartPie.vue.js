import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
const chartRef = ref();
let chart = null;
const initChart = () => {
    if (!chartRef.value)
        return;
    chart = echarts.init(chartRef.value);
    const option = {
        title: {
            text: '用户访问来源',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                data: [
                    { value: 350, name: '直接访问' },
                    { value: 300, name: '邮件营销' },
                    { value: 111, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1222, name: '搜索引擎' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option);
};
const handleResize = () => {
    chart?.resize();
};
onMounted(() => {
    initChart();
    window.addEventListener('resize', handleResize);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
    chart?.dispose();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "chartRef",
    ...{ class: "chart" },
});
/** @type {typeof __VLS_ctx.chartRef} */ ;
/** @type {__VLS_StyleScopedClasses['chart']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            chartRef: chartRef,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
