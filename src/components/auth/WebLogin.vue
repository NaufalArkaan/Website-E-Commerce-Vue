<template>
    <WebHeadear/>
    <div class="container-fluid py-5" style="background-color: #f5f5f5">
        <div style="background-color: #ffffff; width: 400px min-height: 100vh;" class="p-5 m-auto login-form">
            <div class="text-center">
                <img src="../../assets/Logo Horizontal.png" alt="Logo" />
                <h2 class="mt-4">Login To Vintage</h2>
                <p>Welcome back! Please enter your details.</p>
            </div>
            <form @submit.prevent="login">
                <div class="my-4">
                    <base-input type="text" identity="email" placeholder="Your username" label="Email"
                        v-model="loginData.email" style="text-align: left;">
                    </base-input>
                </div>
                <div class="my-4">
                    <base-input type="password" identity="password" placeholder="Your password" label="Password"
                        v-model="loginData.password" style="text-align: left;">
                    </base-input>
                </div>
        <p v-for="newproduct in newLogin">
          <router-link :to="'/home/' + newproduct.params">
            <span class="text-here"><span style="text-decoration: none; color: #009499;"><base-button class="login w-100 my-3" style="background-color: rgb(4, 133, 122);"> Login </base-button></span></span>
          </router-link>
        </p>
            </form>
            <div class="text-center mt-4">
                <p class="fw-semibold">
                    Don’t have an account?<span style="color: #4c4ddc">
                        <a to="/signup" class="text-decoration-none">
                            <router-link to="/signup">Signup</router-link></a></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import WebHeadear from '../header/WebHeadear.vue';

const loginData = reactive({
    email: "",
    password: "",
    isLogin: true
})

const store = useStore()
const router = useRouter()
const login = async () => {
    await store.dispatch("auth/getLoginData", loginData);
    router.push("/")
}

</script>

<script>
 export default {
    data(){
        return {
            newLogin: [
            { params: 'new-login', name: 'New Login' }
            ]
        }
    }
 }
</script>