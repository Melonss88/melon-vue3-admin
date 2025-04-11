<template>
    <div class="common-main">
        <el-card>
            <Title title="Watermark 水印"/>

            <el-watermark :font="font" :content="['Vue3-Admin', 'Element Plus']">
              <div style="height: 500px" />
            </el-watermark>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Watermark'>
import { reactive } from 'vue'
const font = reactive({
  color: 'rgba(0, 0, 0, .15)',
})
const configData = [
  {
    name: 'width',
    declare: '水印的宽度（content 的默认值是它自己的宽度）',
    type: 'number',
    default: 120
  },
  {
    name: 'height',
    declare: '水印的高度（content 的默认值是它自己的高度）',
    type: 'number',
    default: 64
  },
  {
    name: 'rotate',
    declare: '水印的旋转角度（单位 °）',
    type: 'number',
    default: -22
  },
  {
    name: 'zIndex',
    declare: '水印元素的 z-index 值',
    type: 'number',
    default: 9
  },
  {
    name: 'image',
    declare: '水印图片（建议使用 2x 或 3x 图像）',
    type: 'string',
    default: '—'
  },
  {
    name: 'content',
    declare: '水印文本内容',
    type: 'string | object',
    default: '—',
    // example: {
    //   text: '机密文件',  
    //   font: {
    //     color: 'rgba(0, 0, 0, 0.15)',
    //     fontSize: 16,
    //     fontFamily: 'sans-serif'
    //   }
    // }
  },
  {
    name: 'font',
    declare: '文字样式（当content为string时生效）',
    type: 'object',
    default: {
      color: 'rgba(0, 0, 0, 0.15)',
      fontSize: 16,
      fontFamily: 'sans-serif',
      fontWeight: 'normal'
    }
  },
  {
    name: 'gap',
    declare: '水印之间的间距',
    type: '[number, number]',
    default: [100, 100]
  },
  {
    name: 'offset',
    declare: '水印从容器左上角的偏移（默认值为 gap/2）',
    type: '[number, number]',
    default: '动态计算值',
  }
];
</script>
