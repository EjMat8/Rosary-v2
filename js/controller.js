// import { from } from "core-js/fn/array";
import { DAY } from "./config.js";
import headerView from "./Views/headerView.js";
import * as model from "./model.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const controlINIT = function () {
  model.loadMystery(DAY);
  headerView.renderHeader(model.state);
};

controlINIT();
