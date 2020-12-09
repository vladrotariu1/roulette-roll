import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Roll from "./RouletteRoll";

let Roulette = new Roll("roulette");
ReactDOM.render(<App roulette={Roulette} />, document.getElementById("root"));
Roulette.getContainer();
Roulette.create_slots();
