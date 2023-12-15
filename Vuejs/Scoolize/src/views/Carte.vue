<template>
    <div>
      <div id="map"></div>
      <div>
        <p>{{ loadedFormationsCount }} formations chargées</p>
        <div v-if="selectedMarker">
          <h3>Informations de la formation sélectionnée :</h3>
          <p>Nom : {{ selectedMarker.lib_for_voe_ins }}</p>
          <p>Nombre de places disponible : {{ selectedMarker.capa_fin }}</p>
          <!-- Ajoutez d'autres propriétés que vous souhaitez afficher -->
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
        itemsPerPage: 14000,
        totalItems: 0,
        loadedFormationsCount: 0,
        selectedMarker: null,
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
  #map {
    height: 600px;
  }
  </style>
  