import './style.css';
import { getKeyboardBody } from './keyboard';
import { keyboardEvents } from './keyboardEvents';
import { mouseEvents } from './mouseEvents';

document.querySelector<HTMLDivElement>('body')!.innerHTML = `
  <div id="app">
    <p class="title">Виртуальная клавиатура</p>
    <textarea class="textarea" id="textarea"></textarea>
    <div class="keyboard"></div>
    <p class="description">Клавиатура создана для операционной системы Windows</p>
    <p class="language">Для переключения языка используйте комбинацию: зажать Ctrl и нажать Alt.</p>
    <p class="language">Доступна только русская и английская раскладка.</p>
    <div class="massage_container">
      <p class="massage">Проверяем, нажат ли CapsLock</p>
      <button class="close_button">Close</button>
    </div>
  </div>
`;

getKeyboardBody();
keyboardEvents();
mouseEvents();