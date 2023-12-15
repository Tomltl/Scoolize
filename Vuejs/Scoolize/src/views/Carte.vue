<template>
    <div>
        <div id="map"></div>
        <div>
            <p>{{ loadedFormationsCount }} formations chargées</p>
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
        };
    },
    methods: {
        getLatLng(formation) {
            return [formation.attributes.g_olocalisation_des_formations.lat, formation.attributes.g_olocalisation_des_formations.lon]; // Remplacez latitude et longitude par les noms des champs dans vos données Strapi
        },
        fetchData() {
            // Remplacez 'your-strapi-api-endpoint' par l'URL de votre API Strapi
            const apiUrl = `http://localhost:1337/api/formations?pagination[start]=${(this.currentPage - 1) * this.itemsPerPage}&pagination[limit]=${this.itemsPerPage}`;
            console.log(apiUrl);
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data.data);
                    data.data.forEach(formation => {
                        const marker = L.marker(this.getLatLng(formation)).bindPopup(this.getPopupContent(formation));
                        this.markers.addLayer(marker);
                        this.loadedFormationsCount++;
                    });

                    this.map.addLayer(this.markers);

                    // Vérifiez si toutes les données ont été récupérées
                    if (data.data.length < this.itemsPerPage) {
                        console.log('Toutes les données ont été récupérées.');
                    } else {
                        // Si ce n'est pas le cas, incrémentez la page et effectuez une nouvelle demande
                        console.log(data.data.length);
                        this.currentPage++;
                        this.fetchData();
                    }
                })
                .catch(error => {
                    console.error('Erreur lors du chargement des données :', error);
                });
        },
        getPopupContent(formation) {
            // Ajoutez ici la logique pour obtenir le contenu du popup
            // Vous pouvez utiliser toutes les informations de la formation
            return formation.attributes.lib_for_voe_ins; // Remplacez lib_for_voe_ins par le nom du champ contenant le texte pour le popup
        },
    },
    mounted() {
        this.map = L.map('map').setView([48.858844, 2.294351], 10);

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
  