import { switchLang } from './switchLang';
import { keys } from './keys.ts';

export const checkLang = (event: KeyboardEvent) => {
  let lang = localStorage.getItem('lang');
  if (event.key.match(/[a-zA-Z]/) && !(event.code in keys.special)) {
    localStorage.setItem('lang', 'eng');
    lang = 'eng';
    switchLang(lang);
  } else if (event.key.match(/[а-яёА-ЯЁ]/) && !(event.code in keys.special)) {
    localStorage.setItem('lang', 'ru');
    lang = 'ru';
    switchLang(lang);
  }
};