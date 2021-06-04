import './style.scss';
import './assets/fonts/fonts.scss';
import './favicon.ico';
import { APPCONTAINERCLASS, BODYTAG } from './constants/app-constants';
import App from './app';

import { simpleTag, qs } from './helper';

window.onload = () => {
  let appTag = qs(`${APPCONTAINERCLASS}`);

  if (!appTag) {
    appTag = simpleTag({
      classTag: `${APPCONTAINERCLASS}`,
    });

    qs(BODYTAG).insertAdjacentElement('afterbegin', appTag);
  }

  const app = new App(appTag);
  app.init();
  app.render();
  app.start();

  // function phoneMask(e) {
  //   if (e.keyCode) this.keyCode = e.keyCode;
  //   const pos = e.target.selectionStart;
  //   if (pos < 6) {
  //     e.preventDefault();
  //     e.target.selectionStart = 6;
  //   }
  //   this.i = 0;
  //   const matrix = e.target.placeholder;
  //   const def = matrix.replace(/\D/g, '');
  //   const val = e.target.value.replace(/\D/g, '');

  //   const increment = () => {
  //     this.i += 1;
  //     return this.i;
  //   };

  //   function comparator() {
  //     return val.charAt(increment()) || def.charAt(this.i);
  //   }

  //   const newValue = matrix.replace(/[_\d]/g, (a) => {
  //     if (this.i < val.length) {
  //       return comparator();
  //     }
  //     return a;
  //   });
  //   this.i = newValue.indexOf('_');
  //   e.target.value = matrix;

  //   this.i = matrix.lastIndexOf(val.substr(-1));

  //   if (this.i < matrix.length && matrix !== e.target.placeholder) {
  //     this.i += 1;
  //   } else {
  //     this.i = matrix.indexOf('_');
  //   }
  //   setCursorPosition(this.i, e.target);
  // }

  // document.body.addEventListener('click', (cliked) => {
  //   const { target } = cliked;
  //   if (findTarget(target, 'accordeon')) {
  //     const { address, pointTarget } = findTarget(target, 'accordeon');
  //     accArr[address].classList.toggle('active');
  //     accArr[address] = pointTarget;
  //     pointTarget.classList.toggle('active');
  //   }

  //   if (findTarget(target, 'foneform')) {
  //     document.body.appendChild(modal);
  //     const input = qs('#phone');
  //     input.addEventListener('input', phoneMask, false);
  //     input.addEventListener('focus', phoneMask, false);
  //   }
  // });
};
