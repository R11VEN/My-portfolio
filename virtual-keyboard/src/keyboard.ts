import { Special } from './types.ts';
import { keys } from './keys.ts';
import { storage } from './storage';

export const getKeyboardBody = () => {
  const lang = storage.getLang();
  const keyboard = <HTMLDivElement>document.querySelector('.keyboard');
  keys[lang].keyboard.map((row) => {
    let newRow = '';
    row.forEach((key) => {
      let calass = `button ${key}`;
      let keyText = key;
      if (key in keys.special) {
        calass = `button special ${key}`;
        keyText = (<Special>keys.special)[key];
      }
      newRow += `<div class="${calass}">${keyText}</div>`;
    });
    keyboard.innerHTML += `<div class="row">${newRow}</div>`;
  });
};
