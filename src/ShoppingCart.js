class ShoppingCart {
  constructor() {
    this.items = [];
  }
  getItems() {
    return this.items;
  }
  addItem(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    });
  }
  clear() {
    this.items.splice(0,this.items.length);
  }
  total() {
    return this.items.reduce(
      (total, item) => total + item.pricePerUnit * item.quantity,
      0
    );
  }
}

module.exports = ShoppingCart;
