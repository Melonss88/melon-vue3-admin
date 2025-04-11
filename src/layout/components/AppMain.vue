<template>
    <section class="app-main">
      <!-- 标签页导航 -->
      <TabsView />
      <!-- <Breadcrumb /> -->
      
      <!-- 路由内容 -->
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useCachedViewsStore } from '@/stores/cachedViews'
  import TabsView from '@/layout/components/tabsNav/TabsView.vue'

  const route = useRoute()
  const cachedStore = useCachedViewsStore()
  const { cachedViews } = storeToRefs(cachedStore) 
  </script>