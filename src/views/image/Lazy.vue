<template>
    <div class="common-main">
        <el-card>
            <Title title="图片懒加载"/>

            <div class="demo-image__lazy">
              <el-image v-for="url in urls" :key="url" :src="url" lazy />
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Lazy'>
const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]
const configData = [
  {
    name: 'src',
    declare: '图片源地址，同原生属性一致',
    type: 'string',
    default: ''
  },
  {
    name: 'fit',
    declare: '确定图片如何适应容器框，同原生 object-fit',
    type: "['fill', 'contain', 'cover', 'none', 'scale-down']",
    default: ''
  },
  {
    name: 'hide-on-click-modal',
    declare: '当开启 preview 功能时，是否可以通过点击遮罩层关闭 preview',
    type: 'boolean',
    default: false
  },
  {
    name: 'loading',
    declare: '浏览器加载图像的策略，和浏览器原生能力一致',
    type: "['eager', 'lazy']",
    default: '—',
  },
  {
    name: 'lazy',
    declare: '是否使用懒加载',
    type: 'boolean',
    default: false
  },
  {
    name: 'scroll-container',
    declare: '开启懒加载功能后，监听 scroll 事件的容器',
    type: 'string | object',
    default: '—'
  },
  {
    name: 'alt',
    declare: '原生属性 alt',
    type: 'string',
    default: '—'
  },
  {
    name: 'referrerpolicy',
    declare: '原生属性 referrerPolicy',
    type: 'string',
    default: '—'
  },
  {
    name: 'crossorigin',
    declare: '原生属性 crossorigin',
    type: "['anonymous', 'use-credentials']",
    default: '—'
  },
  {
    name: 'preview-src-list',
    declare: '开启图片预览功能',
    type: 'string[]',
    default: []
  },
  {
    name: 'z-index',
    declare: '设置图片预览的 z-index',
    type: 'number',
    default: '—'
  },
  {
    name: 'initial-index',
    declare: '初始预览图像索引，小于 url-list 的长度',
    type: 'number',
    default: 0
  },
  {
    name: 'close-on-press-escape',
    declare: '是否可以通过按下 ESC 关闭 Image Viewer',
    type: 'boolean',
    default: true
  },
  {
    name: 'preview-teleported',
    declare: 'image-viewer 是否插入至 body 元素上。嵌套的父元素属性会发生修改时应该将此属性设置为 true',
    type: 'boolean',
    default: false
  },
  {
    name: 'infinite',
    declare: '是否可以无限循环预览',
    type: 'boolean',
    default: true
  },
  {
    name: 'zoom-rate',
    declare: '图像查看器缩放事件的缩放速率',
    type: 'number',
    default: 1.2
  },
  {
    name: 'min-scale',
    declare: '图像查看器缩放事件的最小缩放比例',
    type: 'number',
    default: 0.2,
  },
  {
    name: 'max-scale',
    declare: '图像查看器缩放事件的最大缩放比例',
    type: 'number',
    default: 7,
  }
];
</script>

<style scoped>
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}
</style>