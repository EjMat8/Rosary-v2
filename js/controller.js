// import { from } from "core-js/fn/array";
import { DAY } from "./config.js";
import * as model from "./model.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

model.loadMystery(DAY);
console.log(model.state);
