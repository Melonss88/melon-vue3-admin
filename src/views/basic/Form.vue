<template>
    <div class="common-main">
        <el-card>
            <Title title="Form表单"/>

            <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                <el-date-picker
                    v-model="form.date1"
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%"
                />
                </el-col>
                <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                <el-time-picker
                    v-model="form.date2"
                    placeholder="Pick a time"
                    style="width: 100%"
                />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                <el-checkbox value="Online activities" name="type">
                    Online activities
                </el-checkbox>
                <el-checkbox value="Promotion activities" name="type">
                    Promotion activities
                </el-checkbox>
                <el-checkbox value="Offline activities" name="type">
                    Offline activities
                </el-checkbox>
                <el-checkbox value="Simple brand exposure" name="type">
                    Simple brand exposure
                </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                <el-radio value="Sponsor">Sponsor</el-radio>
                <el-radio value="Venue">Venue</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
            </el-form>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Form'>
    import { reactive } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
  const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  const configData = [
  {
    name: 'model',
    declare: '表单数据对象',
    type: 'object',
    default: '—'
  },
  {
    name: 'rules',
    declare: '表单验证规则',
    type: 'object',
    default: '—'
  },
  {
    name: 'inline',
    declare: '行内表单模式',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'label-position',
    declare: '表单域标签的位置，当设置为 left 或 right 时，则也需要设置 label-width 属性',
    type: 'enum',
    default: 'right',
    options: ['left', 'right', 'top']
  },
  {
    name: 'label-width',
    declare: '标签的长度，例如 "50px"。作为 Form 直接子元素的 form-item 会继承该值。可以使用 auto。',
    type: 'string / number',
    default: "''"
  },
  {
    name: 'label-suffix',
    declare: '表单域标签的后缀',
    type: 'string',
    default: "''"
  },
  {
    name: 'hide-required-asterisk',
    declare: '是否隐藏必填字段标签旁边的红色星号。',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'require-asterisk-position',
    declare: '星号的位置。',
    type: 'enum',
    default: 'left',
    options: ['left', 'right']
  },
  {
    name: 'show-message',
    declare: '是否显示校验错误信息',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'inline-message',
    declare: '是否以行内形式展示校验信息',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'status-icon',
    declare: '是否在输入框中显示校验结果反馈图标',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'validate-on-rule-change',
    declare: '是否在 rules 属性改变后立即触发一次验证',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'size',
    declare: '用于控制该表单内组件的尺寸',
    type: 'enum',
    default: '—',
    options: ['large', 'default', 'small']
  },
  {
    name: 'disabled',
    declare: '是否禁用该表单内的所有组件。如果设置为 true，它将覆盖内部组件的 disabled 属性',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'scroll-to-error',
    declare: '当校验失败时，滚动到第一个错误表单项',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'scroll-into-view-options',
    declare: '当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置',
    type: 'object / boolean',
    default: '—'
  }
]

  </script>
  