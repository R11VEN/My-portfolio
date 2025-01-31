import { keys } from './keys.ts';

class Shift {

  down(buttons: NodeListOf<Element>, event: KeyboardEvent | MouseEvent) {
    for (let i = 0; i < buttons.length; i++) {
      keys.eng.shift.up.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText) {
          (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.down[index];
          (<HTMLDivElement>buttons[i]).classList.add(keys.eng.shift.down[index]);
        }
      });
      keys.eng.shift.keys.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
          if (event.getModifierState('CapsLock')) {
            (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.keys[index].toLowerCase();
          } else {
            (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.keys[index].toUpperCase();
          }
        }
      });
    }
  }

  up(buttons: NodeListOf<Element>, event: KeyboardEvent | MouseEvent) {
    for (let i = 0; i < buttons.length; i++) {
      keys.eng.shift.down.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText) {
          (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.up[index];
          (<HTMLDivElement>buttons[i]).classList.remove(keys.eng.shift.down[index]);
        }
      });
      keys.eng.shift.keys.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
          if (event.getModifierState('CapsLock')) {
            (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.keys[index].toUpperCase();
          } else {
            (<HTMLDivElement>buttons[i]).textContent = keys.eng.shift.keys[index].toLowerCase();
          }
        }
      });
    }
  }
}

export const shift = new Shift();