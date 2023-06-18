import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


    


export const useLoginStore = defineStore('login', () => {
  const account = ref('')
  const pwd = ref('')
  const hint=ref('')

  return { account,pwd,hint }
})
