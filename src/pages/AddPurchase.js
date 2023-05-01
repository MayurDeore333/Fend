import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addPurchase, getProduct, selectIsLoading } from '../redux/features/product/productSlice'
import Loader from '../components/loader/Loader'

const AddPurchase = () => {
    const [formData, setFormData] = useState({
    date: '',
    quantityPurchase: '',
    purchaseAmount: ''
  });
   const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

   const dispatch = useDispatch();
 const navigate = useNavigate();
 useEffect(() => {
      dispatch(getProduct(id));
    }, [dispatch, id]);
      const { date, quantityPurchase, purchaseAmount } = formData;

        const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
      
 const onSubmit = async e => {
    e.preventDefault();

    const newPurchase = {
     date,
    quantityPurchase,
    purchaseAmount 
    };
   console.log(id,newPurchase);
    await dispatch(addPurchase({id,newPurchase }));
    console.log(newPurchase);
    navigate("/items");
  };

  return (
 <>
     {isLoading && <Loader/>}
     <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderradius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className=" md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-0 text-uppercase">Add Purchase for this item</h2>
                   
                  </div>
                  <form onSubmit={onSubmit}>
                  <div className="form-outline form-white mb-4">
          <input
             type="date"
             name="date"
             placeholder="Date"
             value={date}
             onChange={onChange}
             required
            className="form-control form-control-lg"
            
          />
           </div>
           <div className="form-outline form-white mb-4">
          <input
              type="number"
              name="quantityPurchase"
              placeholder="Quantity Purchase"
              value={quantityPurchase}
              onChange={onChange}
              required
            className="form-control form-control-lg"
          />
          </div>
          <div className="form-outline form-white mb-4">
          <input
              type="number"
              name="purchaseAmount"
              placeholder="Total Purchase"
              value={purchaseAmount}
              onChange={onChange}
              required
            className="form-control form-control-lg"
          />
          </div>
          <button type="submit" className="btn btn-primary mb-3">
          Add Purchase
          </button>
        </form>
                  <div>
                    <p className="mb-0 text-white-50 fw-bold">
                      GrahakBhandar, Government Polytechnic, Nashik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddPurchase
