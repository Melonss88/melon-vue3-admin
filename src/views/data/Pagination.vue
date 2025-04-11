<template>
    <div class="common-main">
        <el-card>
            <Title title="Pagination 分页"/>

            <div class="flex items-center mb-4">
              <el-radio-group v-model="size" class="mr-4">
                <el-radio-button value="default">default</el-radio-button>
                <el-radio-button value="large">large</el-radio-button>

                <el-radio-button value="small">small</el-radio-button>
              </el-radio-group>
              <div>
                background:
                <el-switch v-model="background" class="ml-2" />
              </div>
              <div class="ml-4">
                disabled: <el-switch v-model="disabled" class="ml-2" />
              </div>
            </div>

            <hr class="my-4" />

            <div class="demo-pagination-block">
              <div class="demonstration">Total item count</div>
              <el-pagination
                v-model:current-page="currentPage1"
                :page-size="100"
                :size="size"
                :disabled="disabled"
                :background="background"
                layout="total, prev, pager, next"
                :total="1000"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
            <div class="demo-pagination-block">
              <div class="demonstration">Change page size</div>
              <el-pagination
                v-model:current-page="currentPage2"
                v-model:page-size="pageSize2"
                :page-sizes="[100, 200, 300, 400]"
                :size="size"
                :disabled="disabled"
                :background="background"
                layout="sizes, prev, pager, next"
                :total="1000"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
            <div class="demo-pagination-block">
              <div class="demonstration">Jump to</div>
              <el-pagination
                v-model:current-page="currentPage3"
                v-model:page-size="pageSize3"
                :size="size"
                :disabled="disabled"
                :background="background"
                layout="prev, pager, next, jumper"
                :total="1000"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
            <div class="demo-pagination-block">
              <div class="demonstration">All combined</div>
              <el-pagination
                v-model:current-page="currentPage4"
                v-model:page-size="pageSize4"
                :page-sizes="[100, 200, 300, 400]"
                :size="size"
                :disabled="disabled"
                :background="background"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
<script lang="ts" setup name="Pagination">
import { ref } from 'vue'
import type { ComponentSize } from 'element-plus'

const currentPage1 = ref(5)
const currentPage2 = ref(5)
const currentPage3 = ref(5)
const currentPage4 = ref(4)
const pageSize2 = ref(100)
const pageSize3 = ref(100)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const configData = [
  {
    name: 'size',
    declare: '分页大小',
    type: 'enum',
    options: ['default', 'small', 'large'],
    default: 'default',
    since: '2.7.6'
  },
  {
    name: 'background',
    declare: '是否为分页按钮添加背景色',
    type: 'boolean',
    default: false
  },
  {
    name: 'page-size / v-model:page-size',
    declare: '每页显示条目个数',
    type: 'number',
    default: '—'
  },
  {
    name: 'default-page-size',
    declare: '每页默认的条目个数，不设置时默认为10',
    type: 'number',
    default: '—'
  },
  {
    name: 'total',
    declare: '总条目数',
    type: 'number',
    default: '—'
  },
  {
    name: 'page-count',
    declare: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能',
    type: 'number',
    default: '—'
  },
  {
    name: 'pager-count',
    declare: '设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠',
    type: 'number',
    default: 7
  },
  {
    name: 'current-page / v-model:current-page',
    declare: '当前页数',
    type: 'number',
    default: '—'
  },
  {
    name: 'default-current-page',
    declare: '当前页数的默认初始值，不设置时默认为 1',
    type: 'number',
    default: '—'
  },
  {
    name: 'layout',
    declare: '组件布局，子组件名用逗号分隔',
    type: 'string',
    default: 'prev, pager, next, jumper, ->, total'
  },
  {
    name: 'page-sizes',
    declare: '每页显示个数选择器的选项设置',
    type: 'number[]',
    default: [10, 20, 30, 40, 50, 100]
  },
  {
    name: 'append-size-to',
    declare: '下拉框挂载到哪个 DOM 元素',
    type: 'string',
    default: '—',
    since: '2.8.4'
  },
  {
    name: 'popper-class',
    declare: '每页显示个数选择器的下拉框类名',
    type: 'string',
    default: ''
  },
  {
    name: 'prev-text',
    declare: '替代图标显示的上一页文字',
    type: 'string',
    default: ''
  },
  {
    name: 'prev-icon',
    declare: '上一页的图标，比 prev-text 优先级更高',
    type: 'string | Component',
    default: 'ArrowLeft'
  },
  {
    name: 'next-text',
    declare: '替代图标显示的下一页文字',
    type: 'string',
    default: ''
  },
  {
    name: 'next-icon',
    declare: '下一页的图标，比 next-text 优先级更低',
    type: 'string | Component',
    default: 'ArrowRight'
  },
  {
    name: 'disabled',
    declare: '是否禁用分页',
    type: 'boolean',
    default: false
  },
  {
    name: 'teleported',
    declare: '是否将下拉菜单 teleport 至 body',
    type: 'boolean',
    default: true,
    since: '2.3.13'
  },
  {
    name: 'hide-on-single-page',
    declare: '只有一页时是否隐藏',
    type: 'boolean',
    default: false
  },
  {
    name: 'small',
    declare: '是否使用小型分页样式（已废弃）',
    type: 'boolean',
    default: false,
    deprecated: true
  }
];
</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
  