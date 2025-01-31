import { capsLock } from './capsLock';

export const message = (buttons: NodeListOf<Element>) => {
  localStorage.getItem('lang') ?? localStorage.setItem('lang', 'eng');
  const massageContainer = <HTMLDivElement>document.querySelector('.massage_container');
  const close = <HTMLButtonElement>document.querySelector('.close_button');
  close.addEventListener('click', event => {
    capsLock.check(buttons, event);
    massageContainer.style.display = 'none';
  });
};