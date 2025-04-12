<template>
    <div class="common-main">
        <div>
          <el-button 
            type="primary" 
            @click="exportToExcel"
            :icon="Download"
          >
            导出Excel
          </el-button>

          <el-table 
            :data="tableData" 
            border 
            style="width: 100%; margin-top: 20px;"
            id="exportTable"
          >
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="title" label="标题" />
            <el-table-column prop="address" label="地址" width="200" />
            <el-table-column prop="status" label="状态" width="120" />
            <el-table-column prop="priority" label="优先级" width="120" />
          </el-table>
        </div>
    </div>
</template>
  
  <script lang="ts" setup name='ExcelExport'>
import { ref } from 'vue';
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
import { Download } from '@element-plus/icons-vue';

const exportToExcel = () => {
  // 创建工作簿
  const wb = XLSX.utils.book_new();
  
  // 准备数据
  const exportData = [
    ['ID', '日期', '姓名', '标题', '地址', '状态', '优先级'], // 表头
    ...tableData.value.map(item => [
      item.id,
      item.date,
      item.name,
      item.title,
      item.address,
      item.status,
      item.priority
    ])
  ];
  
  // 创建工作表
  const ws = XLSX.utils.aoa_to_sheet(exportData);
  
  // 将工作表添加到工作簿
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
  // 生成Excel文件并下载
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  FileSaver.saveAs(blob, '表格数据.xlsx');
};


