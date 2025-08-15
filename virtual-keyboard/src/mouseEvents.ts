import { capsLock } from './capsLock';
import { shift } from './shift';

export const mouseEvents = () => {
  const keyboard = <HTMLDivElement>document.querySelector('.keyboard');
  const textarea = <HTMLTextAreaElement>document.querySelector('.textarea');
  const buttons = document.querySelectorAll('.button');

  keyboard.addEventListener('click', event => {
    capsLock.check(buttons, event);
    function getValuePosition(textBefore: number, textAfter: number, cursorPosition: number, value: string) {
      const selectionStart = textarea.selectionStart;
      textarea.value = textarea.value.substring(0, selectionStart + textBefore) + value + textarea.value.substring(selectionStart + textAfter);
      textarea.selectionStart = textarea.selectionEnd = selectionStart + cursorPosition;
    }
    if ((<HTMLElement>event.target).classList.contains('button')) {
      switch ((<HTMLElement>event.target).classList.value) {
      case 'button special Space':
        getValuePosition(+ 0, + 0, + 1, ' ');
        break;
      case 'button special Tab':
        getValuePosition(+ 0, + 0, + 1,'\t');
        break;
      case 'button special Enter':
        getValuePosition(+ 0, + 0, + 1, '\n');
        break;
      case 'button special Backspace':
        getValuePosition(- 1, + 0, - 1, '');
        break;
      case 'button special Delete':
        getValuePosition(+ 0, + 1, + 0, '');
        break;
      case 'button special CapsLock':
        capsLock.on(buttons);
        (<HTMLElement>event.target).classList.add('keydown');
        break;
      case 'button special CapsLock keydown':
        capsLock.off(buttons);
        (<HTMLElement>event.target).classList.remove('keydown');
        break;
      case 'button special ShiftLeft':
      case 'button special ShiftRight':
        shift.down(buttons, event);
        (<HTMLElement>event.target).classList.add('keydown');
        break;
      case 'button special ShiftLeft keydown':
      case 'button special ShiftRight keydown':
        shift.up(buttons, event);
        (<HTMLElement>event.target).classList.remove('keydown');
        break;
      }
      if (!(<HTMLElement>event.target).classList.contains('special')) {
        textarea.value += (<HTMLElement>event.target).textContent;
      }
    }
  });
};