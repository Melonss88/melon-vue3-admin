<template>
    <div class="excel-import-container">
      <el-card class="import-card">
        <!-- 导入区域 -->
        <div class="upload-area">
          <el-upload
            class="upload-demo"
            drag
            action=""
            :auto-upload="false"
            :show-file-list="false"
            :on-change="handleFileChange"
            accept=".xlsx, .xls"
          >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                只能上传 .xlsx 或 .xls 格式文件
              </div>
            </template>
          </el-upload>
        </div>
  
        <!-- 数据展示区域 -->
        <div class="data-display" v-if="tableData.length > 0">
          <el-table :data="tableData" border style="width: 100%" height="400">
            <el-table-column 
              v-for="(column, index) in tableColumns" 
              :key="index"
              :prop="column.prop" 
              :label="column.label"
              min-width="120"
            />
          </el-table>
        </div>
        <div class="empty-placeholder" v-else>
          <el-empty description="暂无数据" />
        </div>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
    import { ref } from 'vue';
    import * as XLSX from 'xlsx';
    import { UploadFilled } from '@element-plus/icons-vue';
    import { ElMessage } from "element-plus";
  
  // 表格数据
  const tableData = ref<any[]>([]);
  // 表格列
  const tableColumns = ref<any[]>([]);
  
  // 处理文件变化
  const handleFileChange = async (file: any) => {
    try {
      const data = await readExcel(file.raw);
      if (data && data.length > 0) {
        // 生成表头
        if (data.length > 0) {
          tableColumns.value = Object.keys(data[0]).map(key => ({
            prop: key,
            label: key
          }));
        }
        tableData.value = data;
      }
    } catch (error) {
      console.error('导入Excel失败:', error);
      ElMessage.error('导入Excel失败，请检查文件格式');
    }
  };
  
  // 读取Excel文件
  const readExcel = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          resolve(jsonData);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  };
  </script>
  
  <style scoped>
  .excel-import-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .import-card {
    min-height: 500px;
  }
  
  .upload-area {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px dashed #dcdfe6;
    border-radius: 6px;
    background-color: #f5f7fa;
    text-align: center;
  }
  
  .data-display {
    margin-top: 20px;
  }
  
  .empty-placeholder {
    margin-top: 50px;
  }
  
  :deep(.el-upload-dragger) {
    padding: 40px 20px;
  }
  
  :deep(.el-icon--upload) {
    font-size: 60px;
    color: #c0c4cc;
    margin-bottom: 16px;
  }
  
  :deep(.el-upload__text) {
    font-size: 16px;
    color: #606266;
    margin-bottom: 10px;
  }
  
  :deep(.el-upload__tip) {
    font-size: 14px;
    color: #909399;
  }
  </style>