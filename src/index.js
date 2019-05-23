import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

import Invoice from "./models/Invoice";

const invoice = Invoice.create({ currency: "INR" });

// method one --> prints in console
onPatch(invoice, patch => {
  console.log(patch);
});

// method two --> mobx dev tools extension
makeInspectable(invoice);

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
