import { lifecycleHooks } from '@aurelia/runtime-html';
import anime from 'animejs';

const animateIn = (element) => 
  anime({
    targets: element,
    translateX: ['110%', '0%'],
    duration: 900,
    easing: 'easeInOutQuart',
  });



@lifecycleHooks()
export class AnimationHooks {
  element;
  backwards = false;

  created(vm, controller) {
    this.element = controller.host;
  }

  loading(vm, _params, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }
  
  unloading(vm, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  attaching() {
    animateIn(this.element);
  }

  detaching() {
    animateIn(this.element);
  }
}