const tableData = ref([
  {
    id: 1,
    date: '2025-01-12 12:00:00',
    name: 'Kele-Bingtang-1',
    title: 'While There Is Life There Is Hope',
    address: 'Los Angeles No 100',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 2,
    date: '2025-01-14 12:00:00',
    name: 'Kele-Bingtang-2',
    title: 'While There Is Life There Is Hope',
    address: 'Los Angeles No 200',
    status: 'Disable',
    priority: '★★★★'
  },
  {
    id: 3,
    date: '2025-01-11 12:00:00',
    name: 'Kele-Bingtang-3',
    title: 'While There Is Life There Is Hope',
    address: 'Los Angeles No 300',
    status: 'Disable',
    priority: '★★★★'
  },
  {
    id: 4,
    date: '2025-01-15 09:30:00',
    name: 'Kele-Bingtang-4',
    title: 'The Secret of Success',
    address: 'New York No 400',
    status: 'Enable',
    priority: '★★★'
  },
  {
    id: 5,
    date: '2025-01-16 14:15:00',
    name: 'Kele-Bingtang-5',
    title: 'Never Give Up',
    address: 'Chicago No 500',
    status: 'Enable',
    priority: '★★★★★'
  },
  {
    id: 6,
    date: '2025-01-17 11:20:00',
    name: 'Kele-Bingtang-6',
    title: 'Dream Big',
    address: 'Houston No 600',
    status: 'Disable',
    priority: '★★'
  },
  {
    id: 7,
    date: '2025-01-18 16:45:00',
    name: 'Kele-Bingtang-7',
    title: 'The Power of Now',
    address: 'Phoenix No 700',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 8,
    date: '2025-01-19 10:10:00',
    name: 'Kele-Bingtang-8',
    title: 'Think and Grow Rich',
    address: 'Philadelphia No 800',
    status: 'Disable',
    priority: '★★★'
  },
  {
    id: 9,
    date: '2025-01-20 13:25:00',
    name: 'Kele-Bingtang-9',
    title: 'The 7 Habits of Highly Effective People',
    address: 'San Antonio No 900',
    status: 'Enable',
    priority: '★★★★★'
  },
  {
    id: 10,
    date: '2025-01-21 15:30:00',
    name: 'Kele-Bingtang-10',
    title: 'How to Win Friends and Influence People',
    address: 'San Diego No 1000',
    status: 'Disable',
    priority: '★★★'
  },
  {
    id: 11,
    date: '2025-01-22 08:45:00',
    name: 'Kele-Bingtang-11',
    title: 'The Alchemist',
    address: 'Dallas No 1100',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 12,
    date: '2025-01-23 12:00:00',
    name: 'Kele-Bingtang-12',
    title: 'Rich Dad Poor Dad',
    address: 'San Jose No 1200',
    status: 'Enable',
    priority: '★★★'
  },
  {
    id: 13,
    date: '2025-01-24 09:15:00',
    name: 'Kele-Bingtang-13',
    title: 'The 4-Hour Workweek',
    address: 'Austin No 1300',
    status: 'Disable',
    priority: '★★★★'
  },
  {
    id: 14,
    date: '2025-01-25 14:30:00',
    name: 'Kele-Bingtang-14',
    title: 'The Subtle Art of Not Giving a F*ck',
    address: 'Jacksonville No 1400',
    status: 'Enable',
    priority: '★★'
  },
  {
    id: 15,
    date: '2025-01-26 11:45:00',
    name: 'Kele-Bingtang-15',
    title: 'Atomic Habits',
    address: 'Fort Worth No 1500',
    status: 'Enable',
    priority: '★★★★★'
  },
  {
    id: 16,
    date: '2025-01-27 16:00:00',
    name: 'Kele-Bingtang-16',
    title: 'Deep Work',
    address: 'Columbus No 1600',
    status: 'Disable',
    priority: '★★★'
  },
  {
    id: 17,
    date: '2025-01-28 10:15:00',
    name: 'Kele-Bingtang-17',
    title: 'The Psychology of Money',
    address: 'Charlotte No 1700',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 18,
    date: '2025-01-29 13:30:00',
    name: 'Kele-Bingtang-18',
    title: 'Start with Why',
    address: 'San Francisco No 1800',
    status: 'Enable',
    priority: '★★★'
  },
  {
    id: 19,
    date: '2025-01-30 08:45:00',
    name: 'Kele-Bingtang-19',
    title: 'The Compound Effect',
    address: 'Indianapolis No 1900',
    status: 'Disable',
    priority: '★★★★'
  },
  {
    id: 20,
    date: '2025-01-31 12:00:00',
    name: 'Kele-Bingtang-20',
    title: 'The Millionaire Fastlane',
    address: 'Seattle No 2000',
    status: 'Enable',
    priority: '★★★'
  },
  {
    id: 21,
    date: '2025-02-01 15:15:00',
    name: 'Kele-Bingtang-21',
    title: 'The One Thing',
    address: 'Denver No 2100',
    status: 'Enable',
    priority: '★★★★★'
  },
  {
    id: 22,
    date: '2025-02-02 09:30:00',
    name: 'Kele-Bingtang-22',
    title: 'Extreme Ownership',
    address: 'Washington No 2200',
    status: 'Disable',
    priority: '★★'
  },
  {
    id: 23,
    date: '2025-02-03 14:45:00',
    name: 'Kele-Bingtang-23',
    title: 'The 10X Rule',
    address: 'Boston No 2300',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 24,
    date: '2025-02-04 11:00:00',
    name: 'Kele-Bingtang-24',
    title: 'The Power of Habit',
    address: 'El Paso No 2400',
    status: 'Enable',
    priority: '★★★'
  },
  {
    id: 25,
    date: '2025-02-05 16:15:00',
    name: 'Kele-Bingtang-25',
    title: 'Mindset: The New Psychology of Success',
    address: 'Nashville No 2500',
    status: 'Disable',
    priority: '★★★★'
  },
  {
    id: 26,
    date: '2025-02-06 10:30:00',
    name: 'Kele-Bingtang-26',
    title: 'The 5 Second Rule',
    address: 'Detroit No 2600',
    status: 'Enable',
    priority: '★★'
  },
  {
    id: 27,
    date: '2025-02-07 13:45:00',
    name: 'Kele-Bingtang-27',
    title: 'The Art of War',
    address: 'Oklahoma City No 2700',
    status: 'Enable',
    priority: '★★★★★'
  },
  {
    id: 28,
    date: '2025-02-08 09:00:00',
    name: 'Kele-Bingtang-28',
    title: 'The Lean Startup',
    address: 'Portland No 2800',
    status: 'Disable',
    priority: '★★★'
  },
  {
    id: 29,
    date: '2025-02-09 14:15:00',
    name: 'Kele-Bingtang-29',
    title: 'Zero to One',
    address: 'Las Vegas No 2900',
    status: 'Enable',
    priority: '★★★★'
  },
  {
    id: 30,
    date: '2025-02-10 11:30:00',
    name: 'Kele-Bingtang-30',
    title: 'The Hard Thing About Hard Things',
    address: 'Memphis No 3000',
    status: 'Enable',
    priority: '★★★'
  }
]);
  </script>
  