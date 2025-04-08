import { IRouter } from '@aurelia/router';
import './welcome.css';
import './efecto-logo.css';


export class Welcome {
    static inject = [IRouter];
  
    LogoLight = new URL('../../assets/images/LogoLight.svg', import.meta.url).href;
    LogoDark = new URL('../../assets/images/LogoDark.svg', import.meta.url).href;
  
    constructor(router) {
      this.router = router;
    }
  
    attached() {
      setTimeout(() => {
        this.router.load('sign-in'); // Ajusta según tu ruta
      }, 6000);
    }
  }
  