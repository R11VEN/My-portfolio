import { keys } from './keys.ts';

class Shift {

  down(buttons: NodeListOf<Element>, event: KeyboardEvent | MouseEvent) {
    const lang = localStorage.getItem('lang');
    if (lang === 'ru' || lang === 'eng') {
      for (let i = 0; i < buttons.length; i++) {
        keys[lang].shift.up.find((item, index) => {
          if (item === (<HTMLDivElement>buttons[i]).innerText) {
            (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.down[index];
            (<HTMLDivElement>buttons[i]).classList.add(keys[lang].shift.down[index]);
          }
        });
        keys[lang].shift.keys.find((item, index) => {
          if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
            if (event.getModifierState('CapsLock')) {
              (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toLowerCase();
            } else {
              (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toUpperCase();
            }
          }
        });
      }
    }
  }

  up(buttons: NodeListOf<Element>, event: KeyboardEvent | MouseEvent) {
    const lang = localStorage.getItem('lang');
    if (lang === 'ru' || lang === 'eng') {
      for (let i = 0; i < buttons.length; i++) {
        keys[lang].shift.down.find((item, index) => {
          if (item === (<HTMLDivElement>buttons[i]).innerText) {
            (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.up[index];
            (<HTMLDivElement>buttons[i]).classList.remove(keys[lang].shift.down[index]);
          }
        });
        keys[lang].shift.keys.find((item, index) => {
          if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
            if (event.getModifierState('CapsLock')) {
              (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toUpperCase();
            } else {
              (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toLowerCase();
            }
          }
        });
      }
    }
  }
}

export const shift = new Shift();