import { types, getParent } from "mobx-state-tree";

const Item = types
  .model("Item", {
    quantity: types.number,
    price: types.number,
    name: types.string
  })
  .actions(self => ({
    increment() {
      self.quantity = self.quantity + 1;
    },
    decrement() {
      self.quantity = self.quantity - 1;
    },
    remove() {
      // item -parents-> items array -parent-> itemList
      getParent(self, 2).remove(self);
    }
  }))
  .views(self => ({
    get total() {
      return self.quantity * self.price;
    }
  }));

export default Item;
