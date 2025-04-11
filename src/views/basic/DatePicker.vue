<template>
    <div class="common-main">
        <el-card>
            <Title title="日期选择器"/>

            <div class="demo-date-picker">
            <div class="container">
                <div class="block">
                <span class="demonstration">Week</span>
                <el-date-picker
                    v-model="value1"
                    type="week"
                    format="[Week] ww"
                    placeholder="Pick a week"
                />
                </div>
                <div class="block">
                <span class="demonstration">Dates</span>
                <el-date-picker
                    v-model="value2"
                    type="dates"
                    placeholder="Pick one or more dates"
                />
                </div>
            </div>
            <div class="container">
                <div class="block">
                <span class="demonstration">Year</span>
                <el-date-picker
                    v-model="value3"
                    type="year"
                    placeholder="Pick a year"
                />
                </div>
                <div class="block">
                <span class="demonstration">Years</span>
                <el-date-picker
                    v-model="value4"
                    type="years"
                    placeholder="Pick one or more years"
                />
                </div>
            </div>
            <div class="container">
                <div class="block">
                <span class="demonstration">Month</span>
                <el-date-picker
                    v-model="value5"
                    type="month"
                    placeholder="Pick a month"
                />
                </div>
                <div class="block">
                <span class="demonstration">Months</span>
                <el-date-picker
                    v-model="value6"
                    type="months"
                    placeholder="Pick one or more months"
                />
                </div>
            </div>
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='DatePicker'>
    import { ref } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
  const value4 = ref('')
  const value5 = ref('')
  const value6 = ref('')

  const configData = [
  {
    name: 'model-value / v-model',
    declare: '绑定值，如果它是数组，长度应该是 2',
    type: 'number / string / object',
    default: "''"
  },
  {
    name: 'readonly',
    declare: '只读',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'disabled',
    declare: '禁用',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'size',
    declare: '输入框尺寸',
    type: 'enum',
    default: '—',
    options: ['large', 'default', 'small']
  },
  {
    name: 'editable',
    declare: '文本框可输入',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'clearable',
    declare: '是否显示清除按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'placeholder',
    declare: '非范围选择时的占位内容',
    type: 'string',
    default: "''"
  },
  {
    name: 'start-placeholder',
    declare: '范围选择时开始日期的占位内容',
    type: 'string',
    default: '—'
  },
  {
    name: 'end-placeholder',
    declare: '范围选择时结束日期的占位内容',
    type: 'string',
    default: '—'
  },
  {
    name: 'type',
    declare: '显示类型',
    type: 'enum',
    default: 'date',
    options: ['year', 'month', 'date', 'datetime', 'week', 'datetimerange', 'daterange']
  },
  {
    name: 'format',
    declare: '显示在输入框中的格式',
    type: 'string',
    default: "'YYYY-MM-DD'"
  },
  {
    name: 'popper-class',
    declare: 'DatePicker 下拉框的类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'popper-options',
    declare: '自定义 popper 选项，更多请参考 popper.js',
    type: 'object',
    default: '{}'
  },
  {
    name: 'range-separator',
    declare: '选择范围时的分隔符',
    type: 'string',
    default: "'-'"
  },
  {
    name: 'default-value',
    declare: '可选，选择器打开时默认显示的时间',
    type: 'object',
    default: '—'
  },
  {
    name: 'default-time',
    declare: '范围选择时选中日期所使用的当日内具体时刻',
    type: 'object',
    default: '—'
  },
  {
    name: 'value-format',
    declare: '可选，绑定值的格式。 不指定则绑定值为 Date 对象',
    type: 'string',
    default: '—'
  },
  {
    name: 'id',
    declare: '等价于原生 input id 属性',
    type: 'string / object',
    default: '—'
  },
  {
    name: 'name',
    declare: '等价于原生 input name 属性',
    type: 'string / object',
    default: "''"
  },
  {
    name: 'unlink-panels',
    declare: '在范围选择器里取消两个日期面板之间的联动',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'prefix-icon',
    declare: '自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar',
    type: 'string / object',
    default: "''"
  },
  {
    name: 'clear-icon',
    declare: '自定义清除图标',
    type: 'string / object',
    default: 'CircleClose'
  },
  {
    name: 'validate-event',
    declare: '是否触发表单验证',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'disabled-date',
    declare: '一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。',
    type: 'Function',
    default: '—'
  },
  {
    name: 'shortcuts',
    declare: '设置快捷选项，需要传入数组对象',
    type: 'object',
    default: '[]'
  },
  {
    name: 'cell-class-name',
    declare: '设置自定义类名',
    type: 'Function',
    default: '—'
  },
  {
    name: 'teleported',
    declare: '是否将 date-picker 的下拉列表插入至 body 元素',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'empty-values',
    declare: '组件的空值配置 参考config-provider',
    type: 'array',
    default: '—'
  },
  {
    name: 'value-on-clear',
    declare: '清空选项的值 参考 config-provider',
    type: 'string / number / boolean / Function',
    default: '—'
  },
  {
    name: 'fallback-placements',
    declare: 'Tooltip 可用的 positions 请查看popper.js 文档',
    type: 'array',
    default: '—'
  },
  {
    name: 'placement',
    declare: '下拉框出现的位置',
    type: 'enum',
    default: 'bottom',
    options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
  }
];

  </script>
  
  <style scoped>
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  
  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
  }
  
  .demo-date-picker .block:last-child {
    border-right: none;
  }
  
  .demo-date-picker .container {
    flex: 1;
    border-right: solid 1px var(--el-border-color);
  }
  
  .demo-date-picker .container .block {
    border-right: none;
  }
  
  .demo-date-picker .container .block:last-child {
    border-top: solid 1px var(--el-border-color);
  }
  
  .demo-date-picker .container:last-child {
    border-right: none;
  }
  
  .demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  </style>
  