import './efecto-logo.css'; //esto en futuro deberia ser modular
import './random.css';

export class Welcome {
    logo = new URL('../../assets/images/LogoLight.svg', import.meta.url).href;
}

