import React from "react";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { cart, totalAmount, currentDate } = props;
  return (
    <div ref={ref} className="p-5">
      <h6>Shaskiya Tantraniketan Vidyarthi Sahakari Bhandar Ltd.,</h6>
      <h6>C/o.Govt Polytechnic, Nashik.</h6>
      <div style={{ textAlign: "center" }}>
        <h3>
          <b>
            Sale Details for <b>{currentDate}</b>
          </b>
        </h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Rate</td>
            <td>Qty</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {cart
            ? cart.map((cartProduct, key) => (
                <tr key={key}>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      <h6 className="px-2">
        <b>Total Amount: ₹{totalAmount}</b>
      </h6>
    </div>
  );
});
