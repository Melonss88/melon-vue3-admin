<template>
    <div class="common-main">
        <el-card>
            <Title title="Slider 滑块"/>

            <div class="slider-demo-block">
              <span class="demonstration">Default value</span>
              <el-slider v-model="value1" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Customized initial value</span>
              <el-slider v-model="value2" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Hide Tooltip</span>
              <el-slider v-model="value3" :show-tooltip="false" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Format Tooltip</span>
              <el-slider v-model="value4" :format-tooltip="formatTooltip" />
            </div>
            <div class="slider-demo-block">
              <span class="demonstration">Disabled</span>
              <el-slider v-model="value5" disabled />
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Slider'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
    import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)

const formatTooltip = (val: number) => {
  return val / 100
}

const configData = [
  {
    name: 'model-value / v-model',
    declare: '选中项绑定值',
    type: 'number / object',
    default: '0'
  },
  {
    name: 'min',
    declare: '最小值',
    type: 'number',
    default: '0'
  },
  {
    name: 'max',
    declare: '最大值',
    type: 'number',
    default: '100'
  },
  {
    name: 'disabled',
    declare: '是否禁用',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'step',
    declare: '步长',
    type: 'number',
    default: '1'
  },
  {
    name: 'show-input',
    declare: '是否显示输入框，仅在非范围选择时有效',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'show-input-controls',
    declare: '在显示输入框的情况下，是否显示输入框的控制按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'size',
    declare: 'slider 包装器的大小，垂直模式下该属性不可用',
    type: 'enum',
    default: 'default',
    options: ['large', 'default', 'small']
  },
  {
    name: 'input-size',
    declare: '输入框的大小，如果设置了 size 属性，默认值自动取 size',
    type: 'enum',
    default: 'default',
    options: ['large', 'default', 'small']
  },
  {
    name: 'show-stops',
    declare: '是否显示间断点',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'show-tooltip',
    declare: '是否显示提示信息',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'format-tooltip',
    declare: '格式化提示信息',
    type: 'Function',
    default: '—'
  },
  {
    name: 'range',
    declare: '是否开启选择范围',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'vertical',
    declare: '垂直模式',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'height',
    declare: '滑块高度，垂直模式必填',
    type: 'string',
    default: '—'
  },
  {
    name: 'aria-label',
    declare: '原生 aria-label属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'range-start-label',
    declare: '当 range 为true时，屏幕阅读器标签开始的标记',
    type: 'string',
    default: '—'
  },
  {
    name: 'range-end-label',
    declare: '当 range 为true时，屏幕阅读器标签结尾的标记',
    type: 'string',
    default: '—'
  },
  {
    name: 'format-value-text',
    declare: '显示屏幕阅读器的 aria-valuenow 属性的格式',
    type: 'Function',
    default: '—'
  },
  {
    name: 'debounce',
    declare: '输入时的去抖延迟，毫秒，仅在 show-input 等于 true 时有效',
    type: 'number',
    default: '300'
  },
  {
    name: 'tooltip-class',
    declare: 'tooltip 的自定义类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'placement',
    declare: 'Tooltip 出现的位置',
    type: 'enum',
    default: 'top',
    options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right']
  },
  {
    name: 'marks',
    declare: '标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式',
    type: 'object',
    default: '—'
  },
  {
    name: 'validate-event',
    declare: '输入时是否触发表单的校验',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'persistent',
    declare: '当 slider 的 tooltip 处于非活动状态且 persistent 为 false 时，Popconfirm 将被销毁。当 show-tooltip 为 false 时，persistent 将始终为 false。',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'label',
    declare: '原生 aria-label属性',
    type: 'string',
    default: '—',
    deprecated: true
  }
]

  </script>
  

  <style scoped>
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>