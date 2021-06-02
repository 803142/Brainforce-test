import './style.scss';
import './assets/fonts/fonts.scss';
import './favicon.ico';

import data from './assets';
import foneForm from './components/foneForm/modal.template';

import { findTarget, qs, qsAll } from './helper';

window.onload = () => {
  const accArr = [...qsAll('[class*=_article-accordeon]')];
  accArr.forEach((el, accIndex) => {
    [...qsAll('[class*=accordeon-article]', el)].forEach((item, index) => {
      const tempItem = item;
      tempItem.dataset.accordeon = accIndex;
      if (tempItem.className.match('active')) {
        tempItem.classList.toggle('active');
      }
      if (index === 0) {
        tempItem.classList.toggle('active');
        accArr[accIndex] = tempItem;
      }
    });
  });

  const modal = foneForm.render();

  function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      const range = e.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function phoneMask(e) {
    if (e.keyCode) this.keyCode = e.keyCode;
    const pos = e.target.selectionStart;
    if (pos < 5) {
      e.preventDefault();
      e.target.selectionStart = 5;
    }
    this.i = 0;
    const matrix = e.target.placeholder;

    const def = matrix.replace(/\D/g, '');

    const val = this.value.replace(/\D/g, '');

    const increment = () => {
      this.i += 1;
      return this.i;
    };

    function comparator() {
      return val.charAt(increment()) || def.charAt(this.i);
    }

    const newValue = matrix.replace(/[_\d]/g, (a) => {
      if (this.i < val.length) {
        return comparator();
      }
      return a;
    });
    this.i = newValue.indexOf('_');

    console.log({ def, val, newValue });

    e.target.value = matrix;
    this.i = matrix.lastIndexOf(val.substr(-1));
    if (this.i < matrix.length && matrix !== this.placeholder) {
      this.i += 1;
    } else {
      this.i = matrix.indexOf('_');
    }
    setCursorPosition(this.i, e.target);
  }

  document.body.addEventListener('click', (cliked) => {
    const { target } = cliked;
    if (findTarget(target, 'accordeon')) {
      const { address, pointTarget } = findTarget(target, 'accordeon');
      accArr[address].classList.toggle('active');
      accArr[address] = pointTarget;
      pointTarget.classList.toggle('active');
    }

    if (findTarget(target, 'foneform')) {
      document.body.appendChild(modal);
      const input = qs('#phone');
      input.addEventListener('input', phoneMask, false);
      input.focus();
      setCursorPosition(6, input);
    }
  });

  console.log(data);
};
