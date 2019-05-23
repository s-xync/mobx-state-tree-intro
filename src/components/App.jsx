import React from "react";
import { observer } from "mobx-react";

import Item from "./Item";

function App({ invoice }) {
  return (
    <div className="App">
      Invoicer
      <h1>{invoice.status}</h1>
      {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}
      <br />
      <br />
      <form
        onSubmit={e => {
          e.preventDefault();
          invoice.itemList.add({
            name: this.nameInput.value,
            price: parseFloat(this.priceInput.value),
            quantity: parseInt(this.quantityInput.value, 10)
          });
          e.target.reset();
          this.nameInput.focus();
        }}
      >
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            ref={input => (this.nameInput = input)}
          />
        </label>
        <br />
        <label htmlFor="quantity">
          Quantity:
          <input
            type="text"
            id="quantity"
            ref={input => (this.quantityInput = input)}
          />
        </label>
        <br />
        <label htmlFor="price">
          Price:
          <input
            type="text"
            id="price"
            ref={input => (this.priceInput = input)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      <h2>Total is ${invoice.itemList.total.toFixed(2)}</h2>
      <ul>
        {invoice.itemList.items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default observer(App);
