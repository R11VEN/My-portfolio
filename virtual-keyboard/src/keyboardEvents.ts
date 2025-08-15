import { shift } from './shift';
import { capsLock } from './capsLock';
import { message } from './message';
import { checkLang } from './checkLang';
import { switchLang } from './switchLang';
import { storage } from './storage';

export const keyboardEvents = () => {
  const buttons = document.querySelectorAll('.button');
  const textarea = <HTMLTextAreaElement>document.querySelector('.textarea');
  message(buttons);
  textarea.focus();
  textarea.onblur = () => textarea.focus();
  window.addEventListener('blur', function() {
    buttons.forEach( item => item.classList.remove('keydown'));
  });

  document.onkeydown = (event) => {
    checkLang(event);
    for (let i = 0; i < buttons.length; i++) {
      if ((<HTMLDivElement>buttons[i]).innerText.toLocaleLowerCase() === event.key.toLocaleLowerCase() || (<HTMLDivElement>buttons[i]).classList.contains(event.code)) {
        buttons[i].classList.add('keydown');
        switch (buttons[i].classList.value) {
        case 'button special AltLeft keydown':
        case 'button special AltRight keydown':
          event.preventDefault();
          if (event.getModifierState('Control')) {
            let lang = 'eng';
            switch (storage.getLang()) {
            case 'ru':
              lang = 'eng';
              break;
            case 'eng':
              lang = 'ru';
              break;
            }
            switchLang(lang);
            storage.setLang(lang);
          }
          break;
        case 'button special MetaLeft keydown':
          event.preventDefault();
          break;
        case 'button special Tab keydown':
          event.preventDefault();
          textarea.value += '\t';
          break;
        case 'button special CapsLock keydown':
          if (event.getModifierState('CapsLock')) {
            capsLock.on(buttons);
          } else {
            capsLock.off(buttons);
            buttons[i].classList.remove('keydown');
          }
          break;
        case 'button special ShiftLeft keydown':
        case 'button special ShiftRight keydown':
          shift.down(buttons, event);
          break;
        case `button ${event.key.toLowerCase()}`:
        case 'button special Space keydown':
        case 'button special Delete keydown':
        case 'button special Backspace keydown':
        case 'button special Enter keydown':
        case 'button special ControlLeft keydown':
        case 'button special ControlRight keydown':
          break;
        }
        break;
      }
    }
    capsLock.check(buttons, event);
  };

  document.onkeyup = (event) => {
    for (let i = 0; i < buttons.length; i++) {
      if ((<HTMLDivElement>buttons[i]).innerText.toLocaleLowerCase() === event.key.toLocaleLowerCase() || (<HTMLDivElement>buttons[i]).classList.contains(event.code)) {
        if (event.key === 'Shift') {
          shift.up(buttons, event);
        } else if (event.code === 'CapsLock') {
          break;
        }
        buttons[i].classList.remove('keydown');
        break;
      }
    }
  };
};
