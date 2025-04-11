<template>
    <div>
      <h1 class="common-title">{{ title }}</h1>
      <el-divider />
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    }
  })
  </script>
