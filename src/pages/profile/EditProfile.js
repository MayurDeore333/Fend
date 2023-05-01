import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../services/authService";
import Loader from "../../components/loader/Loader";


const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== password2) {
      return toast.error("New passwords do not match");
    }

    const formData = {
      oldPassword,
      password,
    };

    const data = await changePassword(formData);
    toast.success(data);
    setIsLoading(false);
  };

  return (
    <>
     {isLoading && <Loader />}

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
                    <h2 className="fw-bold mb-0 text-uppercase">
                      Change Password
                    </h2>
                  </div>
                  <form onSubmit={changePass}>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        placeholder="Old Password"
                        required
                        name="oldPassword"
                        className="form-control form-control-lg"
                        value={oldPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        placeholder="New Password"
                        required
                        name="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        required
                        name="password2"
                        className="form-control form-control-lg"
                        value={password2}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">
                      Change Password
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
  );
};

export default EditProfile;
