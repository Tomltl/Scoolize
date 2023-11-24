<template>
    <div class="font-display">
      <link href="https://fonts.cdnfonts.com/css/tt-commons" rel="stylesheet">
      <Navbar />
      <section>
        <div class="flex flex-col items-center px-6 md:pt-48 pt-48 mx-auto">
          <div class="w-full bg-white border border-blue-300 rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login Here
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="identifier" class="block mb-2 text-sm font-medium text-gray-900">Username or email</label>
                  <input v-model="user.identifier" type="text" name="identifier" id="identifier" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Username or email" required="">
                </div>
                <div> 
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                  <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                </div>
                <button @click="tryLogin" type="button" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                <p id="error" class="text-red-600"></p>
                <p class="text-sm font-light text-gray-500">
                  Don't have an account? <router-link to="/register" class="font-medium text-primary-600 hover:underline ">Register here</router-link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue'; // Assurez-vous que le chemin est correct
  
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        user: {
          identifier: '',
          password: '',
        },
      };
    },
    methods: {
      async tryLogin() {
        axios.post('http://localhost:1337/api/auth/local', this.user)
          .then(response => {
            // Stockez le token de manière sécurisée (par exemple, dans un cookie)
            document.cookie = `token=${response.data.jwt}; path=/; secure; HttpOnly`;
            console.log(document.cookie)
  
            // Redirigez ou effectuez d'autres actions après la connexion réussie
            this.$router.push("/");
          })
          .catch(error => {
            console.log(error);
            document.getElementById('error').innerHTML = "Wrong Email or Password";
          });
      },
    },
  };
  </script>
  
  <style>
    /* Ajoutez vos styles CSS ici */
  </style>
  