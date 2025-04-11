import * as echarts from "echarts";
import { shallowRef, onMounted, onBeforeUnmount, watch } from "vue";
const props = withDefaults(defineProps(), {
    width: "100%",
    height: "300px",
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
const echartsRef = shallowRef();
let chart = null;
const initChart = () => {
    if (!echartsRef.value)
        return;
    // 销毁之前的图表实例
    chart?.dispose();
    // 初始化图表
    chart = echarts.init(echartsRef.value);
    const option = {
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    width: "100%",
    height: "300px",
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
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ref: "echartsRef",
    ...{ style: ({ width: __VLS_ctx.width, height: __VLS_ctx.height }) },
});
/** @type {typeof __VLS_ctx.echartsRef} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            echartsRef: echartsRef,
        };
    },
    props: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
