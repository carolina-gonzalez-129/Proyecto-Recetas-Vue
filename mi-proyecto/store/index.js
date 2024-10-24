import {defineStore} from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth',{
    state: ()=>({
  user:null,
        token:null,
    })
, getters:{
        isAdmin:(state)=> state.user?.role==='admin'

    }
,
actions:{
        async login(email,password){
            try {
              const res = await axios.get('https://670ed6f63e7151861655ee25.mockapi.io/uwu/users')
                const user = res.data().find(user=>user.email===email && user.password===password)
                if(!user){
                    throw new Error('Credenciales incorrectas')
                }
                this.user = user;
                localStorage.setItem('user', JSON.stringify(user))

            }catch (e) {
                console.error(e)
            }
        }

}
});