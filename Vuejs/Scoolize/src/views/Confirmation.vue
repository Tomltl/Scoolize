<template>
    <Navbar />
    <section>
      <div class="flex flex-col items-center mx-auto mt-32">
        <div class="bg-white rounded-xl shadow-lg dark:border md:mt-0 w-3/6 xl:p-0 h-[500px] lg:w-11/12 lg:mx-10 text-center" id="login">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center">
            <form class="space-y-4 md:space-y-6 w-96 text-center" action="#">
              <h1 class="text-4xl font-medium leading-tight tracking-tight text-gray-900">
                Merci pour votre inscription
              </h1>
              <p>Nous vous avons envoyé un e-mail de confirmation à [youremail@mail.com]</p>
              <p>Veuillez confirmer votre adresse e-mail pour activer votre compte</p>
              <button class="bg-[#2F2F3B] text-white py-3 px-8 rounded-xl">Continuer</button>
            </form>
            <img src="../assets/gradu2.svg" alt="" class="lg:w-0" id="image">
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
