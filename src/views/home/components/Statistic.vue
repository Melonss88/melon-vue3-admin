<template>
  <el-row :gutter="16">
    <el-col 
      v-for="(card, index) in statisticCards" 
      :key="index" 
      :span="6"
    >
      <div class="statistic-card">
        <el-statistic :value="index==0?outputValue:index==1?outputValue2:index==2?outputValue3:outputValue4">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              {{ card.title }}
            </div>
          </template>
        </el-statistic>
        <div class="statistic-footer">
          <div 
            v-for="(footer, i) in card.footers" 
            :key="i" 
            class="footer-item"
          >
            <span>{{ footer.label }}</span>
            <span :class="footer.trend > 0 ? 'green' : 'red'">
              {{ Math.abs(footer.trend) }}%
              <el-icon>
                <component :is="footer.trend > 0 ? CaretTop : CaretBottom" />
              </el-icon>
            </span>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
} from '@element-plus/icons-vue'

const statisticCards = [
  {
    title: '每日活跃用户',
    value: 100,
    footers: [
      { label: '昨日', trend: 24 }
    ]
  },
  {
    title: '每月活跃用户',
    value: 5000,
    footers: [
      { label: '月增长', trend: -12 }
    ]
  },
  {
    title: '今日交易额',
    value: 1500,
    footers: [
      { label: '昨日', trend: 16 },
    ]
  },
  {
    title: '分享量',
    value: 10,
    footers: [
      { label: '昨日', trend: 4 }
    ]
  }
]

const source = ref(0)
const source2 = ref(0)
const source3 = ref(0)
const source4 = ref(0)
const valArr = [statisticCards[0].value,statisticCards[1].value,statisticCards[2].value,statisticCards[3].value]

const outputValue = useTransition(source, {
  duration: valArr[0],
})
const outputValue2 = useTransition(source2, {
  duration: valArr[1],
})
const outputValue3 = useTransition(source3, {
  duration: valArr[2],
})
const outputValue4 = useTransition(source4, {
  duration: valArr[3],
})

source.value = valArr[0]
source2.value = valArr[1]
source3.value = valArr[2]
source4.value = valArr[3]

</script>

<style scoped lang="less">
.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 10px 20px ;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  color: var(--el-text-color-regular);
  margin-top: 5px;
}

.footer-item {
  display: flex;
  align-items: center;
}

.footer-item span:last-child {
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
}

.green {
  color: var(--el-color-success);
}
.red {
  color: var(--el-color-error);
}
</style>