import React from "react";

export const PurchasePrint = React.forwardRef((props, ref) => {
  const {
    filteredPurchases,
    totalQuantityPurchase,
    totalPurchaseAmount,
    name,
  } = props;
  return (
    <div ref={ref} className="p-5">
      <h6>Shaskiya Tantraniketan Vidyarthi Sahakari Bhandar Ltd.,</h6>
      <h6>C/o.Govt Polytechnic, Nashik.</h6>
      <div style={{ textAlign: "center" }}>
        <h3>
          <b>Purchase Details</b>
        </h3>
      </div>
      <h5>
        Item Name :- <b>{name}</b>
      </h5>
      <table className="table">
        <thead>
          <tr>
            <td>Date</td>
            <td>Quantity Purchased</td>
            <td>Purchased Amount</td>
          </tr>
        </thead>
        <tbody>
          {filteredPurchases.map((purchase, index) => (
            <tr key={index}>
              <td>{purchase.date}</td>
              <td>{purchase.quantityPurchase}</td>
              <td>
                {"₹"}
                {purchase.purchaseAmount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <b className="px-2">Total Quantity Purchased: {totalQuantityPurchase}</b>
      <b className="px-2">
        Total Purchased Amount: {"₹"}
        {totalPurchaseAmount}
      </b>
    </div>
  );
});
