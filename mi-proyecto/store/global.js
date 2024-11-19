import {defineStore, setActivePinia} from 'pinia';

export const useGlobalStore = defineStore('global', {
    state: () => ({
        activeUsername: ''
    }),
    actions: {
        setActiveUsername(username) {
                this.activeUsername = username;
            },

            logout(){
                this.activeUsername = '';
        }
    },
    getters: {
        getActiveUsername() {
            return this.activeUsername;
        },
        isUserLoggedIn(state) {
            return !!state.activeUsername;
        }
    }
});