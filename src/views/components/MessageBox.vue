<template>
    <div class="common-main">
        <el-card>
            <Title title="MessageBox 消息弹框"/>

            <el-button plain @click="open">Click to open the Message Box</el-button>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='MessageBox'>
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
    import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
  ElMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const configData = [
  {
    name: 'autofocus',
    declare: '打开 MessageBox 时是否自动获得焦点',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'title',
    declare: 'MessageBox 的标题',
    type: 'string',
    default: "''"
  },
  {
    name: 'message',
    declare: 'MessageBox 的正文内容',
    type: 'string / VNode / Function',
    default: '—'
  },
  {
    name: 'dangerouslyUseHTMLString',
    declare: '是否将 message 作为 HTML 片段处理',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'type',
    declare: '消息类型，用于图标显示',
    type: 'enum',
    default: "''",
    options: ['success', 'warning', 'info', 'error', '']
  },
  {
    name: 'icon',
    declare: '自定义图标组件，会覆盖 type 的类型',
    type: 'string / Component',
    default: "''"
  },
  {
    name: 'closeIcon',
    declare: '自定义关闭图标组件，默认是 Close',
    type: 'string / Component',
    default: "''"
  },
  {
    name: 'customClass',
    declare: 'MessageBox 的自定义类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'customStyle',
    declare: 'MessageBox 的自定义内联样式',
    type: 'CSSProperties',
    default: '{}'
  },
  {
    name: 'modalClass',
    declare: '遮罩的自定义类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'callback',
    declare: '若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
    type: 'Function',
    default: 'null'
  },
  {
    name: 'showClose',
    declare: 'MessageBox 是否显示右上角关闭按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'beforeClose',
    declare: 'messageBox 关闭前的回调，会暂停消息弹出框的关闭过程',
    type: 'Function',
    default: 'null'
  },
  {
    name: 'distinguishCancelAndClose',
    declare: '是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 Esc 键）进行区分',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'lockScroll',
    declare: '是否在 MessageBox 出现时将 body 滚动锁定',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'showCancelButton',
    declare: '是否显示取消按钮',
    type: 'boolean',
    default: 'false（以 confirm 和 prompt 方式调用时为 true）'
  },
  {
    name: 'showConfirmButton',
    declare: '是否显示确定按钮',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'cancelButtonText',
    declare: '取消按钮的文本内容',
    type: 'string',
    default: "'取消'"
  },
  {
    name: 'confirmButtonText',
    declare: '确定按钮的文本内容',
    type: 'string',
    default: "'确定'"
  },
  {
    name: 'cancelButtonLoadingIcon',
    declare: '取消按钮的加载图标内容',
    type: 'string / Component',
    default: "'Loading'"
  },
  {
    name: 'confirmButtonLoadingIcon',
    declare: '确认按钮的加载图标内容',
    type: 'string / Component',
    default: "'Loading'"
  },
  {
    name: 'cancelButtonClass',
    declare: '取消按钮的自定义类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'confirmButtonClass',
    declare: '确定按钮的自定义类名',
    type: 'string',
    default: "''"
  },
  {
    name: 'closeOnClickModal',
    declare: '是否可通过点击遮罩层关闭 MessageBox',
    type: 'boolean',
    default: 'true（以 alert 方式调用时为 false）'
  },
  {
    name: 'closeOnPressEscape',
    declare: '是否可通过按下 ESC 键关闭 MessageBox',
    type: 'boolean',
    default: 'true（以 alert 方式调用时为 false）'
  },
  {
    name: 'closeOnHashChange',
    declare: '是否在 hash 改变时关闭 MessageBox',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'showInput',
    declare: '是否显示输入框',
    type: 'boolean',
    default: 'false（以 prompt 方式调用时为 true）'
  },
  {
    name: 'inputPlaceholder',
    declare: '输入框占位文本',
    type: 'string',
    default: "''"
  },
  {
    name: 'inputType',
    declare: '输入框的类型',
    type: 'string',
    default: "'text'"
  },
  {
    name: 'inputValue',
    declare: '输入框的初始文本',
    type: 'string',
    default: "''"
  },
  {
    name: 'inputPattern',
    declare: '输入框的校验表达式',
    type: 'regexp',
    default: 'null'
  },
  {
    name: 'inputValidator',
    declare: '输入框的校验函数。应该返回一个 boolean 或者 string，如果返回的是一个 string 类型，那么该返回值会被赋值给 inputErrorMessage 用于向用户展示错误消息',
    type: 'Function',
    default: 'undefined'
  },
  {
    name: 'inputErrorMessage',
    declare: '校验未通过时的提示文本',
    type: 'string',
    default: "'输入的数据不合法!'"
  },
  {
    name: 'center',
    declare: '是否居中布局',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'draggable',
    declare: 'MessageBox 是否可拖放',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'overflow',
    declare: 'MessageBox 拖动范围可以超出可视区',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'roundButton',
    declare: '是否使用圆角按钮',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'buttonSize',
    declare: '自定义确认按钮及取消按钮的大小',
    type: 'string',
    default: "'default'",
    options: ['large', 'default', 'small']
  },
  {
    name: 'appendTo',
    declare: '设置组件的根元素',
    type: 'string / HTMLElement',
    default: '—'
  }
]

  </script>
  