import './style.scss';
import './assets/fonts/fonts.scss';
import './favicon.ico';

import data from './assets';
// import { modalTemplate } from './components/foneForm';simpleTag,

import { findTarget, qsAll } from './helper';

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

  document.body.addEventListener('click', (cliked) => {
    const { target } = cliked;
    if (findTarget(target, 'accordeon')) {
      const { address, pointTarget } = findTarget(target, 'accordeon');
      accArr[address].classList.toggle('active');
      accArr[address] = pointTarget;
      pointTarget.classList.toggle('active');
    }
  });

  // class Modal {
  //   constructor() {
  //     this.template = modalTemplate;
  //   }

  //   render() {
  //     return simpleTag({}, this.template);
  //   }
  // }

  // const modal = new Modal();

  // document.body.appendChild(modal.render());

  console.log(data);
};
