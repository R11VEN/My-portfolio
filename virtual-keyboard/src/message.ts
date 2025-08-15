import { capsLock } from './capsLock';
import { storage } from './storage';

export const message = (buttons: NodeListOf<Element>) => {
  storage.getLang();
  const massageContainer = <HTMLDivElement>document.querySelector('.massage_container');
  const close = <HTMLButtonElement>document.querySelector('.close_button');
  close.addEventListener('click', event => {
    capsLock.check(buttons, event);
    massageContainer.style.display = 'none';
  });
};