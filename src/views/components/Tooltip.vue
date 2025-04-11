<template>
    <div class="common-main">
        <el-card>
            <Title title="Tooltip 文字提示"/>

            <el-tooltip content="Top center" placement="top">
              <el-button>Dark</el-button>
            </el-tooltip>
            <el-tooltip content="Bottom center" placement="bottom" effect="light">
              <el-button>Light</el-button>
            </el-tooltip>

            <el-tooltip content="Bottom center" effect="customized">
              <el-button>Customized theme</el-button>
            </el-tooltip>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Tooltip'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  

    const configData = [
  {
    name: 'append-to',
    declare: '指示 Tooltip 的内容将附加在哪一个网页元素上',
    type: 'CSSSelector / HTMLElement',
    default: '—'
  },
  {
    name: 'effect',
    declare: 'Tooltip 主题，内置了 dark / light 两种',
    type: 'enum',
    default: "'dark'",
    options: ['dark', 'light']
  },
  {
    name: 'content',
    declare: '显示的内容，也可被 slot#content 覆盖',
    type: 'string',
    default: "''"
  },
  {
    name: 'raw-content',
    declare: 'content 中的内容是否作为 HTML 字符串处理',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'placement',
    declare: 'Tooltip 组件出现的位置',
    type: 'enum',
    default: "'bottom'",
    options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
  },
  {
    name: 'fallback-placements',
    declare: 'Tooltip 可用的 positions 请查看popper.js 文档',
    type: 'array',
    default: '—'
  },
  {
    name: 'visible / v-model:visible',
    declare: 'Tooltip 组件可见性',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'disabled',
    declare: 'Tooltip 组件是否禁用',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'offset',
    declare: '出现位置的偏移量',
    type: 'number',
    default: '12'
  },
  {
    name: 'transition',
    declare: '动画名称',
    type: 'string',
    default: '—'
  },
  {
    name: 'popper-options',
    declare: 'popper.js 参数',
    type: 'object',
    default: '{}'
  },
  {
    name: 'show-after',
    declare: '在触发后多久显示内容，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'show-arrow',
    declare: 'tooltip 的内容是否有箭头',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'hide-after',
    declare: '延迟关闭，单位毫秒',
    type: 'number',
    default: '200'
  },
  {
    name: 'auto-close',
    declare: 'tooltip 出现后自动隐藏延时，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'popper-class',
    declare: '为 Tooltip 的 popper 添加类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'enterable',
    declare: '鼠标是否可进入到 tooltip 中',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'teleported',
    declare: '是否使用 teleport。设置成 true则会被追加到 append-to 的位置',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'trigger',
    declare: '如何触发 Tooltip',
    type: 'enum',
    default: "'hover'",
    options: ['hover', 'click', 'focus', 'contextmenu']
  },
  {
    name: 'virtual-triggering',
    declare: '用来标识虚拟触发是否被启用',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'virtual-ref',
    declare: '标识虚拟触发时的触发元素',
    type: 'HTMLElement',
    default: '—'
  },
  {
    name: 'trigger-keys',
    declare: '当鼠标点击或者聚焦在触发元素上时，可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示',
    type: 'Array',
    default: "['Enter','Space']"
  },
  {
    name: 'persistent',
    declare: '当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'aria-label',
    declare: '和 aria-label 属性保持一致',
    type: 'string',
    default: '—'
  }
]

  </script>
  
  <style>
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>