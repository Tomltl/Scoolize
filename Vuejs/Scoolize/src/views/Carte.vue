<template>
  <Navbar/>
  <div class="flex">
    <!-- Colonne de filtres -->
    <div class="w-1/4 p-4">
      <h1>Filtres</h1>
      <!-- Catégorie : Types d'établissement -->
      <div class="mb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleCategory('typesEtablissement')">
          <h2 class="text-lg font-semibold">Types d'établissement</h2>
          <span :class="{ 'rotate-180': isCategoryOpen('typesEtablissement') }">&#9662;</span>
        </div>
        <div v-show="isCategoryOpen('typesEtablissement')" class="ml-4">
          <label class="block mb-2"><input type="checkbox"> Publics</label>
          <label class="block mb-2"><input type="checkbox"> Privés sous contrat</label>
          <label class="block mb-2"><input type="checkbox"> Privés enseignement supérieur</label>
          <label class="block mb-2"><input type="checkbox"> Privés hors contrat</label>
        </div>
      </div>

      <!-- Catégorie : Apprentissage -->
      <div class="mb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleCategory('apprentissage')">
          <h2 class="text-lg font-semibold">Apprentissage</h2>
          <span :class="{ 'rotate-180': isCategoryOpen('apprentissage') }">&#9662;</span>
        </div>
        <div v-show="isCategoryOpen('apprentissage')" class="ml-4">
          <label class="block mb-2"><input type="checkbox"> Formations en apprentissage</label>
          <label class="block mb-2"><input type="checkbox"> Formations hors apprentissage</label>
        </div>
      </div>

      <!-- Catégorie : Types de formation -->
      <div class="mb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleCategory('typesFormation')">
          <h2 class="text-lg font-semibold">Types de formation</h2>
          <span :class="{ 'rotate-180': isCategoryOpen('typesFormation') }">&#9662;</span>
        </div>
        <div v-show="isCategoryOpen('typesFormation')" class="ml-4">
          <label class="block mb-2"><input type="checkbox"> BTS - BTSA - BTSM</label>
          <label class="block mb-2"><input type="checkbox"> C.M.I - Cursus Master en Ingénierie</label>
          <!-- Ajoutez d'autres filtres... -->
        </div>
      </div>

      <!-- Catégorie : Internat -->
      <div class="mb-4">
        <div class="flex items-center justify-between cursor-pointer" @click="toggleCategory('internat')">
          <h2 class="text-lg font-semibold">Internat</h2>
          <span :class="{ 'rotate-180': isCategoryOpen('internat') }">&#9662;</span>
        </div>
        <div v-show="isCategoryOpen('internat')" class="ml-4">
          <label class="block mb-2"><input type="checkbox"> Etablissements avec internat pour filles et garçons</label>
          <label class="block mb-2"><input type="checkbox"> Etablissements avec internat pour filles</label>
          <label class="block mb-2"><input type="checkbox"> Etablissements avec internat pour garçons</label>
        </div>
      </div>

      <!-- Catégorie : Aménagement -->
      <div>
        <div class="flex items-center justify-between cursor-pointer" @click="toggleCategory('amenagement')">
          <h2 class="text-lg font-semibold">Aménagement</h2>
          <span :class="{ 'rotate-180': isCategoryOpen('amenagement') }">&#9662;</span>
        </div>
        <div v-show="isCategoryOpen('amenagement')" class="ml-4">
          <label class="block mb-2"><input type="checkbox"> Enseignement en présentiel</label>
          <label class="block mb-2"><input type="checkbox"> Enseignement entièrement à distance</label>
          <label class="block mb-2"><input type="checkbox"> Enseignement en présentiel ou à distance au choix</label>
          <!-- Ajoutez d'autres filtres... -->
        </div>
      </div>
    </div>

    <!-- Carte avec les marqueurs -->
    <div class="w-3/4 flex">
      <!-- Contenu de votre carte avec les marqueurs... -->
      <div id="map-container" class="w-2/4 p-4">
        <div id="map"></div>
      </div>
      <div class="w-2/4 p-4">
        <div v-if="selectedMarker">
          <div class="border-2 border-solid border-[#F34414] rounded-2xl p-4">
            <h2 class="text-lg font-semibold">{{ selectedMarker.contrat_etab }}</h2>
            <p>{{ selectedMarker.g_ea_lib_vx }}</p>
            <p>{{ selectedMarker.dep_lib }}</p>
            <p>{{ selectedMarker.dep }}</p>
            <p>{{ selectedMarker.lib_for_voe_ins }}</p>
            <p>Nombre de places disponibles : {{ selectedMarker.capa_fin }}</p>
            <p>Taux d'accès : {{ selectedMarker.taux_acces_ens }}%</p>

            <hr class="my-4">

            <h3 class="text-md font-semibold">Détails personnalisés :</h3>
            <p>Nombre de voeux formulés en 2023 : {{ selectedMarker.voe_tot }}</p>
            <p>Part des terminales technologiques en position de recevoir une proposition en phase principale : {{
              selectedMarker.part_acces_tec }}%</p>

            <button @click="viewFormationDetails" class="mt-4 bg-F34414 text-white px-4 py-2 rounded-full">Voir la
              formation</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet';
import 'leaflet.markercluster';

export default {
  data() {
    return {
      map: null,
      markers: L.markerClusterGroup(),
      currentPage: 1,
      itemsPerPage: 100,
      totalItems: 0,
      loadedFormationsCount: 0,
      selectedMarker: null,
      openCategories: [], // Liste des catégories ouvertes
    };
  },
  methods: {
    getLatLng(formation) {
      return [formation.attributes.g_olocalisation_des_formations.lat, formation.attributes.g_olocalisation_des_formations.lon];
    },
    fetchData() {
      const apiUrl = `http://localhost:1337/api/formations?pagination[start]=${(this.currentPage - 1) * this.itemsPerPage}&pagination[limit]=${this.itemsPerPage}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          data.data.forEach(formation => {
            const marker = L.marker(this.getLatLng(formation));
            marker.formationData = formation.attributes; // Attachez les données de la formation au marqueur
            marker.on('click', () => this.handleMarkerClick(marker));
            this.markers.addLayer(marker);
            this.loadedFormationsCount++;
          });

          this.map.addLayer(this.markers);

          if (data.data.length < this.itemsPerPage) {
            console.log('Toutes les données ont été récupérées.');
          } else {
            this.currentPage++;
            this.fetchData();
          }
        })
        .catch(error => {
          console.error('Erreur lors du chargement des données :', error);
        });
    },
    handleMarkerClick(marker) {
      this.selectedMarker = marker.formationData; // Mettez à jour les données de la formation sélectionnée
    },

    toggleCategory(category) {
      console.log(this.openCategories);
      // Inverse l'état de la catégorie (ouvre ou ferme)
      if (this.isCategoryOpen(category)) {
        this.openCategories = this.openCategories.filter(c => c !== category);
      } else {
        this.openCategories.push(category);
      }
    },
    isCategoryOpen(category) {
      // Vérifie si la catégorie est ouverte
      return this.openCategories.includes(category);
    },
  },
  mounted() {
    this.map = L.map('map').setView([46.858844, 2.294351], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    this.fetchData();
  },
};
</script>
  
<style scoped>
#map-container {
  height: 550px;
}
#map {
  height: 100%;
}
</style>
  