<template>
    <div class="common-main">
        <el-card>
            <Title title="Rate评分"/>

            <div class="demo-rate-block">
              <span class="demonstration">Default</span>
              <el-rate v-model="value1" />
            </div>
            <div class="demo-rate-block">
              <span class="demonstration">Color for different levels</span>
              <el-rate v-model="value2" :colors="colors" />
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Rate'>
    import { ref } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
    const value1 = ref(0)
    const value2 = ref(0)
    const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
  
const configData = [
  {
    name: 'model-value / v-model',
    declare: '选中项绑定值',
    type: 'number',
    default: '0'
  },
  {
    name: 'max',
    declare: '最大分值',
    type: 'number',
    default: '5'
  },
  {
    name: 'size',
    declare: '尺寸',
    type: 'enum',
    default: '—',
    options: ['large', 'default', 'small']
  },
  {
    name: 'disabled',
    declare: '是否为只读',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'allow-half',
    declare: '是否允许半选',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'low-threshold',
    declare: '低分和中等分数的界限值，值本身被划分在低分中',
    type: 'number',
    default: '2'
  },
  {
    name: 'high-threshold',
    declare: '高分和中等分数的界限值，值本身被划分在高分中',
    type: 'number',
    default: '4'
  },
  {
    name: 'colors',
    declare: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
    type: 'object',
    default: "['#f7ba2a', '#f7ba2a', '#f7ba2a']"
  },
  {
    name: 'void-color',
    declare: '未选中 icon 的颜色',
    type: 'string',
    default: "'#c6d1de'"
  },
  {
    name: 'disabled-void-color',
    declare: '只读时未选中 icon 的颜色',
    type: 'string',
    default: "'#eff2f7'"
  },
  {
    name: 'icons',
    declare: '图标组件 若传入数组，则需要传入 3 个元素，分别为 3 个部分所对应的类名；若传入对象，则可自定义分段，键名为分段的界限值，键值为对应的类名',
    type: 'object',
    default: '[StarFilled, StarFilled, StarFilled]'
  },
  {
    name: 'void-icon',
    declare: '未被选中的图标组件',
    type: 'string / Component',
    default: 'Star'
  },
  {
    name: 'disabled-void-icon',
    declare: '禁用状态的未选择图标',
    type: 'string / Component',
    default: 'StarFilled'
  },
  {
    name: 'show-text',
    declare: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'show-score',
    declare: '是否显示当前分数，show-score 和 show-text 不能同时为真',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'text-color',
    declare: '辅助文字的颜色',
    type: 'string',
    default: "''"
  },
  {
    name: 'texts',
    declare: '辅助文字数组',
    type: 'array',
    default: "['Extremely bad', 'Disappointed', 'Fair', 'Satisfied', 'Surprise']"
  },
  {
    name: 'score-template',
    declare: '分数显示模板',
    type: 'string',
    default: "''"
  },
  {
    name: 'clearable',
    declare: '是否可以重置值为 0',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'id',
    declare: '原生 id 属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'aria-label',
    declare: '和 Rate 的 aria-label 属性保持一致',
    type: 'string',
    default: '—'
  },
  {
    name: 'label',
    declare: '和 Rate 的 aria-label 属性保持一致',
    type: 'string',
    default: '—',
    deprecated: true
  }
]

  </script>
  
  <style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>