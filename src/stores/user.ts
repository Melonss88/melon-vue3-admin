import { defineStore } from 'pinia'

interface UserInfo {
  username: string
  roles: string[]
  avatar?: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    userInfo: null as UserInfo | null
  }),
  actions: {
    async login(username: string, password: string, captcha: string): Promise<boolean> {
      try {
        const res = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              token: 'mock-token-' + Date.now(),
              userInfo: {
                username,
                roles: ['admin']
              }
            })
          }, 500)
        })
        
        this.token = res?.token
        this.userInfo = res?.userInfo
        localStorage.setItem('token', this.token)
        return true
      } catch (error) {
        this.logout()
        throw error
      }
    },
    logout() {
        console.log('这里走了吗')
      this.token = ''
      this.userInfo = null
      localStorage.removeItem('token')
    }
  }
})