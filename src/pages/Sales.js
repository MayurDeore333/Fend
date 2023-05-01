import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getProducts,
  updateProduct,
} from "../redux/features/product/productSlice";
import { ComponentToPrint } from "../components/ComponentToPrint";
import useRedirectLoggedOutUser from "../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SpinnerImg } from "../components/loader/Loader";
import { useReactToPrint } from "react-to-print";

const Sales = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const currentDate = new Date().toLocaleDateString();
  const toastOptions = {
    autoClose: 400,
    pauseOnHover: true,
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const addProductToCart = async (product) => {
    let addingProduct = {
      ...product,
      quantity: 1,
      totalAmount: product.price,
    };
    setCart([...cart, addingProduct]);
    toast(`Added ${product.name} to cart`, toastOptions);

    const formData = new FormData();

    formData.append("quantity", product.quantity - 1);

    const id = product._id;

    await dispatch(updateProduct({ id, formData }));
    await dispatch(getProducts());
  };

  const componentRef = useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint();
  };

  const { products, isLoading, isError, message } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProducts());
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  useEffect(() => {
    let newTotalAmount = 0;
    cart.forEach((icart) => {
      newTotalAmount = newTotalAmount + parseInt(icart.totalAmount);
    });
    setTotalAmount(newTotalAmount);
  }, [cart]);

  return (
    <>
      {isLoading && <SpinnerImg />}
      <div>
        <b
          className="container py-1  d-flex justify-content-center bg-dark  mt-3 "
          style={{ fontSize: "25px", color: "white" }}
        >
          Add Today's Sale
        </b>
      </div>
      <div className="row mt-3 ml-3">
        <div className="col-lg-8">
          {isLoading ? (
            "Loading"
          ) : (
            <div className="row">
              {products.map((product, key) => (
                <div key={key} className="col-lg-4 mb-4">
                  <div
                    className="pos-item px-3 text-center border"
                    onClick={() => addProductToCart(product)}
                  >
                    <p>
                      <b style={{ fontSize: "20px" }}>{product.name}</b>
                    </p>
                    <img
                      src={product.image.filePath}
                      className="img-fluid"
                      alt={product.name}
                      style={{
                        margin: "0 auto 16px",
                        borderradius: "50%",
                        padding: "2px",
                        width: "120px",
                        height: "120px",
                        objectfit: "cover",
                        border: "4px solid #161616",
                      }}
                    />
                    <p>
                      <b style={{ fontSize: "20px" }}>₹{product.price}</b>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div style={{ display: "none" }}>
            <ComponentToPrint
              cart={cart}
              totalAmount={totalAmount}
              ref={componentRef}
              currentDate={currentDate}
            />
          </div>

          <div className="table-responsive bg-dark mr-2 pb-4">
            <table className="table table-responsive table-dark table-hover">
              <thead>
                <tr>
                  <td>
                    <b style={{ fontSize: "20px" }}>Item</b>
                  </td>
                  <td>
                    <b style={{ fontSize: "20px" }}>Price</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {cart
                  ? cart.map((cartProduct, key) => (
                      <tr key={key}>
                        <td>{cartProduct.name}</td>

                        <td>{cartProduct.totalAmount}</td>
                      </tr>
                    ))
                  : "No Item in Cart"}
              </tbody>
            </table>
            <h2 className="px-2 text-white">
              <b style={{ fontSize: "20px" }}>Total Amount : ₹{totalAmount}</b>
            </h2>
          </div>

          <div className="mt-3">
            {totalAmount !== 0 ? (
              <div>
                <button className="btn btn-primary" onClick={handlePrint}>
                  Print
                </button>
              </div>
            ) : (
              "Please add a product to the cart"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
