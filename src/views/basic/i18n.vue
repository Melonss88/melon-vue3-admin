<template>
    <div class="common-main">
        <el-card>
            <Title title="i18n 配置"/>

            <el-button mb-2 @click="toggle">Switch Language</el-button>
            <br />
        
            <el-config-provider :locale="locale">
                <el-table mb-1 :data="[]" />
                <el-pagination :total="100" />
            </el-config-provider>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
  </template>
  
  <script lang="ts" setup name='i18n'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
    import { computed, ref } from 'vue'
    import zhCn from 'element-plus/es/locale/lang/zh-cn'
    import en from 'element-plus/es/locale/lang/en'
  
  const language = ref('zh-cn')
  const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
  
  const toggle = () => {
    language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
  }

  const configData = [
  {
    name: 'locale',
    declare: '翻译文本对象',
    type: 'object',
    default: '{ languages: "en" }'
  },
  {
    name: 'size',
    declare: '全局组件大小',
    type: 'enum',
    default: 'default',
    options: ['large', 'default', 'small']
  },
  {
    name: 'zIndex',
    declare: '全局初始化 zIndex 的值',
    type: 'number',
    default: '—'
  },
  {
    name: 'namespace',
    declare: '全局组件类名称前缀 (需要配合 $namespace 使用)',
    type: 'string',
    default: 'el'
  },
  {
    name: 'button',
    declare: '按钮相关配置，',
    type: 'object',
    default: '',
    children: [
      {
        name: 'autoInsertSpace',
        declare: '自动在两个中文字符之间插入空格',
        type: 'boolean',
        default: 'false'
      },
      // 可以继续添加其他button配置项
    ]
  },
  {
    name: 'message',
    declare: '消息相关配置，',
    type: 'object',
    default: '',
    children: [
      {
        name: 'max',
        declare: '可同时显示的消息最大数量',
        type: 'number',
        default: '—'
      },
      // 可以继续添加其他message配置项
    ]
  },
  {
    name: 'experimental-features',
    declare: '将要添加的实验阶段的功能，所有功能都是默认设置为 false',
    type: 'object',
    default: '—'
  },
  {
    name: 'empty-values',
    declare: '输入类组件空值',
    type: 'array',
    default: '—'
  },
  {
    name: 'value-on-clear',
    declare: '输入类组件清空值',
    type: 'string / number / boolean / Function',
    default: '—'
  }
]
  </script>
  