<template>
    <div class="common-main">
        <el-card>
            <Title title="Steps 步骤条"/>

            <el-steps style="max-width: 600px" :active="2" align-center>
              <el-step title="Step 1" description="Some description" />
              <el-step title="Step 2" description="Some description" />
              <el-step title="Step 3" description="Some description" />
            </el-steps>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Steps'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'

const configData = [
  {
    name: 'space',
    declare: '每个 step 的间距，不填写将自适应间距。支持百分比',
    type: 'number / string',
    default: "''"
  },
  {
    name: 'direction',
    declare: '显示方向',
    type: 'enum',
    default: "'horizontal'",
    options: ['horizontal', 'vertical']
  },
  {
    name: 'active',
    declare: '设置当前激活步骤',
    type: 'number',
    default: '0'
  },
  {
    name: 'process-status',
    declare: '设置当前步骤的状态',
    type: 'enum',
    default: "'process'",
    options: ['wait', 'process', 'finish', 'error', 'success']
  },
  {
    name: 'finish-status',
    declare: '设置结束步骤的状态',
    type: 'enum',
    default: "'finish'",
    options: ['wait', 'process', 'finish', 'error', 'success']
  },
  {
    name: 'align-center',
    declare: '进行居中对齐',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'simple',
    declare: '是否应用简洁风格',
    type: 'boolean',
    default: '—'
  }
]

  </script>
  