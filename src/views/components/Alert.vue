<template>
    <div class="common-main">
        <el-card>
            <Title title="提示弹窗"/>
            
            <div style="max-width: 600px;margin-bottom:10px">
                <el-alert title="Success alert" type="success" effect="dark" />
                <el-alert title="Info alert" type="info" effect="dark" />
                <el-alert title="Warning alert" type="warning" effect="dark" />
                <el-alert title="Error alert" type="error" effect="dark" />
            </div>
            <h1>提供了两个不同的主题：light 和 dark。通过设置 effect 属性来改变主题，默认为 light。</h1>
        </el-card>

        <el-card>
            <div style="max-width: 600px;margin-bottom:10px">
                <el-alert
                title="Success alert"
                type="success"
                description="More text description"
                show-icon
                />
                <el-alert
                title="Info alert"
                type="info"
                description="More text description"
                show-icon
                />
                <el-alert
                title="Warning alert"
                type="warning"
                description="More text description"
                show-icon
                />
                <el-alert
                title="Error alert"
                type="error"
                description="More text description"
                show-icon
                />
            </div>
                <h1>带图标和描述</h1>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>

<script lang="ts" setup name='Alert'>
import Title from '@/components/Title.vue'
import Config from '@/components/Config.vue'

const configData = [
  {
    name: 'title',
    declare: 'Alert 标题',
    type: 'string',
    default: '—'
  },
  {
    name: 'type',
    declare: 'Alert 类型',
    type: 'enum',
    default: 'info',
    options: ['success', 'warning', 'info', 'error'] 
  },
  {
    name: 'description',
    declare: '描述性文本',
    type: 'string',
    default: '—'
  },
  {
    name: 'closable',
    declare: '是否可以关闭',
    type: 'boolean',
    default: true
  },
  {
    name: 'center',
    declare: '文字是否居中',
    type: 'boolean',
    default: false
  },
  {
    name: 'close-text',
    declare: '自定义关闭按钮文本',
    type: 'string',
    default: '—'
  },
  {
    name: 'show-icon',
    declare: '是否显示类型图标',
    type: 'boolean',
    default: false
  },
  {
    name: 'effect',
    declare: '主题样式',
    type: 'enum',
    default: 'light',
    options: ['light', 'dark'] 
  }
]
</script>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>