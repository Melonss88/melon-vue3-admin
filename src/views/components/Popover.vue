<template>
    <div class="common-main">
        <el-card>
            <Title title="Popover 弹出框"/>

          <div class="popover-base-box">
            <div class="row center">
              <el-popover
                class="box-item"
                title="Title"
                content="Top Left prompts info"
                placement="top-start"
              >
                <template #reference>
                  <el-button>top-start</el-button>
                </template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Top Center prompts info"
                placement="top"
              >
                <template #reference>
                  <el-button>top</el-button>
                </template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Top Right prompts info"
                placement="top-end"
              >
                <template #reference>
                  <el-button>top-end</el-button>
                </template>
              </el-popover>
            </div>
            <div class="row">
              <el-popover
                class="box-item"
                title="Title"
                content="Left Top prompts info"
                placement="left-start"
              >
                <template #reference>
                  <el-button>left-start</el-button>
                </template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Right Top prompts info"
                placement="right-start"
              >
                <template #reference>
                  <el-button>right-start</el-button>
                </template>
              </el-popover>
            </div>
            <div class="row">
              <el-popover
                class="box-item"
                title="Title"
                content="Left Center prompts info"
                placement="left"
              >
                <template #reference>
                  <el-button class="mt-3 mb-3">left</el-button>
                </template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Right Center prompts info"
                placement="right"
              >
                <template #reference>
                  <el-button>right</el-button>
                </template>
              </el-popover>
            </div>
            <div class="row">
              <el-popover
                class="box-item"
                title="Title"
                content="Left Bottom prompts info"
                placement="left-end"
              >
                <template #reference>
                  <el-button>left-end</el-button>
                </template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Right Bottom prompts info"
                placement="right-end"
              >
                <template #reference>
                  <el-button>right-end</el-button>
                </template>
              </el-popover>
            </div>
            <div class="row center">
              <el-popover
                class="box-item"
                title="Title"
                content="Bottom Left prompts info"
                placement="bottom-start"
              >
                <template #reference> <el-button>bottom-start</el-button></template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Bottom Center prompts info"
                placement="bottom"
              >
                <template #reference> <el-button>bottom</el-button></template>
              </el-popover>
              <el-popover
                class="box-item"
                title="Title"
                content="Bottom Right prompts info"
                placement="bottom-end"
              >
                <template #reference>
                  <el-button>bottom-end</el-button>
                </template>
              </el-popover>
            </div>
          </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Popover'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
    const configData = [
  {
    name: 'trigger',
    declare: '触发方式',
    type: 'enum',
    default: "'hover'",
    options: ['hover', 'click', 'focus', 'contextmenu']
  },
  {
    name: 'title',
    declare: '标题',
    type: 'string',
    default: '—'
  },
  {
    name: 'effect',
    declare: 'Tooltip 主题，Element Plus 内置了 dark / light 两种主题',
    type: 'enum / string',
    default: "'light'",
    options: ['dark', 'light']
  },
  {
    name: 'content',
    declare: '显示的内容，也可以通过写入默认 slot 修改显示内容',
    type: 'string',
    default: "''"
  },
  {
    name: 'width',
    declare: '宽度',
    type: 'string / number',
    default: '150'
  },
  {
    name: 'placement',
    declare: '出现位置',
    type: 'enum',
    default: "'bottom'",
    options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']
  },
  {
    name: 'disabled',
    declare: 'Popover 是否可用',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'visible / v-model:visible',
    declare: 'Popover 是否显示',
    type: 'boolean / null',
    default: 'null'
  },
  {
    name: 'offset',
    declare: '浮层偏移量, Popover 是在 Tooltip 基础上开发的，Popover的 offset 是 undefined, 但Tooltip 的 offset 是12',
    type: 'number',
    default: 'undefined'
  },
  {
    name: 'transition',
    declare: '定义渐变动画，默认是 el-fade-in-linear',
    type: 'string',
    default: '—'
  },
  {
    name: 'show-arrow',
    declare: '是否显示 Tooltip 箭头，欲了解更多信息，请参考 ElPopper',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'popper-options',
    declare: 'popper.js 的参数',
    type: 'object',
    default: "{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}"
  },
  {
    name: 'popper-class',
    declare: '为 popper 添加类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'popper-style',
    declare: '为 popper 自定义样式',
    type: 'string / object',
    default: "''"
  },
  {
    name: 'show-after',
    declare: '在触发后多久显示内容，单位毫秒',
    type: 'number',
    default: '0'
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
    name: 'tabindex',
    declare: 'Popover 组件的 tabindex',
    type: 'number / string',
    default: '0'
  },
  {
    name: 'teleported',
    declare: '是否将 popover 的下拉列表插入至 body 元素',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'persistent',
    declare: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时, popover 将会被删除',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'virtual-triggering',
    declare: '是否启用虚拟触发器',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'virtual-ref',
    declare: '代表 tooltip 所要附加的参照元素',
    type: 'HTMLElement',
    default: '—'
  }
]

  </script>
  

<style>
.popover-base-box {
  width: 600px;
}

.popover-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popover-base-box .center {
  justify-content: center;
}

.popover-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>