<template>
      <Navbar />
      <section>
        <div class="flex flex-col items-center mx-auto mt-32">
          <div class="bg-white rounded-xl shadow-lg dark:border md:mt-0 w-3/6 xl:p-0 h-[500px] lg:w-11/12 lg:mx-10 text-center" id="login">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center mt-12">
              <form class="space-y-4 md:space-y-6 w-96 text-center" action="#">
                <router-link to="/loginproffesseur">
                <p class="flex justify-center font-medium"><img src="../assets/gradu.svg" alt="" class="mr-2">Etablissement</p>
                </router-link>
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Connexion
                </h1>
                <div>
                  <input v-model="user.identifier" type="text" name="identifier" id="identifier" class="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5 mx-auto" placeholder="N° de dossier" required="">
                </div>
                <div>
                  <input v-model="user.password" type="password" name="password" id="password" placeholder="Mot de passe" class="bg-gray-50 border border-black text-gray-900 sm:text-sm rounded-xl focus:ring-primary-600 focus:border-primary-600 block w-60 p-2.5 mx-auto" required="">
                </div>
                <div class="flex justify-center">
                <img src="../assets/key.svg" alt="" class="mr-2">
                <p class="text-sm font-light hover:underline hover:cursor-pointer">N° de dossier ou mot de passe oublié ?</p>
              </div>
                <button @click="tryLogin" type="button" class="text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none w-60 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                <p id="error" class="text-red-600"></p>
                <p class="text-sm font-light">
                  Je ne suis pas inscrit, <router-link to="/register" class=" text-[#F34414] text-primary-600 hover:underline ">m'inscrire</router-link>
                </p>
              </form>
              <img src="../assets/Connexion 1.svg" alt="" class="lg:w-0" id="image">
            </div>
          </div>
        </div>
      </section>
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
    #login{
      border-right: 15px solid #263238;
    }
  </style>
  