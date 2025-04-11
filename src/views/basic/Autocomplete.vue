<template>
    <div class="common-main">
        <el-card>
            <Title title="自动补全输入框"/>

                <div class="common-main">
                    <div>
                        <div class="flex gap-4">
                            <div>
                                <div class="sub-title my-2 text-sm text-gray-600">
                                    list suggestions when activated
                                </div>
                                <el-autocomplete
                                v-model="state1"
                                :fetch-suggestions="querySearch"
                                clearable
                                class="inline-input w-50"
                                placeholder="Please Input"
                                @select="handleSelect"
                                />
                            </div>
                        <div>
                        <div class="sub-title my-2 text-sm text-gray-600">
                            list suggestions on input
                        </div>
                        <el-autocomplete
                            v-model="state2"
                            :fetch-suggestions="querySearch"
                            :trigger-on-focus="false"
                            clearable
                            class="inline-input w-50"
                            placeholder="Please Input"
                            @select="handleSelect"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-card>
            <Config :tableData="configData"/>
        </el-card>
    </div>
</template>
  
  <script lang="ts" setup name='Autocomplete'>
    import { onMounted, ref } from 'vue'
    import Title from '@/components/Title.vue'
    import Config from '@/components/Config.vue'
  
  interface RestaurantItem {
    value: string
    link: string
  }
  
  const state1 = ref('')
  const state2 = ref('')
  
  const restaurants = ref<RestaurantItem[]>([])
  const querySearch = (queryString: string, cb: any) => {
    const results = queryString
      ? restaurants.value.filter(createFilter(queryString))
      : restaurants.value
    // call callback function to return suggestions
    cb(results)
  }
  const createFilter = (queryString: string) => {
    return (restaurant: RestaurantItem) => {
      return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      )
    }
  }
  const loadAll = () => {
    return [
      { value: 'vue', link: 'https://github.com/vuejs/vue' },
      { value: 'element', link: 'https://github.com/ElemeFE/element' },
      { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
      { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
      { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
      { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
      { value: 'babel', link: 'https://github.com/babel/babel' },
    ]
  }
  
  const handleSelect = (item: Record<string, any>) => {
    console.log(item)
  }
  
  onMounted(() => {
    restaurants.value = loadAll()
  })

  const configData = [
  {
    name: 'model-value / v-model',
    declare: '选中项绑定值',
    type: 'string',
    default: '—'
  },
  {
    name: 'placeholder',
    declare: '占位文本',
    type: 'string',
    default: '—'
  },
  {
    name: 'clearable',
    declare: '是否可清空',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'disabled',
    declare: '自动补全组件是否被禁用',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'value-key',
    declare: '输入建议对象中用于显示的键名',
    type: 'string',
    default: 'value'
  },
  {
    name: 'debounce',
    declare: '获取输入建议的防抖延时，单位为毫秒',
    type: 'number',
    default: '300'
  },
  {
    name: 'placement',
    declare: '菜单弹出位置',
    type: 'enum',
    default: 'bottom-start',
    options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end']
  },
  {
    name: 'fetch-suggestions',
    declare: '获取输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
    type: 'Function',
    default: '—'
  },
  {
    name: 'trigger-on-focus',
    declare: 'whether show suggestions when input focus',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'select-when-unmatched',
    declare: '在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'name',
    declare: '等价于原生 input name 属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'aria-label',
    declare: '原生 aria-label属性',
    type: 'string',
    default: '—'
  },
  {
    name: 'hide-loading',
    declare: '是否隐藏远程加载时的加载图标',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'popper-class',
    declare: '下拉列表的类名',
    type: 'string',
    default: '—'
  },
  {
    name: 'teleported',
    declare: '是否将下拉列表元素插入 append-to 指向的元素下',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'highlight-first-item',
    declare: '是否默认高亮远程搜索结果的第一项',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'fit-input-width',
    declare: '下拉框的宽度是否与输入框相同',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'popper-append-to-body',
    declare: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    default: 'false',
    deprecated: true
  }
]
  </script>
  