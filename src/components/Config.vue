<template>
    <h1>{{ !isEvent ? "配置项" : '' }}</h1>
    <el-table v-if="!isEvent"  :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="declare" label="说明" width="260" />
      <el-table-column prop="type" label="类型" width="180" />
      <el-table-column prop="default" label="默认值" />
    </el-table>

    <h1>{{ configTtitle }}</h1>
    <el-table v-if="isEvent" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="declare" label="说明" width="300" />
      <el-table-column prop="type" label="类型" width="180" />
    </el-table>
  </template>
  
<script lang="ts" setup>
interface ConfigItem {
  name: string
  declare: string
  type: string 
  default?: string | number | boolean | object
}

const props = withDefaults(defineProps<{
  tableData: ConfigItem[],
  isEvent?: boolean,
  configTtitle?:string
}>(), {
  isEvent: false
})

const { isEvent, tableData } = props
</script>

<style lang="less" scoped>
  h1 {
    font-size: 18px;
    margin-bottom: 10px;
  }
</style>
  