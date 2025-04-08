import './escoger-origen.css';
import { Loader } from "@googlemaps/js-api-loader";


  export class EscogerOrigen {
    map;
    loader;
    google;

    LogoLightHorizontal = new URL('../../assets/images/LogoLightHorizontal.svg', import.meta.url).href;
    LogoDarkHorizontal = new URL('../../assets/images/LogoDarkHorizontal.svg', import.meta.url).href;
  
    async attached() {
      if (!window.google || !window.google.maps) {
      this.loader = new Loader({
        apiKey: 'AIzaSyAD_Big4tLNdA5qf9vY-gl7R6NyfPoif1I',
        version: 'weekly',
        libraries: ['marker'],
      });

      try {
        this.google = await this.loader.load();
      } catch (err) {
        console.error('Error cargando Google Maps', err);
        return;
      }
      } else {
        this.google = window.google;
      }

      this.initMap();
    }

    initMap() {
      const location = { lat: 10.634260361154858, lng: -71.68298421740232 };
  
      this.map = new this.google.maps.Map(document.getElementById("mapOrigen"), {
        zoom: 12,
        center: location,
        disableDefaultUI: true,
        mapId: 'ad5db39e6942f7c5',
      });
  
      new this.google.maps.marker.AdvancedMarkerElement({
        position: location,
        map: this.map,
        title: 'Ubicación',
      });
    }
    
    detached() {
      // Limpiar el mapa cuando se desmonta el componente
      if (this.map) {
        this.map = null;
      }
  
      const mapDiv = document.getElementById("mapOrigen");
      if (mapDiv) {
        mapDiv.innerHTML = ''; // Limpia cualquier render anterior
      }
    }
  }
  