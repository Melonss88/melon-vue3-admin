<template>
    <div class="common-main">
        <el-card>
            <Title title="抽屉"/>

        <div>
            <el-radio-group v-model="direction">
                <el-radio value="ltr">left to right</el-radio>
                <el-radio value="rtl">right to left</el-radio>
                <el-radio value="ttb">top to bottom</el-radio>
                <el-radio value="btt">bottom to top</el-radio>
            </el-radio-group>

            <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
                open
            </el-button>
            <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
                with footer
            </el-button>

            <el-drawer
                v-model="drawer"
                title="I am the title"
                :direction="direction"
                :before-close="handleClose"
            >
                <span>Hi, there!</span>
            </el-drawer>
            <el-drawer v-model="drawer2" :direction="direction">
                <template #header>
                <h4>set title by slot</h4>
                </template>
                <template #default>
                <div>
                    <el-radio v-model="radio1" value="Option 1" size="large">
                    Option 1
                    </el-radio>
                    <el-radio v-model="radio1" value="Option 2" size="large">
                    Option 2
                    </el-radio>
                </div>
                </template>
                <template #footer>
                <div style="flex: auto">
                    <el-button @click="cancelClick">cancel</el-button>
                    <el-button type="primary" @click="confirmClick">confirm</el-button>
                </div>
                </template>
            </el-drawer>
            </div>
            </el-card>
        </div>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
</template>

<script lang="ts" setup name='DrawerDemo'>
import Title from '@/components/Title.vue'
import Config from '@/components/Config.vue'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import type { DrawerProps } from 'element-plus'
const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<DrawerProps['direction']>('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}

const configData = [
  {
    name: 'model-value / v-model',
    declare: '是否显示 Drawer',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'append-to-body',
    declare: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'append-to',
    declare: '挂载到哪个 DOM 元素 将覆盖 append-to-body',
    type: 'string',
    default: 'body'
  },
  {
    name: 'lock-scroll',
    declare: '是否在 Drawer 出现时将 body 滚动锁定',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'before-close',
    declare: '关闭前的回调，会暂停 Drawer 的关闭',
    type: 'Function',
    default: '—'
  },
  {
    name: 'close-on-click-modal',
    declare: '是否可以通过点击 modal 关闭 Drawer',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'close-on-press-escape',
    declare: '是否可以通过按下 ESC 关闭 Drawer',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'open-delay',
    declare: 'Drawer 打开的延时时间，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'close-delay',
    declare: 'Drawer 关闭的延时时间，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'destroy-on-close',
    declare: '控制是否在关闭 Drawer 之后将子元素全部销毁',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'modal',
    declare: '是否需要遮罩层',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'direction',
    declare: 'Drawer 打开的方向',
    type: 'enum',
    default: 'rtl',
    options: ['rtl', 'ltr', 'ttb', 'btt'] // 添加可能的枚举值
  },
  {
    name: 'show-close',
    declare: '是否显示关闭按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'size',
    declare: 'Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 \'x%\', 否则便会以 number 类型解释',
    type: 'number / string',
    default: '30%'
  },
  {
    name: 'title',
    declare: 'Drawer 的标题，也可通过具名 slot 传入',
    type: 'string',
    default: '—'
  },
  {
    name: 'with-header',
    declare: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'modal-class',
    declare: '遮罩层的自定义类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'header-class',
    declare: 'header 部分的自定义 class 名',
    type: 'string',
    default: '—'
  },
  {
    name: 'body-class',
    declare: 'body 部分的自定义 class 名',
    type: 'string',
    default: '—'
  },
  {
    name: 'footer-class',
    declare: 'footer 部分的自定义 class 名',
    type: 'string',
    default: '—'
  },
  {
    name: 'z-index',
    declare: '设置 z-index',
    type: 'number',
    default: '—'
  },
  {
    name: 'header-aria-level',
    declare: 'header 的 aria-level 属性',
    type: 'string',
    default: '2'
  },
  {
    name: 'custom-class',
    declare: 'Drawer 的自定义类名',
    type: 'string',
    default: '—'
  }
]
</script>