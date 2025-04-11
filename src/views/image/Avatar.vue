<template>
    <div class="common-main">
        <el-card>
            <Title title="Avatar 头像"/>

            <div class="demo-type">
              <div>
                <el-avatar :icon="UserFilled" />
              </div>
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
              </div>
              <div>
                <el-avatar> user </el-avatar>
              </div>
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Avatar'>
import { UserFilled } from '@element-plus/icons-vue'
const configData = [
  {
    name: 'icon',
    declare: '设置 Avatar 的图标类型（具体参考 Icon 组件）',
    type: 'string | Component',
    default: '—',
    example: 'el-icon-user' // 示例值
  },
  {
    name: 'size',
    declare: 'Avatar 大小',
    type: 'number | enum',
    options: ['default', 'small', 'large'], // 枚举选项
    default: 'default',
    example: 40 // 数字示例
  },
  {
    name: 'shape',
    declare: 'Avatar 形状',
    type: 'enum',
    options: ['circle', 'square'], // 可选形状
    default: 'circle'
  },
  {
    name: 'src',
    declare: 'Avatar 图片的源地址',
    type: 'string',
    default: '—',
    example: 'https://example.com/avatar.png'
  },
  {
    name: 'src-set',
    declare: '图片 Avatar 的原生 srcset 属性',
    type: 'string',
    default: '—',
    example: 'avatar.png 1x, avatar@2x.png 2x'
  },
  {
    name: 'alt',
    declare: '图片 Avatar 的原生 alt 属性',
    type: 'string',
    default: '—',
    example: '用户头像'
  },
  {
    name: 'fit',
    declare: '当展示类型为图片的时候，设置图片如何适应容器',
    type: 'enum',
    options: ['fill', 'contain', 'cover', 'none', 'scale-down'], // CSS object-fit 值
    default: 'cover'
  }
];
</script>

<style scoped>
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>