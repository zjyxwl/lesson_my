import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'mhy',
        isAdmin: true
    })
})