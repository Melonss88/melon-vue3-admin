<template>
    <div class="common-main">
        <el-card>
            <Title title="Card 卡片"/>

            <el-card style="max-width: 480px">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
              </div>
            </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            <template #footer>Footer content</template>
          </el-card>
        </el-card>

        <el-card style="max-width: 480px">
          <template #header>Yummy hamburger</template>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          />
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Card'>

const configData = [
  {
    name: 'header',
    declare: '卡片的标题。既可以通过设置 header 修改标题，也可以通过 slot#header 传入 DOM 节点',
    type: 'string',
    default: '—'
  },
  {
    name: 'footer',
    declare: '卡片页脚。既可以通过设置 footer 修改卡片底部内容，也可以通过 slot#footer 传入 DOM 节点',
    type: 'string',
    default: '—',
    since: '2.4.3'
  },
  {
    name: 'body-style',
    declare: 'body 的 CSS 样式',
    type: 'object',
    default: {}
  },
  {
    name: 'body-class',
    declare: 'body 的自定义类名',
    type: 'string',
    default: '',
    since: '2.3.10'
  },
  {
    name: 'shadow',
    declare: '卡片阴影显示时机',
    type: 'enum',
    options: ['always', 'hover', 'never'],
    default: 'always'
  }
];
  </script>
  