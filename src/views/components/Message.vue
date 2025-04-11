<template>
    <div class="message-container common-main">
        <el-card>
            <Title title="消息提示"/>

            <h1>基础用法</h1>
            <el-button :plain="true" @click="open">Show message</el-button>
            <el-button :plain="true" @click="openVn">VNode</el-button>
        </el-card>

        <el-card>
            <h1>不同状态</h1>
            <el-button :plain="true" @click="open2">Success</el-button>
            <el-button :plain="true" @click="open3">Warning</el-button>
            <el-button :plain="true" @click="open1">Message</el-button>
            <el-button :plain="true" @click="open4">Error</el-button>
        </el-card>

        <el-card>
            <h1>可以添加关闭按钮。</h1>
            <el-button :plain="true" @click="open11">Message</el-button>
            <el-button :plain="true" @click="open12">Success</el-button>
            <el-button :plain="true" @click="open13">Warning</el-button>
            <el-button :plain="true" @click="open14">Error</el-button>
            <el-button :plain="true" @click="open5">Won't close automatically</el-button>
        </el-card>
    </div>
</template>

<script lang="ts" setup name='Message'>
import { h } from 'vue'
import { ElMessage } from 'element-plus'
import Title from '@/components/Title.vue'

const open = () => {
  ElMessage('This is a message.')
}

const openVn = () => {
  ElMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  ElMessage('This is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}


const open11 = () => {
  ElMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open12 = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open13 = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open14 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
  })
}
const open5 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a message that does not automatically close.',
    duration: 0,
  })
}
</script>

<style scope lang="less">
h1 {
    margin-bottom: 10px;
}
</style>