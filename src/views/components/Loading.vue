<template>
    <div class="common-main">
        <el-card>
            <Title title="Loading 加载"/>

            <el-table v-loading="loading" :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>

        <el-card>
            <Config :tableData="configData2" :isEvent="true" configTtitle="指令"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Loading'>
    import { ref } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'

const loading = ref(true)

const tableData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
  
const configData = [
  {
    name: 'target',
    declare: 'Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点',
    type: 'string / HTMLElement',
    default: 'document.body'
  },
  {
    name: 'body',
    declare: '同 v-loading 指令中的 body 修饰符',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'fullscreen',
    declare: '同 v-loading 指令中的 fullscreen 修饰符',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'lock',
    declare: '同 v-loading 指令中的 lock 修饰符',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'text',
    declare: '显示在加载图标下方的加载文案',
    type: 'string',
    default: '—'
  },
  {
    name: 'spinner',
    declare: '自定义加载图标类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'background',
    declare: '遮罩背景色',
    type: 'string',
    default: '—'
  },
  {
    name: 'customClass',
    declare: 'Loading 的自定义类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'svg',
    declare: '自定义 SVG 元素覆盖默认加载器',
    type: 'string',
    default: '—'
  },
  {
    name: 'svgViewBox',
    declare: '设置用于加载 svg 元素的 viewBox 属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'beforeClose',
    declare: 'Loading 关闭之前执行的函数。如果此函数返回 false ，关闭过程将被中止。反之，loading 将被关闭。',
    type: 'Function',
    default: '—',
    version: '2.7.8'
  },
  {
    name: 'closed',
    declare: 'Loading 完全关闭后触发的函数',
    type: 'Function',
    default: '—',
    version: '2.7.8'
  }
]
const configData2 = [
  {
    name: 'v-loading',
    declare: '是否显示动画',
    type: 'boolean / LoadingOptions'
  },
  {
    name: 'element-loading-text',
    declare: '显示在加载图标下方的加载文案',
    type: 'string'
  },
  {
    name: 'element-loading-spinner',
    declare: '自定义加载图标',
    type: 'string'
  },
  {
    name: 'element-loading-svg',
    declare: '自定义加载图标 (与 element-loading-spinner 相同)',
    type: 'string'
  },
  {
    name: 'element-loading-svg-view-box',
    declare: '设置用于加载 svg 元素的 viewBox 属性',
    type: 'string'
  },
  {
    name: 'element-loading-background',
    declare: '背景遮罩的颜色',
    type: 'string'
  },
  {
    name: 'element-loading-custom-class',
    declare: 'loading 的自定义类名',
    type: 'string'
  }
]
  </script>
  

<style>
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>