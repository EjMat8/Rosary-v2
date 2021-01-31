// import { from } from "core-js/fn/array";
import { DAY } from './config.js';
import headerView from './Views/headerView.js';
import cardView from './Views/cardView.js';
import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlINIT = function () {
  model.loadMystery(DAY);
  headerView.renderHeader(model.state);
  cardView.renderCard(model.state.mystery);
  console.log(model.state);
};
controlINIT();

const modalContent = document.querySelector('.modal__content');
const btnPrimary = document.querySelectorAll('.btn--primary');

btnPrimary.forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault();
    const num = +el.dataset.num;
    modalContent.innerHTML = '';
    modalContent.insertAdjacentHTML(
      'beforeend',
      `<button class="modal__close">&#x2715;</button><h2 class="heading-secondary u-margin-bottom-medium modal__heading">
    ${model.state.mystery.mystName[num]}
    </h2>
    <p class="modal__text">
    ${model.state.mystery.mystReflect[num]}
    </p>`
    );
    modalContent.closest('.modal').classList.remove('u-hidden');
    close();
  })
);

function close() {
  document
    .querySelector('.modal__close')
    .addEventListener('click', function () {
      document
        .querySelector('.modal__close')
        .closest('.modal')
        .classList.add('u-hidden');
    });
}
{
  /*  */
}

const rosCenter = document.querySelector('.nav__center');
const mysteryToday = model.state.mystery.myst.split(' ')[0].toLowerCase();
const checkBox = document.querySelector('.navigation__checkbox');
rosCenter.setAttribute(
  'href',
  `https://www.rosarycenter.org/homepage-2/rosary/how-to-pray-the-rosary/${
    mysteryToday == 'joyful' ? mysteryToday + '-mysteries' : mysteryToday
  }-without-distractions/`
);

const navLinks = document.querySelector('.navigation__list');

navLinks.addEventListener('click', e => {
  if (!e.target.closest('.navigation__link')) return;

  const id = e.target.getAttribute('href');
  checkBox.checked = false;
  if (id.includes('#section')) {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('.card__side--front').forEach(function (_, i) {
  document.querySelector(
    `.card__side--front--${i + 1}`
  ).style.backgroundImage = `url('${model.state.mystery.mystPics[i]}')`;
});
const section1 = document.querySelector('#section-1');
document.querySelector('.header__btn').addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: 'smooth' });
});
// // url('img/url(${model.state.mystery.myst
// //   .split(" ")[0]
// //   .toLowerCase()}-${i + 1})')
