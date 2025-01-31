import { shift } from './shift';
import { capsLock } from './capsLock';
import { message } from './message';
import { checkLang } from './checkLang';

export const keyboardEvents = () => {
  const buttons = document.querySelectorAll('.button');
  const textarea = <HTMLTextAreaElement>document.querySelector('.textarea');
  message(buttons);
  textarea.focus();
  textarea.onblur = () => textarea.focus();

  document.onkeydown = (event) => {
    checkLang(event);
    console.log(event);
    capsLock.check(buttons, event); //доделать
    for (let i = 0; i < buttons.length; i++) {
      if ((<HTMLDivElement>buttons[i]).classList.contains(event.key.toLowerCase()) || (<HTMLDivElement>buttons[i]).classList.contains(event.code)) {
        buttons[i].classList.add('keydown');
        switch (buttons[i].classList.value) {
        case 'button special AltLeft keydown':
        case 'button special AltRight keydown':
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
        case 'button special ControlLeft keydown':
        case 'button special ControlRight keydown':
        case 'button special Space keydown':
        case 'button special Delete keydown':
        case 'button special Backspace keydown':
        case 'button special Enter keydown':
          break;
        }
        break;
      }
    }
  };

  document.onkeyup = (event) => {
    for (let i = 0; i < buttons.length; i++) {
      if ((<HTMLDivElement>buttons[i]).classList.contains(event.key.toLowerCase()) || (<HTMLDivElement>buttons[i]).classList.contains(event.code)) {
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
