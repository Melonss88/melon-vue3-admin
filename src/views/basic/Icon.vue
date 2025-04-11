<template>
    <div class="common-main">
        <el-card>
            <Title title="Icon图标"/>

            <h1>如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。</h1>
            <div>
                <el-icon :size="20" color="#409efc">
                <Edit />
                </el-icon>
            </div>
        </el-card>

        <el-card>
            <h1>直接使用 SVG 图标</h1>
            <pre>
                {{ rawDivText }}
            </pre>
            <div style="font-size: 20px">
                <Edit style="width: 1em; height: 1em; margin-right: 8px" />
                <Share style="width: 1em; height: 1em; margin-right: 8px" />
                <Delete style="width: 1em; height: 1em; margin-right: 8px" />
                <Search style="width: 1em; height: 1em; margin-right: 8px" />
            </div>
        </el-card>

        <el-card>
            <h1>图标库链接：</h1>
            <el-link type="primary" href="https://icones.js.org/collection/ep" target="_blank">点击获取</el-link>
        </el-card>
    </div>
</template>

<script lang="ts" setup name='Icon'>
import Title from '@/components/Title.vue'
import {
    Edit,Share,Delete,Search
} from "@element-plus/icons-vue";

const rawDivText = `
<div style="font-size: 20px">
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <Share style="width: 1em; height: 1em; margin-right: 8px" />
  <Delete style="width: 1em; height: 1em; margin-right: 8px" />
  <Search style="width: 1em; height: 1em; margin-right: 8px" />
</div>`;

</script>