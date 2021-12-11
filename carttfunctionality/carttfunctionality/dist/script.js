function CounterClick() {
  var [products, setProducts] = React.useState([
  { name: "Tea", qty: 0, price: 100 },
  { name: "Coffee", qty: 0, price: 200 },
  { name: "Gems", qty: 0, price: 150 },
  { name: "Butter", qty: 0, price: 180 }]);

  var totalQty = () => {
    var total = 0;
    products.forEach(item => {
      total += item.qty;
    });
    return total;
  };

  var totalAmount = () => {
    var amount = 0;
    products.forEach(item => {
      amount += item.qty * item.price;
    });
    return amount;
  };

  const manageQty = (index, qty) => {
    var change = [...products];
    change[index] = { ...change[index], qty: qty };
    setProducts(change);
  };

  return /*#__PURE__*/(
    React.createElement("div", null,
    products === null || products === void 0 ? void 0 : products.map((item, index) => /*#__PURE__*/
    React.createElement("div", { key: index }, /*#__PURE__*/
    React.createElement("h3", null,
    item.name, " Qty :", item.qty, " Price :", item.price), /*#__PURE__*/

    React.createElement("button", { onClick: () => manageQty(index, item.qty + 1) }, "Add to cart"), /*#__PURE__*/


    React.createElement("button", {
      onClick: () => item.qty == 0 ? 0 : manageQty(index, item.qty - 1) }, "Remove from cart"))), /*#__PURE__*/






    React.createElement("h3", null, "Total Quantity :", totalQty(), " "), /*#__PURE__*/
    React.createElement("h3", null, "Total Amount : ", totalAmount())));


}
ReactDOM.render( /*#__PURE__*/React.createElement(CounterClick, null), document.getElementById("root"));