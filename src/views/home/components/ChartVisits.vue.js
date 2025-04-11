import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const chartRef = ref(null);
onMounted(() => {
    const chart = echarts.init(chartRef.value);
    chart.setOption({
        title: { text: "用户本周访问量" },
        tooltip: {},
        legend: {},
        xAxis: { data: ["周一", "周二", "周三", "周四", "周五"] },
        yAxis: {},
        series: [
            {
                type: "bar",
                data: [5, 20, 30, 30, 50],
                barWidth: 22,
                itemStyle: {
                    color: "#5095eb"
                }
            }
        ],
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "chartRef",
    ...{ class: "chart-container" },
});
/** @type {typeof __VLS_ctx.chartRef} */ ;
/** @type {__VLS_StyleScopedClasses['chart-container']} */ ;
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
