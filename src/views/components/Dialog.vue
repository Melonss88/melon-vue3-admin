<template>
    <div class="common-main">
        <el-card>
            <Title title="对话框"/>

            <h1>基础用法</h1>
            <el-button plain @click="dialogVisible = true">
                Click to open the Dialog
            </el-button>

            <el-dialog
                v-model="dialogVisible"
                title="Tips"
                width="500"
                :before-close="handleClose"
            >
                <span>This is a message</span>
                <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                    Confirm
                    </el-button>
                </div>
                </template>
            </el-dialog>
        </el-card>

        <el-card>
            <h1>自定义内容</h1>
            <div>
                <el-button plain @click="dialogTableVisible = true">
                    Open a Table nested Dialog
                </el-button>

                <el-button plain @click="dialogFormVisible = true">
                    Open a Form nested Dialog
                </el-button>

                <el-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
                    <el-table :data="gridData">
                    <el-table-column property="date" label="Date" width="150" />
                    <el-table-column property="name" label="Name" width="200" />
                    <el-table-column property="address" label="Address" />
                    </el-table>
                </el-dialog>

                <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
                    <el-form :model="form">
                    <el-form-item label="Promotion name" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="Zones" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                        </el-select>
                    </el-form-item>
                    </el-form>
                    <template #footer>
                    <div class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">
                        Confirm
                        </el-button>
                    </div>
                    </template>
                </el-dialog>
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>

<script lang="ts" setup name='Dialog'>
import Title from '@/components/Title.vue'
import Config from '@/components/Config.vue'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

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

const gridData = [
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
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]

const configData = [
  {
    name: 'model-value / v-model',
    declare: '是否显示 Dialog',
    type: 'boolean',
    default: '—'
  },
  {
    name: 'title',
    declare: 'Dialog 对话框 Dialog 的标题，也可通过具名 slot 传入',
    type: 'string',
    default: "''"
  },
  {
    name: 'width',
    declare: '对话框的宽度，默认值为 50%',
    type: 'string / number',
    default: "''"
  },
  {
    name: 'fullscreen',
    declare: '是否为全屏 Dialog',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'top',
    declare: 'dialog CSS 中的 margin-top 值，默认为 15vh',
    type: 'string',
    default: "''"
  },
  {
    name: 'modal',
    declare: '是否需要遮罩层',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'modal-class',
    declare: '遮罩的自定义类名',
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
    name: 'append-to-body',
    declare: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'append-to',
    declare: 'Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body',
    type: 'string / HTMLElement',
    default: 'body'
  },
  {
    name: 'lock-scroll',
    declare: '是否在 Dialog 出现时将 body 滚动锁定',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'open-delay',
    declare: 'dialog 打开的延时时间，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'close-delay',
    declare: 'dialog 关闭的延时时间，单位毫秒',
    type: 'number',
    default: '0'
  },
  {
    name: 'close-on-click-modal',
    declare: '是否可以通过点击 modal 关闭 Dialog',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'close-on-press-escape',
    declare: '是否可以通过按下 ESC 关闭 Dialog',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'show-close',
    declare: '是否显示关闭按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'before-close',
    declare: '关闭前的回调，会暂停 Dialog 的关闭。回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候。',
    type: 'Function',
    default: '—'
  },
  {
    name: 'draggable',
    declare: '为 Dialog 启用可拖拽功能',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'overflow',
    declare: '拖动范围可以超出可视区',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'center',
    declare: '是否让 Dialog 的 header 和 footer 部分居中排列',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'align-center',
    declare: '是否水平垂直对齐对话框',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'destroy-on-close',
    declare: '当关闭 Dialog 时，销毁其中的元素',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'close-icon',
    declare: '自定义关闭图标，默认 Close',
    type: 'string / Component',
    default: '—'
  },
  {
    name: 'z-index',
    declare: '和原生的 CSS 的 z-index 相同，改变 z 轴的顺序',
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
    declare: 'Dialog 的自定义类名',
    type: 'string',
    default: "''"
  }
]
</script>