import './efecto-logo.css'; //esto en futuro deberia ser modular
import './random.css';
import { AnimationHooks } from '../../animation-hooks';

export class Welcome {
    static dependencies = [AnimationHooks];
    static skipEnterAnimation = true;
    logo = new URL('../../assets/images/LogoLight.svg', import.meta.url).href;
}

