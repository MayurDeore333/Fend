import React, { useEffect, useRef, useState } from "react";
import { PurchasePrint } from "../components/PurchasePrint";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { getProduct } from "../redux/features/product/productSlice";
import { SpinnerImg } from "../components/loader/Loader";

const ProductPur = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const { id } = useParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch, id]);

  const filteredPurchases = product?.purchases?.filter((purchase) => {
    if (!startDate && !endDate) return true;

    const purchaseDate = new Date(purchase.date);
    if (startDate && !endDate) {
      return purchaseDate >= startDate;
    } else if (!startDate && endDate) {
      return purchaseDate <= endDate;
    } else {
      return purchaseDate >= startDate && purchaseDate <= endDate;
    }
  });
  const [totalPurchaseAmount, setTotalPurchase] = useState(0);
  const [totalQuantityPurchase, setTotalQuantityPurchase] = useState(0);

  useEffect(() => {
    const filteredPurchaseAmount = filteredPurchases.reduce(
      (total, purchase) => total + purchase.purchaseAmount,
      0
    );
    const filteredPurchaseQuantitySold = filteredPurchases.reduce(
      (total, purchase) => total + purchase.quantityPurchase,
      0
    );

    setTotalPurchase(filteredPurchaseAmount);
    setTotalQuantityPurchase(filteredPurchaseQuantitySold);
  }, [filteredPurchases]);

  const componentRef = useRef();
  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint = () => {
    handleReactToPrint();
  };

  return (
    <>
      {isLoading && <SpinnerImg />}
      {product && (
        <div>
          <div style={{ display: "none" }}>
            <PurchasePrint
              filteredPurchases={filteredPurchases}
              totalQuantityPurchase={totalQuantityPurchase}
              totalPurchaseAmount={totalPurchaseAmount}
              ref={componentRef}
              name={product.name}
            />
          </div>
          <div
            className="container border text-center mt-3 mb-3 fw-bold"
            style={{ fontSize: "20px" }}
          >
            <label htmlFor="start-date">Start Date: </label>
            <input
              type="date"
              id="start-date"
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />

            <label htmlFor="end-date" className="ml-6">
              End Date:{" "}
            </label>
            <input
              type="date"
              id="end-date"
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </div>

          {product.purchases?.length > 0 ? (
            <>
              {filteredPurchases?.length > 0 ? (
                <div>
                  <table className=" table table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Date</th>
                        <th>Quantity Purchased</th>
                        <th>Purchased Amount</th>
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
                  <div className="ml-20 container fw-bold">
                    <p>Total Quantity Purchased: {totalQuantityPurchase}</p>
                    <p>
                      Total Purchase Amount: {"₹"}
                      {totalPurchaseAmount}
                    </p>
                  </div>
                  {totalPurchaseAmount !== 0 ? (
                    <div>
                      <button
                        className="  mt-3 ml-20 pr-20 pl-20  btn btn-primary"
                        onClick={handlePrint}
                      >
                        Print
                      </button>
                    </div>
                  ) : (
                    "Please add a product to the cart"
                  )}
                </div>
              ) : (
                <p className="container">
                  No purchase found for the selected date range.
                </p>
              )}
            </>
          ) : (
            <p className="container">
              No purchase data available for this product.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ProductPur;
