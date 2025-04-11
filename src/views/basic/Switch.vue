<template>
    <div class="common-main">
        <el-card>
            <Title title="Switch 开关"/>

            <el-switch v-model="value1" />
            <el-switch
              v-model="value2"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup  name='Switch'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
    import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)

const configData = [
  {
    name: 'model-value / v-model',
    declare: '绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型',
    type: 'boolean / string / number',
    default: 'false'
  },
  {
    name: 'disabled',
    declare: '是否禁用',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'loading',
    declare: '是否显示加载中',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'size',
    declare: 'switch 的大小',
    type: 'enum',
    default: "''",
    options: ['large', 'default', 'small']
  },
  {
    name: 'width',
    declare: 'switch 的宽度',
    type: 'number / string',
    default: "''"
  },
  {
    name: 'inline-prompt',
    declare: '无论图标或文本是否显示在点内，只会呈现文本的第一个字符',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'active-icon',
    declare: 'switch 状态为 on 时所显示图标，设置此项会忽略 active-text',
    type: 'string / Component',
    default: '—'
  },
  {
    name: 'inactive-icon',
    declare: 'switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text',
    type: 'string / Component',
    default: '—'
  },
  {
    name: 'active-action-icon',
    declare: 'on状态下显示的图标组件',
    type: 'string / Component',
    default: '—'
  },
  {
    name: 'inactive-action-icon',
    declare: 'off状态下显示的图标组件',
    type: 'string / Component',
    default: '—'
  },
  {
    name: 'active-text',
    declare: 'switch 打开时的文字描述',
    type: 'string',
    default: "''"
  },
  {
    name: 'inactive-text',
    declare: 'switch 的状态为 off 时的文字描述',
    type: 'string',
    default: "''"
  },
  {
    name: 'active-value',
    declare: 'switch 状态为 on 时的值',
    type: 'boolean / string / number',
    default: 'true'
  },
  {
    name: 'inactive-value',
    declare: 'switch的状态为 off 时的值',
    type: 'boolean / string / number',
    default: 'false'
  },
  {
    name: 'name',
    declare: 'switch 对应的 name 属性',
    type: 'string',
    default: "''"
  },
  {
    name: 'validate-event',
    declare: '是否触发表单验证',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'before-change',
    declare: 'switch 状态改变前的钩子，返回 false 或者返回 Promise 且被 reject 则停止切换',
    type: 'boolean / Function',
    default: '—'
  },
  {
    name: 'id',
    declare: 'input 的 id',
    type: 'string',
    default: '—'
  },
  {
    name: 'tabindex',
    declare: 'input 的 tabindex',
    type: 'string / number',
    default: '—'
  },
  {
    name: 'aria-label',
    declare: '等价于原生 input aria-label 属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'active-color',
    declare: '当在 on 状态时的背景颜色(推荐使用 CSS var --el-switch-on-color)',
    type: 'string',
    default: "''",
    deprecated: true
  },
  {
    name: 'inactive-color',
    declare: 'off 状态时的背景颜色(推荐使用 CSS var --el-switch-off-color)',
    type: 'string',
    default: "''",
    deprecated: true
  },
  {
    name: 'border-color',
    declare: '开关的边框颜色 (推荐使用 CSS var --el-switch-border-color)',
    type: 'string',
    default: "''",
    deprecated: true
  },
  {
    name: 'label',
    declare: '等价于原生 input aria-label 属性',
    type: 'string',
    default: '—',
    deprecated: true
  }
]
  </script>
  