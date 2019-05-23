import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import Invoice from "./models/Invoice";

const invoice = Invoice.create({ currency: "INR" });

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
