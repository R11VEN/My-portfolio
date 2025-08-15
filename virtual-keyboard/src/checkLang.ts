import { switchLang } from './switchLang';
import { keys } from './keys.ts';
import { storage } from './storage';

export const checkLang = (event: KeyboardEvent) => {
  if (event.code in keys.special) {
    return;
  } else if (event.key.match(/[а-яёА-ЯЁ]/)) {
    storage.setLang('ru');
    switchLang('ru');
  } else if (event.key.match(/[a-zA-Z]/)) {
    storage.setLang('eng');
    switchLang('eng');
  }
};