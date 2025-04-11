<template>
    <div class="common-main">
        <el-card>
            <Title title="Progress 进度条"/>

            <div class="demo-progress">
                <el-progress :text-inside="true" :stroke-width="26" :percentage="70" />
                <el-progress
                :text-inside="true"
                :stroke-width="24"
                :percentage="100"
                status="success"
                />
                <el-progress
                :text-inside="true"
                :stroke-width="22"
                :percentage="80"
                status="warning"
                />
                <el-progress
                :text-inside="true"
                :stroke-width="20"
                :percentage="50"
                status="exception"
                />
            </div>
        </el-card>

        <el-card>
            <div class="demo-progress">
                <el-progress type="circle" :percentage="0" />
                <el-progress type="circle" :percentage="25" />
                <el-progress type="circle" :percentage="100" status="success" />
                <el-progress type="circle" :percentage="70" status="warning" />
                <el-progress type="circle" :percentage="50" status="exception" />
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>

    </div>
</template>
  
<script lang="ts" setup name="Progress">
const configData = [
  {
    name: 'percentage',
    declare: '进度百分比（必填）',
    type: 'number',
    default: 0,
    required: true
  },
  {
    name: 'type',
    declare: '进度条类型',
    type: 'enum',
    options: ['line', 'circle', 'dashboard'],
    default: 'line'
  },
  {
    name: 'stroke-width',
    declare: '进度条的宽度',
    type: 'number',
    default: 6
  },
  {
    name: 'text-inside',
    declare: '进度条显示文字内置在进度条内（仅 type 为 line 时可用）',
    type: 'boolean',
    default: false
  },
  {
    name: 'status',
    declare: '进度条当前状态',
    type: 'enum',
    options: ['success', 'exception', 'warning'],
    default: '—'
  },
  {
    name: 'indeterminate',
    declare: '是否为动画进度条',
    type: 'boolean',
    default: false
  },
  {
    name: 'duration',
    declare: '控制动画进度条速度和条纹进度条流动速度',
    type: 'number',
    default: 3
  },
  {
    name: 'color',
    declare: '进度条背景色（会覆盖 status 状态颜色）',
    type: 'string | Function | Array<string>',
    default: ''
  },
  {
    name: 'width',
    declare: '环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）',
    type: 'number',
    default: 126
  },
  {
    name: 'show-text',
    declare: '是否显示进度条文字内容',
    type: 'boolean',
    default: true
  },
  {
    name: 'stroke-linecap',
    declare: 'circle/dashboard 类型路径两端的形状',
    type: 'enum',
    options: ['round', 'square'],
    default: 'round'
  },
  {
    name: 'format',
    declare: '指定进度条文字内容',
    type: 'Function',
    default: '—'
  },
  {
    name: 'striped',
    declare: '在进度条上增加条纹',
    type: 'boolean',
    default: false,
    since: '2.3.4'
  },
  {
    name: 'striped-flow',
    declare: '让进度条上的条纹流动起来',
    type: 'boolean',
    default: false,
    since: '2.3.4'
  }
];
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>