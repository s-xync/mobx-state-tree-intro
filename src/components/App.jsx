import React from "react";
import { observer } from "mobx-react";

function App({ invoice }) {
  return (
    <div className="App">
      Invoicer
      <h1>{invoice.status()}</h1>
      {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
    </div>
  );
}

export default observer(App);
