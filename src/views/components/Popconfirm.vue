<template>
    <div class="common-main">
        <el-card>
            <Title title="Popconfirm 气泡确认框"/>

          <div class="popconfirm-base-box">
            <div class="row center">
              <el-popconfirm
                class="box-item"
                title="Top Left prompts info"
                placement="top-start"
              >
                <template #reference>
                  <el-button>top-start</el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Top Center prompts info"
                placement="top"
              >
                <template #reference>
                  <el-button>top</el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Top Right prompts info"
                placement="top-end"
              >
                <template #reference>
                  <el-button>top-end</el-button>
                </template>
              </el-popconfirm>
            </div>
            <div class="row">
              <el-popconfirm
                class="box-item"
                title="Left Top prompts info"
                placement="left-start"
              >
                <template #reference>
                  <el-button>left-start</el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Right Top prompts info"
                placement="right-start"
              >
                <template #reference>
                  <el-button>right-start</el-button>
                </template>
              </el-popconfirm>
            </div>
            <div class="row">
              <el-popconfirm
                class="box-item"
                title="Left Center prompts info"
                placement="left"
              >
                <template #reference>
                  <el-button class="mt-3 mb-3">left</el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Right Center prompts info"
                placement="right"
              >
                <template #reference>
                  <el-button>right</el-button>
                </template>
              </el-popconfirm>
            </div>
            <div class="row">
              <el-popconfirm
                class="box-item"
                title="Left Bottom prompts info"
                placement="left-end"
              >
                <template #reference>
                  <el-button>left-end</el-button>
                </template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Right Bottom prompts info"
                placement="right-end"
              >
                <template #reference>
                  <el-button>right-end</el-button>
                </template>
              </el-popconfirm>
            </div>
            <div class="row center">
              <el-popconfirm
                class="box-item"
                title="Bottom Left prompts info"
                placement="bottom-start"
              >
                <template #reference> <el-button>bottom-start</el-button></template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Bottom Center prompts info"
                placement="bottom"
              >
                <template #reference> <el-button>bottom</el-button></template>
              </el-popconfirm>
              <el-popconfirm
                class="box-item"
                title="Bottom Right prompts info"
                placement="bottom-end"
              >
                <template #reference>
                  <el-button>bottom-end</el-button>
                </template>
              </el-popconfirm>
            </div>
          </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Popconfirm'>
    import { reactive } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
    const configData = [
  {
    name: 'title',
    declare: '标题',
    type: 'string',
    default: '—'
  },
  {
    name: 'confirm-button-text',
    declare: '确认按钮文字',
    type: 'string',
    default: '—'
  },
  {
    name: 'cancel-button-text',
    declare: '取消按钮文字',
    type: 'string',
    default: '—'
  },
  {
    name: 'confirm-button-type',
    declare: '确认按钮类型',
    type: 'enum',
    default: "'primary'",
    options: ['primary', 'success', 'warning', 'danger', 'info', 'text']
  },
  {
    name: 'cancel-button-type',
    declare: '取消按钮类型',
    type: 'enum',
    default: "'text'",
    options: ['primary', 'success', 'warning', 'danger', 'info', 'text']
  },
  {
    name: 'icon',
    declare: '自定义图标',
    type: 'string / Component',
    default: 'QuestionFilled'
  },
  {
    name: 'icon-color',
    declare: 'Icon 颜色',
    type: 'string',
    default: "'#f90'"
  },
  {
    name: 'hide-icon',
    declare: '是否隐藏 Icon',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'hide-after',
    declare: '关闭时的延迟',
    type: 'number',
    default: '200'
  },
  {
    name: 'teleported',
    declare: '是否将 popover 的下拉列表插入至 body 元素',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'persistent',
    declare: '当 popover 组件长时间不触发且 persistent 属性设置为 false 时，popover 将会被删除',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'width',
    declare: '弹层宽度，最小宽度 150px',
    type: 'string / number',
    default: '150'
  }
]

  </script>
  
  <style>
.popconfirm-base-box {
  width: 600px;
}

.popconfirm-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popconfirm-base-box .center {
  justify-content: center;
}

.popconfirm-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>