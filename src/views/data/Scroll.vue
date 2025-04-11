<template>
    <div class="common-main">
        <el-card>
            <Title title="Infinite Scroll 滚动"/>

            <div class="infinite-list-wrapper" style="overflow: auto">
              <ul
                v-infinite-scroll="load"
                class="list"
                :infinite-scroll-disabled="disabled"
              >
                <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
              </ul>
              <p v-if="loading">Loading...</p>
              <p v-if="noMore">No more</p>
            </div>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Scroll'>
    import { computed, ref } from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}

const configData = [
  {
    name: 'v-infinite-scroll',
    declare: '滚动到底部时，加载更多数据',
    type: 'Function',
    default: '—'
  },
  {
    name: 'infinite-scroll-disabled',
    declare: '是否禁用',
    type: 'boolean',
    default: false
  },
  {
    name: 'infinite-scroll-delay',
    declare: '节流时延，单位为ms',
    type: 'number',
    default: 200
  },
  {
    name: 'infinite-scroll-distance',
    declare: '触发加载的距离阈值，单位为px',
    type: 'number',
    default: 0
  },
  {
    name: 'infinite-scroll-immediate',
    declare: '是否立即执行加载方法，以防初始状态下内容无法撑满容器',
    type: 'boolean',
    default: true
  }
];

  </script>

<style>
.infinite-list-wrapper {
  height: 300px;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
</style>
  