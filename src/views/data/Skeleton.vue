<template>
    <div class="common-main">
        <el-card>
            <Title title="Skeleton 骨架屏"/>

            <el-skeleton :rows="5" animated />
        </el-card>

        <el-card>
          <el-space style="width: 100%" fill>
            <div>
              <el-button @click="setLoading">Click me to reload</el-button>
            </div>
            <el-skeleton
              style="display: flex; gap: 8px"
              :loading="loading"
              animated
              :count="3"
            >
              <template #template>
                <div style="flex: 1">
                  <el-skeleton-item variant="image" style="height: 240px" />
                  <div style="padding: 14px">
                    <el-skeleton-item variant="h3" style="width: 50%" />
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        justify-items: space-between;
                        margin-top: 16px;
                        height: 16px;
                      "
                    >
                      <el-skeleton-item variant="text" style="margin-right: 16px" />
                      <el-skeleton-item variant="text" style="width: 30%" />
                    </div>
                  </div>
                </div>
              </template>
              <template #default>
                <el-card
                  v-for="item in lists"
                  :key="item.name"
                  :body-style="{ padding: '0px', marginBottom: '1px' }"
                >
                  <img
                    :src="item.imgUrl"
                    class="image multi-content"
                    style="max-width: 100%"
                  />
                  <div style="padding: 14px">
                    <span>{{ item.name }}</span>
                    <div class="bottom card-header">
                      <div class="time">{{ currentDate }}</div>
                      <el-button text class="button">Operation button</el-button>
                    </div>
                  </div>
                </el-card>
              </template>
            </el-skeleton>
          </el-space>
        </el-card>

        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Skeleton'>
import { onMounted, ref } from 'vue'

interface ListItem {
  imgUrl: string
  name: string
}

const loading = ref(true)
const lists = ref<ListItem[]>([])
const currentDate = new Date().toDateString()

const setLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

onMounted(() => {
  loading.value = false
  lists.value = [
    {
      imgUrl:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      name: 'Deer',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
      name: 'Horse',
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
      name: 'Mountain Lion',
    },
  ]
})

const configData = [
  {
    name: 'animated',
    declare: '是否使用动画',
    type: 'boolean',
    default: false
  },
  {
    name: 'count',
    declare: '渲染多少个 template（建议使用尽可能小的数字）',
    type: 'number',
    default: 1
  },
  {
    name: 'loading',
    declare: '是否显示加载结束后的 DOM 结构',
    type: 'boolean',
    default: false
  },
  {
    name: 'rows',
    declare: '骨架屏段落数量',
    type: 'number',
    default: 3
  },
  {
    name: 'throttle',
    declare: '渲染延迟（毫秒）。数字代表延迟显示，也可设置为对象控制延迟行为，例如 { leading: 500, trailing: 500 }。需要控制初始加载值时可以设置 { initVal: true }',
    type: 'number | object',
    default: 0
  }
];

  </script>
  