<template>
  <Navbar />
  <section>
    <div class="flex flex-col items-center mx-auto mt-20">
      <div
        class="bg-white rounded-xl shadow-lg dark:border md:mt-0 w-2/5 xl:p-0 h-[600px] lg:w-11/12 lg:mx-10 overflow-y-auto"
        id="login"
      >
        <div
          class="p-6 space-y-4 md:space-y-6 sm:p-8 flex items-center justify-center"
        >
          <h1 class="text-4xl font-bold">Trouvez votre formation</h1>
        </div>
        <div class="ml-12 w-3/5">
          <h3 class="font-semibold">
            Quelle est votre filière actuelle ou la filière que vous avez
            récemment terminée au lycée ?
          </h3>
          <div class="mt-4">
            <p>
              <input type="radio" id="general" name="filiere" />
              <label for="general" class="ml-4">Général</label>
            </p>
            <p>
              <input type="radio" id="technologique" name="filiere" />
              <label for="technologique" class="ml-4">Technologique</label>
            </p>
            <p>
              <input type="radio" id="stmg" name="filiere" />
              <label for="stmg" class="ml-4">STMG</label>
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Professionnel</label>
            </p>
          </div>
        </div>
        <div class="ml-12 w-4/5 mt-6">
          <h3 class="font-semibold">
            Parmi les matières suivantes, laquelle vous passionne le plus ?
          </h3>
          <div class="mt-4">
            <p>
              <input type="radio" id="general" name="filiere" />
              <label for="general" class="ml-4">Mathématiques</label>
            </p>
            <p>
              <input type="radio" id="technologique" name="filiere" />
              <label for="technologique" class="ml-4">Physique/Chimie</label>
            </p>
            <p>
              <input type="radio" id="stmg" name="filiere" />
              <label for="stmg" class="ml-4"
                >Sciences de la vie et de la Terre</label
              >
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Économie</label>
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4"
                >Français/Littérature</label
              >
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Autre (préciser)</label>
            </p>
          </div>
        </div>
        <div class="ml-12 w-3/5 mt-6">
          <h3 class="font-semibold">
            Si vous deviez choisir une spécialité, laquelle vous attire le plus
            parmi les suivantes ?
          </h3>
          <div class="mt-4">
            <p>
              <input type="radio" id="general" name="filiere" />
              <label for="general" class="ml-4"
                >Informatique et nouvelles technologies</label
              >
            </p>
            <p>
              <input type="radio" id="technologique" name="filiere" />
              <label for="technologique" class="ml-4"
                >Sciences de la santé</label
              >
            </p>
            <p>
              <input type="radio" id="stmg" name="filiere" />
              <label for="stmg" class="ml-4"
                >Sciences économiques et sociales</label
              >
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Arts et lettres</label>
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Autre (préciser)</label>
            </p>
          </div>
        </div>
        <div class="ml-12 w-3/5 mt-6">
          <h3 class="font-semibold">
            Quel est votre projet professionnel idéal à l'heure actuelle ?
          </h3>
          <div class="mt-4">
            <p>
              <input type="radio" id="general" name="filiere" />
              <label for="general" class="ml-4">Ingénieur(e)</label>
            </p>
            <p>
              <input type="radio" id="technologique" name="filiere" />
              <label for="technologique" class="ml-4">Scientifique</label>
            </p>
            <p>
              <input type="radio" id="stmg" name="filiere" />
              <label for="stmg" class="ml-4">Entrepreneur(e)</label>
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Artiste</label>
            </p>
            <p>
              <input type="radio" id="professionnel" name="filiere" />
              <label for="professionnel" class="ml-4">Autre (préciser)</label>
            </p>
          </div>
        </div>
        <div class="ml-12 w-4/5 mt-6 pb-10">
          <h3 class="font-semibold">
            Quelles sont vos attentes principales par rapport à vos études
            supérieures ?
          </h3>
          <div class="mt-4 w-4/5">
            <p>
              <input type="radio" id="compTechniques" name="filiere" />
              <label for="compTechniques" class="ml-4"
                >Acquérir des compétences techniques spécifiques</label
              >
            </p>
            <p>
              <input type="radio" id="compTransversales" name="filiere" />
              <label for="compTransversales" class="ml-4"
                >Développer des compétences transversales (communication,
                travail d'équipe, etc.)</label
              >
            </p>
            <p>
              <input type="radio" id="trouverVocation" name="filiere" />
              <label for="trouverVocation" class="ml-4"
                >Trouver une vocation ou passion</label
              >
            </p>
            <p>
              <input type="radio" id="entrerMarcheTravail" name="filiere" />
              <label for="entrerMarcheTravail" class="ml-4"
                >Préparer l'entrée sur le marché du travail</label
              >
            </p>
            <p>
              <input type="radio" id="autre" name="filiere" />
              <label for="autre" class="ml-4">Autre (préciser)</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue"; // Assurez-vous que le chemin est correct

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        identifier: "",
        password: "",
      },
    };
  },
  methods: {
    async tryLogin() {
      axios
        .post("http://localhost:1337/api/auth/local", this.user)
        .then((response) => {
          // Stockez le token de manière sécurisée (par exemple, dans un cookie)
          document.cookie = `token=${response.data.jwt}; path=/; secure; HttpOnly`;
          console.log(document.cookie);

          // Redirigez ou effectuez d'autres actions après la connexion réussie
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          document.getElementById("error").innerHTML =
            "Wrong Email or Password";
        });
    },
  },
};
</script>

<style>
#login {
  border-right: 15px solid #263238;
  overflow-y: auto;
}

#login::-webkit-scrollbar {
  width: 8px;
}

#login::-webkit-scrollbar-thumb {
  background-color: #4a5568;
  border-radius: 6px;
}

#login::-webkit-scrollbar-track {
  background-color: #cbd5e0;
  border-radius: 6px;
}

#login {
  scrollbar-color: #4a5568 #cbd5e0;
}
</style>
