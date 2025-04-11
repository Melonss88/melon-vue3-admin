import { defineStore } from 'pinia'

export const useCachedViewsStore = defineStore('cachedViews', {
  state: () => ({
    cachedViews: [] as string[] 
  }),
  actions: {
    addView(viewName: string) {
      if (!this.cachedViews.includes(viewName)) {
        this.cachedViews.push(viewName)
      }
    },
    removeView(viewName: string) {
      const index = this.cachedViews.indexOf(viewName)
      if (index > -1) {
        this.cachedViews.splice(index, 1)
      }
    },
    clearViews() {
      this.cachedViews = []
    }
  }
})