import { defineStore } from 'pinia';
export const useCachedViewsStore = defineStore('cachedViews', {
    state: () => ({
        cachedViews: []
    }),
    actions: {
        addView(viewName) {
            if (!this.cachedViews.includes(viewName)) {
                this.cachedViews.push(viewName);
            }
        },
        removeView(viewName) {
            const index = this.cachedViews.indexOf(viewName);
            if (index > -1) {
                this.cachedViews.splice(index, 1);
            }
        },
        clearViews() {
            this.cachedViews = [];
        }
    }
});
