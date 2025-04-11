<template>
    <div class="common-main">
        <el-card>
            <Title title="卡片模式"/>

            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>

        <el-card>
            <Config :tableData="configData2" :isEvent='true' configTtitle="事件"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='CarouselCard'>

const configData = [
  {
    name: 'height',
    declare: 'carousel 的高度',
    type: 'string',
    default: ''
  },
  {
    name: 'initial-index',
    declare: '初始状态激活的幻灯片的索引，从 0 开始',
    type: 'number',
    default: 0
  },
  {
    name: 'trigger',
    declare: '指示器的触发方式',
    type: 'enum',
    options: ['hover', 'click'],
    default: 'hover'
  },
  {
    name: 'autoplay',
    declare: '是否自动切换',
    type: 'boolean',
    default: true
  },
  {
    name: 'interval',
    declare: '自动切换的时间间隔，单位为毫秒',
    type: 'number',
    default: 3000
  },
  {
    name: 'indicator-position',
    declare: '指示器的位置',
    type: 'enum',
    options: ['', 'outside', 'none'],
    default: ''
  },
  {
    name: 'arrow',
    declare: '切换箭头的显示时机',
    type: 'enum',
    options: ['hover', 'always', 'never'],
    default: 'hover'
  },
  {
    name: 'type',
    declare: 'carousel 的类型',
    type: 'enum',
    options: ['', 'card'],
    default: ''
  },
  {
    name: 'cardScale',
    declare: '当 type 为 card 时，二级卡的缩放大小',
    type: 'number',
    default: 0.83,
    since: '2.7.8'
  },
  {
    name: 'loop',
    declare: '是否循环显示',
    type: 'boolean',
    default: true
  },
  {
    name: 'direction',
    declare: '展示的方向',
    type: 'enum',
    options: ['horizontal', 'vertical'],
    default: 'horizontal'
  },
  {
    name: 'pause-on-hover',
    declare: '鼠标悬浮时暂停自动切换',
    type: 'boolean',
    default: true
  },
  {
    name: 'motion-blur',
    declare: '添加动态模糊以给走马灯注入活力和流畅性',
    type: 'boolean',
    default: false,
    since: '2.6.8'
  }
];

const configData2 = [
  {
    name: 'change',
    declare: '当前展示的幻灯片切换时触发，它有两个参数， 一个是新幻灯片的索引，另一个是旧幻灯片的索引',
    type: 'Function',
  }
]
  </script>
  

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>