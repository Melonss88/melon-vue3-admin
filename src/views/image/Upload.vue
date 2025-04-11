<template>
    <div class="common-main">
        <el-card>
            <Title title="Upload 上传"/>

            <el-upload
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
            >
              <el-icon class="el-icon--upload"><Plus /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload>
        </el-card>

        <el-card>
          <el-upload
            ref="upload"
            class="upload-demo"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            :limit="1"
            :on-exceed="handleExceed"
            :auto-upload="false"
          >
            <template #trigger>
              <el-button type="primary">select file</el-button>
            </template>
            <el-button class="ml-3" type="success" @click="submitUpload">
              upload to server
            </el-button>
            <template #tip>
              <div class="el-upload__tip text-red">
                limit 1 file, new file will cover the old file
              </div>
            </template>
          </el-upload>
        </el-card>

        <el-card>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
            <el-icon><Plus /></el-icon>

            <template #file="{ file }">
              <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <el-icon><Download /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>

          <el-dialog v-model="dialogVisible">
            <img :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Upload'>
    import { ref } from 'vue'
    import { Plus,Delete,Download, ZoomIn } from "@element-plus/icons-vue";
    import type { UploadInstance, UploadProps, UploadRawFile} from 'element-plus'
    import { genFileId,UploadFile } from 'element-plus/es/components/upload/src/upload'

    const upload = ref<UploadInstance>()

    const handleExceed: UploadProps['onExceed'] = (files) => {
      upload.value!.clearFiles()
      const file = files[0] as UploadRawFile
      file.uid = genFileId()
      upload.value!.handleStart(file)
    }

    const submitUpload = () => {
      upload.value!.submit()
    }

    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)
    const disabled = ref(false)

    const handleRemove = (file: UploadFile) => {
      console.log(file)
    }

    const handlePictureCardPreview = (file: UploadFile) => {
      dialogImageUrl.value = file.url!
      dialogVisible.value = true
    }

    const handleDownload = (file: UploadFile) => {
      console.log(file)
    }

const configData = [
  {
    name: 'action',
    declare: '请求 URL',
    type: 'string',
    default: "'#'",
    required: true
  },
  {
    name: 'headers',
    declare: '设置上传的请求头部',
    type: 'object',
    default: '—'
  },
  {
    name: 'method',
    declare: '设置上传请求方法',
    type: 'string',
    default: "'post'"
  },
  {
    name: 'multiple',
    declare: '是否支持多选文件',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'data',
    declare: '上传时附带的额外参数（从 v2.3.13 支持 Awaitable 数据，和 Function）',
    type: 'object / Function',
    default: '{}'
  },
  {
    name: 'name',
    declare: '上传的文件字段名',
    type: 'string',
    default: "'file'"
  },
  {
    name: 'with-credentials',
    declare: '支持发送 cookie 凭证信息',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'show-file-list',
    declare: '是否显示已上传文件列表',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'drag',
    declare: '是否启用拖拽上传',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'accept',
    declare: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）',
    type: 'string',
    default: "''"
  },
  {
    name: 'crossorigin',
    declare: '原生属性 crossorigin',
    type: 'enum',
    default: '—',
    options: ['anonymous', 'use-credentials']
  },
  {
    name: 'on-preview',
    declare: '点击文件列表中已上传的文件时的钩子',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-remove',
    declare: '文件列表移除文件时的钩子',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-success',
    declare: '文件上传成功时的钩子',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-error',
    declare: '文件上传失败时的钩子',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-progress',
    declare: '文件上传时的钩子',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-change',
    declare: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
    type: 'Function',
    default: '—'
  },
  {
    name: 'on-exceed',
    declare: '当超出限制时，执行的钩子函数',
    type: 'Function',
    default: '—'
  },
  {
    name: 'before-upload',
    declare: '上传文件之前的钩子，参数为上传的文件，若返回false或者返回 Promise 且被 reject，则停止上传',
    type: 'Function',
    default: '—'
  },
  {
    name: 'before-remove',
    declare: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除',
    type: 'Function',
    default: '—'
  },
  {
    name: 'file-list / v-model:file-list',
    declare: '默认上传文件',
    type: 'object',
    default: '[]'
  },
  {
    name: 'list-type',
    declare: '文件列表的类型',
    type: 'enum',
    default: "'text'",
    options: ['text', 'picture', 'picture-card']
  },
  {
    name: 'auto-upload',
    declare: '是否自动上传文件',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'http-request',
    declare: '覆盖默认的 Xhr 行为，允许自行实现上传文件的请求',
    type: 'Function',
    default: '参考ajaxUpload'
  },
  {
    name: 'disabled',
    declare: '是否禁用上传',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'limit',
    declare: '允许上传文件的最大数量',
    type: 'number',
    default: '—'
  }
]

  </script>

<style lang="less">
.el-dialog {
  img {
    width: 100%;
  }
}
</style>
  