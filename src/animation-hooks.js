import { lifecycleHooks } from '@aurelia/runtime-html';
import anime from 'animejs';

const animateIn = (element) => 
  anime({
    targets: element,
    translateX: ['110%', '0%'],
    duration: 900,
    easing: 'easeInOutQuart',
  });


  const animateOut = (element) =>
    anime({
      targets: element,
      translateX: ['0%', '-110%'], // Mover hacia la izquierda al salir
      duration: 1000,
      easing: 'easeInOutQuart',
    });

@lifecycleHooks()
export class AnimationHooks {
  element;
  backwards = false;

  created(vm, controller) {
    this.element = controller.host;
    this.skipEnterAnimation = vm.constructor.skipEnterAnimation || false;
  }

  loading(vm, _params, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }
  
  unloading(vm, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  attaching() {
    if (!this.skipEnterAnimation) { // ⚡ Solo anima si no está deshabilitada
      animateIn(this.element);
    }
  }

  detaching() {
    animateOut(this.element);
  }
}
