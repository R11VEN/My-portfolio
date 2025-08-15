import { keys } from './keys.ts';
import { storage } from './storage';

class CapsLock {
  on(buttons: NodeListOf<Element>) {
    const lang = storage.getLang();
    for (let i = 0; i < buttons.length; i++) {
      keys[lang].shift.keys.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
          (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toUpperCase();
        }
      });
    }
  }

  off(buttons: NodeListOf<Element>) {
    const lang = storage.getLang();
    for (let i = 0; i < buttons.length; i++) {
      keys[lang].shift.keys.find((item, index) => {
        if (item === (<HTMLDivElement>buttons[i]).innerText.toLowerCase()) {
          (<HTMLDivElement>buttons[i]).textContent = keys[lang].shift.keys[index].toLowerCase();
        }
      });
    }
  }

  check(buttons: NodeListOf<Element>, event: KeyboardEvent | MouseEvent) {
    if (event.getModifierState('CapsLock')) {
      this.on(buttons);
      const capsLock = <HTMLDivElement>document.querySelector('.CapsLock');
      capsLock.classList.add('keydown');
    }
  }
}

export const capsLock = new CapsLock();