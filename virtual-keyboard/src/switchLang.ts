import { keys } from './keys.ts';

export const switchLang = (language: string) => {
  const buttons = document.querySelectorAll('.button');
  const allKeysRu = keys.ru.keyboard.flat();
  const allKeysEng = keys.eng.keyboard.flat();
  const specialValues = Object.values(keys.special);

  buttons.forEach((item, index) => {
    if (specialValues.includes((<HTMLDivElement>item).innerText)) {
      return;
    } else if (language === 'ru') {
      (<HTMLDivElement>item).innerText = allKeysRu[index];
    } else if (language === 'eng') {
      (<HTMLDivElement>item).innerText = allKeysEng[index];
    }
  });
};

