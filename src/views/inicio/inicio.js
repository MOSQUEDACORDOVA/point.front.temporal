import './inicio.css';
import './navbars-offcanvas.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { Loader } from "@googlemaps/js-api-loader";


  export class Inicio {
    map;
    loader;
    google;

    LogoLightHorizontal = new URL('../../assets/images/LogoLightHorizontal.svg', import.meta.url).href;
    LogoDarkHorizontal = new URL('../../assets/images/LogoDarkHorizontal.svg', import.meta.url).href;

  async attached() {
    this.swiper = new Swiper('.swiperMC', {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 4,
      centeredSlides: true,
      speed: 4800,
      mousewheel: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      breakpoints: {
        768: { slidesPerView: 3 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 5 },
      },
    });

    // Evitar recarga si ya se cargó Google Maps
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

    this.map = new this.google.maps.Map(document.getElementById("mapInicio"), {
      zoom: 12,
      center: location,
      disableDefaultUI: true,
      mapId: '13e8d1b97d936bbd',
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

    const mapDiv = document.getElementById("mapInicio");
    if (mapDiv) {
      mapDiv.innerHTML = ''; // Limpia cualquier render anterior
    }
  }
}
  