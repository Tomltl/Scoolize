<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
        };
    },
    methods: {
        register() {

            console.log(this.terms)

            if ( this.terms = true ) {

                const data = {
                username: this.username,
                email: this.email,
                password: this.password,
                };
                
                axios.post('http://localhost:1337/api/auth/local/register', data)
                .then(response => {
                localStorage.setItem("token", response.data.jwt )
                // console.log(localStorage.getItem("token"))

                this.$router.push("/")

                // handle success
                })
                .catch(error => {
                console.log(error);
                // handle error
                });

            } else if ( this.terms = false ) {

                console.log("uuuuuu")

            } else if ( this.terms = undefined ) {
                
                console.log("uuuuuu")

            }

                            document.getElementById("error").innerHTML=""
                if(document.getElementById("username").value.length == 0){
                    document.getElementById("error").innerHTML += "First name must not be empty<br>";
                    }
                var regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{1,20})+$/;
                var email = document.getElementById("email").value;
                if (email.match(regex)) {
                } else {
                    document.getElementById("error").innerHTML += "Email is badly formatted<br>";
                }

                var regex2 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/
                var password = document.getElementById("password").value
                if(!password.match(regex2)){
                    document.getElementById("error").innerHTML += "Password must be at least 8 characters long and contain at least a letter and a number";
                }

        },
    },
};
</script>

<template>
<div class="fint-display">
    <Navbar />

    <section>
    <div class="flex flex-col items-center px-6 md:pt-36 pt-36 mx-auto">
        
        <div class="w-full bg-white border border-blue-300 rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create an account
                </h1>

                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <input v-model="username" type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Username" required="">
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input v-model="email" type="text" name="email" id="email" placeholder="name@company.com" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                    </div>
                    <div> 
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input v-model="terms" id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=''>
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                        </div>
                    </div>
                    <button class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center " @click="register" >Create an account</button>
                    <p id="error" class="text-red-600"></p>
                    <p class="text-sm font-light text-gray-500 ">
                        Already have an account? <a href="login" class="font-medium text-primary-600 hover:underline">Login here</a>
                    </p>
                </form>
                
            </div>
        </div>
    </div>
    </section>
</div>
</template>

<style src="../index.css"></style>