// import { from } from "core-js/fn/array";
import { DAY } from './config.js';
import headerView from './Views/headerView.js';
import * as model from './model.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlINIT = function () {
  model.loadMystery(DAY);
  headerView.renderHeader(model.state);
};
controlINIT();

// document.querySelectorAll('.card__side--front').forEach(function (_, i) {
//   const fileName = `img/url(${model.state.mystery.myst
//     .split(' ')[0]
//     .toLowerCase()}-${i + 1}).jpg`;

//   document.querySelector(
//     `.card__side--front--${i + 1}`
//   ).style.backgroundImage = `url('${images[fileName]}')`;
// });
// // url('img/url(${model.state.mystery.myst
// //   .split(" ")[0]
// //   .toLowerCase()}-${i + 1})')
